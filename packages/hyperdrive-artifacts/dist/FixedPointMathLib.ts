export const FixedPointMathLib = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208eec7a5d027bdf0a00c558b81b761bd5f47503bff815eef6d121e7d1b4d174da64736f6c63430008130033",
    "sourceMap": "341:9712:102:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;341:9712:102;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208eec7a5d027bdf0a00c558b81b761bd5f47503bff815eef6d121e7d1b4d174da64736f6c63430008130033",
    "sourceMap": "341:9712:102:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Arithmetic library with operations for fixed-point numbers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":\"FixedPointMathLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]}},\"version\":1}",
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
    "id": 64155,
    "exportedSymbols": {
      "FixedPointMathLib": [
        64154
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:10012:102",
    "nodes": [
      {
        "id": 63997,
        "nodeType": "PragmaDirective",
        "src": "42:24:102",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 64154,
        "nodeType": "ContractDefinition",
        "src": "341:9712:102",
        "nodes": [
          {
            "id": 64005,
            "nodeType": "VariableDeclaration",
            "src": "566:50:102",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_UINT256",
            "nameLocation": "592:11:102",
            "scope": 64154,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 63999,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "566:7:102",
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
              "id": 64004,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "commonType": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                },
                "id": 64002,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "hexValue": "32",
                  "id": 64000,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "606:1:102",
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
                  "id": 64001,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "609:3:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_256_by_1",
                    "typeString": "int_const 256"
                  },
                  "value": "256"
                },
                "src": "606:6:102",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "-",
              "rightExpression": {
                "hexValue": "31",
                "id": 64003,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "615:1:102",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "src": "606:10:102",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 64008,
            "nodeType": "VariableDeclaration",
            "src": "623:36:102",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "WAD",
            "nameLocation": "649:3:102",
            "scope": 64154,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 64006,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "623:7:102",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31653138",
              "id": 64007,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "655:4:102",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "value": "1e18"
            },
            "visibility": "internal"
          },
          {
            "id": 64024,
            "nodeType": "FunctionDefinition",
            "src": "704:164:102",
            "nodes": [],
            "body": {
              "id": 64023,
              "nodeType": "Block",
              "src": "778:90:102",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 64018,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64010,
                        "src": "806:1:102",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 64019,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64012,
                        "src": "809:1:102",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 64020,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64008,
                        "src": "812:3:102",
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
                      "id": 64017,
                      "name": "mulDivDown",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 64085,
                      "src": "795:10:102",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 64021,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "795:21:102",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 64016,
                  "id": 64022,
                  "nodeType": "Return",
                  "src": "788:28:102"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulWadDown",
            "nameLocation": "713:10:102",
            "parameters": {
              "id": 64013,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64010,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "732:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64024,
                  "src": "724:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64009,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "724:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64012,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "743:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64024,
                  "src": "735:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64011,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "735:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "723:22:102"
            },
            "returnParameters": {
              "id": 64016,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64015,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 64024,
                  "src": "769:7:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64014,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "768:9:102"
            },
            "scope": 64154,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64040,
            "nodeType": "FunctionDefinition",
            "src": "874:158:102",
            "nodes": [],
            "body": {
              "id": 64039,
              "nodeType": "Block",
              "src": "946:86:102",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 64034,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64026,
                        "src": "972:1:102",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 64035,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64028,
                        "src": "975:1:102",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 64036,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64008,
                        "src": "978:3:102",
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
                      "id": 64033,
                      "name": "mulDivUp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 64098,
                      "src": "963:8:102",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 64037,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "963:19:102",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 64032,
                  "id": 64038,
                  "nodeType": "Return",
                  "src": "956:26:102"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulWadUp",
            "nameLocation": "883:8:102",
            "parameters": {
              "id": 64029,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64026,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "900:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64040,
                  "src": "892:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64025,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "892:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64028,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "911:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64040,
                  "src": "903:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64027,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "903:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "891:22:102"
            },
            "returnParameters": {
              "id": 64032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64031,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 64040,
                  "src": "937:7:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64030,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "937:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "936:9:102"
            },
            "scope": 64154,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64056,
            "nodeType": "FunctionDefinition",
            "src": "1038:164:102",
            "nodes": [],
            "body": {
              "id": 64055,
              "nodeType": "Block",
              "src": "1112:90:102",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 64050,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64042,
                        "src": "1140:1:102",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 64051,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64008,
                        "src": "1143:3:102",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 64052,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64044,
                        "src": "1148:1:102",
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
                      "id": 64049,
                      "name": "mulDivDown",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 64085,
                      "src": "1129:10:102",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 64053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1129:21:102",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 64048,
                  "id": 64054,
                  "nodeType": "Return",
                  "src": "1122:28:102"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divWadDown",
            "nameLocation": "1047:10:102",
            "parameters": {
              "id": 64045,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64042,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1066:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64056,
                  "src": "1058:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64041,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1058:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64044,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1077:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64056,
                  "src": "1069:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64043,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1069:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1057:22:102"
            },
            "returnParameters": {
              "id": 64048,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64047,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 64056,
                  "src": "1103:7:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64046,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1103:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1102:9:102"
            },
            "scope": 64154,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64072,
            "nodeType": "FunctionDefinition",
            "src": "1208:158:102",
            "nodes": [],
            "body": {
              "id": 64071,
              "nodeType": "Block",
              "src": "1280:86:102",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 64066,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64058,
                        "src": "1306:1:102",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 64067,
                        "name": "WAD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64008,
                        "src": "1309:3:102",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 64068,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64060,
                        "src": "1314:1:102",
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
                      "id": 64065,
                      "name": "mulDivUp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 64098,
                      "src": "1297:8:102",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 64069,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1297:19:102",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 64064,
                  "id": 64070,
                  "nodeType": "Return",
                  "src": "1290:26:102"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divWadUp",
            "nameLocation": "1217:8:102",
            "parameters": {
              "id": 64061,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64058,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1234:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64072,
                  "src": "1226:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64057,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1226:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64060,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1245:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64072,
                  "src": "1237:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64059,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1237:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1225:22:102"
            },
            "returnParameters": {
              "id": 64064,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64063,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 64072,
                  "src": "1271:7:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64062,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1271:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1270:9:102"
            },
            "scope": 64154,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64085,
            "nodeType": "FunctionDefinition",
            "src": "1564:526:102",
            "nodes": [],
            "body": {
              "id": 64084,
              "nodeType": "Block",
              "src": "1691:399:102",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "1753:331:102",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1936:44:102",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1961:1:102",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1964:1:102",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1954:6:102"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1954:12:102"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1954:12:102"
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
                                  "src": "1878:11:102"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "1902:1:102"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "1908:1:102"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1915:11:102"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1928:1:102"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "1911:3:102"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "1911:19:102"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "1905:2:102"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1905:26:102"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "1898:3:102"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1898:34:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "1891:6:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1891:42:102"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "1874:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1874:60:102"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1867:6:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1867:68:102"
                        },
                        "nodeType": "YulIf",
                        "src": "1864:116:102"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2042:32:102",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "2055:1:102"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "2058:1:102"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "2051:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2051:9:102"
                            },
                            {
                              "name": "denominator",
                              "nodeType": "YulIdentifier",
                              "src": "2062:11:102"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "2047:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2047:27:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "2042:1:102"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 64005,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1915:11:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64078,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1878:11:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64078,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2062:11:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64074,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1908:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64074,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2055:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64076,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1902:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64076,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1928:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64076,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2058:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64081,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2042:1:102",
                      "valueSize": 1
                    }
                  ],
                  "id": 64083,
                  "nodeType": "InlineAssembly",
                  "src": "1744:340:102"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivDown",
            "nameLocation": "1573:10:102",
            "parameters": {
              "id": 64079,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64074,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1601:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64085,
                  "src": "1593:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64073,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1593:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64076,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1620:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64085,
                  "src": "1612:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64075,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1612:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64078,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "1639:11:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64085,
                  "src": "1631:19:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64077,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1631:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1583:73:102"
            },
            "returnParameters": {
              "id": 64082,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64081,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "1688:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64085,
                  "src": "1680:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64080,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1680:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1679:11:102"
            },
            "scope": 64154,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64098,
            "nodeType": "FunctionDefinition",
            "src": "2096:672:102",
            "nodes": [],
            "body": {
              "id": 64097,
              "nodeType": "Block",
              "src": "2221:547:102",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "2283:479:102",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2466:44:102",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2491:1:102",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2494:1:102",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2484:6:102"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2484:12:102"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2484:12:102"
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
                                  "src": "2408:11:102"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "2432:1:102"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "2438:1:102"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2445:11:102"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2458:1:102"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "2441:3:102"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "2441:19:102"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "2435:2:102"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2435:26:102"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "2428:3:102"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2428:34:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "2421:6:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2421:42:102"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "2404:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2404:60:102"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2397:6:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2397:68:102"
                        },
                        "nodeType": "YulIf",
                        "src": "2394:116:102"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2679:73:102",
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
                                          "src": "2699:1:102"
                                        },
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "2702:1:102"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "2695:3:102"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2695:9:102"
                                    },
                                    {
                                      "name": "denominator",
                                      "nodeType": "YulIdentifier",
                                      "src": "2706:11:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mod",
                                    "nodeType": "YulIdentifier",
                                    "src": "2691:3:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2691:27:102"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2720:1:102",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "2688:2:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2688:34:102"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "2732:1:102"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "2735:1:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nodeType": "YulIdentifier",
                                    "src": "2728:3:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2728:9:102"
                                },
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "2739:11:102"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "2724:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2724:27:102"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2684:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2684:68:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "2679:1:102"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 64005,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2445:11:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64091,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2408:11:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64091,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2706:11:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64091,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2739:11:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64087,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2438:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64087,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2699:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64087,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2732:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64089,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2432:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64089,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2458:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64089,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2702:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64089,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2735:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64094,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2679:1:102",
                      "valueSize": 1
                    }
                  ],
                  "id": 64096,
                  "nodeType": "InlineAssembly",
                  "src": "2274:488:102"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivUp",
            "nameLocation": "2105:8:102",
            "parameters": {
              "id": 64092,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64087,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "2131:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64098,
                  "src": "2123:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64086,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2123:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64089,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "2150:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64098,
                  "src": "2142:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64088,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2142:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64091,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "2169:11:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64098,
                  "src": "2161:19:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64090,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2161:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2113:73:102"
            },
            "returnParameters": {
              "id": 64095,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64094,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "2218:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64098,
                  "src": "2210:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64093,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2210:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2209:11:102"
            },
            "scope": 64154,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64111,
            "nodeType": "FunctionDefinition",
            "src": "2774:2778:102",
            "nodes": [],
            "body": {
              "id": 64110,
              "nodeType": "Block",
              "src": "2890:2662:102",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "2952:2594:102",
                    "statements": [
                      {
                        "cases": [
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2994:254:102",
                              "statements": [
                                {
                                  "cases": [
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3044:85:102",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3100:11:102",
                                            "value": {
                                              "name": "scalar",
                                              "nodeType": "YulIdentifier",
                                              "src": "3105:6:102"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3100:1:102"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3037:92:102",
                                      "value": {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3042:1:102",
                                        "type": "",
                                        "value": "0"
                                      }
                                    },
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3154:80:102",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3210:6:102",
                                            "value": {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3215:1:102",
                                              "type": "",
                                              "value": "0"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3210:1:102"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3146:88:102",
                                      "value": "default"
                                    }
                                  ],
                                  "expression": {
                                    "name": "n",
                                    "nodeType": "YulIdentifier",
                                    "src": "3019:1:102"
                                  },
                                  "nodeType": "YulSwitch",
                                  "src": "3012:222:102"
                                }
                              ]
                            },
                            "nodeType": "YulCase",
                            "src": "2987:261:102",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2992:1:102",
                              "type": "",
                              "value": "0"
                            }
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "3269:2267:102",
                              "statements": [
                                {
                                  "cases": [
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3327:115:102",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3413:11:102",
                                            "value": {
                                              "name": "scalar",
                                              "nodeType": "YulIdentifier",
                                              "src": "3418:6:102"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3413:1:102"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3320:122:102",
                                      "value": {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3325:1:102",
                                        "type": "",
                                        "value": "0"
                                      }
                                    },
                                    {
                                      "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3467:104:102",
                                        "statements": [
                                          {
                                            "nodeType": "YulAssignment",
                                            "src": "3547:6:102",
                                            "value": {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "3552:1:102"
                                            },
                                            "variableNames": [
                                              {
                                                "name": "z",
                                                "nodeType": "YulIdentifier",
                                                "src": "3547:1:102"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      "nodeType": "YulCase",
                                      "src": "3459:112:102",
                                      "value": "default"
                                    }
                                  ],
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "n",
                                        "nodeType": "YulIdentifier",
                                        "src": "3298:1:102"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3301:1:102",
                                        "type": "",
                                        "value": "2"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mod",
                                      "nodeType": "YulIdentifier",
                                      "src": "3294:3:102"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3294:9:102"
                                  },
                                  "nodeType": "YulSwitch",
                                  "src": "3287:284:102"
                                },
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "3651:26:102",
                                  "value": {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3667:1:102",
                                        "type": "",
                                        "value": "1"
                                      },
                                      {
                                        "name": "scalar",
                                        "nodeType": "YulIdentifier",
                                        "src": "3670:6:102"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shr",
                                      "nodeType": "YulIdentifier",
                                      "src": "3663:3:102"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3663:14:102"
                                  },
                                  "variables": [
                                    {
                                      "name": "half",
                                      "nodeType": "YulTypedName",
                                      "src": "3655:4:102",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "body": {
                                    "nodeType": "YulBlock",
                                    "src": "3951:1571:102",
                                    "statements": [
                                      {
                                        "body": {
                                          "nodeType": "YulBlock",
                                          "src": "4125:60:102",
                                          "statements": [
                                            {
                                              "expression": {
                                                "arguments": [
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4158:1:102",
                                                    "type": "",
                                                    "value": "0"
                                                  },
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4161:1:102",
                                                    "type": "",
                                                    "value": "0"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "revert",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4151:6:102"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4151:12:102"
                                              },
                                              "nodeType": "YulExpressionStatement",
                                              "src": "4151:12:102"
                                            }
                                          ]
                                        },
                                        "condition": {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "4117:3:102",
                                              "type": "",
                                              "value": "128"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "4122:1:102"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "4113:3:102"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4113:11:102"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4110:75:102"
                                      },
                                      {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "4247:19:102",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "4261:1:102"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "4264:1:102"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mul",
                                            "nodeType": "YulIdentifier",
                                            "src": "4257:3:102"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4257:9:102"
                                        },
                                        "variables": [
                                          {
                                            "name": "xx",
                                            "nodeType": "YulTypedName",
                                            "src": "4251:2:102",
                                            "type": ""
                                          }
                                        ]
                                      },
                                      {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "4340:28:102",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "xx",
                                              "nodeType": "YulIdentifier",
                                              "src": "4359:2:102"
                                            },
                                            {
                                              "name": "half",
                                              "nodeType": "YulIdentifier",
                                              "src": "4363:4:102"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "4355:3:102"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4355:13:102"
                                        },
                                        "variables": [
                                          {
                                            "name": "xxRound",
                                            "nodeType": "YulTypedName",
                                            "src": "4344:7:102",
                                            "type": ""
                                          }
                                        ]
                                      },
                                      {
                                        "body": {
                                          "nodeType": "YulBlock",
                                          "src": "4464:60:102",
                                          "statements": [
                                            {
                                              "expression": {
                                                "arguments": [
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4497:1:102",
                                                    "type": "",
                                                    "value": "0"
                                                  },
                                                  {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4500:1:102",
                                                    "type": "",
                                                    "value": "0"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "revert",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4490:6:102"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4490:12:102"
                                              },
                                              "nodeType": "YulExpressionStatement",
                                              "src": "4490:12:102"
                                            }
                                          ]
                                        },
                                        "condition": {
                                          "arguments": [
                                            {
                                              "name": "xxRound",
                                              "nodeType": "YulIdentifier",
                                              "src": "4451:7:102"
                                            },
                                            {
                                              "name": "xx",
                                              "nodeType": "YulIdentifier",
                                              "src": "4460:2:102"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "lt",
                                            "nodeType": "YulIdentifier",
                                            "src": "4448:2:102"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4448:15:102"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4445:79:102"
                                      },
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "4594:25:102",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "xxRound",
                                              "nodeType": "YulIdentifier",
                                              "src": "4603:7:102"
                                            },
                                            {
                                              "name": "scalar",
                                              "nodeType": "YulIdentifier",
                                              "src": "4612:6:102"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "div",
                                            "nodeType": "YulIdentifier",
                                            "src": "4599:3:102"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4599:20:102"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "x",
                                            "nodeType": "YulIdentifier",
                                            "src": "4594:1:102"
                                          }
                                        ]
                                      },
                                      {
                                        "body": {
                                          "nodeType": "YulBlock",
                                          "src": "4691:813:102",
                                          "statements": [
                                            {
                                              "nodeType": "YulVariableDeclaration",
                                              "src": "4759:19:102",
                                              "value": {
                                                "arguments": [
                                                  {
                                                    "name": "z",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4773:1:102"
                                                  },
                                                  {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4776:1:102"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "mul",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4769:3:102"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4769:9:102"
                                              },
                                              "variables": [
                                                {
                                                  "name": "zx",
                                                  "nodeType": "YulTypedName",
                                                  "src": "4763:2:102",
                                                  "type": ""
                                                }
                                              ]
                                            },
                                            {
                                              "body": {
                                                "nodeType": "YulBlock",
                                                "src": "4881:209:102",
                                                "statements": [
                                                  {
                                                    "body": {
                                                      "nodeType": "YulBlock",
                                                      "src": "4988:76:102",
                                                      "statements": [
                                                        {
                                                          "expression": {
                                                            "arguments": [
                                                              {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "5029:1:102",
                                                                "type": "",
                                                                "value": "0"
                                                              },
                                                              {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "5032:1:102",
                                                                "type": "",
                                                                "value": "0"
                                                              }
                                                            ],
                                                            "functionName": {
                                                              "name": "revert",
                                                              "nodeType": "YulIdentifier",
                                                              "src": "5022:6:102"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5022:12:102"
                                                          },
                                                          "nodeType": "YulExpressionStatement",
                                                          "src": "5022:12:102"
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
                                                              "src": "4984:1:102"
                                                            }
                                                          ],
                                                          "functionName": {
                                                            "name": "iszero",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4977:6:102"
                                                          },
                                                          "nodeType": "YulFunctionCall",
                                                          "src": "4977:9:102"
                                                        }
                                                      ],
                                                      "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4970:6:102"
                                                      },
                                                      "nodeType": "YulFunctionCall",
                                                      "src": "4970:17:102"
                                                    },
                                                    "nodeType": "YulIf",
                                                    "src": "4967:97:102"
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
                                                            "src": "4869:2:102"
                                                          },
                                                          {
                                                            "name": "x",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4873:1:102"
                                                          }
                                                        ],
                                                        "functionName": {
                                                          "name": "div",
                                                          "nodeType": "YulIdentifier",
                                                          "src": "4865:3:102"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "4865:10:102"
                                                      },
                                                      {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4877:1:102"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "eq",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "4862:2:102"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4862:17:102"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "iszero",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4855:6:102"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4855:25:102"
                                              },
                                              "nodeType": "YulIf",
                                              "src": "4852:238:102"
                                            },
                                            {
                                              "nodeType": "YulVariableDeclaration",
                                              "src": "5172:28:102",
                                              "value": {
                                                "arguments": [
                                                  {
                                                    "name": "zx",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5191:2:102"
                                                  },
                                                  {
                                                    "name": "half",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5195:4:102"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "add",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5187:3:102"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5187:13:102"
                                              },
                                              "variables": [
                                                {
                                                  "name": "zxRound",
                                                  "nodeType": "YulTypedName",
                                                  "src": "5176:7:102",
                                                  "type": ""
                                                }
                                              ]
                                            },
                                            {
                                              "body": {
                                                "nodeType": "YulBlock",
                                                "src": "5304:68:102",
                                                "statements": [
                                                  {
                                                    "expression": {
                                                      "arguments": [
                                                        {
                                                          "kind": "number",
                                                          "nodeType": "YulLiteral",
                                                          "src": "5341:1:102",
                                                          "type": "",
                                                          "value": "0"
                                                        },
                                                        {
                                                          "kind": "number",
                                                          "nodeType": "YulLiteral",
                                                          "src": "5344:1:102",
                                                          "type": "",
                                                          "value": "0"
                                                        }
                                                      ],
                                                      "functionName": {
                                                        "name": "revert",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5334:6:102"
                                                      },
                                                      "nodeType": "YulFunctionCall",
                                                      "src": "5334:12:102"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "5334:12:102"
                                                  }
                                                ]
                                              },
                                              "condition": {
                                                "arguments": [
                                                  {
                                                    "name": "zxRound",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5291:7:102"
                                                  },
                                                  {
                                                    "name": "zx",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5300:2:102"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "lt",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5288:2:102"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5288:15:102"
                                              },
                                              "nodeType": "YulIf",
                                              "src": "5285:87:102"
                                            },
                                            {
                                              "nodeType": "YulAssignment",
                                              "src": "5457:25:102",
                                              "value": {
                                                "arguments": [
                                                  {
                                                    "name": "zxRound",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5466:7:102"
                                                  },
                                                  {
                                                    "name": "scalar",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5475:6:102"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "div",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5462:3:102"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5462:20:102"
                                              },
                                              "variableNames": [
                                                {
                                                  "name": "z",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5457:1:102"
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
                                              "src": "4685:1:102"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "4688:1:102",
                                              "type": "",
                                              "value": "2"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mod",
                                            "nodeType": "YulIdentifier",
                                            "src": "4681:3:102"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4681:9:102"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4678:826:102"
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "name": "n",
                                    "nodeType": "YulIdentifier",
                                    "src": "3824:1:102"
                                  },
                                  "nodeType": "YulForLoop",
                                  "post": {
                                    "nodeType": "YulBlock",
                                    "src": "3826:124:102",
                                    "statements": [
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "3918:14:102",
                                        "value": {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3927:1:102",
                                              "type": "",
                                              "value": "1"
                                            },
                                            {
                                              "name": "n",
                                              "nodeType": "YulIdentifier",
                                              "src": "3930:1:102"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "3923:3:102"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3923:9:102"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "n",
                                            "nodeType": "YulIdentifier",
                                            "src": "3918:1:102"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "pre": {
                                    "nodeType": "YulBlock",
                                    "src": "3699:124:102",
                                    "statements": [
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "3791:14:102",
                                        "value": {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3800:1:102",
                                              "type": "",
                                              "value": "1"
                                            },
                                            {
                                              "name": "n",
                                              "nodeType": "YulIdentifier",
                                              "src": "3803:1:102"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "3796:3:102"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3796:9:102"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "n",
                                            "nodeType": "YulIdentifier",
                                            "src": "3791:1:102"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "src": "3695:1827:102"
                                }
                              ]
                            },
                            "nodeType": "YulCase",
                            "src": "3261:2275:102",
                            "value": "default"
                          }
                        ],
                        "expression": {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "2973:1:102"
                        },
                        "nodeType": "YulSwitch",
                        "src": "2966:2570:102"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 64102,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3019:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64102,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3298:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64102,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3791:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64102,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3803:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64102,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3824:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64102,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3918:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64102,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3930:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64102,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4685:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64104,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3105:6:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64104,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3418:6:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64104,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3670:6:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64104,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4612:6:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64104,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5475:6:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64100,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2973:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64100,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3552:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64100,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4122:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64100,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4261:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64100,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4264:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64100,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4594:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64100,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4776:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64100,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4873:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64100,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4984:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64107,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3100:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64107,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3210:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64107,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3413:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64107,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3547:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64107,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4773:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64107,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4877:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64107,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5457:1:102",
                      "valueSize": 1
                    }
                  ],
                  "id": 64109,
                  "nodeType": "InlineAssembly",
                  "src": "2943:2603:102"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "rpow",
            "nameLocation": "2783:4:102",
            "parameters": {
              "id": 64105,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64100,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "2805:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64111,
                  "src": "2797:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64099,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2797:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64102,
                  "mutability": "mutable",
                  "name": "n",
                  "nameLocation": "2824:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64111,
                  "src": "2816:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64101,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2816:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64104,
                  "mutability": "mutable",
                  "name": "scalar",
                  "nameLocation": "2843:6:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64111,
                  "src": "2835:14:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64103,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2835:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2787:68:102"
            },
            "returnParameters": {
              "id": 64108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64107,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "2887:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64111,
                  "src": "2879:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64106,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2879:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2878:11:102"
            },
            "scope": 64154,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64120,
            "nodeType": "FunctionDefinition",
            "src": "5746:3396:102",
            "nodes": [],
            "body": {
              "id": 64119,
              "nodeType": "Block",
              "src": "5805:3337:102",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "5867:3269:102",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5881:10:102",
                        "value": {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "5890:1:102"
                        },
                        "variables": [
                          {
                            "name": "y",
                            "nodeType": "YulTypedName",
                            "src": "5885:1:102",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5971:8:102",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5976:3:102",
                          "type": "",
                          "value": "181"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "5971:1:102"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6465:80:102",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6483:16:102",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6492:3:102",
                                    "type": "",
                                    "value": "128"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6497:1:102"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6488:3:102"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6488:11:102"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6483:1:102"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6516:15:102",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6525:2:102",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6529:1:102"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6521:3:102"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6521:10:102"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6516:1:102"
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
                                  "src": "6422:1:102"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6425:37:102",
                                  "type": "",
                                  "value": "0x10000000000000000000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6419:2:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6419:44:102"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6412:6:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6412:52:102"
                        },
                        "nodeType": "YulIf",
                        "src": "6409:136:102"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6598:79:102",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6616:15:102",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6625:2:102",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6629:1:102"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6621:3:102"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6621:10:102"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6616:1:102"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6648:15:102",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6657:2:102",
                                    "type": "",
                                    "value": "32"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6661:1:102"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6653:3:102"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6653:10:102"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6648:1:102"
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
                                  "src": "6571:1:102"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6574:21:102",
                                  "type": "",
                                  "value": "0x1000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6568:2:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6568:28:102"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6561:6:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6561:36:102"
                        },
                        "nodeType": "YulIf",
                        "src": "6558:119:102"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6722:79:102",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6740:15:102",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6749:2:102",
                                    "type": "",
                                    "value": "32"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6753:1:102"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6745:3:102"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6745:10:102"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6740:1:102"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6772:15:102",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6781:2:102",
                                    "type": "",
                                    "value": "16"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6785:1:102"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6777:3:102"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6777:10:102"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6772:1:102"
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
                                  "src": "6703:1:102"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6706:13:102",
                                  "type": "",
                                  "value": "0x10000000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6700:2:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6700:20:102"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6693:6:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6693:28:102"
                        },
                        "nodeType": "YulIf",
                        "src": "6690:111:102"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6842:78:102",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6860:15:102",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6869:2:102",
                                    "type": "",
                                    "value": "16"
                                  },
                                  {
                                    "name": "y",
                                    "nodeType": "YulIdentifier",
                                    "src": "6873:1:102"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "6865:3:102"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6865:10:102"
                              },
                              "variableNames": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6860:1:102"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6892:14:102",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6901:1:102",
                                    "type": "",
                                    "value": "8"
                                  },
                                  {
                                    "name": "z",
                                    "nodeType": "YulIdentifier",
                                    "src": "6904:1:102"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6897:3:102"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6897:9:102"
                              },
                              "variableNames": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "6892:1:102"
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
                                  "src": "6827:1:102"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6830:9:102",
                                  "type": "",
                                  "value": "0x1000000"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6824:2:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6824:16:102"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6817:6:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6817:24:102"
                        },
                        "nodeType": "YulIf",
                        "src": "6814:106:102"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8110:35:102",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8119:2:102",
                              "type": "",
                              "value": "18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8127:1:102"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "8134:1:102"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "8137:5:102",
                                      "type": "",
                                      "value": "65536"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "8130:3:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8130:13:102"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "8123:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8123:21:102"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8115:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8115:30:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8110:1:102"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8306:30:102",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8315:1:102",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8322:1:102"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8329:1:102"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8332:1:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8325:3:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8325:9:102"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8318:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8318:17:102"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8311:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8311:25:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8306:1:102"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8349:30:102",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8358:1:102",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8365:1:102"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8372:1:102"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8375:1:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8368:3:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8368:9:102"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8361:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8361:17:102"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8354:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8354:25:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8349:1:102"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8392:30:102",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8401:1:102",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8408:1:102"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8415:1:102"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8418:1:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8411:3:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8411:9:102"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8404:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8404:17:102"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8397:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8397:25:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8392:1:102"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8435:30:102",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8444:1:102",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8451:1:102"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8458:1:102"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8461:1:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8454:3:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8454:9:102"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8447:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8447:17:102"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8440:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8440:25:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8435:1:102"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8478:30:102",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8487:1:102",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8494:1:102"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8501:1:102"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8504:1:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8497:3:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8497:9:102"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8490:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8490:17:102"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8483:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8483:25:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8478:1:102"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8521:30:102",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8530:1:102",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8537:1:102"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8544:1:102"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8547:1:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8540:3:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8540:9:102"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8533:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8533:17:102"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8526:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8526:25:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8521:1:102"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8564:30:102",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8573:1:102",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "8580:1:102"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8587:1:102"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "8590:1:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8583:3:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8583:9:102"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8576:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8576:17:102"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "8569:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8569:25:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "8564:1:102"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9097:29:102",
                        "value": {
                          "arguments": [
                            {
                              "name": "z",
                              "nodeType": "YulIdentifier",
                              "src": "9106:1:102"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "9116:1:102"
                                    },
                                    {
                                      "name": "z",
                                      "nodeType": "YulIdentifier",
                                      "src": "9119:1:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "9112:3:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "9112:9:102"
                                },
                                {
                                  "name": "z",
                                  "nodeType": "YulIdentifier",
                                  "src": "9123:1:102"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "9109:2:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9109:16:102"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "9102:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9102:24:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "9097:1:102"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 64113,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5890:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64113,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8329:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64113,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8372:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64113,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8415:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64113,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8458:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64113,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8501:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64113,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8544:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64113,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8587:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64113,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9116:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5971:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6516:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6529:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6648:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6661:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6772:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6785:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6892:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6904:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8110:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8127:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8306:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8322:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8332:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8349:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8365:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8375:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8392:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8408:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8418:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8435:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8451:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8461:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8478:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8494:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8504:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8521:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8537:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8547:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8564:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8580:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8590:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9097:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9106:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9119:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64116,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9123:1:102",
                      "valueSize": 1
                    }
                  ],
                  "id": 64118,
                  "nodeType": "InlineAssembly",
                  "src": "5858:3278:102"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sqrt",
            "nameLocation": "5755:4:102",
            "parameters": {
              "id": 64114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64113,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "5768:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64120,
                  "src": "5760:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64112,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5760:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5759:11:102"
            },
            "returnParameters": {
              "id": 64117,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64116,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "5802:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64120,
                  "src": "5794:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64115,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5794:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5793:11:102"
            },
            "scope": 64154,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64131,
            "nodeType": "FunctionDefinition",
            "src": "9148:282:102",
            "nodes": [],
            "body": {
              "id": 64130,
              "nodeType": "Block",
              "src": "9223:207:102",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9285:139:102",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9400:14:102",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "9409:1:102"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "9412:1:102"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "9405:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9405:9:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "9400:1:102"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 64122,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9409:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64124,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9412:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64127,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9400:1:102",
                      "valueSize": 1
                    }
                  ],
                  "id": 64129,
                  "nodeType": "InlineAssembly",
                  "src": "9276:148:102"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsafeMod",
            "nameLocation": "9157:9:102",
            "parameters": {
              "id": 64125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64122,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9175:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64131,
                  "src": "9167:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64121,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9167:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64124,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9186:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64131,
                  "src": "9178:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64123,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9178:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9166:22:102"
            },
            "returnParameters": {
              "id": 64128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64127,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "9220:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64131,
                  "src": "9212:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64126,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9212:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9211:11:102"
            },
            "scope": 64154,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64142,
            "nodeType": "FunctionDefinition",
            "src": "9436:285:102",
            "nodes": [],
            "body": {
              "id": 64141,
              "nodeType": "Block",
              "src": "9511:210:102",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9573:142:102",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9691:14:102",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "9700:1:102"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "9703:1:102"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "9696:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9696:9:102"
                        },
                        "variableNames": [
                          {
                            "name": "r",
                            "nodeType": "YulIdentifier",
                            "src": "9691:1:102"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 64138,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9691:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64133,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9700:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64135,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9703:1:102",
                      "valueSize": 1
                    }
                  ],
                  "id": 64140,
                  "nodeType": "InlineAssembly",
                  "src": "9564:151:102"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsafeDiv",
            "nameLocation": "9445:9:102",
            "parameters": {
              "id": 64136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64133,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9463:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64142,
                  "src": "9455:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64132,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9455:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64135,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9474:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64142,
                  "src": "9466:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9466:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9454:22:102"
            },
            "returnParameters": {
              "id": 64139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64138,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "9508:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64142,
                  "src": "9500:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64137,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9500:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9499:11:102"
            },
            "scope": 64154,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64153,
            "nodeType": "FunctionDefinition",
            "src": "9727:324:102",
            "nodes": [],
            "body": {
              "id": 64152,
              "nodeType": "Block",
              "src": "9804:247:102",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9866:179:102",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9998:37:102",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "10014:1:102"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "10017:1:102"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mod",
                                    "nodeType": "YulIdentifier",
                                    "src": "10010:3:102"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10010:9:102"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10021:1:102",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "10007:2:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10007:16:102"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "10029:1:102"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "10032:1:102"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "10025:3:102"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10025:9:102"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10003:3:102"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10003:32:102"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "9998:1:102"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 64144,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10014:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64144,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10029:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64146,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10017:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64146,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10032:1:102",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64149,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9998:1:102",
                      "valueSize": 1
                    }
                  ],
                  "id": 64151,
                  "nodeType": "InlineAssembly",
                  "src": "9857:188:102"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unsafeDivUp",
            "nameLocation": "9736:11:102",
            "parameters": {
              "id": 64147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64144,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9756:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64153,
                  "src": "9748:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64143,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9748:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64146,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "9767:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64153,
                  "src": "9759:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64145,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9759:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9747:22:102"
            },
            "returnParameters": {
              "id": 64150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64149,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "9801:1:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 64153,
                  "src": "9793:9:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64148,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9793:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9792:11:102"
            },
            "scope": 64154,
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
          "id": 63998,
          "nodeType": "StructuredDocumentation",
          "src": "68:273:102",
          "text": "@notice Arithmetic library with operations for fixed-point numbers.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @author Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          64154
        ],
        "name": "FixedPointMathLib",
        "nameLocation": "349:17:102",
        "scope": 64155,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 102
} as const;
