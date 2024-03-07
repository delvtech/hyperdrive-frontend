export const FixedPointMathLib = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207833532335256498efdbb7d8373135640993cd82a007b563f92be27d6ba4d9c364736f6c63430008140033",
        "sourceMap": "341:9712:126:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;341:9712:126;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207833532335256498efdbb7d8373135640993cd82a007b563f92be27d6ba4d9c364736f6c63430008140033",
        "sourceMap": "341:9712:126:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Arithmetic library with operations for fixed-point numbers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":\"FixedPointMathLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
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
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "aave-v3-core/=lib/aave-v3-core/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
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
        "id": 68604,
        "exportedSymbols": {
            "FixedPointMathLib": [
                68603
            ]
        },
        "nodeType": "SourceUnit",
        "src": "42:10012:126",
        "nodes": [
            {
                "id": 68446,
                "nodeType": "PragmaDirective",
                "src": "42:24:126",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.8",
                    ".0"
                ]
            },
            {
                "id": 68603,
                "nodeType": "ContractDefinition",
                "src": "341:9712:126",
                "nodes": [
                    {
                        "id": 68454,
                        "nodeType": "VariableDeclaration",
                        "src": "566:50:126",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_UINT256",
                        "nameLocation": "592:11:126",
                        "scope": 68603,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 68448,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "566:7:126",
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
                            "id": 68453,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "leftExpression": {
                                "commonType": {
                                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                                },
                                "id": 68451,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                    "hexValue": "32",
                                    "id": 68449,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "606:1:126",
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
                                    "id": 68450,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "609:3:126",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_rational_256_by_1",
                                        "typeString": "int_const 256"
                                    },
                                    "value": "256"
                                },
                                "src": "606:6:126",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                                }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                                "hexValue": "31",
                                "id": 68452,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "615:1:126",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                },
                                "value": "1"
                            },
                            "src": "606:10:126",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                                "typeString": "int_const 1157...(70 digits omitted)...9935"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 68457,
                        "nodeType": "VariableDeclaration",
                        "src": "623:36:126",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "WAD",
                        "nameLocation": "649:3:126",
                        "scope": 68603,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 68455,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "623:7:126",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "31653138",
                            "id": 68456,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "655:4:126",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 68473,
                        "nodeType": "FunctionDefinition",
                        "src": "704:164:126",
                        "nodes": [],
                        "body": {
                            "id": 68472,
                            "nodeType": "Block",
                            "src": "778:90:126",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 68467,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68459,
                                                "src": "806:1:126",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68468,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68461,
                                                "src": "809:1:126",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68469,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68457,
                                                "src": "812:3:126",
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
                                            "id": 68466,
                                            "name": "mulDivDown",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68534,
                                            "src": "795:10:126",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 68470,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "795:21:126",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 68465,
                                    "id": 68471,
                                    "nodeType": "Return",
                                    "src": "788:28:126"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulWadDown",
                        "nameLocation": "713:10:126",
                        "parameters": {
                            "id": 68462,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68459,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "732:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68473,
                                    "src": "724:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68458,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "724:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68461,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "743:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68473,
                                    "src": "735:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68460,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "735:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "723:22:126"
                        },
                        "returnParameters": {
                            "id": 68465,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68464,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68473,
                                    "src": "769:7:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68463,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "769:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "768:9:126"
                        },
                        "scope": 68603,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68489,
                        "nodeType": "FunctionDefinition",
                        "src": "874:158:126",
                        "nodes": [],
                        "body": {
                            "id": 68488,
                            "nodeType": "Block",
                            "src": "946:86:126",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 68483,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68475,
                                                "src": "972:1:126",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68484,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68477,
                                                "src": "975:1:126",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68485,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68457,
                                                "src": "978:3:126",
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
                                            "id": 68482,
                                            "name": "mulDivUp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68547,
                                            "src": "963:8:126",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 68486,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "963:19:126",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 68481,
                                    "id": 68487,
                                    "nodeType": "Return",
                                    "src": "956:26:126"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulWadUp",
                        "nameLocation": "883:8:126",
                        "parameters": {
                            "id": 68478,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68475,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "900:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68489,
                                    "src": "892:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68474,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "892:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68477,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "911:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68489,
                                    "src": "903:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68476,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "903:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "891:22:126"
                        },
                        "returnParameters": {
                            "id": 68481,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68480,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68489,
                                    "src": "937:7:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68479,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "937:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "936:9:126"
                        },
                        "scope": 68603,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68505,
                        "nodeType": "FunctionDefinition",
                        "src": "1038:164:126",
                        "nodes": [],
                        "body": {
                            "id": 68504,
                            "nodeType": "Block",
                            "src": "1112:90:126",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 68499,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68491,
                                                "src": "1140:1:126",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68500,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68457,
                                                "src": "1143:3:126",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68501,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68493,
                                                "src": "1148:1:126",
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
                                            "id": 68498,
                                            "name": "mulDivDown",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68534,
                                            "src": "1129:10:126",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 68502,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1129:21:126",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 68497,
                                    "id": 68503,
                                    "nodeType": "Return",
                                    "src": "1122:28:126"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divWadDown",
                        "nameLocation": "1047:10:126",
                        "parameters": {
                            "id": 68494,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68491,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1066:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68505,
                                    "src": "1058:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68490,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1058:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68493,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1077:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68505,
                                    "src": "1069:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68492,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1069:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1057:22:126"
                        },
                        "returnParameters": {
                            "id": 68497,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68496,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68505,
                                    "src": "1103:7:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68495,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1103:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1102:9:126"
                        },
                        "scope": 68603,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68521,
                        "nodeType": "FunctionDefinition",
                        "src": "1208:158:126",
                        "nodes": [],
                        "body": {
                            "id": 68520,
                            "nodeType": "Block",
                            "src": "1280:86:126",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 68515,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68507,
                                                "src": "1306:1:126",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68516,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68457,
                                                "src": "1309:3:126",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68517,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68509,
                                                "src": "1314:1:126",
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
                                            "id": 68514,
                                            "name": "mulDivUp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68547,
                                            "src": "1297:8:126",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 68518,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1297:19:126",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 68513,
                                    "id": 68519,
                                    "nodeType": "Return",
                                    "src": "1290:26:126"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divWadUp",
                        "nameLocation": "1217:8:126",
                        "parameters": {
                            "id": 68510,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68507,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1234:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68521,
                                    "src": "1226:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68506,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1226:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68509,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1245:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68521,
                                    "src": "1237:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68508,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1237:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1225:22:126"
                        },
                        "returnParameters": {
                            "id": 68513,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68512,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68521,
                                    "src": "1271:7:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68511,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1271:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1270:9:126"
                        },
                        "scope": 68603,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68534,
                        "nodeType": "FunctionDefinition",
                        "src": "1564:526:126",
                        "nodes": [],
                        "body": {
                            "id": 68533,
                            "nodeType": "Block",
                            "src": "1691:399:126",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "1753:331:126",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "1936:44:126",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "1961:1:126",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "1964:1:126",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1954:6:126"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "1954:12:126"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "1954:12:126"
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
                                                                    "src": "1878:11:126"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "1902:1:126"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "1908:1:126"
                                                                                        },
                                                                                        {
                                                                                            "arguments": [
                                                                                                {
                                                                                                    "name": "MAX_UINT256",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "1915:11:126"
                                                                                                },
                                                                                                {
                                                                                                    "name": "y",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "1928:1:126"
                                                                                                }
                                                                                            ],
                                                                                            "functionName": {
                                                                                                "name": "div",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "1911:3:126"
                                                                                            },
                                                                                            "nodeType": "YulFunctionCall",
                                                                                            "src": "1911:19:126"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "gt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "1905:2:126"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "1905:26:126"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "1898:3:126"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "1898:34:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "iszero",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "1891:6:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "1891:42:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1874:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1874:60:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1867:6:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1867:68:126"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "1864:116:126"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2042:32:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "x",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2055:1:126"
                                                                },
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2058:1:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2051:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2051:9:126"
                                                        },
                                                        {
                                                            "name": "denominator",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2062:11:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "div",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2047:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2047:27:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2042:1:126"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68454,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1915:11:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68527,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1878:11:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68527,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2062:11:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68523,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1908:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68523,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2055:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68525,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1902:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68525,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1928:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68525,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2058:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68530,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2042:1:126",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68532,
                                    "nodeType": "InlineAssembly",
                                    "src": "1744:340:126"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivDown",
                        "nameLocation": "1573:10:126",
                        "parameters": {
                            "id": 68528,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68523,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1601:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68534,
                                    "src": "1593:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68522,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1593:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68525,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1620:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68534,
                                    "src": "1612:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68524,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1612:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68527,
                                    "mutability": "mutable",
                                    "name": "denominator",
                                    "nameLocation": "1639:11:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68534,
                                    "src": "1631:19:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68526,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1631:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1583:73:126"
                        },
                        "returnParameters": {
                            "id": 68531,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68530,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "1688:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68534,
                                    "src": "1680:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68529,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1680:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1679:11:126"
                        },
                        "scope": 68603,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68547,
                        "nodeType": "FunctionDefinition",
                        "src": "2096:672:126",
                        "nodes": [],
                        "body": {
                            "id": 68546,
                            "nodeType": "Block",
                            "src": "2221:547:126",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "2283:479:126",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "2466:44:126",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "2491:1:126",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "2494:1:126",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2484:6:126"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "2484:12:126"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "2484:12:126"
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
                                                                    "src": "2408:11:126"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "2432:1:126"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "2438:1:126"
                                                                                        },
                                                                                        {
                                                                                            "arguments": [
                                                                                                {
                                                                                                    "name": "MAX_UINT256",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "2445:11:126"
                                                                                                },
                                                                                                {
                                                                                                    "name": "y",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "2458:1:126"
                                                                                                }
                                                                                            ],
                                                                                            "functionName": {
                                                                                                "name": "div",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "2441:3:126"
                                                                                            },
                                                                                            "nodeType": "YulFunctionCall",
                                                                                            "src": "2441:19:126"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "gt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "2435:2:126"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "2435:26:126"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "2428:3:126"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "2428:34:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "iszero",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2421:6:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2421:42:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2404:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2404:60:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2397:6:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2397:68:126"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "2394:116:126"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2679:73:126",
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
                                                                                    "src": "2699:1:126"
                                                                                },
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "2702:1:126"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "2695:3:126"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "2695:9:126"
                                                                        },
                                                                        {
                                                                            "name": "denominator",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2706:11:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mod",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2691:3:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2691:27:126"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "2720:1:126",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "gt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2688:2:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2688:34:126"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2732:1:126"
                                                                        },
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2735:1:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mul",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2728:3:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2728:9:126"
                                                                },
                                                                {
                                                                    "name": "denominator",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2739:11:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "div",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2724:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2724:27:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2684:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2684:68:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2679:1:126"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68454,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2445:11:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68540,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2408:11:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68540,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2706:11:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68540,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2739:11:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68536,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2438:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68536,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2699:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68536,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2732:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68538,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2432:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68538,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2458:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68538,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2702:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68538,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2735:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68543,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2679:1:126",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68545,
                                    "nodeType": "InlineAssembly",
                                    "src": "2274:488:126"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivUp",
                        "nameLocation": "2105:8:126",
                        "parameters": {
                            "id": 68541,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68536,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2131:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68547,
                                    "src": "2123:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68535,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2123:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68538,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "2150:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68547,
                                    "src": "2142:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68537,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2142:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68540,
                                    "mutability": "mutable",
                                    "name": "denominator",
                                    "nameLocation": "2169:11:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68547,
                                    "src": "2161:19:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68539,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2161:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2113:73:126"
                        },
                        "returnParameters": {
                            "id": 68544,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68543,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "2218:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68547,
                                    "src": "2210:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68542,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2210:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2209:11:126"
                        },
                        "scope": 68603,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68560,
                        "nodeType": "FunctionDefinition",
                        "src": "2774:2778:126",
                        "nodes": [],
                        "body": {
                            "id": 68559,
                            "nodeType": "Block",
                            "src": "2890:2662:126",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "2952:2594:126",
                                        "statements": [
                                            {
                                                "cases": [
                                                    {
                                                        "body": {
                                                            "nodeType": "YulBlock",
                                                            "src": "2994:254:126",
                                                            "statements": [
                                                                {
                                                                    "cases": [
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3044:85:126",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3100:11:126",
                                                                                        "value": {
                                                                                            "name": "scalar",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3105:6:126"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3100:1:126"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3037:92:126",
                                                                            "value": {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3042:1:126",
                                                                                "type": "",
                                                                                "value": "0"
                                                                            }
                                                                        },
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3154:80:126",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3210:6:126",
                                                                                        "value": {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "3215:1:126",
                                                                                            "type": "",
                                                                                            "value": "0"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3210:1:126"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3146:88:126",
                                                                            "value": "default"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "name": "n",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3019:1:126"
                                                                    },
                                                                    "nodeType": "YulSwitch",
                                                                    "src": "3012:222:126"
                                                                }
                                                            ]
                                                        },
                                                        "nodeType": "YulCase",
                                                        "src": "2987:261:126",
                                                        "value": {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2992:1:126",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    },
                                                    {
                                                        "body": {
                                                            "nodeType": "YulBlock",
                                                            "src": "3269:2267:126",
                                                            "statements": [
                                                                {
                                                                    "cases": [
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3327:115:126",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3413:11:126",
                                                                                        "value": {
                                                                                            "name": "scalar",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3418:6:126"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3413:1:126"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3320:122:126",
                                                                            "value": {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3325:1:126",
                                                                                "type": "",
                                                                                "value": "0"
                                                                            }
                                                                        },
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3467:104:126",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3547:6:126",
                                                                                        "value": {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3552:1:126"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3547:1:126"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3459:112:126",
                                                                            "value": "default"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "n",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "3298:1:126"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3301:1:126",
                                                                                "type": "",
                                                                                "value": "2"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "mod",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3294:3:126"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "3294:9:126"
                                                                    },
                                                                    "nodeType": "YulSwitch",
                                                                    "src": "3287:284:126"
                                                                },
                                                                {
                                                                    "nodeType": "YulVariableDeclaration",
                                                                    "src": "3651:26:126",
                                                                    "value": {
                                                                        "arguments": [
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3667:1:126",
                                                                                "type": "",
                                                                                "value": "1"
                                                                            },
                                                                            {
                                                                                "name": "scalar",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "3670:6:126"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "shr",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3663:3:126"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "3663:14:126"
                                                                    },
                                                                    "variables": [
                                                                        {
                                                                            "name": "half",
                                                                            "nodeType": "YulTypedName",
                                                                            "src": "3655:4:126",
                                                                            "type": ""
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "body": {
                                                                        "nodeType": "YulBlock",
                                                                        "src": "3951:1571:126",
                                                                        "statements": [
                                                                            {
                                                                                "body": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "4125:60:126",
                                                                                    "statements": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4158:1:126",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4161:1:126",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "revert",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4151:6:126"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4151:12:126"
                                                                                            },
                                                                                            "nodeType": "YulExpressionStatement",
                                                                                            "src": "4151:12:126"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "condition": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "4117:3:126",
                                                                                            "type": "",
                                                                                            "value": "128"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4122:1:126"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4113:3:126"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4113:11:126"
                                                                                },
                                                                                "nodeType": "YulIf",
                                                                                "src": "4110:75:126"
                                                                            },
                                                                            {
                                                                                "nodeType": "YulVariableDeclaration",
                                                                                "src": "4247:19:126",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4261:1:126"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4264:1:126"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mul",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4257:3:126"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4257:9:126"
                                                                                },
                                                                                "variables": [
                                                                                    {
                                                                                        "name": "xx",
                                                                                        "nodeType": "YulTypedName",
                                                                                        "src": "4251:2:126",
                                                                                        "type": ""
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "nodeType": "YulVariableDeclaration",
                                                                                "src": "4340:28:126",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "xx",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4359:2:126"
                                                                                        },
                                                                                        {
                                                                                            "name": "half",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4363:4:126"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "add",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4355:3:126"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4355:13:126"
                                                                                },
                                                                                "variables": [
                                                                                    {
                                                                                        "name": "xxRound",
                                                                                        "nodeType": "YulTypedName",
                                                                                        "src": "4344:7:126",
                                                                                        "type": ""
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "body": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "4464:60:126",
                                                                                    "statements": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4497:1:126",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4500:1:126",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "revert",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4490:6:126"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4490:12:126"
                                                                                            },
                                                                                            "nodeType": "YulExpressionStatement",
                                                                                            "src": "4490:12:126"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "condition": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "xxRound",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4451:7:126"
                                                                                        },
                                                                                        {
                                                                                            "name": "xx",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4460:2:126"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "lt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4448:2:126"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4448:15:126"
                                                                                },
                                                                                "nodeType": "YulIf",
                                                                                "src": "4445:79:126"
                                                                            },
                                                                            {
                                                                                "nodeType": "YulAssignment",
                                                                                "src": "4594:25:126",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "xxRound",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4603:7:126"
                                                                                        },
                                                                                        {
                                                                                            "name": "scalar",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4612:6:126"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "div",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4599:3:126"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4599:20:126"
                                                                                },
                                                                                "variableNames": [
                                                                                    {
                                                                                        "name": "x",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4594:1:126"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "body": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "4691:813:126",
                                                                                    "statements": [
                                                                                        {
                                                                                            "nodeType": "YulVariableDeclaration",
                                                                                            "src": "4759:19:126",
                                                                                            "value": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "z",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "4773:1:126"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "x",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "4776:1:126"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "mul",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4769:3:126"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4769:9:126"
                                                                                            },
                                                                                            "variables": [
                                                                                                {
                                                                                                    "name": "zx",
                                                                                                    "nodeType": "YulTypedName",
                                                                                                    "src": "4763:2:126",
                                                                                                    "type": ""
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "body": {
                                                                                                "nodeType": "YulBlock",
                                                                                                "src": "4881:209:126",
                                                                                                "statements": [
                                                                                                    {
                                                                                                        "body": {
                                                                                                            "nodeType": "YulBlock",
                                                                                                            "src": "4988:76:126",
                                                                                                            "statements": [
                                                                                                                {
                                                                                                                    "expression": {
                                                                                                                        "arguments": [
                                                                                                                            {
                                                                                                                                "kind": "number",
                                                                                                                                "nodeType": "YulLiteral",
                                                                                                                                "src": "5029:1:126",
                                                                                                                                "type": "",
                                                                                                                                "value": "0"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "kind": "number",
                                                                                                                                "nodeType": "YulLiteral",
                                                                                                                                "src": "5032:1:126",
                                                                                                                                "type": "",
                                                                                                                                "value": "0"
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "functionName": {
                                                                                                                            "name": "revert",
                                                                                                                            "nodeType": "YulIdentifier",
                                                                                                                            "src": "5022:6:126"
                                                                                                                        },
                                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                                        "src": "5022:12:126"
                                                                                                                    },
                                                                                                                    "nodeType": "YulExpressionStatement",
                                                                                                                    "src": "5022:12:126"
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
                                                                                                                            "src": "4984:1:126"
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "functionName": {
                                                                                                                        "name": "iszero",
                                                                                                                        "nodeType": "YulIdentifier",
                                                                                                                        "src": "4977:6:126"
                                                                                                                    },
                                                                                                                    "nodeType": "YulFunctionCall",
                                                                                                                    "src": "4977:9:126"
                                                                                                                }
                                                                                                            ],
                                                                                                            "functionName": {
                                                                                                                "name": "iszero",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "4970:6:126"
                                                                                                            },
                                                                                                            "nodeType": "YulFunctionCall",
                                                                                                            "src": "4970:17:126"
                                                                                                        },
                                                                                                        "nodeType": "YulIf",
                                                                                                        "src": "4967:97:126"
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
                                                                                                                        "src": "4869:2:126"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "name": "x",
                                                                                                                        "nodeType": "YulIdentifier",
                                                                                                                        "src": "4873:1:126"
                                                                                                                    }
                                                                                                                ],
                                                                                                                "functionName": {
                                                                                                                    "name": "div",
                                                                                                                    "nodeType": "YulIdentifier",
                                                                                                                    "src": "4865:3:126"
                                                                                                                },
                                                                                                                "nodeType": "YulFunctionCall",
                                                                                                                "src": "4865:10:126"
                                                                                                            },
                                                                                                            {
                                                                                                                "name": "z",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "4877:1:126"
                                                                                                            }
                                                                                                        ],
                                                                                                        "functionName": {
                                                                                                            "name": "eq",
                                                                                                            "nodeType": "YulIdentifier",
                                                                                                            "src": "4862:2:126"
                                                                                                        },
                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                        "src": "4862:17:126"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "iszero",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4855:6:126"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4855:25:126"
                                                                                            },
                                                                                            "nodeType": "YulIf",
                                                                                            "src": "4852:238:126"
                                                                                        },
                                                                                        {
                                                                                            "nodeType": "YulVariableDeclaration",
                                                                                            "src": "5172:28:126",
                                                                                            "value": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "zx",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5191:2:126"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "half",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5195:4:126"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "add",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5187:3:126"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "5187:13:126"
                                                                                            },
                                                                                            "variables": [
                                                                                                {
                                                                                                    "name": "zxRound",
                                                                                                    "nodeType": "YulTypedName",
                                                                                                    "src": "5176:7:126",
                                                                                                    "type": ""
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "body": {
                                                                                                "nodeType": "YulBlock",
                                                                                                "src": "5304:68:126",
                                                                                                "statements": [
                                                                                                    {
                                                                                                        "expression": {
                                                                                                            "arguments": [
                                                                                                                {
                                                                                                                    "kind": "number",
                                                                                                                    "nodeType": "YulLiteral",
                                                                                                                    "src": "5341:1:126",
                                                                                                                    "type": "",
                                                                                                                    "value": "0"
                                                                                                                },
                                                                                                                {
                                                                                                                    "kind": "number",
                                                                                                                    "nodeType": "YulLiteral",
                                                                                                                    "src": "5344:1:126",
                                                                                                                    "type": "",
                                                                                                                    "value": "0"
                                                                                                                }
                                                                                                            ],
                                                                                                            "functionName": {
                                                                                                                "name": "revert",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "5334:6:126"
                                                                                                            },
                                                                                                            "nodeType": "YulFunctionCall",
                                                                                                            "src": "5334:12:126"
                                                                                                        },
                                                                                                        "nodeType": "YulExpressionStatement",
                                                                                                        "src": "5334:12:126"
                                                                                                    }
                                                                                                ]
                                                                                            },
                                                                                            "condition": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "zxRound",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5291:7:126"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "zx",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5300:2:126"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "lt",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5288:2:126"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "5288:15:126"
                                                                                            },
                                                                                            "nodeType": "YulIf",
                                                                                            "src": "5285:87:126"
                                                                                        },
                                                                                        {
                                                                                            "nodeType": "YulAssignment",
                                                                                            "src": "5457:25:126",
                                                                                            "value": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "zxRound",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5466:7:126"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "scalar",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5475:6:126"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "div",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5462:3:126"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "5462:20:126"
                                                                                            },
                                                                                            "variableNames": [
                                                                                                {
                                                                                                    "name": "z",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5457:1:126"
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
                                                                                            "src": "4685:1:126"
                                                                                        },
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "4688:1:126",
                                                                                            "type": "",
                                                                                            "value": "2"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mod",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4681:3:126"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4681:9:126"
                                                                                },
                                                                                "nodeType": "YulIf",
                                                                                "src": "4678:826:126"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "condition": {
                                                                        "name": "n",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3824:1:126"
                                                                    },
                                                                    "nodeType": "YulForLoop",
                                                                    "post": {
                                                                        "nodeType": "YulBlock",
                                                                        "src": "3826:124:126",
                                                                        "statements": [
                                                                            {
                                                                                "nodeType": "YulAssignment",
                                                                                "src": "3918:14:126",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "3927:1:126",
                                                                                            "type": "",
                                                                                            "value": "1"
                                                                                        },
                                                                                        {
                                                                                            "name": "n",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3930:1:126"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3923:3:126"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "3923:9:126"
                                                                                },
                                                                                "variableNames": [
                                                                                    {
                                                                                        "name": "n",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3918:1:126"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    "pre": {
                                                                        "nodeType": "YulBlock",
                                                                        "src": "3699:124:126",
                                                                        "statements": [
                                                                            {
                                                                                "nodeType": "YulAssignment",
                                                                                "src": "3791:14:126",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "3800:1:126",
                                                                                            "type": "",
                                                                                            "value": "1"
                                                                                        },
                                                                                        {
                                                                                            "name": "n",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3803:1:126"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3796:3:126"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "3796:9:126"
                                                                                },
                                                                                "variableNames": [
                                                                                    {
                                                                                        "name": "n",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3791:1:126"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    "src": "3695:1827:126"
                                                                }
                                                            ]
                                                        },
                                                        "nodeType": "YulCase",
                                                        "src": "3261:2275:126",
                                                        "value": "default"
                                                    }
                                                ],
                                                "expression": {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2973:1:126"
                                                },
                                                "nodeType": "YulSwitch",
                                                "src": "2966:2570:126"
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68551,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3019:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68551,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3298:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68551,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3791:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68551,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3803:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68551,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3824:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68551,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3918:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68551,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3930:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68551,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4685:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68553,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3105:6:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68553,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3418:6:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68553,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3670:6:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68553,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4612:6:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68553,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5475:6:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68549,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2973:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68549,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3552:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68549,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4122:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68549,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4261:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68549,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4264:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68549,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4594:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68549,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4776:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68549,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4873:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68549,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4984:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68556,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3100:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68556,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3210:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68556,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3413:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68556,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3547:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68556,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4773:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68556,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4877:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68556,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5457:1:126",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68558,
                                    "nodeType": "InlineAssembly",
                                    "src": "2943:2603:126"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rpow",
                        "nameLocation": "2783:4:126",
                        "parameters": {
                            "id": 68554,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68549,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2805:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68560,
                                    "src": "2797:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68548,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2797:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68551,
                                    "mutability": "mutable",
                                    "name": "n",
                                    "nameLocation": "2824:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68560,
                                    "src": "2816:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68550,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2816:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68553,
                                    "mutability": "mutable",
                                    "name": "scalar",
                                    "nameLocation": "2843:6:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68560,
                                    "src": "2835:14:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68552,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2835:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2787:68:126"
                        },
                        "returnParameters": {
                            "id": 68557,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68556,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "2887:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68560,
                                    "src": "2879:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68555,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2879:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2878:11:126"
                        },
                        "scope": 68603,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68569,
                        "nodeType": "FunctionDefinition",
                        "src": "5746:3396:126",
                        "nodes": [],
                        "body": {
                            "id": 68568,
                            "nodeType": "Block",
                            "src": "5805:3337:126",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "5867:3269:126",
                                        "statements": [
                                            {
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "5881:10:126",
                                                "value": {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5890:1:126"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "y",
                                                        "nodeType": "YulTypedName",
                                                        "src": "5885:1:126",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "5971:8:126",
                                                "value": {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5976:3:126",
                                                    "type": "",
                                                    "value": "181"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5971:1:126"
                                                    }
                                                ]
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6465:80:126",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6483:16:126",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6492:3:126",
                                                                        "type": "",
                                                                        "value": "128"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6497:1:126"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6488:3:126"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6488:11:126"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6483:1:126"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6516:15:126",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6525:2:126",
                                                                        "type": "",
                                                                        "value": "64"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6529:1:126"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6521:3:126"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6521:10:126"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6516:1:126"
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
                                                                    "src": "6422:1:126"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6425:37:126",
                                                                    "type": "",
                                                                    "value": "0x10000000000000000000000000000000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6419:2:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6419:44:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6412:6:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6412:52:126"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6409:136:126"
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6598:79:126",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6616:15:126",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6625:2:126",
                                                                        "type": "",
                                                                        "value": "64"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6629:1:126"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6621:3:126"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6621:10:126"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6616:1:126"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6648:15:126",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6657:2:126",
                                                                        "type": "",
                                                                        "value": "32"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6661:1:126"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6653:3:126"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6653:10:126"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6648:1:126"
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
                                                                    "src": "6571:1:126"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6574:21:126",
                                                                    "type": "",
                                                                    "value": "0x1000000000000000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6568:2:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6568:28:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6561:6:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6561:36:126"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6558:119:126"
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6722:79:126",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6740:15:126",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6749:2:126",
                                                                        "type": "",
                                                                        "value": "32"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6753:1:126"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6745:3:126"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6745:10:126"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6740:1:126"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6772:15:126",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6781:2:126",
                                                                        "type": "",
                                                                        "value": "16"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6785:1:126"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6777:3:126"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6777:10:126"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6772:1:126"
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
                                                                    "src": "6703:1:126"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6706:13:126",
                                                                    "type": "",
                                                                    "value": "0x10000000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6700:2:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6700:20:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6693:6:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6693:28:126"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6690:111:126"
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6842:78:126",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6860:15:126",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6869:2:126",
                                                                        "type": "",
                                                                        "value": "16"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6873:1:126"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6865:3:126"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6865:10:126"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6860:1:126"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6892:14:126",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6901:1:126",
                                                                        "type": "",
                                                                        "value": "8"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6904:1:126"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6897:3:126"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6897:9:126"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6892:1:126"
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
                                                                    "src": "6827:1:126"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6830:9:126",
                                                                    "type": "",
                                                                    "value": "0x1000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6824:2:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6824:16:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6817:6:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6817:24:126"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6814:106:126"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8110:35:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8119:2:126",
                                                            "type": "",
                                                            "value": "18"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8127:1:126"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8134:1:126"
                                                                        },
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "8137:5:126",
                                                                            "type": "",
                                                                            "value": "65536"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "add",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8130:3:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8130:13:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8123:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8123:21:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8115:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8115:30:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8110:1:126"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8306:30:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8315:1:126",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8322:1:126"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8329:1:126"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8332:1:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8325:3:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8325:9:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8318:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8318:17:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8311:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8311:25:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8306:1:126"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8349:30:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8358:1:126",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8365:1:126"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8372:1:126"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8375:1:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8368:3:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8368:9:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8361:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8361:17:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8354:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8354:25:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8349:1:126"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8392:30:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8401:1:126",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8408:1:126"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8415:1:126"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8418:1:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8411:3:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8411:9:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8404:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8404:17:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8397:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8397:25:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8392:1:126"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8435:30:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8444:1:126",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8451:1:126"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8458:1:126"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8461:1:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8454:3:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8454:9:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8447:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8447:17:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8440:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8440:25:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8435:1:126"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8478:30:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8487:1:126",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8494:1:126"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8501:1:126"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8504:1:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8497:3:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8497:9:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8490:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8490:17:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8483:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8483:25:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8478:1:126"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8521:30:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8530:1:126",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8537:1:126"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8544:1:126"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8547:1:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8540:3:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8540:9:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8533:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8533:17:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8526:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8526:25:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8521:1:126"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8564:30:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8573:1:126",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8580:1:126"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8587:1:126"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8590:1:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8583:3:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8583:9:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8576:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8576:17:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8569:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8569:25:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8564:1:126"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9097:29:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "z",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9106:1:126"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "9116:1:126"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "9119:1:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "9112:3:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "9112:9:126"
                                                                },
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "9123:1:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9109:2:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9109:16:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9102:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "9102:24:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9097:1:126"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68562,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5890:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68562,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8329:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68562,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8372:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68562,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8415:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68562,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8458:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68562,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8501:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68562,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8544:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68562,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8587:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68562,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9116:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5971:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6516:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6529:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6648:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6661:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6772:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6785:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6892:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6904:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8110:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8127:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8306:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8322:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8332:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8349:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8365:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8375:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8392:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8408:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8418:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8435:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8451:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8461:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8478:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8494:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8504:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8521:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8537:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8547:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8564:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8580:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8590:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9097:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9106:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9119:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68565,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9123:1:126",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68567,
                                    "nodeType": "InlineAssembly",
                                    "src": "5858:3278:126"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sqrt",
                        "nameLocation": "5755:4:126",
                        "parameters": {
                            "id": 68563,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68562,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "5768:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68569,
                                    "src": "5760:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68561,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5760:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5759:11:126"
                        },
                        "returnParameters": {
                            "id": 68566,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68565,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "5802:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68569,
                                    "src": "5794:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68564,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5794:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5793:11:126"
                        },
                        "scope": 68603,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68580,
                        "nodeType": "FunctionDefinition",
                        "src": "9148:282:126",
                        "nodes": [],
                        "body": {
                            "id": 68579,
                            "nodeType": "Block",
                            "src": "9223:207:126",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "9285:139:126",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9400:14:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "x",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9409:1:126"
                                                        },
                                                        {
                                                            "name": "y",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9412:1:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mod",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9405:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "9405:9:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9400:1:126"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68571,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9409:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68573,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9412:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68576,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9400:1:126",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68578,
                                    "nodeType": "InlineAssembly",
                                    "src": "9276:148:126"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unsafeMod",
                        "nameLocation": "9157:9:126",
                        "parameters": {
                            "id": 68574,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68571,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "9175:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68580,
                                    "src": "9167:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68570,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9167:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68573,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "9186:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68580,
                                    "src": "9178:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68572,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9178:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9166:22:126"
                        },
                        "returnParameters": {
                            "id": 68577,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68576,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "9220:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68580,
                                    "src": "9212:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68575,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9212:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9211:11:126"
                        },
                        "scope": 68603,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68591,
                        "nodeType": "FunctionDefinition",
                        "src": "9436:285:126",
                        "nodes": [],
                        "body": {
                            "id": 68590,
                            "nodeType": "Block",
                            "src": "9511:210:126",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "9573:142:126",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9691:14:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "x",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9700:1:126"
                                                        },
                                                        {
                                                            "name": "y",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9703:1:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "div",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9696:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "9696:9:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "r",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9691:1:126"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68587,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9691:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68582,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9700:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68584,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9703:1:126",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68589,
                                    "nodeType": "InlineAssembly",
                                    "src": "9564:151:126"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unsafeDiv",
                        "nameLocation": "9445:9:126",
                        "parameters": {
                            "id": 68585,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68582,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "9463:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68591,
                                    "src": "9455:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68581,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9455:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68584,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "9474:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68591,
                                    "src": "9466:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68583,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9466:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9454:22:126"
                        },
                        "returnParameters": {
                            "id": 68588,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68587,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "9508:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68591,
                                    "src": "9500:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68586,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9500:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9499:11:126"
                        },
                        "scope": 68603,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68602,
                        "nodeType": "FunctionDefinition",
                        "src": "9727:324:126",
                        "nodes": [],
                        "body": {
                            "id": 68601,
                            "nodeType": "Block",
                            "src": "9804:247:126",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "9866:179:126",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9998:37:126",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "10014:1:126"
                                                                        },
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "10017:1:126"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mod",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "10010:3:126"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "10010:9:126"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "10021:1:126",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "gt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "10007:2:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "10007:16:126"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "x",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "10029:1:126"
                                                                },
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "10032:1:126"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "div",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "10025:3:126"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "10025:9:126"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "10003:3:126"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "10003:32:126"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9998:1:126"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68593,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10014:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68593,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10029:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68595,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10017:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68595,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10032:1:126",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68598,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9998:1:126",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68600,
                                    "nodeType": "InlineAssembly",
                                    "src": "9857:188:126"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unsafeDivUp",
                        "nameLocation": "9736:11:126",
                        "parameters": {
                            "id": 68596,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68593,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "9756:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68602,
                                    "src": "9748:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68592,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9748:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68595,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "9767:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68602,
                                    "src": "9759:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68594,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9759:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9747:22:126"
                        },
                        "returnParameters": {
                            "id": 68599,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68598,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "9801:1:126",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68602,
                                    "src": "9793:9:126",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68597,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9793:7:126",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9792:11:126"
                        },
                        "scope": 68603,
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
                    "id": 68447,
                    "nodeType": "StructuredDocumentation",
                    "src": "68:273:126",
                    "text": "@notice Arithmetic library with operations for fixed-point numbers.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @author Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    68603
                ],
                "name": "FixedPointMathLib",
                "nameLocation": "349:17:126",
                "scope": 68604,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "AGPL-3.0-only"
    },
    "id": 126
};
