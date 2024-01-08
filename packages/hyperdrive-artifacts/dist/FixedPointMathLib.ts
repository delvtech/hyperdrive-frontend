export const FixedPointMathLib = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122081ef1ad4529751a06bc3130d39e6df6f709549ad6291ce83d8b71fc719c0772364736f6c63430008130033",
    "sourceMap": "341:9712:97:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;341:9712:97;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122081ef1ad4529751a06bc3130d39e6df6f709549ad6291ce83d8b71fc719c0772364736f6c63430008130033",
    "sourceMap": "341:9712:97:-:0;;;;;;;;",
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
    "id": 63889,
    "exportedSymbols": {
      "FixedPointMathLib": [
        63888
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:10012:97",
    "nodes": [
      {
        "id": 63731,
        "nodeType": "PragmaDirective",
        "src": "42:24:97",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 63888,
        "nodeType": "ContractDefinition",
        "src": "341:9712:97",
        "nodes": [
          {
            "id": 63739,
            "nodeType": "VariableDeclaration",
            "src": "566:50:97",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_UINT256",
            "nameLocation": "592:11:97",
            "scope": 63888,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 63733,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "566:7:97",
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
              "id": 63738,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "commonType": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                },
                "id": 63736,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "hexValue": "32",
                  "id": 63734,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "606:1:97",
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
                  "id": 63735,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "609:3:97",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_256_by_1",
                    "typeString": "int_const 256"
                  },
                  "value": "256"
                },
                "src": "606:6:97",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "-",
              "rightExpression": {
                "hexValue": "31",
                "id": 63737,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "615:1:97",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "src": "606:10:97",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 63742,
            "nodeType": "VariableDeclaration",
            "src": "623:36:97",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "WAD",
            "nameLocation": "649:3:97",
            "scope": 63888,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 63740,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "623:7:97",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31653138",
              "id": 63741,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "655:4:97",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "value": "1e18"
            },
            "visibility": "internal"
          },
          {
            "id": 63758,
            "nodeType": "FunctionDefinition",
            "src": "704:164:97",
            "nodes": [],
            "body": {
              "id": 63757,
              "nodeType": "Block",
              "src": "778:90:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63752,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63744,
                        "src": "806:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63753,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63746,
                        "src": "809:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63754,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63742,
                        "src": "812:3:97",
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
                      "id": 63751,
                      "name": "mulDivDown",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63819,
                      "src": "795:10:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 63755,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "795:21:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63750,
                  "id": 63756,
                  "nodeType": "Return",
                  "src": "788:28:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulWadDown",
            "nameLocation": "713:10:97",
            "parameters": {
              "id": 63747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63744,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "732:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63758,
                  "src": "724:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63743,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "724:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63746,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "743:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63758,
                  "src": "735:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63745,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "735:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "723:22:97"
            },
            "returnParameters": {
              "id": 63750,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63749,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63758,
                  "src": "769:7:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63748,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "768:9:97"
            },
            "scope": 63888,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63774,
            "nodeType": "FunctionDefinition",
            "src": "874:158:97",
            "nodes": [],
            "body": {
              "id": 63773,
              "nodeType": "Block",
              "src": "946:86:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63768,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63760,
                        "src": "972:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63769,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63762,
                        "src": "975:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63770,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63742,
                        "src": "978:3:97",
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
                      "id": 63767,
                      "name": "mulDivUp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63832,
                      "src": "963:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 63771,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "963:19:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63766,
                  "id": 63772,
                  "nodeType": "Return",
                  "src": "956:26:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulWadUp",
            "nameLocation": "883:8:97",
            "parameters": {
              "id": 63763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63760,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "900:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63774,
                  "src": "892:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63759,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "892:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63762,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "911:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63774,
                  "src": "903:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63761,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "903:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "891:22:97"
            },
            "returnParameters": {
              "id": 63766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63765,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63774,
                  "src": "937:7:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63764,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "937:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "936:9:97"
            },
            "scope": 63888,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63790,
            "nodeType": "FunctionDefinition",
            "src": "1038:164:97",
            "nodes": [],
            "body": {
              "id": 63789,
              "nodeType": "Block",
              "src": "1112:90:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63784,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63776,
                        "src": "1140:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63785,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63742,
                        "src": "1143:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63786,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63778,
                        "src": "1148:1:97",
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
                      "id": 63783,
                      "name": "mulDivDown",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63819,
                      "src": "1129:10:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 63787,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1129:21:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63782,
                  "id": 63788,
                  "nodeType": "Return",
                  "src": "1122:28:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divWadDown",
            "nameLocation": "1047:10:97",
            "parameters": {
              "id": 63779,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63776,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1066:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63790,
                  "src": "1058:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63775,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1058:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63778,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1077:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63790,
                  "src": "1069:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63777,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1069:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1057:22:97"
            },
            "returnParameters": {
              "id": 63782,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63781,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63790,
                  "src": "1103:7:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63780,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1103:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1102:9:97"
            },
            "scope": 63888,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63806,
            "nodeType": "FunctionDefinition",
            "src": "1208:158:97",
            "nodes": [],
            "body": {
              "id": 63805,
              "nodeType": "Block",
              "src": "1280:86:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63800,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63792,
                        "src": "1306:1:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63801,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63742,
                        "src": "1309:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63802,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63794,
                        "src": "1314:1:97",
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
                      "id": 63799,
                      "name": "mulDivUp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63832,
                      "src": "1297:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 63803,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1297:19:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63798,
                  "id": 63804,
                  "nodeType": "Return",
                  "src": "1290:26:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divWadUp",
            "nameLocation": "1217:8:97",
            "parameters": {
              "id": 63795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63792,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1234:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63806,
                  "src": "1226:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63791,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1226:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63794,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1245:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63806,
                  "src": "1237:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63793,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1237:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1225:22:97"
            },
            "returnParameters": {
              "id": 63798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63797,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63806,
                  "src": "1271:7:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63796,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1271:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1270:9:97"
            },
            "scope": 63888,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63819,
            "nodeType": "FunctionDefinition",
            "src": "1564:526:97",
            "nodes": [],
            "body": {
              "id": 63818,
              "nodeType": "Block",
              "src": "1691:399:97",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "1753:331:97",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1936:44:97",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1961:1:97",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1964:1:97",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1954:6:97"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1954:12:97"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1954:12:97"
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
                                  "src": "1878:11:97"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "1902:1:97"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "1908:1:97"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1915:11:97"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1928:1:97"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "1911:3:97"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "1911:19:97"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "1905:2:97"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1905:26:97"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "1898:3:97"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1898:34:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "1891:6:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1891:42:97"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "1874:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1874:60:97"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1867:6:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1867:68:97"
                        },
                        "nodeType": "YulIf",
                        "src": "1864:116:97"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2042:32:97",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "2055:1:97"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "2058:1:97"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "2051:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2051:9:97"
                            },
                            {
                              "name": "denominator",
                              "nodeType": "YulIdentifier",
                              "src": "2062:11:97"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "2047:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2047:27:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "2042:1:97"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63739,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1915:11:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63812,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1878:11:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63812,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2062:11:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63808,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1908:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63808,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2055:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63810,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1902:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63810,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1928:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63810,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2058:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63815,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2042:1:97",
                      "valueSize": 1
                    }
                  ],
                  "id": 63817,
                  "nodeType": "InlineAssembly",
                  "src": "1744:340:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivDown",
            "nameLocation": "1573:10:97",
            "parameters": {
              "id": 63813,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63808,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1601:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63819,
                  "src": "1593:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63807,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1593:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63810,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1620:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63819,
                  "src": "1612:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63809,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1612:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63812,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "1639:11:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63819,
                  "src": "1631:19:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63811,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1631:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1583:73:97"
            },
            "returnParameters": {
              "id": 63816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63815,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "1688:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63819,
                  "src": "1680:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63814,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1680:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1679:11:97"
            },
            "scope": 63888,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63832,
            "nodeType": "FunctionDefinition",
            "src": "2096:672:97",
            "nodes": [],
            "body": {
              "id": 63831,
              "nodeType": "Block",
              "src": "2221:547:97",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "2283:479:97",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2466:44:97",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2491:1:97",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2494:1:97",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2484:6:97"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2484:12:97"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2484:12:97"
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
                                  "src": "2408:11:97"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "2432:1:97"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "2438:1:97"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2445:11:97"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2458:1:97"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "2441:3:97"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "2441:19:97"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "2435:2:97"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2435:26:97"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "2428:3:97"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2428:34:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "2421:6:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2421:42:97"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "2404:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2404:60:97"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2397:6:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2397:68:97"
                        },
                        "nodeType": "YulIf",
                        "src": "2394:116:97"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2679:73:97",
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
                                          "src": "2699:1:97"
                                        },
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "2702:1:97"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "2695:3:97"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2695:9:97"
                                    },
                                    {
                                      "name": "denominator",
                                      "nodeType": "YulIdentifier",
                                      "src": "2706:11:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mod",
                                    "nodeType": "YulIdentifier",
                                    "src": "2691:3:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2691:27:97"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2720:1:97",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "2688:2:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2688:34:97"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "2732:1:97"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "2735:1:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nodeType": "YulIdentifier",
                                    "src": "2728:3:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2728:9:97"
                                },
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "2739:11:97"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "2724:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2724:27:97"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2684:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2684:68:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "2679:1:97"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63739,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2445:11:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63825,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2408:11:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63825,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2706:11:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63825,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2739:11:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63821,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2438:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63821,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2699:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63821,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2732:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63823,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2432:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63823,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2458:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63823,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2702:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63823,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2735:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63828,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2679:1:97",
                      "valueSize": 1
                    }
                  ],
                  "id": 63830,
                  "nodeType": "InlineAssembly",
                  "src": "2274:488:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivUp",
            "nameLocation": "2105:8:97",
            "parameters": {
              "id": 63826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63821,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "2131:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63832,
                  "src": "2123:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63820,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2123:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63823,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "2150:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63832,
                  "src": "2142:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63822,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2142:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63825,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "2169:11:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63832,
                  "src": "2161:19:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63824,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2161:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2113:73:97"
            },
            "returnParameters": {
              "id": 63829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63828,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "2218:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63832,
                  "src": "2210:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63827,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2210:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2209:11:97"
            },
            "scope": 63888,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63845,
            "nodeType": "FunctionDefinition",
            "src": "2774:2778:97",
            "nodes": [],
            "body": {
              "id": 63844,
              "nodeType": "Block",
              "src": "2890:2662:97",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "2952:2594:97",
                    "statements": [
                      {
                        "cases": [
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2994:254:97",
                              "statements": [
                                {
                                  "cases": [
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3044:85:97",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3100:11:97",
                                            "value": {
                                              "name": "scalar",
                                              "nodeType": "YulIdentifier",
                                              "src": "3105:6:97"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3100:1:97"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3037:92:97",
                                      "value": {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3042:1:97",
                                        "type": "",
                                        "value": "0"
                                      }
                                    },
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3154:80:97",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3210:6:97",
                                            "value": {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3215:1:97",
                                              "type": "",
                                              "value": "0"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3210:1:97"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3146:88:97",
                                      "value": "default"
                                    }
                                  ],
                                  "expression": {
                                    "name": "n",
                                    "nodeType": "YulIdentifier",
                                    "src": "3019:1:97"
                                  },
                                  "nodeType": "YulSwitch",
                                  "src": "3012:222:97"
                                }
                              ]
                            },
                            "nodeType": "YulCase",
                            "src": "2987:261:97",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2992:1:97",
                              "type": "",
                              "value": "0"
                            }
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "3269:2267:97",
                              "statements": [
                                {
                                  "cases": [
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3327:115:97",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3413:11:97",
                                            "value": {
                                              "name": "scalar",
                                              "nodeType": "YulIdentifier",
                                              "src": "3418:6:97"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3413:1:97"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3320:122:97",
                                      "value": {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3325:1:97",
                                        "type": "",
                                        "value": "0"
                                      }
                                    },
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3467:104:97",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3547:6:97",
                                            "value": {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "3552:1:97"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3547:1:97"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3459:112:97",
                                      "value": "default"
                                    }
                                  ],
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "n",
                                        "nodeType": "YulIdentifier",
                                        "src": "3298:1:97"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3301:1:97",
                                        "type": "",
                                        "value": "2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mod",
                                      "nodeType": "YulIdentifier",
                                      "src": "3294:3:97"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3294:9:97"
                                  },
                                  "nodeType": "YulSwitch",
                                  "src": "3287:284:97"
                                },
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "3651:26:97",
                                  "value": {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3667:1:97",
                                        "type": "",
                                        "value": "1"
                                      },
                                      {
                                        "name": "scalar",
                                        "nodeType": "YulIdentifier",
                                        "src": "3670:6:97"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shr",
                                      "nodeType": "YulIdentifier",
                                      "src": "3663:3:97"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3663:14:97"
                                  },
                                  "variables": [
                                    {
                                      "name": "half",
                                      "nodeType": "YulTypedName",
                                      "src": "3655:4:97",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "body": {
                                    "nodeType": "YulBlock",
                                    "src": "3951:1571:97",
                                    "statements": [
                                      {
                                        "body": {
                                          "nodeType": "YulBlock",
                                          "src": "4125:60:97",
                                          "statements": [
                                            {
                                              "expression": {
                                                "arguments": [
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4158:1:97",
                                                    "type": "",
                                                    "value": "0"
                                                  },
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4161:1:97",
                                                    "type": "",
                                                    "value": "0"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "revert",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4151:6:97"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4151:12:97"
                                              },
                                              "nodeType": "YulExpressionStatement",
                                              "src": "4151:12:97"
                                            }
                                          ]
                                        },
                                        "condition": {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "4117:3:97",
                                              "type": "",
                                              "value": "128"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "4122:1:97"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "4113:3:97"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4113:11:97"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4110:75:97"
                                      },
                                      {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "4247:19:97",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "4261:1:97"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "4264:1:97"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mul",
                                            "nodeType": "YulIdentifier",
                                            "src": "4257:3:97"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4257:9:97"
                                        },
                                        "variables": [
                                          {
                                            "name": "xx",
                                            "nodeType": "YulTypedName",
                                            "src": "4251:2:97",
                                            "type": ""
                                          }
                                        ]
                                      },
                                      {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "4340:28:97",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "xx",
                                              "nodeType": "YulIdentifier",
                                              "src": "4359:2:97"
                                            },
                                            {
                                              "name": "half",
                                              "nodeType": "YulIdentifier",
                                              "src": "4363:4:97"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "4355:3:97"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4355:13:97"
                                        },
                                        "variables": [
                                          {
                                            "name": "xxRound",
                                            "nodeType": "YulTypedName",
                                            "src": "4344:7:97",
                                            "type": ""
                                          }
                                        ]
                                      },
                                      {
                                        "body": {
                                          "nodeType": "YulBlock",
                                          "src": "4464:60:97",
                                          "statements": [
                                            {
                                              "expression": {
                                                "arguments": [
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4497:1:97",
                                                    "type": "",
                                                    "value": "0"
                                                  },
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4500:1:97",
                                                    "type": "",
                                                    "value": "0"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "revert",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4490:6:97"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4490:12:97"
                                              },
                                              "nodeType": "YulExpressionStatement",
                                              "src": "4490:12:97"
                                            }
                                          ]
                                        },
                                        "condition": {
                                          "arguments": [
                                            {
                                              "name": "xxRound",
                                              "nodeType": "YulIdentifier",
                                              "src": "4451:7:97"
                                            },
                                            {
                                              "name": "xx",
                                              "nodeType": "YulIdentifier",
                                              "src": "4460:2:97"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "lt",
                                            "nodeType": "YulIdentifier",
                                            "src": "4448:2:97"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4448:15:97"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4445:79:97"
                                      },
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "4594:25:97",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "xxRound",
                                              "nodeType": "YulIdentifier",
                                              "src": "4603:7:97"
                                            },
                                            {
                                              "name": "scalar",
                                              "nodeType": "YulIdentifier",
                                              "src": "4612:6:97"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "div",
                                            "nodeType": "YulIdentifier",
                                            "src": "4599:3:97"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4599:20:97"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "x",
                                            "nodeType": "YulIdentifier",
                                            "src": "4594:1:97"
                                          }
                                        ]
                                      },
                                      {
                                        "body": {
                                          "nodeType": "YulBlock",
                                          "src": "4691:813:97",
                                          "statements": [
                                            {
                                              "nodeType": "YulVariableDeclaration",
                                              "src": "4759:19:97",
                                              "value": {
                                                "arguments": [
                                                  {
                                                    "name": "z",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4773:1:97"
                                                  },
                                                  {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4776:1:97"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "mul",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4769:3:97"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4769:9:97"
                                              },
                                              "variables": [
                                                {
                                                  "name": "zx",
                                                  "nodeType": "YulTypedName",
                                                  "src": "4763:2:97",
                                                  "type": ""
                                                }
                                              ]
                                            },
                                            {
                                              "body": {
                                                "nodeType": "YulBlock",
                                                "src": "4881:209:97",
                                                "statements": [
                                                  {
                                                    "body": {
                                                      "nodeType": "YulBlock",
                                                      "src": "4988:76:97",
                                                      "statements": [
                                                        {
                                                          "expression": {
                                                            "arguments": [
                                                              {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "5029:1:97",
                                                                "type": "",
                                                                "value": "0"
                                                              },
                                                              {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "5032:1:97",
                                                                "type": "",
                                                                "value": "0"
                                                              }
                                                            ],
                                                            "functionName": {
                                                              "name": "revert",
                                                              "nodeType": "YulIdentifier",
                                                              "src": "5022:6:97"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5022:12:97"
                                                          },
                                                          "nodeType": "YulExpressionStatement",
                                                          "src": "5022:12:97"
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
                                                              "src": "4984:1:97"
                                                            }
                                                          ],
                                                          "functionName": {
                                                            "name": "iszero",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4977:6:97"
                                                          },
                                                          "nodeType": "YulFunctionCall",
                                                          "src": "4977:9:97"
                                                        }
                                                      ],
                                                      "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4970:6:97"
                                                      },
                                                      "nodeType": "YulFunctionCall",
                                                      "src": "4970:17:97"
                                                    },
                                                    "nodeType": "YulIf",
                                                    "src": "4967:97:97"
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
                                                            "src": "4869:2:97"
                                                          },
                                                          {
                                                            "name": "x",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4873:1:97"
                                                          }
                                                        ],
                                                        "functionName": {
                                                          "name": "div",
                                                          "nodeType": "YulIdentifier",
                                                          "src": "4865:3:97"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "4865:10:97"
                                                      },
                                                      {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4877:1:97"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "eq",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "4862:2:97"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4862:17:97"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "iszero",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4855:6:97"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4855:25:97"
                                              },
                                              "nodeType": "YulIf",
                                              "src": "4852:238:97"
                                            },
                                            {
                                              "nodeType": "YulVariableDeclaration",
                                              "src": "5172:28:97",
                                              "value": {
                                                "arguments": [
                                                  {
                                                    "name": "zx",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5191:2:97"
                                                  },
                                                  {
                                                    "name": "half",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5195:4:97"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "add",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5187:3:97"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5187:13:97"
                                              },
                                              "variables": [
                                                {
                                                  "name": "zxRound",
                                                  "nodeType": "YulTypedName",
                                                  "src": "5176:7:97",
                                                  "type": ""
                                                }
                                              ]
                                            },
                                            {
                                              "body": {
                                                "nodeType": "YulBlock",
                                                "src": "5304:68:97",
                                                "statements": [
                                                  {
                                                    "expression": {
                                                      "arguments": [
                                                        {
                                                          "kind": "number",
                                                          "nodeType": "YulLiteral",
                                                          "src": "5341:1:97",
                                                          "type": "",
                                                          "value": "0"
                                                        },
                                                        {
                                                          "kind": "number",
                                                          "nodeType": "YulLiteral",
                                                          "src": "5344:1:97",
                                                          "type": "",
                                                          "value": "0"
                                                        }
                                                      ],
                                                      "functionName": {
                                                        "name": "revert",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5334:6:97"
                                                      },
                                                      "nodeType": "YulFunctionCall",
                                                      "src": "5334:12:97"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "5334:12:97"
                                                  }
                                                ]
                                              },
                                              "condition": {
                                                "arguments": [
                                                  {
                                                    "name": "zxRound",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5291:7:97"
                                                  },
                                                  {
                                                    "name": "zx",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5300:2:97"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "lt",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5288:2:97"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5288:15:97"
                                              },
                                              "nodeType": "YulIf",
                                              "src": "5285:87:97"
                                            },
                                            {
                                              "nodeType": "YulAssignment",
                                              "src": "5457:25:97",
                                              "value": {
                                                "arguments": [
                                                  {
                                                    "name": "zxRound",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5466:7:97"
                                                  },
                                                  {
                                                    "name": "scalar",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5475:6:97"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "div",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5462:3:97"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5462:20:97"
                                              },
                                              "variableNames": [
                                                {
                                                  "name": "z",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5457:1:97"
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
                                              "src": "4685:1:97"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "4688:1:97",
                                              "type": "",
                                              "value": "2"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mod",
                                            "nodeType": "YulIdentifier",
                                            "src": "4681:3:97"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4681:9:97"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4678:826:97"
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "name": "n",
                                    "nodeType": "YulIdentifier",
                                    "src": "3824:1:97"
                                  },
                                  "nodeType": "YulForLoop",
                                  "post": {
                                    "nodeType": "YulBlock",
                                    "src": "3826:124:97",
                                    "statements": [
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "3918:14:97",
                                        "value": {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3927:1:97",
                                              "type": "",
                                              "value": "1"
                                            },
                                            {
                                              "name": "n",
                                              "nodeType": "YulIdentifier",
                                              "src": "3930:1:97"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "3923:3:97"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3923:9:97"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "n",
                                            "nodeType": "YulIdentifier",
                                            "src": "3918:1:97"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "pre": {
                                    "nodeType": "YulBlock",
                                    "src": "3699:124:97",
                                    "statements": [
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "3791:14:97",
                                        "value": {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3800:1:97",
                                              "type": "",
                                              "value": "1"
                                            },
                                            {
                                              "name": "n",
                                              "nodeType": "YulIdentifier",
                                              "src": "3803:1:97"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "3796:3:97"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3796:9:97"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "n",
                                            "nodeType": "YulIdentifier",
                                            "src": "3791:1:97"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "src": "3695:1827:97"
                                }
                              ]
                            },
                            "nodeType": "YulCase",
                            "src": "3261:2275:97",
                            "value": "default"
                          }
                        ],
                        "expression": {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "2973:1:97"
                        },
                        "nodeType": "YulSwitch",
                        "src": "2966:2570:97"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63836,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3019:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63836,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3298:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63836,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3791:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63836,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3803:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63836,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3824:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63836,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3918:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63836,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3930:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63836,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4685:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63838,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3105:6:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63838,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3418:6:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63838,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3670:6:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63838,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4612:6:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63838,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5475:6:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63834,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2973:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63834,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3552:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63834,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4122:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63834,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4261:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63834,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4264:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63834,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4594:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63834,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4776:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63834,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4873:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63834,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4984:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63841,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3100:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63841,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3210:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63841,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3413:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63841,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3547:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63841,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4773:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63841,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4877:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63841,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5457:1:97",
                      "valueSize": 1
                    }
                  ],
                  "id": 63843,
                  "nodeType": "InlineAssembly",
                  "src": "2943:2603:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "rpow",
            "nameLocation": "2783:4:97",
            "parameters": {
              "id": 63839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63834,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "2805:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63845,
                  "src": "2797:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63833,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2797:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63836,
                  "mutability": "mutable",
                  "name": "n",
                  "nameLocation": "2824:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63845,
                  "src": "2816:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63835,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2816:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63838,
                  "mutability": "mutable",
                  "name": "scalar",
                  "nameLocation": "2843:6:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63845,
                  "src": "2835:14:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63837,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2835:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2787:68:97"
            },
            "returnParameters": {
              "id": 63842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63841,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "2887:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63845,
                  "src": "2879:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63840,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2879:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2878:11:97"
            },
            "scope": 63888,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63854,
            "nodeType": "FunctionDefinition",
            "src": "5746:3396:97",
            "nodes": [],
            "body": {
              "id": 63853,
              "nodeType": "Block",
              "src": "5805:3337:97",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "5867:3269:97",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5881:10:97",
                        "value": {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "5890:1:97"
                        },
                        "variables": [
                          {
                            "name": "y",
                            "nodeType": "YulTypedName",
                            "src": "5885:1:97",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5971:8:97",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5976:3:97",
                          "type": "",
                          "value": "181"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "5971:1:97"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6465:80:97",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6483:16:97",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6492:3:97",
                                    "type": "",
                                    "value": "128"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6497:1:97"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6488:3:97"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6488:11:97"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6483:1:97"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6516:15:97",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6525:2:97",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6529:1:97"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6521:3:97"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6521:10:97"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6516:1:97"
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
                                  "src": "6422:1:97"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6425:37:97",
                                  "type": "",
                                  "value": "0x10000000000000000000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6419:2:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6419:44:97"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6412:6:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6412:52:97"
                        },
                        "nodeType": "YulIf",
                        "src": "6409:136:97"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6598:79:97",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6616:15:97",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6625:2:97",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6629:1:97"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6621:3:97"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6621:10:97"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6616:1:97"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6648:15:97",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6657:2:97",
                                    "type": "",
                                    "value": "32"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6661:1:97"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6653:3:97"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6653:10:97"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6648:1:97"
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
                                  "src": "6571:1:97"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6574:21:97",
                                  "type": "",
                                  "value": "0x1000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6568:2:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6568:28:97"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6561:6:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6561:36:97"
                        },
                        "nodeType": "YulIf",
                        "src": "6558:119:97"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6722:79:97",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6740:15:97",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6749:2:97",
                                    "type": "",
                                    "value": "32"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6753:1:97"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6745:3:97"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6745:10:97"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6740:1:97"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6772:15:97",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6781:2:97",
                                    "type": "",
                                    "value": "16"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6785:1:97"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6777:3:97"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6777:10:97"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6772:1:97"
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
                                  "src": "6703:1:97"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6706:13:97",
                                  "type": "",
                                  "value": "0x10000000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6700:2:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6700:20:97"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6693:6:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6693:28:97"
                        },
                        "nodeType": "YulIf",
                        "src": "6690:111:97"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6842:78:97",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6860:15:97",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6869:2:97",
                                    "type": "",
                                    "value": "16"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6873:1:97"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6865:3:97"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6865:10:97"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6860:1:97"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6892:14:97",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6901:1:97",
                                    "type": "",
                                    "value": "8"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6904:1:97"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6897:3:97"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6897:9:97"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6892:1:97"
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
                                  "src": "6827:1:97"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6830:9:97",
                                  "type": "",
                                  "value": "0x1000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6824:2:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6824:16:97"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6817:6:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6817:24:97"
                        },
                        "nodeType": "YulIf",
                        "src": "6814:106:97"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8110:35:97",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8119:2:97",
                              "type": "",
                              "value": "18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8127:1:97"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "8134:1:97"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "8137:5:97",
                                      "type": "",
                                      "value": "65536"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "8130:3:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8130:13:97"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "8123:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8123:21:97"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8115:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8115:30:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8110:1:97"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8306:30:97",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8315:1:97",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8322:1:97"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8329:1:97"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8332:1:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8325:3:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8325:9:97"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8318:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8318:17:97"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8311:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8311:25:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8306:1:97"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8349:30:97",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8358:1:97",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8365:1:97"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8372:1:97"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8375:1:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8368:3:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8368:9:97"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8361:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8361:17:97"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8354:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8354:25:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8349:1:97"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8392:30:97",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8401:1:97",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8408:1:97"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8415:1:97"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8418:1:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8411:3:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8411:9:97"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8404:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8404:17:97"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8397:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8397:25:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8392:1:97"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8435:30:97",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8444:1:97",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8451:1:97"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8458:1:97"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8461:1:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8454:3:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8454:9:97"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8447:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8447:17:97"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8440:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8440:25:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8435:1:97"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8478:30:97",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8487:1:97",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8494:1:97"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8501:1:97"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8504:1:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8497:3:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8497:9:97"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8490:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8490:17:97"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8483:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8483:25:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8478:1:97"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8521:30:97",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8530:1:97",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8537:1:97"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8544:1:97"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8547:1:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8540:3:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8540:9:97"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8533:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8533:17:97"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8526:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8526:25:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8521:1:97"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8564:30:97",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8573:1:97",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8580:1:97"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8587:1:97"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8590:1:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8583:3:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8583:9:97"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8576:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8576:17:97"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8569:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8569:25:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8564:1:97"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9097:29:97",
                        "value": {
                          "arguments": [
                            {
                              "name": "z",
                              "nodeType": "YulIdentifier",
                              "src": "9106:1:97"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "9116:1:97"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "9119:1:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "9112:3:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "9112:9:97"
                                },
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "9123:1:97"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "9109:2:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9109:16:97"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "9102:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9102:24:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "9097:1:97"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63847,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5890:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63847,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8329:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63847,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8372:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63847,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8415:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63847,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8458:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63847,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8501:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63847,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8544:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63847,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8587:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63847,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9116:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5971:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6516:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6529:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6648:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6661:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6772:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6785:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6892:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6904:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8110:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8127:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8306:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8322:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8332:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8349:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8365:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8375:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8392:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8408:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8418:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8435:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8451:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8461:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8478:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8494:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8504:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8521:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8537:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8547:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8564:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8580:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8590:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9097:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9106:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9119:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63850,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9123:1:97",
                      "valueSize": 1
                    }
                  ],
                  "id": 63852,
                  "nodeType": "InlineAssembly",
                  "src": "5858:3278:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sqrt",
            "nameLocation": "5755:4:97",
            "parameters": {
              "id": 63848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63847,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "5768:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63854,
                  "src": "5760:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63846,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5760:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5759:11:97"
            },
            "returnParameters": {
              "id": 63851,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63850,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "5802:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63854,
                  "src": "5794:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63849,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5794:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5793:11:97"
            },
            "scope": 63888,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63865,
            "nodeType": "FunctionDefinition",
            "src": "9148:282:97",
            "nodes": [],
            "body": {
              "id": 63864,
              "nodeType": "Block",
              "src": "9223:207:97",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9285:139:97",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9400:14:97",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "9409:1:97"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "9412:1:97"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "9405:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9405:9:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "9400:1:97"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63856,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9409:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63858,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9412:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63861,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9400:1:97",
                      "valueSize": 1
                    }
                  ],
                  "id": 63863,
                  "nodeType": "InlineAssembly",
                  "src": "9276:148:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsafeMod",
            "nameLocation": "9157:9:97",
            "parameters": {
              "id": 63859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63856,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9175:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63865,
                  "src": "9167:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63855,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9167:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63858,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9186:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63865,
                  "src": "9178:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9178:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9166:22:97"
            },
            "returnParameters": {
              "id": 63862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63861,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "9220:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63865,
                  "src": "9212:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63860,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9212:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9211:11:97"
            },
            "scope": 63888,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63876,
            "nodeType": "FunctionDefinition",
            "src": "9436:285:97",
            "nodes": [],
            "body": {
              "id": 63875,
              "nodeType": "Block",
              "src": "9511:210:97",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9573:142:97",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9691:14:97",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "9700:1:97"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "9703:1:97"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "9696:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9696:9:97"
                        },
                        "variableNames": [
                          {
                            "name": "r",
                            "nodeType": "YulIdentifier",
                            "src": "9691:1:97"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63872,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9691:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63867,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9700:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63869,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9703:1:97",
                      "valueSize": 1
                    }
                  ],
                  "id": 63874,
                  "nodeType": "InlineAssembly",
                  "src": "9564:151:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsafeDiv",
            "nameLocation": "9445:9:97",
            "parameters": {
              "id": 63870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63867,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9463:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63876,
                  "src": "9455:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63866,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9455:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63869,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9474:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63876,
                  "src": "9466:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63868,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9466:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9454:22:97"
            },
            "returnParameters": {
              "id": 63873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63872,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "9508:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63876,
                  "src": "9500:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63871,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9500:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9499:11:97"
            },
            "scope": 63888,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63887,
            "nodeType": "FunctionDefinition",
            "src": "9727:324:97",
            "nodes": [],
            "body": {
              "id": 63886,
              "nodeType": "Block",
              "src": "9804:247:97",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9866:179:97",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9998:37:97",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "10014:1:97"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "10017:1:97"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mod",
                                    "nodeType": "YulIdentifier",
                                    "src": "10010:3:97"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10010:9:97"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10021:1:97",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "10007:2:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10007:16:97"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "10029:1:97"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "10032:1:97"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "10025:3:97"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10025:9:97"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10003:3:97"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10003:32:97"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "9998:1:97"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63878,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10014:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63878,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10029:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63880,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10017:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63880,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10032:1:97",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63883,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9998:1:97",
                      "valueSize": 1
                    }
                  ],
                  "id": 63885,
                  "nodeType": "InlineAssembly",
                  "src": "9857:188:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsafeDivUp",
            "nameLocation": "9736:11:97",
            "parameters": {
              "id": 63881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63878,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9756:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63887,
                  "src": "9748:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63877,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9748:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63880,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9767:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63887,
                  "src": "9759:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63879,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9759:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9747:22:97"
            },
            "returnParameters": {
              "id": 63884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63883,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "9801:1:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 63887,
                  "src": "9793:9:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63882,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9793:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9792:11:97"
            },
            "scope": 63888,
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
          "id": 63732,
          "nodeType": "StructuredDocumentation",
          "src": "68:273:97",
          "text": "@notice Arithmetic library with operations for fixed-point numbers.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @author Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          63888
        ],
        "name": "FixedPointMathLib",
        "nameLocation": "349:17:97",
        "scope": 63889,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 97
} as const;
