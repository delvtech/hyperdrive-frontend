export const FixedPointMathLib = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122081ef1ad4529751a06bc3130d39e6df6f709549ad6291ce83d8b71fc719c0772364736f6c63430008130033",
    "sourceMap": "341:9712:86:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;341:9712:86;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122081ef1ad4529751a06bc3130d39e6df6f709549ad6291ce83d8b71fc719c0772364736f6c63430008130033",
    "sourceMap": "341:9712:86:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Arithmetic library with operations for fixed-point numbers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":\"FixedPointMathLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]}},\"version\":1}",
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
        "lib/solmate/src/utils/FixedPointMathLib.sol": "FixedPointMathLib"
      },
      "libraries": {}
    },
    "sources": {
      "lib/solmate/src/utils/FixedPointMathLib.sol": {
        "keccak256": "0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843",
        "urls": [
          "bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9",
          "dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/solmate/src/utils/FixedPointMathLib.sol",
    "id": 60539,
    "exportedSymbols": {
      "FixedPointMathLib": [
        60538
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:10012:86",
    "nodes": [
      {
        "id": 60381,
        "nodeType": "PragmaDirective",
        "src": "42:24:86",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 60538,
        "nodeType": "ContractDefinition",
        "src": "341:9712:86",
        "nodes": [
          {
            "id": 60389,
            "nodeType": "VariableDeclaration",
            "src": "566:50:86",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_UINT256",
            "nameLocation": "592:11:86",
            "scope": 60538,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 60383,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "566:7:86",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              },
              "id": 60388,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "commonType": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                },
                "id": 60386,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "hexValue": "32",
                  "id": 60384,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "606:1:86",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_2_by_1",
                    "typeString": "int_const 2"
                  },
                  "value": "2"
                },
                "nodeType": "BinaryOperation",
                "operator": "**",
                "rightExpression": {
                  "hexValue": "323536",
                  "id": 60385,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "609:3:86",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_256_by_1",
                    "typeString": "int_const 256"
                  },
                  "value": "256"
                },
                "src": "606:6:86",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "-",
              "rightExpression": {
                "hexValue": "31",
                "id": 60387,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "615:1:86",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "src": "606:10:86",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 60392,
            "nodeType": "VariableDeclaration",
            "src": "623:36:86",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "WAD",
            "nameLocation": "649:3:86",
            "scope": 60538,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 60390,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "623:7:86",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31653138",
              "id": 60391,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "655:4:86",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "value": "1e18"
            },
            "visibility": "internal"
          },
          {
            "id": 60408,
            "nodeType": "FunctionDefinition",
            "src": "704:164:86",
            "nodes": [],
            "body": {
              "id": 60407,
              "nodeType": "Block",
              "src": "778:90:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60402,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60394,
                        "src": "806:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60403,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60396,
                        "src": "809:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60404,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60392,
                        "src": "812:3:86",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 60401,
                      "name": "mulDivDown",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60469,
                      "src": "795:10:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 60405,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "795:21:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60400,
                  "id": 60406,
                  "nodeType": "Return",
                  "src": "788:28:86"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulWadDown",
            "nameLocation": "713:10:86",
            "parameters": {
              "id": 60397,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60394,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "732:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60408,
                  "src": "724:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60393,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "724:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60396,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "743:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60408,
                  "src": "735:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60395,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "735:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "723:22:86"
            },
            "returnParameters": {
              "id": 60400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60399,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60408,
                  "src": "769:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60398,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "768:9:86"
            },
            "scope": 60538,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60424,
            "nodeType": "FunctionDefinition",
            "src": "874:158:86",
            "nodes": [],
            "body": {
              "id": 60423,
              "nodeType": "Block",
              "src": "946:86:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60418,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60410,
                        "src": "972:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60419,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60412,
                        "src": "975:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60420,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60392,
                        "src": "978:3:86",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 60417,
                      "name": "mulDivUp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60482,
                      "src": "963:8:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 60421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "963:19:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60416,
                  "id": 60422,
                  "nodeType": "Return",
                  "src": "956:26:86"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulWadUp",
            "nameLocation": "883:8:86",
            "parameters": {
              "id": 60413,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60410,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "900:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60424,
                  "src": "892:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60409,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "892:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60412,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "911:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60424,
                  "src": "903:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60411,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "903:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "891:22:86"
            },
            "returnParameters": {
              "id": 60416,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60415,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60424,
                  "src": "937:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60414,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "937:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "936:9:86"
            },
            "scope": 60538,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60440,
            "nodeType": "FunctionDefinition",
            "src": "1038:164:86",
            "nodes": [],
            "body": {
              "id": 60439,
              "nodeType": "Block",
              "src": "1112:90:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60434,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60426,
                        "src": "1140:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60435,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60392,
                        "src": "1143:3:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60436,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60428,
                        "src": "1148:1:86",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 60433,
                      "name": "mulDivDown",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60469,
                      "src": "1129:10:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 60437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1129:21:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60432,
                  "id": 60438,
                  "nodeType": "Return",
                  "src": "1122:28:86"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divWadDown",
            "nameLocation": "1047:10:86",
            "parameters": {
              "id": 60429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60426,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1066:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60440,
                  "src": "1058:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60425,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1058:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60428,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1077:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60440,
                  "src": "1069:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60427,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1069:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1057:22:86"
            },
            "returnParameters": {
              "id": 60432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60431,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60440,
                  "src": "1103:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60430,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1103:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1102:9:86"
            },
            "scope": 60538,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60456,
            "nodeType": "FunctionDefinition",
            "src": "1208:158:86",
            "nodes": [],
            "body": {
              "id": 60455,
              "nodeType": "Block",
              "src": "1280:86:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60450,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60442,
                        "src": "1306:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60451,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60392,
                        "src": "1309:3:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60452,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60444,
                        "src": "1314:1:86",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 60449,
                      "name": "mulDivUp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60482,
                      "src": "1297:8:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 60453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1297:19:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60448,
                  "id": 60454,
                  "nodeType": "Return",
                  "src": "1290:26:86"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divWadUp",
            "nameLocation": "1217:8:86",
            "parameters": {
              "id": 60445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60442,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1234:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60456,
                  "src": "1226:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60441,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1226:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60444,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1245:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60456,
                  "src": "1237:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60443,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1237:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1225:22:86"
            },
            "returnParameters": {
              "id": 60448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60447,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60456,
                  "src": "1271:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60446,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1271:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1270:9:86"
            },
            "scope": 60538,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60469,
            "nodeType": "FunctionDefinition",
            "src": "1564:526:86",
            "nodes": [],
            "body": {
              "id": 60468,
              "nodeType": "Block",
              "src": "1691:399:86",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "1753:331:86",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1936:44:86",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1961:1:86",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1964:1:86",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1954:6:86"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1954:12:86"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1954:12:86"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "1878:11:86"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "1902:1:86"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "1908:1:86"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1915:11:86"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1928:1:86"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "1911:3:86"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "1911:19:86"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "1905:2:86"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1905:26:86"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "1898:3:86"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1898:34:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "1891:6:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1891:42:86"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "1874:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1874:60:86"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1867:6:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1867:68:86"
                        },
                        "nodeType": "YulIf",
                        "src": "1864:116:86"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2042:32:86",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "2055:1:86"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "2058:1:86"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "2051:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2051:9:86"
                            },
                            {
                              "name": "denominator",
                              "nodeType": "YulIdentifier",
                              "src": "2062:11:86"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "2047:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2047:27:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "2042:1:86"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 60389,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1915:11:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60462,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1878:11:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60462,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2062:11:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60458,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1908:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60458,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2055:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60460,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1902:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60460,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1928:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60460,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2058:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60465,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2042:1:86",
                      "valueSize": 1
                    }
                  ],
                  "id": 60467,
                  "nodeType": "InlineAssembly",
                  "src": "1744:340:86"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivDown",
            "nameLocation": "1573:10:86",
            "parameters": {
              "id": 60463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60458,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1601:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60469,
                  "src": "1593:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60457,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1593:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60460,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1620:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60469,
                  "src": "1612:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60459,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1612:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60462,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "1639:11:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60469,
                  "src": "1631:19:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60461,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1631:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1583:73:86"
            },
            "returnParameters": {
              "id": 60466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60465,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "1688:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60469,
                  "src": "1680:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60464,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1680:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1679:11:86"
            },
            "scope": 60538,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60482,
            "nodeType": "FunctionDefinition",
            "src": "2096:672:86",
            "nodes": [],
            "body": {
              "id": 60481,
              "nodeType": "Block",
              "src": "2221:547:86",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "2283:479:86",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2466:44:86",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2491:1:86",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2494:1:86",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2484:6:86"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2484:12:86"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2484:12:86"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "2408:11:86"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "2432:1:86"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "2438:1:86"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2445:11:86"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2458:1:86"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "2441:3:86"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "2441:19:86"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "2435:2:86"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2435:26:86"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "2428:3:86"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2428:34:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "2421:6:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2421:42:86"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "2404:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2404:60:86"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2397:6:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2397:68:86"
                        },
                        "nodeType": "YulIf",
                        "src": "2394:116:86"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2679:73:86",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "x",
                                          "nodeType": "YulIdentifier",
                                          "src": "2699:1:86"
                                        },
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "2702:1:86"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "2695:3:86"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2695:9:86"
                                    },
                                    {
                                      "name": "denominator",
                                      "nodeType": "YulIdentifier",
                                      "src": "2706:11:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mod",
                                    "nodeType": "YulIdentifier",
                                    "src": "2691:3:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2691:27:86"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2720:1:86",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "2688:2:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2688:34:86"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "2732:1:86"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "2735:1:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nodeType": "YulIdentifier",
                                    "src": "2728:3:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2728:9:86"
                                },
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "2739:11:86"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "2724:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2724:27:86"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2684:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2684:68:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "2679:1:86"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 60389,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2445:11:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60475,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2408:11:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60475,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2706:11:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60475,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2739:11:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60471,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2438:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60471,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2699:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60471,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2732:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60473,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2432:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60473,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2458:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60473,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2702:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60473,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2735:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60478,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2679:1:86",
                      "valueSize": 1
                    }
                  ],
                  "id": 60480,
                  "nodeType": "InlineAssembly",
                  "src": "2274:488:86"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivUp",
            "nameLocation": "2105:8:86",
            "parameters": {
              "id": 60476,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60471,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "2131:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60482,
                  "src": "2123:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60470,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2123:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60473,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "2150:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60482,
                  "src": "2142:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60472,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2142:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60475,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "2169:11:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60482,
                  "src": "2161:19:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60474,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2161:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2113:73:86"
            },
            "returnParameters": {
              "id": 60479,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60478,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "2218:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60482,
                  "src": "2210:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60477,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2210:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2209:11:86"
            },
            "scope": 60538,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60495,
            "nodeType": "FunctionDefinition",
            "src": "2774:2778:86",
            "nodes": [],
            "body": {
              "id": 60494,
              "nodeType": "Block",
              "src": "2890:2662:86",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "2952:2594:86",
                    "statements": [
                      {
                        "cases": [
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2994:254:86",
                              "statements": [
                                {
                                  "cases": [
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3044:85:86",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3100:11:86",
                                            "value": {
                                              "name": "scalar",
                                              "nodeType": "YulIdentifier",
                                              "src": "3105:6:86"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3100:1:86"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3037:92:86",
                                      "value": {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3042:1:86",
                                        "type": "",
                                        "value": "0"
                                      }
                                    },
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3154:80:86",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3210:6:86",
                                            "value": {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3215:1:86",
                                              "type": "",
                                              "value": "0"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3210:1:86"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3146:88:86",
                                      "value": "default"
                                    }
                                  ],
                                  "expression": {
                                    "name": "n",
                                    "nodeType": "YulIdentifier",
                                    "src": "3019:1:86"
                                  },
                                  "nodeType": "YulSwitch",
                                  "src": "3012:222:86"
                                }
                              ]
                            },
                            "nodeType": "YulCase",
                            "src": "2987:261:86",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2992:1:86",
                              "type": "",
                              "value": "0"
                            }
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "3269:2267:86",
                              "statements": [
                                {
                                  "cases": [
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3327:115:86",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3413:11:86",
                                            "value": {
                                              "name": "scalar",
                                              "nodeType": "YulIdentifier",
                                              "src": "3418:6:86"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3413:1:86"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3320:122:86",
                                      "value": {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3325:1:86",
                                        "type": "",
                                        "value": "0"
                                      }
                                    },
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3467:104:86",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3547:6:86",
                                            "value": {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "3552:1:86"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3547:1:86"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3459:112:86",
                                      "value": "default"
                                    }
                                  ],
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "n",
                                        "nodeType": "YulIdentifier",
                                        "src": "3298:1:86"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3301:1:86",
                                        "type": "",
                                        "value": "2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mod",
                                      "nodeType": "YulIdentifier",
                                      "src": "3294:3:86"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3294:9:86"
                                  },
                                  "nodeType": "YulSwitch",
                                  "src": "3287:284:86"
                                },
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "3651:26:86",
                                  "value": {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3667:1:86",
                                        "type": "",
                                        "value": "1"
                                      },
                                      {
                                        "name": "scalar",
                                        "nodeType": "YulIdentifier",
                                        "src": "3670:6:86"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shr",
                                      "nodeType": "YulIdentifier",
                                      "src": "3663:3:86"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3663:14:86"
                                  },
                                  "variables": [
                                    {
                                      "name": "half",
                                      "nodeType": "YulTypedName",
                                      "src": "3655:4:86",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "body": {
                                    "nodeType": "YulBlock",
                                    "src": "3951:1571:86",
                                    "statements": [
                                      {
                                        "body": {
                                          "nodeType": "YulBlock",
                                          "src": "4125:60:86",
                                          "statements": [
                                            {
                                              "expression": {
                                                "arguments": [
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4158:1:86",
                                                    "type": "",
                                                    "value": "0"
                                                  },
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4161:1:86",
                                                    "type": "",
                                                    "value": "0"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "revert",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4151:6:86"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4151:12:86"
                                              },
                                              "nodeType": "YulExpressionStatement",
                                              "src": "4151:12:86"
                                            }
                                          ]
                                        },
                                        "condition": {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "4117:3:86",
                                              "type": "",
                                              "value": "128"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "4122:1:86"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "4113:3:86"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4113:11:86"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4110:75:86"
                                      },
                                      {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "4247:19:86",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "4261:1:86"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "4264:1:86"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mul",
                                            "nodeType": "YulIdentifier",
                                            "src": "4257:3:86"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4257:9:86"
                                        },
                                        "variables": [
                                          {
                                            "name": "xx",
                                            "nodeType": "YulTypedName",
                                            "src": "4251:2:86",
                                            "type": ""
                                          }
                                        ]
                                      },
                                      {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "4340:28:86",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "xx",
                                              "nodeType": "YulIdentifier",
                                              "src": "4359:2:86"
                                            },
                                            {
                                              "name": "half",
                                              "nodeType": "YulIdentifier",
                                              "src": "4363:4:86"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "4355:3:86"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4355:13:86"
                                        },
                                        "variables": [
                                          {
                                            "name": "xxRound",
                                            "nodeType": "YulTypedName",
                                            "src": "4344:7:86",
                                            "type": ""
                                          }
                                        ]
                                      },
                                      {
                                        "body": {
                                          "nodeType": "YulBlock",
                                          "src": "4464:60:86",
                                          "statements": [
                                            {
                                              "expression": {
                                                "arguments": [
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4497:1:86",
                                                    "type": "",
                                                    "value": "0"
                                                  },
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4500:1:86",
                                                    "type": "",
                                                    "value": "0"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "revert",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4490:6:86"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4490:12:86"
                                              },
                                              "nodeType": "YulExpressionStatement",
                                              "src": "4490:12:86"
                                            }
                                          ]
                                        },
                                        "condition": {
                                          "arguments": [
                                            {
                                              "name": "xxRound",
                                              "nodeType": "YulIdentifier",
                                              "src": "4451:7:86"
                                            },
                                            {
                                              "name": "xx",
                                              "nodeType": "YulIdentifier",
                                              "src": "4460:2:86"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "lt",
                                            "nodeType": "YulIdentifier",
                                            "src": "4448:2:86"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4448:15:86"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4445:79:86"
                                      },
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "4594:25:86",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "xxRound",
                                              "nodeType": "YulIdentifier",
                                              "src": "4603:7:86"
                                            },
                                            {
                                              "name": "scalar",
                                              "nodeType": "YulIdentifier",
                                              "src": "4612:6:86"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "div",
                                            "nodeType": "YulIdentifier",
                                            "src": "4599:3:86"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4599:20:86"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "x",
                                            "nodeType": "YulIdentifier",
                                            "src": "4594:1:86"
                                          }
                                        ]
                                      },
                                      {
                                        "body": {
                                          "nodeType": "YulBlock",
                                          "src": "4691:813:86",
                                          "statements": [
                                            {
                                              "nodeType": "YulVariableDeclaration",
                                              "src": "4759:19:86",
                                              "value": {
                                                "arguments": [
                                                  {
                                                    "name": "z",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4773:1:86"
                                                  },
                                                  {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4776:1:86"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "mul",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4769:3:86"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4769:9:86"
                                              },
                                              "variables": [
                                                {
                                                  "name": "zx",
                                                  "nodeType": "YulTypedName",
                                                  "src": "4763:2:86",
                                                  "type": ""
                                                }
                                              ]
                                            },
                                            {
                                              "body": {
                                                "nodeType": "YulBlock",
                                                "src": "4881:209:86",
                                                "statements": [
                                                  {
                                                    "body": {
                                                      "nodeType": "YulBlock",
                                                      "src": "4988:76:86",
                                                      "statements": [
                                                        {
                                                          "expression": {
                                                            "arguments": [
                                                              {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "5029:1:86",
                                                                "type": "",
                                                                "value": "0"
                                                              },
                                                              {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "5032:1:86",
                                                                "type": "",
                                                                "value": "0"
                                                              }
                                                            ],
                                                            "functionName": {
                                                              "name": "revert",
                                                              "nodeType": "YulIdentifier",
                                                              "src": "5022:6:86"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5022:12:86"
                                                          },
                                                          "nodeType": "YulExpressionStatement",
                                                          "src": "5022:12:86"
                                                        }
                                                      ]
                                                    },
                                                    "condition": {
                                                      "arguments": [
                                                        {
                                                          "arguments": [
                                                            {
                                                              "name": "x",
                                                              "nodeType": "YulIdentifier",
                                                              "src": "4984:1:86"
                                                            }
                                                          ],
                                                          "functionName": {
                                                            "name": "iszero",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4977:6:86"
                                                          },
                                                          "nodeType": "YulFunctionCall",
                                                          "src": "4977:9:86"
                                                        }
                                                      ],
                                                      "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4970:6:86"
                                                      },
                                                      "nodeType": "YulFunctionCall",
                                                      "src": "4970:17:86"
                                                    },
                                                    "nodeType": "YulIf",
                                                    "src": "4967:97:86"
                                                  }
                                                ]
                                              },
                                              "condition": {
                                                "arguments": [
                                                  {
                                                    "arguments": [
                                                      {
                                                        "arguments": [
                                                          {
                                                            "name": "zx",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4869:2:86"
                                                          },
                                                          {
                                                            "name": "x",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4873:1:86"
                                                          }
                                                        ],
                                                        "functionName": {
                                                          "name": "div",
                                                          "nodeType": "YulIdentifier",
                                                          "src": "4865:3:86"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "4865:10:86"
                                                      },
                                                      {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4877:1:86"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "eq",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "4862:2:86"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4862:17:86"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "iszero",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4855:6:86"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4855:25:86"
                                              },
                                              "nodeType": "YulIf",
                                              "src": "4852:238:86"
                                            },
                                            {
                                              "nodeType": "YulVariableDeclaration",
                                              "src": "5172:28:86",
                                              "value": {
                                                "arguments": [
                                                  {
                                                    "name": "zx",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5191:2:86"
                                                  },
                                                  {
                                                    "name": "half",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5195:4:86"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "add",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5187:3:86"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5187:13:86"
                                              },
                                              "variables": [
                                                {
                                                  "name": "zxRound",
                                                  "nodeType": "YulTypedName",
                                                  "src": "5176:7:86",
                                                  "type": ""
                                                }
                                              ]
                                            },
                                            {
                                              "body": {
                                                "nodeType": "YulBlock",
                                                "src": "5304:68:86",
                                                "statements": [
                                                  {
                                                    "expression": {
                                                      "arguments": [
                                                        {
                                                          "kind": "number",
                                                          "nodeType": "YulLiteral",
                                                          "src": "5341:1:86",
                                                          "type": "",
                                                          "value": "0"
                                                        },
                                                        {
                                                          "kind": "number",
                                                          "nodeType": "YulLiteral",
                                                          "src": "5344:1:86",
                                                          "type": "",
                                                          "value": "0"
                                                        }
                                                      ],
                                                      "functionName": {
                                                        "name": "revert",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5334:6:86"
                                                      },
                                                      "nodeType": "YulFunctionCall",
                                                      "src": "5334:12:86"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "5334:12:86"
                                                  }
                                                ]
                                              },
                                              "condition": {
                                                "arguments": [
                                                  {
                                                    "name": "zxRound",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5291:7:86"
                                                  },
                                                  {
                                                    "name": "zx",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5300:2:86"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "lt",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5288:2:86"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5288:15:86"
                                              },
                                              "nodeType": "YulIf",
                                              "src": "5285:87:86"
                                            },
                                            {
                                              "nodeType": "YulAssignment",
                                              "src": "5457:25:86",
                                              "value": {
                                                "arguments": [
                                                  {
                                                    "name": "zxRound",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5466:7:86"
                                                  },
                                                  {
                                                    "name": "scalar",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5475:6:86"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "div",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5462:3:86"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5462:20:86"
                                              },
                                              "variableNames": [
                                                {
                                                  "name": "z",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5457:1:86"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "condition": {
                                          "arguments": [
                                            {
                                              "name": "n",
                                              "nodeType": "YulIdentifier",
                                              "src": "4685:1:86"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "4688:1:86",
                                              "type": "",
                                              "value": "2"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mod",
                                            "nodeType": "YulIdentifier",
                                            "src": "4681:3:86"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4681:9:86"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4678:826:86"
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "name": "n",
                                    "nodeType": "YulIdentifier",
                                    "src": "3824:1:86"
                                  },
                                  "nodeType": "YulForLoop",
                                  "post": {
                                    "nodeType": "YulBlock",
                                    "src": "3826:124:86",
                                    "statements": [
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "3918:14:86",
                                        "value": {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3927:1:86",
                                              "type": "",
                                              "value": "1"
                                            },
                                            {
                                              "name": "n",
                                              "nodeType": "YulIdentifier",
                                              "src": "3930:1:86"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "3923:3:86"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3923:9:86"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "n",
                                            "nodeType": "YulIdentifier",
                                            "src": "3918:1:86"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "pre": {
                                    "nodeType": "YulBlock",
                                    "src": "3699:124:86",
                                    "statements": [
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "3791:14:86",
                                        "value": {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3800:1:86",
                                              "type": "",
                                              "value": "1"
                                            },
                                            {
                                              "name": "n",
                                              "nodeType": "YulIdentifier",
                                              "src": "3803:1:86"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "3796:3:86"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3796:9:86"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "n",
                                            "nodeType": "YulIdentifier",
                                            "src": "3791:1:86"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "src": "3695:1827:86"
                                }
                              ]
                            },
                            "nodeType": "YulCase",
                            "src": "3261:2275:86",
                            "value": "default"
                          }
                        ],
                        "expression": {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "2973:1:86"
                        },
                        "nodeType": "YulSwitch",
                        "src": "2966:2570:86"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 60486,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3019:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60486,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3298:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60486,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3791:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60486,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3803:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60486,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3824:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60486,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3918:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60486,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3930:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60486,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4685:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60488,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3105:6:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60488,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3418:6:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60488,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3670:6:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60488,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4612:6:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60488,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5475:6:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60484,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2973:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60484,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3552:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60484,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4122:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60484,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4261:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60484,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4264:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60484,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4594:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60484,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4776:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60484,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4873:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60484,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4984:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60491,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3100:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60491,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3210:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60491,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3413:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60491,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3547:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60491,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4773:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60491,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4877:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60491,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5457:1:86",
                      "valueSize": 1
                    }
                  ],
                  "id": 60493,
                  "nodeType": "InlineAssembly",
                  "src": "2943:2603:86"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "rpow",
            "nameLocation": "2783:4:86",
            "parameters": {
              "id": 60489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60484,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "2805:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60495,
                  "src": "2797:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60483,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2797:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60486,
                  "mutability": "mutable",
                  "name": "n",
                  "nameLocation": "2824:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60495,
                  "src": "2816:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60485,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2816:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60488,
                  "mutability": "mutable",
                  "name": "scalar",
                  "nameLocation": "2843:6:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60495,
                  "src": "2835:14:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60487,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2835:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2787:68:86"
            },
            "returnParameters": {
              "id": 60492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60491,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "2887:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60495,
                  "src": "2879:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60490,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2879:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2878:11:86"
            },
            "scope": 60538,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60504,
            "nodeType": "FunctionDefinition",
            "src": "5746:3396:86",
            "nodes": [],
            "body": {
              "id": 60503,
              "nodeType": "Block",
              "src": "5805:3337:86",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "5867:3269:86",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5881:10:86",
                        "value": {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "5890:1:86"
                        },
                        "variables": [
                          {
                            "name": "y",
                            "nodeType": "YulTypedName",
                            "src": "5885:1:86",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5971:8:86",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5976:3:86",
                          "type": "",
                          "value": "181"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "5971:1:86"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6465:80:86",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6483:16:86",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6492:3:86",
                                    "type": "",
                                    "value": "128"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6497:1:86"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6488:3:86"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6488:11:86"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6483:1:86"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6516:15:86",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6525:2:86",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6529:1:86"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6521:3:86"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6521:10:86"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6516:1:86"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6422:1:86"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6425:37:86",
                                  "type": "",
                                  "value": "0x10000000000000000000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6419:2:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6419:44:86"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6412:6:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6412:52:86"
                        },
                        "nodeType": "YulIf",
                        "src": "6409:136:86"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6598:79:86",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6616:15:86",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6625:2:86",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6629:1:86"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6621:3:86"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6621:10:86"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6616:1:86"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6648:15:86",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6657:2:86",
                                    "type": "",
                                    "value": "32"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6661:1:86"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6653:3:86"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6653:10:86"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6648:1:86"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6571:1:86"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6574:21:86",
                                  "type": "",
                                  "value": "0x1000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6568:2:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6568:28:86"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6561:6:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6561:36:86"
                        },
                        "nodeType": "YulIf",
                        "src": "6558:119:86"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6722:79:86",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6740:15:86",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6749:2:86",
                                    "type": "",
                                    "value": "32"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6753:1:86"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6745:3:86"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6745:10:86"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6740:1:86"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6772:15:86",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6781:2:86",
                                    "type": "",
                                    "value": "16"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6785:1:86"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6777:3:86"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6777:10:86"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6772:1:86"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6703:1:86"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6706:13:86",
                                  "type": "",
                                  "value": "0x10000000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6700:2:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6700:20:86"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6693:6:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6693:28:86"
                        },
                        "nodeType": "YulIf",
                        "src": "6690:111:86"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6842:78:86",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6860:15:86",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6869:2:86",
                                    "type": "",
                                    "value": "16"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6873:1:86"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6865:3:86"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6865:10:86"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6860:1:86"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6892:14:86",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6901:1:86",
                                    "type": "",
                                    "value": "8"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6904:1:86"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6897:3:86"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6897:9:86"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6892:1:86"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6827:1:86"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6830:9:86",
                                  "type": "",
                                  "value": "0x1000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6824:2:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6824:16:86"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6817:6:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6817:24:86"
                        },
                        "nodeType": "YulIf",
                        "src": "6814:106:86"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8110:35:86",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8119:2:86",
                              "type": "",
                              "value": "18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8127:1:86"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "8134:1:86"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "8137:5:86",
                                      "type": "",
                                      "value": "65536"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "8130:3:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8130:13:86"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "8123:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8123:21:86"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8115:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8115:30:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8110:1:86"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8306:30:86",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8315:1:86",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8322:1:86"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8329:1:86"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8332:1:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8325:3:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8325:9:86"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8318:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8318:17:86"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8311:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8311:25:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8306:1:86"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8349:30:86",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8358:1:86",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8365:1:86"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8372:1:86"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8375:1:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8368:3:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8368:9:86"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8361:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8361:17:86"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8354:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8354:25:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8349:1:86"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8392:30:86",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8401:1:86",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8408:1:86"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8415:1:86"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8418:1:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8411:3:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8411:9:86"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8404:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8404:17:86"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8397:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8397:25:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8392:1:86"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8435:30:86",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8444:1:86",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8451:1:86"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8458:1:86"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8461:1:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8454:3:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8454:9:86"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8447:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8447:17:86"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8440:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8440:25:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8435:1:86"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8478:30:86",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8487:1:86",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8494:1:86"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8501:1:86"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8504:1:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8497:3:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8497:9:86"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8490:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8490:17:86"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8483:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8483:25:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8478:1:86"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8521:30:86",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8530:1:86",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8537:1:86"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8544:1:86"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8547:1:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8540:3:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8540:9:86"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8533:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8533:17:86"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8526:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8526:25:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8521:1:86"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8564:30:86",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8573:1:86",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8580:1:86"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8587:1:86"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8590:1:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8583:3:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8583:9:86"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8576:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8576:17:86"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8569:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8569:25:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8564:1:86"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9097:29:86",
                        "value": {
                          "arguments": [
                            {
                              "name": "z",
                              "nodeType": "YulIdentifier",
                              "src": "9106:1:86"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "9116:1:86"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "9119:1:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "9112:3:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "9112:9:86"
                                },
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "9123:1:86"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "9109:2:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9109:16:86"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "9102:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9102:24:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "9097:1:86"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 60497,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5890:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60497,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8329:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60497,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8372:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60497,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8415:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60497,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8458:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60497,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8501:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60497,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8544:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60497,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8587:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60497,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9116:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5971:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6516:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6529:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6648:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6661:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6772:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6785:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6892:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6904:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8110:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8127:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8306:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8322:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8332:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8349:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8365:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8375:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8392:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8408:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8418:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8435:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8451:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8461:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8478:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8494:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8504:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8521:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8537:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8547:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8564:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8580:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8590:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9097:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9106:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9119:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60500,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9123:1:86",
                      "valueSize": 1
                    }
                  ],
                  "id": 60502,
                  "nodeType": "InlineAssembly",
                  "src": "5858:3278:86"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sqrt",
            "nameLocation": "5755:4:86",
            "parameters": {
              "id": 60498,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60497,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "5768:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60504,
                  "src": "5760:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60496,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5760:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5759:11:86"
            },
            "returnParameters": {
              "id": 60501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60500,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "5802:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60504,
                  "src": "5794:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60499,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5794:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5793:11:86"
            },
            "scope": 60538,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60515,
            "nodeType": "FunctionDefinition",
            "src": "9148:282:86",
            "nodes": [],
            "body": {
              "id": 60514,
              "nodeType": "Block",
              "src": "9223:207:86",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9285:139:86",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9400:14:86",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "9409:1:86"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "9412:1:86"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "9405:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9405:9:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "9400:1:86"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 60506,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9409:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60508,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9412:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60511,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9400:1:86",
                      "valueSize": 1
                    }
                  ],
                  "id": 60513,
                  "nodeType": "InlineAssembly",
                  "src": "9276:148:86"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsafeMod",
            "nameLocation": "9157:9:86",
            "parameters": {
              "id": 60509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60506,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9175:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60515,
                  "src": "9167:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60505,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9167:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60508,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9186:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60515,
                  "src": "9178:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60507,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9178:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9166:22:86"
            },
            "returnParameters": {
              "id": 60512,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60511,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "9220:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60515,
                  "src": "9212:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60510,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9212:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9211:11:86"
            },
            "scope": 60538,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60526,
            "nodeType": "FunctionDefinition",
            "src": "9436:285:86",
            "nodes": [],
            "body": {
              "id": 60525,
              "nodeType": "Block",
              "src": "9511:210:86",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9573:142:86",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9691:14:86",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "9700:1:86"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "9703:1:86"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "9696:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9696:9:86"
                        },
                        "variableNames": [
                          {
                            "name": "r",
                            "nodeType": "YulIdentifier",
                            "src": "9691:1:86"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 60522,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9691:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60517,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9700:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60519,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9703:1:86",
                      "valueSize": 1
                    }
                  ],
                  "id": 60524,
                  "nodeType": "InlineAssembly",
                  "src": "9564:151:86"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsafeDiv",
            "nameLocation": "9445:9:86",
            "parameters": {
              "id": 60520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60517,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9463:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60526,
                  "src": "9455:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60516,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9455:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60519,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9474:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60526,
                  "src": "9466:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60518,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9466:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9454:22:86"
            },
            "returnParameters": {
              "id": 60523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60522,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "9508:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60526,
                  "src": "9500:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60521,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9500:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9499:11:86"
            },
            "scope": 60538,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60537,
            "nodeType": "FunctionDefinition",
            "src": "9727:324:86",
            "nodes": [],
            "body": {
              "id": 60536,
              "nodeType": "Block",
              "src": "9804:247:86",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9866:179:86",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9998:37:86",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "10014:1:86"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "10017:1:86"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mod",
                                    "nodeType": "YulIdentifier",
                                    "src": "10010:3:86"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10010:9:86"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10021:1:86",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "10007:2:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10007:16:86"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "10029:1:86"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "10032:1:86"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "10025:3:86"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10025:9:86"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10003:3:86"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10003:32:86"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "9998:1:86"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 60528,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10014:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60528,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10029:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60530,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10017:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60530,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10032:1:86",
                      "valueSize": 1
                    },
                    {
                      "declaration": 60533,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9998:1:86",
                      "valueSize": 1
                    }
                  ],
                  "id": 60535,
                  "nodeType": "InlineAssembly",
                  "src": "9857:188:86"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsafeDivUp",
            "nameLocation": "9736:11:86",
            "parameters": {
              "id": 60531,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60528,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9756:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60537,
                  "src": "9748:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60527,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9748:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60530,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9767:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60537,
                  "src": "9759:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60529,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9759:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9747:22:86"
            },
            "returnParameters": {
              "id": 60534,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60533,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "9801:1:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60537,
                  "src": "9793:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60532,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9793:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9792:11:86"
            },
            "scope": 60538,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "FixedPointMathLib",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 60382,
          "nodeType": "StructuredDocumentation",
          "src": "68:273:86",
          "text": "@notice Arithmetic library with operations for fixed-point numbers.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @author Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          60538
        ],
        "name": "FixedPointMathLib",
        "nameLocation": "349:17:86",
        "scope": 60539,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 86
} as const;
