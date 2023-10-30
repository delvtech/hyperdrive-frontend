export const ReentrancyGuard = 
{
  "abi": [],
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
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/ReentrancyGuard.sol)Modified from OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Gas optimized reentrancy protection for smart contracts.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/ReentrancyGuard.sol\":\"ReentrancyGuard\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
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
        "lib/solmate/src/utils/ReentrancyGuard.sol": "ReentrancyGuard"
      },
      "libraries": {}
    },
    "sources": {
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        "urls": [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/solmate/src/utils/ReentrancyGuard.sol",
    "id": 63475,
    "exportedSymbols": {
      "ReentrancyGuard": [
        63474
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:560:97",
    "nodes": [
      {
        "id": 63450,
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
        "id": 63474,
        "nodeType": "ContractDefinition",
        "src": "389:212:97",
        "nodes": [
          {
            "id": 63454,
            "nodeType": "VariableDeclaration",
            "src": "429:26:97",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "locked",
            "nameLocation": "445:6:97",
            "scope": 63474,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 63452,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "429:7:97",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31",
              "id": 63453,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "454:1:97",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "private"
          },
          {
            "id": 63473,
            "nodeType": "ModifierDefinition",
            "src": "462:137:97",
            "nodes": [],
            "body": {
              "id": 63472,
              "nodeType": "Block",
              "src": "494:105:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 63459,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 63457,
                          "name": "locked",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63454,
                          "src": "512:6:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 63458,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "522:1:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "512:11:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5245454e5452414e4359",
                        "id": 63460,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "525:12:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_180a23d5434c537ca84b1e47f534d18e25bd055e02a65ce20bae4afd9c835f59",
                          "typeString": "literal_string \"REENTRANCY\""
                        },
                        "value": "REENTRANCY"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_180a23d5434c537ca84b1e47f534d18e25bd055e02a65ce20bae4afd9c835f59",
                          "typeString": "literal_string \"REENTRANCY\""
                        }
                      ],
                      "id": 63456,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "504:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 63461,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "504:34:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63462,
                  "nodeType": "ExpressionStatement",
                  "src": "504:34:97"
                },
                {
                  "expression": {
                    "id": 63465,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 63463,
                      "name": "locked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63454,
                      "src": "549:6:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "32",
                      "id": 63464,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "558:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "549:10:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 63466,
                  "nodeType": "ExpressionStatement",
                  "src": "549:10:97"
                },
                {
                  "id": 63467,
                  "nodeType": "PlaceholderStatement",
                  "src": "570:1:97"
                },
                {
                  "expression": {
                    "id": 63470,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 63468,
                      "name": "locked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63454,
                      "src": "582:6:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "31",
                      "id": 63469,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "591:1:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "582:10:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 63471,
                  "nodeType": "ExpressionStatement",
                  "src": "582:10:97"
                }
              ]
            },
            "name": "nonReentrant",
            "nameLocation": "471:12:97",
            "parameters": {
              "id": 63455,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "483:2:97"
            },
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "ReentrancyGuard",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 63451,
          "nodeType": "StructuredDocumentation",
          "src": "68:321:97",
          "text": "@notice Gas optimized reentrancy protection for smart contracts.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/ReentrancyGuard.sol)\n @author Modified from OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          63474
        ],
        "name": "ReentrancyGuard",
        "nameLocation": "407:15:97",
        "scope": 63475,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 97
} as const;
