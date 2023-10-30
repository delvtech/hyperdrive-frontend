{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122032831deb1012174456a50016fba21d9e4cdab8f78474b512dd3ea15e7b814a5e64736f6c63430008130033",
    "sourceMap": "341:9712:96:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;341:9712:96;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122032831deb1012174456a50016fba21d9e4cdab8f78474b512dd3ea15e7b814a5e64736f6c63430008130033",
    "sourceMap": "341:9712:96:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Arithmetic library with operations for fixed-point numbers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":\"FixedPointMathLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]}},\"version\":1}",
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
    "id": 63449,
    "exportedSymbols": {
      "FixedPointMathLib": [
        63448
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:10012:96",
    "nodes": [
      {
        "id": 63291,
        "nodeType": "PragmaDirective",
        "src": "42:24:96",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 63448,
        "nodeType": "ContractDefinition",
        "src": "341:9712:96",
        "nodes": [
          {
            "id": 63299,
            "nodeType": "VariableDeclaration",
            "src": "566:50:96",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_UINT256",
            "nameLocation": "592:11:96",
            "scope": 63448,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 63293,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "566:7:96",
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
              "id": 63298,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "commonType": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                },
                "id": 63296,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "hexValue": "32",
                  "id": 63294,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "606:1:96",
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
                  "id": 63295,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "609:3:96",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_256_by_1",
                    "typeString": "int_const 256"
                  },
                  "value": "256"
                },
                "src": "606:6:96",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "-",
              "rightExpression": {
                "hexValue": "31",
                "id": 63297,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "615:1:96",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "src": "606:10:96",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 63302,
            "nodeType": "VariableDeclaration",
            "src": "623:36:96",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "WAD",
            "nameLocation": "649:3:96",
            "scope": 63448,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 63300,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "623:7:96",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31653138",
              "id": 63301,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "655:4:96",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "value": "1e18"
            },
            "visibility": "internal"
          },
          {
            "id": 63318,
            "nodeType": "FunctionDefinition",
            "src": "704:164:96",
            "nodes": [],
            "body": {
              "id": 63317,
              "nodeType": "Block",
              "src": "778:90:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63312,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63304,
                        "src": "806:1:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63313,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63306,
                        "src": "809:1:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63314,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63302,
                        "src": "812:3:96",
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
                      "id": 63311,
                      "name": "mulDivDown",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63379,
                      "src": "795:10:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 63315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "795:21:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63310,
                  "id": 63316,
                  "nodeType": "Return",
                  "src": "788:28:96"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulWadDown",
            "nameLocation": "713:10:96",
            "parameters": {
              "id": 63307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63304,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "732:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63318,
                  "src": "724:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63303,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "724:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63306,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "743:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63318,
                  "src": "735:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63305,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "735:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "723:22:96"
            },
            "returnParameters": {
              "id": 63310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63309,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63318,
                  "src": "769:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63308,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "768:9:96"
            },
            "scope": 63448,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63334,
            "nodeType": "FunctionDefinition",
            "src": "874:158:96",
            "nodes": [],
            "body": {
              "id": 63333,
              "nodeType": "Block",
              "src": "946:86:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63328,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63320,
                        "src": "972:1:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63329,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63322,
                        "src": "975:1:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63330,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63302,
                        "src": "978:3:96",
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
                      "id": 63327,
                      "name": "mulDivUp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63392,
                      "src": "963:8:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 63331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "963:19:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63326,
                  "id": 63332,
                  "nodeType": "Return",
                  "src": "956:26:96"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulWadUp",
            "nameLocation": "883:8:96",
            "parameters": {
              "id": 63323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63320,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "900:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63334,
                  "src": "892:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63319,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "892:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63322,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "911:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63334,
                  "src": "903:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63321,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "903:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "891:22:96"
            },
            "returnParameters": {
              "id": 63326,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63325,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63334,
                  "src": "937:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63324,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "937:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "936:9:96"
            },
            "scope": 63448,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63350,
            "nodeType": "FunctionDefinition",
            "src": "1038:164:96",
            "nodes": [],
            "body": {
              "id": 63349,
              "nodeType": "Block",
              "src": "1112:90:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63344,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63336,
                        "src": "1140:1:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63345,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63302,
                        "src": "1143:3:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63346,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63338,
                        "src": "1148:1:96",
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
                      "id": 63343,
                      "name": "mulDivDown",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63379,
                      "src": "1129:10:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 63347,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1129:21:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63342,
                  "id": 63348,
                  "nodeType": "Return",
                  "src": "1122:28:96"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divWadDown",
            "nameLocation": "1047:10:96",
            "parameters": {
              "id": 63339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63336,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1066:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63350,
                  "src": "1058:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63335,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1058:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63338,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1077:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63350,
                  "src": "1069:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63337,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1069:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1057:22:96"
            },
            "returnParameters": {
              "id": 63342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63341,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63350,
                  "src": "1103:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63340,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1103:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1102:9:96"
            },
            "scope": 63448,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63366,
            "nodeType": "FunctionDefinition",
            "src": "1208:158:96",
            "nodes": [],
            "body": {
              "id": 63365,
              "nodeType": "Block",
              "src": "1280:86:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63360,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63352,
                        "src": "1306:1:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63361,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63302,
                        "src": "1309:3:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63362,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63354,
                        "src": "1314:1:96",
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
                      "id": 63359,
                      "name": "mulDivUp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63392,
                      "src": "1297:8:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 63363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1297:19:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63358,
                  "id": 63364,
                  "nodeType": "Return",
                  "src": "1290:26:96"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divWadUp",
            "nameLocation": "1217:8:96",
            "parameters": {
              "id": 63355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63352,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1234:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63366,
                  "src": "1226:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63351,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1226:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63354,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1245:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63366,
                  "src": "1237:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63353,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1237:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1225:22:96"
            },
            "returnParameters": {
              "id": 63358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63357,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63366,
                  "src": "1271:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63356,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1271:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1270:9:96"
            },
            "scope": 63448,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63379,
            "nodeType": "FunctionDefinition",
            "src": "1564:526:96",
            "nodes": [],
            "body": {
              "id": 63378,
              "nodeType": "Block",
              "src": "1691:399:96",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "1753:331:96",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1936:44:96",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1961:1:96",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1964:1:96",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1954:6:96"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1954:12:96"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1954:12:96"
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
                                  "src": "1878:11:96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "1902:1:96"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "1908:1:96"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1915:11:96"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1928:1:96"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "1911:3:96"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "1911:19:96"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "1905:2:96"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1905:26:96"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "1898:3:96"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1898:34:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "1891:6:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1891:42:96"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "1874:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1874:60:96"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1867:6:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1867:68:96"
                        },
                        "nodeType": "YulIf",
                        "src": "1864:116:96"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2042:32:96",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "2055:1:96"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "2058:1:96"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "2051:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2051:9:96"
                            },
                            {
                              "name": "denominator",
                              "nodeType": "YulIdentifier",
                              "src": "2062:11:96"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "2047:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2047:27:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "2042:1:96"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63299,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1915:11:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63372,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1878:11:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63372,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2062:11:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63368,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1908:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63368,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2055:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63370,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1902:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63370,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1928:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63370,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2058:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63375,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2042:1:96",
                      "valueSize": 1
                    }
                  ],
                  "id": 63377,
                  "nodeType": "InlineAssembly",
                  "src": "1744:340:96"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivDown",
            "nameLocation": "1573:10:96",
            "parameters": {
              "id": 63373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63368,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1601:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63379,
                  "src": "1593:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63367,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1593:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63370,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1620:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63379,
                  "src": "1612:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63369,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1612:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63372,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "1639:11:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63379,
                  "src": "1631:19:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63371,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1631:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1583:73:96"
            },
            "returnParameters": {
              "id": 63376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63375,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "1688:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63379,
                  "src": "1680:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63374,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1680:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1679:11:96"
            },
            "scope": 63448,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63392,
            "nodeType": "FunctionDefinition",
            "src": "2096:672:96",
            "nodes": [],
            "body": {
              "id": 63391,
              "nodeType": "Block",
              "src": "2221:547:96",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "2283:479:96",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2466:44:96",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2491:1:96",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2494:1:96",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2484:6:96"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2484:12:96"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2484:12:96"
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
                                  "src": "2408:11:96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "2432:1:96"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "2438:1:96"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2445:11:96"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2458:1:96"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "2441:3:96"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "2441:19:96"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "2435:2:96"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2435:26:96"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "2428:3:96"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2428:34:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "2421:6:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2421:42:96"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "2404:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2404:60:96"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2397:6:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2397:68:96"
                        },
                        "nodeType": "YulIf",
                        "src": "2394:116:96"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2679:73:96",
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
                                          "src": "2699:1:96"
                                        },
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "2702:1:96"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "2695:3:96"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2695:9:96"
                                    },
                                    {
                                      "name": "denominator",
                                      "nodeType": "YulIdentifier",
                                      "src": "2706:11:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mod",
                                    "nodeType": "YulIdentifier",
                                    "src": "2691:3:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2691:27:96"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2720:1:96",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "2688:2:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2688:34:96"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "2732:1:96"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "2735:1:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nodeType": "YulIdentifier",
                                    "src": "2728:3:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2728:9:96"
                                },
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "2739:11:96"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "2724:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2724:27:96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2684:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2684:68:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "2679:1:96"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63299,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2445:11:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63385,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2408:11:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63385,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2706:11:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63385,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2739:11:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63381,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2438:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63381,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2699:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63381,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2732:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63383,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2432:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63383,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2458:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63383,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2702:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63383,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2735:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63388,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2679:1:96",
                      "valueSize": 1
                    }
                  ],
                  "id": 63390,
                  "nodeType": "InlineAssembly",
                  "src": "2274:488:96"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivUp",
            "nameLocation": "2105:8:96",
            "parameters": {
              "id": 63386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63381,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "2131:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63392,
                  "src": "2123:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63380,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2123:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63383,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "2150:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63392,
                  "src": "2142:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63382,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2142:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63385,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "2169:11:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63392,
                  "src": "2161:19:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63384,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2161:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2113:73:96"
            },
            "returnParameters": {
              "id": 63389,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63388,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "2218:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63392,
                  "src": "2210:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63387,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2210:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2209:11:96"
            },
            "scope": 63448,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63405,
            "nodeType": "FunctionDefinition",
            "src": "2774:2778:96",
            "nodes": [],
            "body": {
              "id": 63404,
              "nodeType": "Block",
              "src": "2890:2662:96",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "2952:2594:96",
                    "statements": [
                      {
                        "cases": [
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2994:254:96",
                              "statements": [
                                {
                                  "cases": [
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3044:85:96",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3100:11:96",
                                            "value": {
                                              "name": "scalar",
                                              "nodeType": "YulIdentifier",
                                              "src": "3105:6:96"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3100:1:96"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3037:92:96",
                                      "value": {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3042:1:96",
                                        "type": "",
                                        "value": "0"
                                      }
                                    },
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3154:80:96",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3210:6:96",
                                            "value": {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3215:1:96",
                                              "type": "",
                                              "value": "0"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3210:1:96"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3146:88:96",
                                      "value": "default"
                                    }
                                  ],
                                  "expression": {
                                    "name": "n",
                                    "nodeType": "YulIdentifier",
                                    "src": "3019:1:96"
                                  },
                                  "nodeType": "YulSwitch",
                                  "src": "3012:222:96"
                                }
                              ]
                            },
                            "nodeType": "YulCase",
                            "src": "2987:261:96",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2992:1:96",
                              "type": "",
                              "value": "0"
                            }
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "3269:2267:96",
                              "statements": [
                                {
                                  "cases": [
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3327:115:96",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3413:11:96",
                                            "value": {
                                              "name": "scalar",
                                              "nodeType": "YulIdentifier",
                                              "src": "3418:6:96"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3413:1:96"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3320:122:96",
                                      "value": {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3325:1:96",
                                        "type": "",
                                        "value": "0"
                                      }
                                    },
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3467:104:96",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3547:6:96",
                                            "value": {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "3552:1:96"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3547:1:96"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3459:112:96",
                                      "value": "default"
                                    }
                                  ],
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "n",
                                        "nodeType": "YulIdentifier",
                                        "src": "3298:1:96"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3301:1:96",
                                        "type": "",
                                        "value": "2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mod",
                                      "nodeType": "YulIdentifier",
                                      "src": "3294:3:96"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3294:9:96"
                                  },
                                  "nodeType": "YulSwitch",
                                  "src": "3287:284:96"
                                },
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "3651:26:96",
                                  "value": {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3667:1:96",
                                        "type": "",
                                        "value": "1"
                                      },
                                      {
                                        "name": "scalar",
                                        "nodeType": "YulIdentifier",
                                        "src": "3670:6:96"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shr",
                                      "nodeType": "YulIdentifier",
                                      "src": "3663:3:96"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3663:14:96"
                                  },
                                  "variables": [
                                    {
                                      "name": "half",
                                      "nodeType": "YulTypedName",
                                      "src": "3655:4:96",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "body": {
                                    "nodeType": "YulBlock",
                                    "src": "3951:1571:96",
                                    "statements": [
                                      {
                                        "body": {
                                          "nodeType": "YulBlock",
                                          "src": "4125:60:96",
                                          "statements": [
                                            {
                                              "expression": {
                                                "arguments": [
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4158:1:96",
                                                    "type": "",
                                                    "value": "0"
                                                  },
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4161:1:96",
                                                    "type": "",
                                                    "value": "0"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "revert",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4151:6:96"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4151:12:96"
                                              },
                                              "nodeType": "YulExpressionStatement",
                                              "src": "4151:12:96"
                                            }
                                          ]
                                        },
                                        "condition": {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "4117:3:96",
                                              "type": "",
                                              "value": "128"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "4122:1:96"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "4113:3:96"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4113:11:96"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4110:75:96"
                                      },
                                      {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "4247:19:96",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "4261:1:96"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "4264:1:96"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mul",
                                            "nodeType": "YulIdentifier",
                                            "src": "4257:3:96"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4257:9:96"
                                        },
                                        "variables": [
                                          {
                                            "name": "xx",
                                            "nodeType": "YulTypedName",
                                            "src": "4251:2:96",
                                            "type": ""
                                          }
                                        ]
                                      },
                                      {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "4340:28:96",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "xx",
                                              "nodeType": "YulIdentifier",
                                              "src": "4359:2:96"
                                            },
                                            {
                                              "name": "half",
                                              "nodeType": "YulIdentifier",
                                              "src": "4363:4:96"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "4355:3:96"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4355:13:96"
                                        },
                                        "variables": [
                                          {
                                            "name": "xxRound",
                                            "nodeType": "YulTypedName",
                                            "src": "4344:7:96",
                                            "type": ""
                                          }
                                        ]
                                      },
                                      {
                                        "body": {
                                          "nodeType": "YulBlock",
                                          "src": "4464:60:96",
                                          "statements": [
                                            {
                                              "expression": {
                                                "arguments": [
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4497:1:96",
                                                    "type": "",
                                                    "value": "0"
                                                  },
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4500:1:96",
                                                    "type": "",
                                                    "value": "0"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "revert",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4490:6:96"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4490:12:96"
                                              },
                                              "nodeType": "YulExpressionStatement",
                                              "src": "4490:12:96"
                                            }
                                          ]
                                        },
                                        "condition": {
                                          "arguments": [
                                            {
                                              "name": "xxRound",
                                              "nodeType": "YulIdentifier",
                                              "src": "4451:7:96"
                                            },
                                            {
                                              "name": "xx",
                                              "nodeType": "YulIdentifier",
                                              "src": "4460:2:96"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "lt",
                                            "nodeType": "YulIdentifier",
                                            "src": "4448:2:96"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4448:15:96"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4445:79:96"
                                      },
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "4594:25:96",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "xxRound",
                                              "nodeType": "YulIdentifier",
                                              "src": "4603:7:96"
                                            },
                                            {
                                              "name": "scalar",
                                              "nodeType": "YulIdentifier",
                                              "src": "4612:6:96"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "div",
                                            "nodeType": "YulIdentifier",
                                            "src": "4599:3:96"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4599:20:96"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "x",
                                            "nodeType": "YulIdentifier",
                                            "src": "4594:1:96"
                                          }
                                        ]
                                      },
                                      {
                                        "body": {
                                          "nodeType": "YulBlock",
                                          "src": "4691:813:96",
                                          "statements": [
                                            {
                                              "nodeType": "YulVariableDeclaration",
                                              "src": "4759:19:96",
                                              "value": {
                                                "arguments": [
                                                  {
                                                    "name": "z",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4773:1:96"
                                                  },
                                                  {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4776:1:96"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "mul",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4769:3:96"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4769:9:96"
                                              },
                                              "variables": [
                                                {
                                                  "name": "zx",
                                                  "nodeType": "YulTypedName",
                                                  "src": "4763:2:96",
                                                  "type": ""
                                                }
                                              ]
                                            },
                                            {
                                              "body": {
                                                "nodeType": "YulBlock",
                                                "src": "4881:209:96",
                                                "statements": [
                                                  {
                                                    "body": {
                                                      "nodeType": "YulBlock",
                                                      "src": "4988:76:96",
                                                      "statements": [
                                                        {
                                                          "expression": {
                                                            "arguments": [
                                                              {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "5029:1:96",
                                                                "type": "",
                                                                "value": "0"
                                                              },
                                                              {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "5032:1:96",
                                                                "type": "",
                                                                "value": "0"
                                                              }
                                                            ],
                                                            "functionName": {
                                                              "name": "revert",
                                                              "nodeType": "YulIdentifier",
                                                              "src": "5022:6:96"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5022:12:96"
                                                          },
                                                          "nodeType": "YulExpressionStatement",
                                                          "src": "5022:12:96"
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
                                                              "src": "4984:1:96"
                                                            }
                                                          ],
                                                          "functionName": {
                                                            "name": "iszero",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4977:6:96"
                                                          },
                                                          "nodeType": "YulFunctionCall",
                                                          "src": "4977:9:96"
                                                        }
                                                      ],
                                                      "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4970:6:96"
                                                      },
                                                      "nodeType": "YulFunctionCall",
                                                      "src": "4970:17:96"
                                                    },
                                                    "nodeType": "YulIf",
                                                    "src": "4967:97:96"
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
                                                            "src": "4869:2:96"
                                                          },
                                                          {
                                                            "name": "x",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4873:1:96"
                                                          }
                                                        ],
                                                        "functionName": {
                                                          "name": "div",
                                                          "nodeType": "YulIdentifier",
                                                          "src": "4865:3:96"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "4865:10:96"
                                                      },
                                                      {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4877:1:96"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "eq",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "4862:2:96"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4862:17:96"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "iszero",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4855:6:96"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4855:25:96"
                                              },
                                              "nodeType": "YulIf",
                                              "src": "4852:238:96"
                                            },
                                            {
                                              "nodeType": "YulVariableDeclaration",
                                              "src": "5172:28:96",
                                              "value": {
                                                "arguments": [
                                                  {
                                                    "name": "zx",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5191:2:96"
                                                  },
                                                  {
                                                    "name": "half",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5195:4:96"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "add",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5187:3:96"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5187:13:96"
                                              },
                                              "variables": [
                                                {
                                                  "name": "zxRound",
                                                  "nodeType": "YulTypedName",
                                                  "src": "5176:7:96",
                                                  "type": ""
                                                }
                                              ]
                                            },
                                            {
                                              "body": {
                                                "nodeType": "YulBlock",
                                                "src": "5304:68:96",
                                                "statements": [
                                                  {
                                                    "expression": {
                                                      "arguments": [
                                                        {
                                                          "kind": "number",
                                                          "nodeType": "YulLiteral",
                                                          "src": "5341:1:96",
                                                          "type": "",
                                                          "value": "0"
                                                        },
                                                        {
                                                          "kind": "number",
                                                          "nodeType": "YulLiteral",
                                                          "src": "5344:1:96",
                                                          "type": "",
                                                          "value": "0"
                                                        }
                                                      ],
                                                      "functionName": {
                                                        "name": "revert",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5334:6:96"
                                                      },
                                                      "nodeType": "YulFunctionCall",
                                                      "src": "5334:12:96"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "5334:12:96"
                                                  }
                                                ]
                                              },
                                              "condition": {
                                                "arguments": [
                                                  {
                                                    "name": "zxRound",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5291:7:96"
                                                  },
                                                  {
                                                    "name": "zx",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5300:2:96"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "lt",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5288:2:96"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5288:15:96"
                                              },
                                              "nodeType": "YulIf",
                                              "src": "5285:87:96"
                                            },
                                            {
                                              "nodeType": "YulAssignment",
                                              "src": "5457:25:96",
                                              "value": {
                                                "arguments": [
                                                  {
                                                    "name": "zxRound",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5466:7:96"
                                                  },
                                                  {
                                                    "name": "scalar",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5475:6:96"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "div",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5462:3:96"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5462:20:96"
                                              },
                                              "variableNames": [
                                                {
                                                  "name": "z",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5457:1:96"
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
                                              "src": "4685:1:96"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "4688:1:96",
                                              "type": "",
                                              "value": "2"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mod",
                                            "nodeType": "YulIdentifier",
                                            "src": "4681:3:96"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4681:9:96"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4678:826:96"
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "name": "n",
                                    "nodeType": "YulIdentifier",
                                    "src": "3824:1:96"
                                  },
                                  "nodeType": "YulForLoop",
                                  "post": {
                                    "nodeType": "YulBlock",
                                    "src": "3826:124:96",
                                    "statements": [
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "3918:14:96",
                                        "value": {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3927:1:96",
                                              "type": "",
                                              "value": "1"
                                            },
                                            {
                                              "name": "n",
                                              "nodeType": "YulIdentifier",
                                              "src": "3930:1:96"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "3923:3:96"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3923:9:96"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "n",
                                            "nodeType": "YulIdentifier",
                                            "src": "3918:1:96"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "pre": {
                                    "nodeType": "YulBlock",
                                    "src": "3699:124:96",
                                    "statements": [
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "3791:14:96",
                                        "value": {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3800:1:96",
                                              "type": "",
                                              "value": "1"
                                            },
                                            {
                                              "name": "n",
                                              "nodeType": "YulIdentifier",
                                              "src": "3803:1:96"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "3796:3:96"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3796:9:96"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "n",
                                            "nodeType": "YulIdentifier",
                                            "src": "3791:1:96"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "src": "3695:1827:96"
                                }
                              ]
                            },
                            "nodeType": "YulCase",
                            "src": "3261:2275:96",
                            "value": "default"
                          }
                        ],
                        "expression": {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "2973:1:96"
                        },
                        "nodeType": "YulSwitch",
                        "src": "2966:2570:96"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63396,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3019:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63396,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3298:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63396,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3791:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63396,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3803:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63396,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3824:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63396,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3918:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63396,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3930:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63396,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4685:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63398,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3105:6:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63398,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3418:6:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63398,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3670:6:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63398,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4612:6:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63398,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5475:6:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63394,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2973:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63394,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3552:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63394,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4122:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63394,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4261:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63394,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4264:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63394,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4594:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63394,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4776:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63394,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4873:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63394,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4984:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63401,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3100:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63401,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3210:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63401,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3413:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63401,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3547:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63401,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4773:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63401,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4877:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63401,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5457:1:96",
                      "valueSize": 1
                    }
                  ],
                  "id": 63403,
                  "nodeType": "InlineAssembly",
                  "src": "2943:2603:96"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "rpow",
            "nameLocation": "2783:4:96",
            "parameters": {
              "id": 63399,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63394,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "2805:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63405,
                  "src": "2797:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63393,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2797:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63396,
                  "mutability": "mutable",
                  "name": "n",
                  "nameLocation": "2824:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63405,
                  "src": "2816:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63395,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2816:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63398,
                  "mutability": "mutable",
                  "name": "scalar",
                  "nameLocation": "2843:6:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63405,
                  "src": "2835:14:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63397,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2835:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2787:68:96"
            },
            "returnParameters": {
              "id": 63402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63401,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "2887:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63405,
                  "src": "2879:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63400,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2879:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2878:11:96"
            },
            "scope": 63448,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63414,
            "nodeType": "FunctionDefinition",
            "src": "5746:3396:96",
            "nodes": [],
            "body": {
              "id": 63413,
              "nodeType": "Block",
              "src": "5805:3337:96",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "5867:3269:96",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5881:10:96",
                        "value": {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "5890:1:96"
                        },
                        "variables": [
                          {
                            "name": "y",
                            "nodeType": "YulTypedName",
                            "src": "5885:1:96",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5971:8:96",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5976:3:96",
                          "type": "",
                          "value": "181"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "5971:1:96"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6465:80:96",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6483:16:96",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6492:3:96",
                                    "type": "",
                                    "value": "128"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6497:1:96"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6488:3:96"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6488:11:96"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6483:1:96"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6516:15:96",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6525:2:96",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6529:1:96"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6521:3:96"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6521:10:96"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6516:1:96"
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
                                  "src": "6422:1:96"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6425:37:96",
                                  "type": "",
                                  "value": "0x10000000000000000000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6419:2:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6419:44:96"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6412:6:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6412:52:96"
                        },
                        "nodeType": "YulIf",
                        "src": "6409:136:96"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6598:79:96",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6616:15:96",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6625:2:96",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6629:1:96"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6621:3:96"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6621:10:96"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6616:1:96"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6648:15:96",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6657:2:96",
                                    "type": "",
                                    "value": "32"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6661:1:96"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6653:3:96"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6653:10:96"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6648:1:96"
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
                                  "src": "6571:1:96"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6574:21:96",
                                  "type": "",
                                  "value": "0x1000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6568:2:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6568:28:96"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6561:6:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6561:36:96"
                        },
                        "nodeType": "YulIf",
                        "src": "6558:119:96"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6722:79:96",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6740:15:96",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6749:2:96",
                                    "type": "",
                                    "value": "32"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6753:1:96"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6745:3:96"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6745:10:96"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6740:1:96"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6772:15:96",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6781:2:96",
                                    "type": "",
                                    "value": "16"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6785:1:96"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6777:3:96"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6777:10:96"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6772:1:96"
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
                                  "src": "6703:1:96"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6706:13:96",
                                  "type": "",
                                  "value": "0x10000000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6700:2:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6700:20:96"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6693:6:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6693:28:96"
                        },
                        "nodeType": "YulIf",
                        "src": "6690:111:96"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6842:78:96",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6860:15:96",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6869:2:96",
                                    "type": "",
                                    "value": "16"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6873:1:96"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6865:3:96"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6865:10:96"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6860:1:96"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6892:14:96",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6901:1:96",
                                    "type": "",
                                    "value": "8"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6904:1:96"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6897:3:96"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6897:9:96"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6892:1:96"
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
                                  "src": "6827:1:96"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6830:9:96",
                                  "type": "",
                                  "value": "0x1000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6824:2:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6824:16:96"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6817:6:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6817:24:96"
                        },
                        "nodeType": "YulIf",
                        "src": "6814:106:96"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8110:35:96",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8119:2:96",
                              "type": "",
                              "value": "18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8127:1:96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "8134:1:96"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "8137:5:96",
                                      "type": "",
                                      "value": "65536"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "8130:3:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8130:13:96"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "8123:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8123:21:96"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8115:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8115:30:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8110:1:96"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8306:30:96",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8315:1:96",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8322:1:96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8329:1:96"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8332:1:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8325:3:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8325:9:96"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8318:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8318:17:96"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8311:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8311:25:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8306:1:96"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8349:30:96",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8358:1:96",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8365:1:96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8372:1:96"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8375:1:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8368:3:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8368:9:96"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8361:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8361:17:96"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8354:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8354:25:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8349:1:96"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8392:30:96",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8401:1:96",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8408:1:96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8415:1:96"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8418:1:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8411:3:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8411:9:96"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8404:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8404:17:96"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8397:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8397:25:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8392:1:96"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8435:30:96",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8444:1:96",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8451:1:96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8458:1:96"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8461:1:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8454:3:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8454:9:96"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8447:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8447:17:96"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8440:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8440:25:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8435:1:96"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8478:30:96",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8487:1:96",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8494:1:96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8501:1:96"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8504:1:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8497:3:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8497:9:96"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8490:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8490:17:96"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8483:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8483:25:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8478:1:96"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8521:30:96",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8530:1:96",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8537:1:96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8544:1:96"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8547:1:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8540:3:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8540:9:96"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8533:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8533:17:96"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8526:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8526:25:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8521:1:96"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8564:30:96",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8573:1:96",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8580:1:96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8587:1:96"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8590:1:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8583:3:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8583:9:96"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8576:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8576:17:96"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8569:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8569:25:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8564:1:96"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9097:29:96",
                        "value": {
                          "arguments": [
                            {
                              "name": "z",
                              "nodeType": "YulIdentifier",
                              "src": "9106:1:96"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "9116:1:96"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "9119:1:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "9112:3:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "9112:9:96"
                                },
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "9123:1:96"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "9109:2:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9109:16:96"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "9102:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9102:24:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "9097:1:96"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63407,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5890:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63407,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8329:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63407,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8372:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63407,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8415:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63407,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8458:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63407,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8501:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63407,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8544:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63407,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8587:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63407,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9116:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5971:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6516:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6529:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6648:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6661:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6772:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6785:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6892:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6904:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8110:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8127:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8306:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8322:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8332:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8349:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8365:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8375:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8392:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8408:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8418:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8435:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8451:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8461:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8478:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8494:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8504:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8521:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8537:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8547:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8564:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8580:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8590:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9097:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9106:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9119:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63410,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9123:1:96",
                      "valueSize": 1
                    }
                  ],
                  "id": 63412,
                  "nodeType": "InlineAssembly",
                  "src": "5858:3278:96"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sqrt",
            "nameLocation": "5755:4:96",
            "parameters": {
              "id": 63408,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63407,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "5768:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63414,
                  "src": "5760:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63406,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5760:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5759:11:96"
            },
            "returnParameters": {
              "id": 63411,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63410,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "5802:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63414,
                  "src": "5794:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63409,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5794:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5793:11:96"
            },
            "scope": 63448,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63425,
            "nodeType": "FunctionDefinition",
            "src": "9148:282:96",
            "nodes": [],
            "body": {
              "id": 63424,
              "nodeType": "Block",
              "src": "9223:207:96",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9285:139:96",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9400:14:96",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "9409:1:96"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "9412:1:96"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "9405:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9405:9:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "9400:1:96"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63416,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9409:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63418,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9412:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63421,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9400:1:96",
                      "valueSize": 1
                    }
                  ],
                  "id": 63423,
                  "nodeType": "InlineAssembly",
                  "src": "9276:148:96"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsafeMod",
            "nameLocation": "9157:9:96",
            "parameters": {
              "id": 63419,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63416,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9175:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63425,
                  "src": "9167:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63415,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9167:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63418,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9186:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63425,
                  "src": "9178:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63417,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9178:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9166:22:96"
            },
            "returnParameters": {
              "id": 63422,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63421,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "9220:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63425,
                  "src": "9212:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63420,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9212:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9211:11:96"
            },
            "scope": 63448,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63436,
            "nodeType": "FunctionDefinition",
            "src": "9436:285:96",
            "nodes": [],
            "body": {
              "id": 63435,
              "nodeType": "Block",
              "src": "9511:210:96",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9573:142:96",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9691:14:96",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "9700:1:96"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "9703:1:96"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "9696:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9696:9:96"
                        },
                        "variableNames": [
                          {
                            "name": "r",
                            "nodeType": "YulIdentifier",
                            "src": "9691:1:96"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63432,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9691:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63427,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9700:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63429,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9703:1:96",
                      "valueSize": 1
                    }
                  ],
                  "id": 63434,
                  "nodeType": "InlineAssembly",
                  "src": "9564:151:96"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsafeDiv",
            "nameLocation": "9445:9:96",
            "parameters": {
              "id": 63430,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63427,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9463:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63436,
                  "src": "9455:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63426,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9455:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63429,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9474:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63436,
                  "src": "9466:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63428,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9466:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9454:22:96"
            },
            "returnParameters": {
              "id": 63433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63432,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "9508:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63436,
                  "src": "9500:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63431,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9500:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9499:11:96"
            },
            "scope": 63448,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63447,
            "nodeType": "FunctionDefinition",
            "src": "9727:324:96",
            "nodes": [],
            "body": {
              "id": 63446,
              "nodeType": "Block",
              "src": "9804:247:96",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9866:179:96",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9998:37:96",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "10014:1:96"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "10017:1:96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mod",
                                    "nodeType": "YulIdentifier",
                                    "src": "10010:3:96"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10010:9:96"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10021:1:96",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "10007:2:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10007:16:96"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "10029:1:96"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "10032:1:96"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "10025:3:96"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10025:9:96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10003:3:96"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10003:32:96"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "9998:1:96"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63438,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10014:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63438,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10029:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63440,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10017:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63440,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10032:1:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63443,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9998:1:96",
                      "valueSize": 1
                    }
                  ],
                  "id": 63445,
                  "nodeType": "InlineAssembly",
                  "src": "9857:188:96"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsafeDivUp",
            "nameLocation": "9736:11:96",
            "parameters": {
              "id": 63441,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63438,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9756:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63447,
                  "src": "9748:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63437,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9748:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63440,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9767:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63447,
                  "src": "9759:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63439,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9759:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9747:22:96"
            },
            "returnParameters": {
              "id": 63444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63443,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "9801:1:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 63447,
                  "src": "9793:9:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63442,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9793:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9792:11:96"
            },
            "scope": 63448,
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
          "id": 63292,
          "nodeType": "StructuredDocumentation",
          "src": "68:273:96",
          "text": "@notice Arithmetic library with operations for fixed-point numbers.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @author Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          63448
        ],
        "name": "FixedPointMathLib",
        "nameLocation": "349:17:96",
        "scope": 63449,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 96
}