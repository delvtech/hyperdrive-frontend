export const FixedPointMathLib = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207833532335256498efdbb7d8373135640993cd82a007b563f92be27d6ba4d9c364736f6c63430008140033",
        "sourceMap": "341:9712:125:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;341:9712:125;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207833532335256498efdbb7d8373135640993cd82a007b563f92be27d6ba4d9c364736f6c63430008140033",
        "sourceMap": "341:9712:125:-:0;;;;;;;;",
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
        "id": 68904,
        "exportedSymbols": {
            "FixedPointMathLib": [
                68903
            ]
        },
        "nodeType": "SourceUnit",
        "src": "42:10012:125",
        "nodes": [
            {
                "id": 68746,
                "nodeType": "PragmaDirective",
                "src": "42:24:125",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.8",
                    ".0"
                ]
            },
            {
                "id": 68903,
                "nodeType": "ContractDefinition",
                "src": "341:9712:125",
                "nodes": [
                    {
                        "id": 68754,
                        "nodeType": "VariableDeclaration",
                        "src": "566:50:125",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_UINT256",
                        "nameLocation": "592:11:125",
                        "scope": 68903,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 68748,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "566:7:125",
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
                            "id": 68753,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "leftExpression": {
                                "commonType": {
                                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                                },
                                "id": 68751,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                    "hexValue": "32",
                                    "id": 68749,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "606:1:125",
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
                                    "id": 68750,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "609:3:125",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_rational_256_by_1",
                                        "typeString": "int_const 256"
                                    },
                                    "value": "256"
                                },
                                "src": "606:6:125",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                                }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                                "hexValue": "31",
                                "id": 68752,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "615:1:125",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                },
                                "value": "1"
                            },
                            "src": "606:10:125",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                                "typeString": "int_const 1157...(70 digits omitted)...9935"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 68757,
                        "nodeType": "VariableDeclaration",
                        "src": "623:36:125",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "WAD",
                        "nameLocation": "649:3:125",
                        "scope": 68903,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 68755,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "623:7:125",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "31653138",
                            "id": 68756,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "655:4:125",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 68773,
                        "nodeType": "FunctionDefinition",
                        "src": "704:164:125",
                        "nodes": [],
                        "body": {
                            "id": 68772,
                            "nodeType": "Block",
                            "src": "778:90:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 68767,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68759,
                                                "src": "806:1:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68768,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68761,
                                                "src": "809:1:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68769,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68757,
                                                "src": "812:3:125",
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
                                            "id": 68766,
                                            "name": "mulDivDown",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68834,
                                            "src": "795:10:125",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 68770,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "795:21:125",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 68765,
                                    "id": 68771,
                                    "nodeType": "Return",
                                    "src": "788:28:125"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulWadDown",
                        "nameLocation": "713:10:125",
                        "parameters": {
                            "id": 68762,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68759,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "732:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68773,
                                    "src": "724:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68758,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "724:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68761,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "743:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68773,
                                    "src": "735:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68760,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "735:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "723:22:125"
                        },
                        "returnParameters": {
                            "id": 68765,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68764,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68773,
                                    "src": "769:7:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68763,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "769:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "768:9:125"
                        },
                        "scope": 68903,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68789,
                        "nodeType": "FunctionDefinition",
                        "src": "874:158:125",
                        "nodes": [],
                        "body": {
                            "id": 68788,
                            "nodeType": "Block",
                            "src": "946:86:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 68783,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68775,
                                                "src": "972:1:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68784,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68777,
                                                "src": "975:1:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68785,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68757,
                                                "src": "978:3:125",
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
                                            "id": 68782,
                                            "name": "mulDivUp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68847,
                                            "src": "963:8:125",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 68786,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "963:19:125",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 68781,
                                    "id": 68787,
                                    "nodeType": "Return",
                                    "src": "956:26:125"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulWadUp",
                        "nameLocation": "883:8:125",
                        "parameters": {
                            "id": 68778,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68775,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "900:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68789,
                                    "src": "892:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68774,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "892:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68777,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "911:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68789,
                                    "src": "903:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68776,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "903:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "891:22:125"
                        },
                        "returnParameters": {
                            "id": 68781,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68780,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68789,
                                    "src": "937:7:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68779,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "937:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "936:9:125"
                        },
                        "scope": 68903,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68805,
                        "nodeType": "FunctionDefinition",
                        "src": "1038:164:125",
                        "nodes": [],
                        "body": {
                            "id": 68804,
                            "nodeType": "Block",
                            "src": "1112:90:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 68799,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68791,
                                                "src": "1140:1:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68800,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68757,
                                                "src": "1143:3:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68801,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68793,
                                                "src": "1148:1:125",
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
                                            "id": 68798,
                                            "name": "mulDivDown",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68834,
                                            "src": "1129:10:125",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 68802,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1129:21:125",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 68797,
                                    "id": 68803,
                                    "nodeType": "Return",
                                    "src": "1122:28:125"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divWadDown",
                        "nameLocation": "1047:10:125",
                        "parameters": {
                            "id": 68794,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68791,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1066:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68805,
                                    "src": "1058:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68790,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1058:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68793,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1077:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68805,
                                    "src": "1069:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68792,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1069:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1057:22:125"
                        },
                        "returnParameters": {
                            "id": 68797,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68796,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68805,
                                    "src": "1103:7:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68795,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1103:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1102:9:125"
                        },
                        "scope": 68903,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68821,
                        "nodeType": "FunctionDefinition",
                        "src": "1208:158:125",
                        "nodes": [],
                        "body": {
                            "id": 68820,
                            "nodeType": "Block",
                            "src": "1280:86:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 68815,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68807,
                                                "src": "1306:1:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68816,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68757,
                                                "src": "1309:3:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 68817,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68809,
                                                "src": "1314:1:125",
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
                                            "id": 68814,
                                            "name": "mulDivUp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68847,
                                            "src": "1297:8:125",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 68818,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1297:19:125",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 68813,
                                    "id": 68819,
                                    "nodeType": "Return",
                                    "src": "1290:26:125"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divWadUp",
                        "nameLocation": "1217:8:125",
                        "parameters": {
                            "id": 68810,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68807,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1234:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68821,
                                    "src": "1226:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68806,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1226:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68809,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1245:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68821,
                                    "src": "1237:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68808,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1237:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1225:22:125"
                        },
                        "returnParameters": {
                            "id": 68813,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68812,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68821,
                                    "src": "1271:7:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68811,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1271:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1270:9:125"
                        },
                        "scope": 68903,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68834,
                        "nodeType": "FunctionDefinition",
                        "src": "1564:526:125",
                        "nodes": [],
                        "body": {
                            "id": 68833,
                            "nodeType": "Block",
                            "src": "1691:399:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "1753:331:125",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "1936:44:125",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "1961:1:125",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "1964:1:125",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1954:6:125"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "1954:12:125"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "1954:12:125"
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
                                                                    "src": "1878:11:125"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "1902:1:125"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "1908:1:125"
                                                                                        },
                                                                                        {
                                                                                            "arguments": [
                                                                                                {
                                                                                                    "name": "MAX_UINT256",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "1915:11:125"
                                                                                                },
                                                                                                {
                                                                                                    "name": "y",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "1928:1:125"
                                                                                                }
                                                                                            ],
                                                                                            "functionName": {
                                                                                                "name": "div",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "1911:3:125"
                                                                                            },
                                                                                            "nodeType": "YulFunctionCall",
                                                                                            "src": "1911:19:125"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "gt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "1905:2:125"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "1905:26:125"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "1898:3:125"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "1898:34:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "iszero",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "1891:6:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "1891:42:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1874:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1874:60:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1867:6:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1867:68:125"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "1864:116:125"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2042:32:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "x",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2055:1:125"
                                                                },
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2058:1:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2051:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2051:9:125"
                                                        },
                                                        {
                                                            "name": "denominator",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2062:11:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "div",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2047:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2047:27:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2042:1:125"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68754,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1915:11:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68827,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1878:11:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68827,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2062:11:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68823,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1908:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68823,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2055:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68825,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1902:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68825,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1928:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68825,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2058:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68830,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2042:1:125",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68832,
                                    "nodeType": "InlineAssembly",
                                    "src": "1744:340:125"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivDown",
                        "nameLocation": "1573:10:125",
                        "parameters": {
                            "id": 68828,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68823,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1601:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68834,
                                    "src": "1593:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68822,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1593:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68825,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1620:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68834,
                                    "src": "1612:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68824,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1612:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68827,
                                    "mutability": "mutable",
                                    "name": "denominator",
                                    "nameLocation": "1639:11:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68834,
                                    "src": "1631:19:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68826,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1631:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1583:73:125"
                        },
                        "returnParameters": {
                            "id": 68831,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68830,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "1688:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68834,
                                    "src": "1680:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68829,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1680:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1679:11:125"
                        },
                        "scope": 68903,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68847,
                        "nodeType": "FunctionDefinition",
                        "src": "2096:672:125",
                        "nodes": [],
                        "body": {
                            "id": 68846,
                            "nodeType": "Block",
                            "src": "2221:547:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "2283:479:125",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "2466:44:125",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "2491:1:125",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "2494:1:125",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2484:6:125"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "2484:12:125"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "2484:12:125"
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
                                                                    "src": "2408:11:125"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "2432:1:125"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "2438:1:125"
                                                                                        },
                                                                                        {
                                                                                            "arguments": [
                                                                                                {
                                                                                                    "name": "MAX_UINT256",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "2445:11:125"
                                                                                                },
                                                                                                {
                                                                                                    "name": "y",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "2458:1:125"
                                                                                                }
                                                                                            ],
                                                                                            "functionName": {
                                                                                                "name": "div",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "2441:3:125"
                                                                                            },
                                                                                            "nodeType": "YulFunctionCall",
                                                                                            "src": "2441:19:125"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "gt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "2435:2:125"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "2435:26:125"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "2428:3:125"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "2428:34:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "iszero",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2421:6:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2421:42:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2404:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2404:60:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2397:6:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2397:68:125"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "2394:116:125"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2679:73:125",
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
                                                                                    "src": "2699:1:125"
                                                                                },
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "2702:1:125"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "2695:3:125"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "2695:9:125"
                                                                        },
                                                                        {
                                                                            "name": "denominator",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2706:11:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mod",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2691:3:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2691:27:125"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "2720:1:125",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "gt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2688:2:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2688:34:125"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2732:1:125"
                                                                        },
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2735:1:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mul",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2728:3:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2728:9:125"
                                                                },
                                                                {
                                                                    "name": "denominator",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2739:11:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "div",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2724:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2724:27:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2684:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2684:68:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2679:1:125"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68754,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2445:11:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68840,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2408:11:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68840,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2706:11:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68840,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2739:11:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68836,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2438:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68836,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2699:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68836,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2732:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68838,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2432:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68838,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2458:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68838,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2702:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68838,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2735:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68843,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2679:1:125",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68845,
                                    "nodeType": "InlineAssembly",
                                    "src": "2274:488:125"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivUp",
                        "nameLocation": "2105:8:125",
                        "parameters": {
                            "id": 68841,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68836,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2131:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68847,
                                    "src": "2123:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68835,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2123:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68838,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "2150:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68847,
                                    "src": "2142:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68837,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2142:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68840,
                                    "mutability": "mutable",
                                    "name": "denominator",
                                    "nameLocation": "2169:11:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68847,
                                    "src": "2161:19:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68839,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2161:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2113:73:125"
                        },
                        "returnParameters": {
                            "id": 68844,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68843,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "2218:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68847,
                                    "src": "2210:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68842,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2210:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2209:11:125"
                        },
                        "scope": 68903,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68860,
                        "nodeType": "FunctionDefinition",
                        "src": "2774:2778:125",
                        "nodes": [],
                        "body": {
                            "id": 68859,
                            "nodeType": "Block",
                            "src": "2890:2662:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "2952:2594:125",
                                        "statements": [
                                            {
                                                "cases": [
                                                    {
                                                        "body": {
                                                            "nodeType": "YulBlock",
                                                            "src": "2994:254:125",
                                                            "statements": [
                                                                {
                                                                    "cases": [
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3044:85:125",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3100:11:125",
                                                                                        "value": {
                                                                                            "name": "scalar",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3105:6:125"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3100:1:125"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3037:92:125",
                                                                            "value": {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3042:1:125",
                                                                                "type": "",
                                                                                "value": "0"
                                                                            }
                                                                        },
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3154:80:125",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3210:6:125",
                                                                                        "value": {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "3215:1:125",
                                                                                            "type": "",
                                                                                            "value": "0"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3210:1:125"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3146:88:125",
                                                                            "value": "default"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "name": "n",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3019:1:125"
                                                                    },
                                                                    "nodeType": "YulSwitch",
                                                                    "src": "3012:222:125"
                                                                }
                                                            ]
                                                        },
                                                        "nodeType": "YulCase",
                                                        "src": "2987:261:125",
                                                        "value": {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2992:1:125",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    },
                                                    {
                                                        "body": {
                                                            "nodeType": "YulBlock",
                                                            "src": "3269:2267:125",
                                                            "statements": [
                                                                {
                                                                    "cases": [
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3327:115:125",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3413:11:125",
                                                                                        "value": {
                                                                                            "name": "scalar",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3418:6:125"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3413:1:125"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3320:122:125",
                                                                            "value": {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3325:1:125",
                                                                                "type": "",
                                                                                "value": "0"
                                                                            }
                                                                        },
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3467:104:125",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3547:6:125",
                                                                                        "value": {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3552:1:125"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3547:1:125"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3459:112:125",
                                                                            "value": "default"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "n",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "3298:1:125"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3301:1:125",
                                                                                "type": "",
                                                                                "value": "2"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "mod",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3294:3:125"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "3294:9:125"
                                                                    },
                                                                    "nodeType": "YulSwitch",
                                                                    "src": "3287:284:125"
                                                                },
                                                                {
                                                                    "nodeType": "YulVariableDeclaration",
                                                                    "src": "3651:26:125",
                                                                    "value": {
                                                                        "arguments": [
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3667:1:125",
                                                                                "type": "",
                                                                                "value": "1"
                                                                            },
                                                                            {
                                                                                "name": "scalar",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "3670:6:125"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "shr",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3663:3:125"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "3663:14:125"
                                                                    },
                                                                    "variables": [
                                                                        {
                                                                            "name": "half",
                                                                            "nodeType": "YulTypedName",
                                                                            "src": "3655:4:125",
                                                                            "type": ""
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "body": {
                                                                        "nodeType": "YulBlock",
                                                                        "src": "3951:1571:125",
                                                                        "statements": [
                                                                            {
                                                                                "body": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "4125:60:125",
                                                                                    "statements": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4158:1:125",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4161:1:125",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "revert",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4151:6:125"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4151:12:125"
                                                                                            },
                                                                                            "nodeType": "YulExpressionStatement",
                                                                                            "src": "4151:12:125"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "condition": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "4117:3:125",
                                                                                            "type": "",
                                                                                            "value": "128"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4122:1:125"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4113:3:125"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4113:11:125"
                                                                                },
                                                                                "nodeType": "YulIf",
                                                                                "src": "4110:75:125"
                                                                            },
                                                                            {
                                                                                "nodeType": "YulVariableDeclaration",
                                                                                "src": "4247:19:125",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4261:1:125"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4264:1:125"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mul",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4257:3:125"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4257:9:125"
                                                                                },
                                                                                "variables": [
                                                                                    {
                                                                                        "name": "xx",
                                                                                        "nodeType": "YulTypedName",
                                                                                        "src": "4251:2:125",
                                                                                        "type": ""
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "nodeType": "YulVariableDeclaration",
                                                                                "src": "4340:28:125",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "xx",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4359:2:125"
                                                                                        },
                                                                                        {
                                                                                            "name": "half",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4363:4:125"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "add",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4355:3:125"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4355:13:125"
                                                                                },
                                                                                "variables": [
                                                                                    {
                                                                                        "name": "xxRound",
                                                                                        "nodeType": "YulTypedName",
                                                                                        "src": "4344:7:125",
                                                                                        "type": ""
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "body": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "4464:60:125",
                                                                                    "statements": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4497:1:125",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4500:1:125",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "revert",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4490:6:125"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4490:12:125"
                                                                                            },
                                                                                            "nodeType": "YulExpressionStatement",
                                                                                            "src": "4490:12:125"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "condition": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "xxRound",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4451:7:125"
                                                                                        },
                                                                                        {
                                                                                            "name": "xx",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4460:2:125"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "lt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4448:2:125"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4448:15:125"
                                                                                },
                                                                                "nodeType": "YulIf",
                                                                                "src": "4445:79:125"
                                                                            },
                                                                            {
                                                                                "nodeType": "YulAssignment",
                                                                                "src": "4594:25:125",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "xxRound",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4603:7:125"
                                                                                        },
                                                                                        {
                                                                                            "name": "scalar",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4612:6:125"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "div",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4599:3:125"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4599:20:125"
                                                                                },
                                                                                "variableNames": [
                                                                                    {
                                                                                        "name": "x",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4594:1:125"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "body": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "4691:813:125",
                                                                                    "statements": [
                                                                                        {
                                                                                            "nodeType": "YulVariableDeclaration",
                                                                                            "src": "4759:19:125",
                                                                                            "value": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "z",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "4773:1:125"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "x",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "4776:1:125"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "mul",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4769:3:125"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4769:9:125"
                                                                                            },
                                                                                            "variables": [
                                                                                                {
                                                                                                    "name": "zx",
                                                                                                    "nodeType": "YulTypedName",
                                                                                                    "src": "4763:2:125",
                                                                                                    "type": ""
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "body": {
                                                                                                "nodeType": "YulBlock",
                                                                                                "src": "4881:209:125",
                                                                                                "statements": [
                                                                                                    {
                                                                                                        "body": {
                                                                                                            "nodeType": "YulBlock",
                                                                                                            "src": "4988:76:125",
                                                                                                            "statements": [
                                                                                                                {
                                                                                                                    "expression": {
                                                                                                                        "arguments": [
                                                                                                                            {
                                                                                                                                "kind": "number",
                                                                                                                                "nodeType": "YulLiteral",
                                                                                                                                "src": "5029:1:125",
                                                                                                                                "type": "",
                                                                                                                                "value": "0"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "kind": "number",
                                                                                                                                "nodeType": "YulLiteral",
                                                                                                                                "src": "5032:1:125",
                                                                                                                                "type": "",
                                                                                                                                "value": "0"
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "functionName": {
                                                                                                                            "name": "revert",
                                                                                                                            "nodeType": "YulIdentifier",
                                                                                                                            "src": "5022:6:125"
                                                                                                                        },
                                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                                        "src": "5022:12:125"
                                                                                                                    },
                                                                                                                    "nodeType": "YulExpressionStatement",
                                                                                                                    "src": "5022:12:125"
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
                                                                                                                            "src": "4984:1:125"
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "functionName": {
                                                                                                                        "name": "iszero",
                                                                                                                        "nodeType": "YulIdentifier",
                                                                                                                        "src": "4977:6:125"
                                                                                                                    },
                                                                                                                    "nodeType": "YulFunctionCall",
                                                                                                                    "src": "4977:9:125"
                                                                                                                }
                                                                                                            ],
                                                                                                            "functionName": {
                                                                                                                "name": "iszero",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "4970:6:125"
                                                                                                            },
                                                                                                            "nodeType": "YulFunctionCall",
                                                                                                            "src": "4970:17:125"
                                                                                                        },
                                                                                                        "nodeType": "YulIf",
                                                                                                        "src": "4967:97:125"
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
                                                                                                                        "src": "4869:2:125"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "name": "x",
                                                                                                                        "nodeType": "YulIdentifier",
                                                                                                                        "src": "4873:1:125"
                                                                                                                    }
                                                                                                                ],
                                                                                                                "functionName": {
                                                                                                                    "name": "div",
                                                                                                                    "nodeType": "YulIdentifier",
                                                                                                                    "src": "4865:3:125"
                                                                                                                },
                                                                                                                "nodeType": "YulFunctionCall",
                                                                                                                "src": "4865:10:125"
                                                                                                            },
                                                                                                            {
                                                                                                                "name": "z",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "4877:1:125"
                                                                                                            }
                                                                                                        ],
                                                                                                        "functionName": {
                                                                                                            "name": "eq",
                                                                                                            "nodeType": "YulIdentifier",
                                                                                                            "src": "4862:2:125"
                                                                                                        },
                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                        "src": "4862:17:125"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "iszero",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4855:6:125"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4855:25:125"
                                                                                            },
                                                                                            "nodeType": "YulIf",
                                                                                            "src": "4852:238:125"
                                                                                        },
                                                                                        {
                                                                                            "nodeType": "YulVariableDeclaration",
                                                                                            "src": "5172:28:125",
                                                                                            "value": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "zx",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5191:2:125"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "half",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5195:4:125"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "add",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5187:3:125"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "5187:13:125"
                                                                                            },
                                                                                            "variables": [
                                                                                                {
                                                                                                    "name": "zxRound",
                                                                                                    "nodeType": "YulTypedName",
                                                                                                    "src": "5176:7:125",
                                                                                                    "type": ""
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "body": {
                                                                                                "nodeType": "YulBlock",
                                                                                                "src": "5304:68:125",
                                                                                                "statements": [
                                                                                                    {
                                                                                                        "expression": {
                                                                                                            "arguments": [
                                                                                                                {
                                                                                                                    "kind": "number",
                                                                                                                    "nodeType": "YulLiteral",
                                                                                                                    "src": "5341:1:125",
                                                                                                                    "type": "",
                                                                                                                    "value": "0"
                                                                                                                },
                                                                                                                {
                                                                                                                    "kind": "number",
                                                                                                                    "nodeType": "YulLiteral",
                                                                                                                    "src": "5344:1:125",
                                                                                                                    "type": "",
                                                                                                                    "value": "0"
                                                                                                                }
                                                                                                            ],
                                                                                                            "functionName": {
                                                                                                                "name": "revert",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "5334:6:125"
                                                                                                            },
                                                                                                            "nodeType": "YulFunctionCall",
                                                                                                            "src": "5334:12:125"
                                                                                                        },
                                                                                                        "nodeType": "YulExpressionStatement",
                                                                                                        "src": "5334:12:125"
                                                                                                    }
                                                                                                ]
                                                                                            },
                                                                                            "condition": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "zxRound",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5291:7:125"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "zx",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5300:2:125"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "lt",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5288:2:125"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "5288:15:125"
                                                                                            },
                                                                                            "nodeType": "YulIf",
                                                                                            "src": "5285:87:125"
                                                                                        },
                                                                                        {
                                                                                            "nodeType": "YulAssignment",
                                                                                            "src": "5457:25:125",
                                                                                            "value": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "zxRound",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5466:7:125"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "scalar",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5475:6:125"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "div",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5462:3:125"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "5462:20:125"
                                                                                            },
                                                                                            "variableNames": [
                                                                                                {
                                                                                                    "name": "z",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5457:1:125"
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
                                                                                            "src": "4685:1:125"
                                                                                        },
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "4688:1:125",
                                                                                            "type": "",
                                                                                            "value": "2"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mod",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4681:3:125"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4681:9:125"
                                                                                },
                                                                                "nodeType": "YulIf",
                                                                                "src": "4678:826:125"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "condition": {
                                                                        "name": "n",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3824:1:125"
                                                                    },
                                                                    "nodeType": "YulForLoop",
                                                                    "post": {
                                                                        "nodeType": "YulBlock",
                                                                        "src": "3826:124:125",
                                                                        "statements": [
                                                                            {
                                                                                "nodeType": "YulAssignment",
                                                                                "src": "3918:14:125",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "3927:1:125",
                                                                                            "type": "",
                                                                                            "value": "1"
                                                                                        },
                                                                                        {
                                                                                            "name": "n",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3930:1:125"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3923:3:125"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "3923:9:125"
                                                                                },
                                                                                "variableNames": [
                                                                                    {
                                                                                        "name": "n",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3918:1:125"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    "pre": {
                                                                        "nodeType": "YulBlock",
                                                                        "src": "3699:124:125",
                                                                        "statements": [
                                                                            {
                                                                                "nodeType": "YulAssignment",
                                                                                "src": "3791:14:125",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "3800:1:125",
                                                                                            "type": "",
                                                                                            "value": "1"
                                                                                        },
                                                                                        {
                                                                                            "name": "n",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3803:1:125"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3796:3:125"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "3796:9:125"
                                                                                },
                                                                                "variableNames": [
                                                                                    {
                                                                                        "name": "n",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3791:1:125"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    "src": "3695:1827:125"
                                                                }
                                                            ]
                                                        },
                                                        "nodeType": "YulCase",
                                                        "src": "3261:2275:125",
                                                        "value": "default"
                                                    }
                                                ],
                                                "expression": {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2973:1:125"
                                                },
                                                "nodeType": "YulSwitch",
                                                "src": "2966:2570:125"
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68851,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3019:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68851,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3298:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68851,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3791:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68851,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3803:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68851,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3824:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68851,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3918:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68851,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3930:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68851,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4685:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68853,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3105:6:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68853,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3418:6:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68853,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3670:6:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68853,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4612:6:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68853,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5475:6:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68849,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2973:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68849,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3552:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68849,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4122:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68849,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4261:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68849,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4264:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68849,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4594:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68849,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4776:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68849,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4873:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68849,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4984:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68856,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3100:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68856,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3210:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68856,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3413:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68856,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3547:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68856,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4773:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68856,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4877:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68856,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5457:1:125",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68858,
                                    "nodeType": "InlineAssembly",
                                    "src": "2943:2603:125"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rpow",
                        "nameLocation": "2783:4:125",
                        "parameters": {
                            "id": 68854,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68849,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2805:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68860,
                                    "src": "2797:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68848,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2797:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68851,
                                    "mutability": "mutable",
                                    "name": "n",
                                    "nameLocation": "2824:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68860,
                                    "src": "2816:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68850,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2816:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68853,
                                    "mutability": "mutable",
                                    "name": "scalar",
                                    "nameLocation": "2843:6:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68860,
                                    "src": "2835:14:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68852,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2835:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2787:68:125"
                        },
                        "returnParameters": {
                            "id": 68857,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68856,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "2887:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68860,
                                    "src": "2879:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68855,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2879:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2878:11:125"
                        },
                        "scope": 68903,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68869,
                        "nodeType": "FunctionDefinition",
                        "src": "5746:3396:125",
                        "nodes": [],
                        "body": {
                            "id": 68868,
                            "nodeType": "Block",
                            "src": "5805:3337:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "5867:3269:125",
                                        "statements": [
                                            {
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "5881:10:125",
                                                "value": {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5890:1:125"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "y",
                                                        "nodeType": "YulTypedName",
                                                        "src": "5885:1:125",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "5971:8:125",
                                                "value": {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5976:3:125",
                                                    "type": "",
                                                    "value": "181"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5971:1:125"
                                                    }
                                                ]
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6465:80:125",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6483:16:125",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6492:3:125",
                                                                        "type": "",
                                                                        "value": "128"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6497:1:125"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6488:3:125"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6488:11:125"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6483:1:125"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6516:15:125",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6525:2:125",
                                                                        "type": "",
                                                                        "value": "64"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6529:1:125"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6521:3:125"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6521:10:125"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6516:1:125"
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
                                                                    "src": "6422:1:125"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6425:37:125",
                                                                    "type": "",
                                                                    "value": "0x10000000000000000000000000000000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6419:2:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6419:44:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6412:6:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6412:52:125"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6409:136:125"
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6598:79:125",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6616:15:125",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6625:2:125",
                                                                        "type": "",
                                                                        "value": "64"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6629:1:125"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6621:3:125"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6621:10:125"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6616:1:125"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6648:15:125",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6657:2:125",
                                                                        "type": "",
                                                                        "value": "32"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6661:1:125"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6653:3:125"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6653:10:125"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6648:1:125"
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
                                                                    "src": "6571:1:125"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6574:21:125",
                                                                    "type": "",
                                                                    "value": "0x1000000000000000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6568:2:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6568:28:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6561:6:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6561:36:125"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6558:119:125"
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6722:79:125",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6740:15:125",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6749:2:125",
                                                                        "type": "",
                                                                        "value": "32"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6753:1:125"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6745:3:125"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6745:10:125"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6740:1:125"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6772:15:125",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6781:2:125",
                                                                        "type": "",
                                                                        "value": "16"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6785:1:125"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6777:3:125"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6777:10:125"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6772:1:125"
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
                                                                    "src": "6703:1:125"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6706:13:125",
                                                                    "type": "",
                                                                    "value": "0x10000000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6700:2:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6700:20:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6693:6:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6693:28:125"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6690:111:125"
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6842:78:125",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6860:15:125",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6869:2:125",
                                                                        "type": "",
                                                                        "value": "16"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6873:1:125"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6865:3:125"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6865:10:125"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6860:1:125"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6892:14:125",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6901:1:125",
                                                                        "type": "",
                                                                        "value": "8"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6904:1:125"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6897:3:125"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6897:9:125"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6892:1:125"
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
                                                                    "src": "6827:1:125"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6830:9:125",
                                                                    "type": "",
                                                                    "value": "0x1000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6824:2:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6824:16:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6817:6:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6817:24:125"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6814:106:125"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8110:35:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8119:2:125",
                                                            "type": "",
                                                            "value": "18"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8127:1:125"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8134:1:125"
                                                                        },
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "8137:5:125",
                                                                            "type": "",
                                                                            "value": "65536"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "add",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8130:3:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8130:13:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8123:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8123:21:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8115:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8115:30:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8110:1:125"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8306:30:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8315:1:125",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8322:1:125"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8329:1:125"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8332:1:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8325:3:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8325:9:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8318:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8318:17:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8311:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8311:25:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8306:1:125"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8349:30:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8358:1:125",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8365:1:125"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8372:1:125"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8375:1:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8368:3:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8368:9:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8361:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8361:17:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8354:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8354:25:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8349:1:125"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8392:30:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8401:1:125",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8408:1:125"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8415:1:125"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8418:1:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8411:3:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8411:9:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8404:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8404:17:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8397:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8397:25:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8392:1:125"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8435:30:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8444:1:125",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8451:1:125"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8458:1:125"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8461:1:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8454:3:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8454:9:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8447:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8447:17:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8440:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8440:25:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8435:1:125"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8478:30:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8487:1:125",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8494:1:125"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8501:1:125"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8504:1:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8497:3:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8497:9:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8490:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8490:17:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8483:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8483:25:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8478:1:125"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8521:30:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8530:1:125",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8537:1:125"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8544:1:125"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8547:1:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8540:3:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8540:9:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8533:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8533:17:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8526:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8526:25:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8521:1:125"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8564:30:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8573:1:125",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8580:1:125"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8587:1:125"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8590:1:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8583:3:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8583:9:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8576:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8576:17:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8569:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8569:25:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8564:1:125"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9097:29:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "z",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9106:1:125"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "9116:1:125"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "9119:1:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "9112:3:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "9112:9:125"
                                                                },
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "9123:1:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9109:2:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9109:16:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9102:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "9102:24:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9097:1:125"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68862,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5890:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68862,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8329:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68862,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8372:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68862,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8415:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68862,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8458:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68862,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8501:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68862,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8544:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68862,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8587:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68862,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9116:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5971:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6516:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6529:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6648:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6661:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6772:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6785:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6892:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6904:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8110:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8127:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8306:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8322:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8332:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8349:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8365:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8375:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8392:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8408:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8418:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8435:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8451:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8461:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8478:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8494:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8504:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8521:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8537:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8547:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8564:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8580:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8590:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9097:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9106:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9119:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68865,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9123:1:125",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68867,
                                    "nodeType": "InlineAssembly",
                                    "src": "5858:3278:125"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sqrt",
                        "nameLocation": "5755:4:125",
                        "parameters": {
                            "id": 68863,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68862,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "5768:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68869,
                                    "src": "5760:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68861,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5760:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5759:11:125"
                        },
                        "returnParameters": {
                            "id": 68866,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68865,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "5802:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68869,
                                    "src": "5794:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68864,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5794:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5793:11:125"
                        },
                        "scope": 68903,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68880,
                        "nodeType": "FunctionDefinition",
                        "src": "9148:282:125",
                        "nodes": [],
                        "body": {
                            "id": 68879,
                            "nodeType": "Block",
                            "src": "9223:207:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "9285:139:125",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9400:14:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "x",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9409:1:125"
                                                        },
                                                        {
                                                            "name": "y",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9412:1:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mod",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9405:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "9405:9:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9400:1:125"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68871,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9409:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68873,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9412:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68876,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9400:1:125",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68878,
                                    "nodeType": "InlineAssembly",
                                    "src": "9276:148:125"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unsafeMod",
                        "nameLocation": "9157:9:125",
                        "parameters": {
                            "id": 68874,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68871,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "9175:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68880,
                                    "src": "9167:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68870,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9167:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68873,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "9186:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68880,
                                    "src": "9178:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68872,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9178:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9166:22:125"
                        },
                        "returnParameters": {
                            "id": 68877,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68876,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "9220:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68880,
                                    "src": "9212:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68875,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9212:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9211:11:125"
                        },
                        "scope": 68903,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68891,
                        "nodeType": "FunctionDefinition",
                        "src": "9436:285:125",
                        "nodes": [],
                        "body": {
                            "id": 68890,
                            "nodeType": "Block",
                            "src": "9511:210:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "9573:142:125",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9691:14:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "x",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9700:1:125"
                                                        },
                                                        {
                                                            "name": "y",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9703:1:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "div",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9696:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "9696:9:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "r",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9691:1:125"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68887,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9691:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68882,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9700:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68884,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9703:1:125",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68889,
                                    "nodeType": "InlineAssembly",
                                    "src": "9564:151:125"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unsafeDiv",
                        "nameLocation": "9445:9:125",
                        "parameters": {
                            "id": 68885,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68882,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "9463:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68891,
                                    "src": "9455:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68881,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9455:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68884,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "9474:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68891,
                                    "src": "9466:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68883,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9466:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9454:22:125"
                        },
                        "returnParameters": {
                            "id": 68888,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68887,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "9508:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68891,
                                    "src": "9500:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68886,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9500:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9499:11:125"
                        },
                        "scope": 68903,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 68902,
                        "nodeType": "FunctionDefinition",
                        "src": "9727:324:125",
                        "nodes": [],
                        "body": {
                            "id": 68901,
                            "nodeType": "Block",
                            "src": "9804:247:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "9866:179:125",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9998:37:125",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "10014:1:125"
                                                                        },
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "10017:1:125"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mod",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "10010:3:125"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "10010:9:125"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "10021:1:125",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "gt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "10007:2:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "10007:16:125"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "x",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "10029:1:125"
                                                                },
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "10032:1:125"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "div",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "10025:3:125"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "10025:9:125"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "10003:3:125"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "10003:32:125"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9998:1:125"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 68893,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10014:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68893,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10029:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68895,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10017:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68895,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10032:1:125",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 68898,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9998:1:125",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 68900,
                                    "nodeType": "InlineAssembly",
                                    "src": "9857:188:125"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unsafeDivUp",
                        "nameLocation": "9736:11:125",
                        "parameters": {
                            "id": 68896,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68893,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "9756:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68902,
                                    "src": "9748:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68892,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9748:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 68895,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "9767:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68902,
                                    "src": "9759:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68894,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9759:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9747:22:125"
                        },
                        "returnParameters": {
                            "id": 68899,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 68898,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "9801:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 68902,
                                    "src": "9793:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68897,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9793:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9792:11:125"
                        },
                        "scope": 68903,
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
                    "id": 68747,
                    "nodeType": "StructuredDocumentation",
                    "src": "68:273:125",
                    "text": "@notice Arithmetic library with operations for fixed-point numbers.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @author Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    68903
                ],
                "name": "FixedPointMathLib",
                "nameLocation": "349:17:125",
                "scope": 68904,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "AGPL-3.0-only"
    },
    "id": 125
};
