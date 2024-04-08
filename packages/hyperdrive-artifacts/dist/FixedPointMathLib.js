export const FixedPointMathLib = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206792f474473b388cd8d1c9e8dd54c7660058414a03199118dd014b2d16ce300b64736f6c63430008140033",
        "sourceMap": "341:9712:174:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;341:9712:174;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206792f474473b388cd8d1c9e8dd54c7660058414a03199118dd014b2d16ce300b64736f6c63430008140033",
        "sourceMap": "341:9712:174:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Arithmetic library with operations for fixed-point numbers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":\"FixedPointMathLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]}},\"version\":1}",
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
        "id": 73185,
        "exportedSymbols": {
            "FixedPointMathLib": [
                73184
            ]
        },
        "nodeType": "SourceUnit",
        "src": "42:10012:174",
        "nodes": [
            {
                "id": 73027,
                "nodeType": "PragmaDirective",
                "src": "42:24:174",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.8",
                    ".0"
                ]
            },
            {
                "id": 73184,
                "nodeType": "ContractDefinition",
                "src": "341:9712:174",
                "nodes": [
                    {
                        "id": 73035,
                        "nodeType": "VariableDeclaration",
                        "src": "566:50:174",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_UINT256",
                        "nameLocation": "592:11:174",
                        "scope": 73184,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73029,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "566:7:174",
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
                            "id": 73034,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "leftExpression": {
                                "commonType": {
                                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                                },
                                "id": 73032,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                    "hexValue": "32",
                                    "id": 73030,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "606:1:174",
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
                                    "id": 73031,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "609:3:174",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_rational_256_by_1",
                                        "typeString": "int_const 256"
                                    },
                                    "value": "256"
                                },
                                "src": "606:6:174",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                                }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                                "hexValue": "31",
                                "id": 73033,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "615:1:174",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                },
                                "value": "1"
                            },
                            "src": "606:10:174",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                                "typeString": "int_const 1157...(70 digits omitted)...9935"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73038,
                        "nodeType": "VariableDeclaration",
                        "src": "623:36:174",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "WAD",
                        "nameLocation": "649:3:174",
                        "scope": 73184,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73036,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "623:7:174",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "31653138",
                            "id": 73037,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "655:4:174",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73054,
                        "nodeType": "FunctionDefinition",
                        "src": "704:164:174",
                        "nodes": [],
                        "body": {
                            "id": 73053,
                            "nodeType": "Block",
                            "src": "778:90:174",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73048,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73040,
                                                "src": "806:1:174",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73049,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73042,
                                                "src": "809:1:174",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73050,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73038,
                                                "src": "812:3:174",
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
                                            "id": 73047,
                                            "name": "mulDivDown",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73115,
                                            "src": "795:10:174",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 73051,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "795:21:174",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73046,
                                    "id": 73052,
                                    "nodeType": "Return",
                                    "src": "788:28:174"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulWadDown",
                        "nameLocation": "713:10:174",
                        "parameters": {
                            "id": 73043,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73040,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "732:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73054,
                                    "src": "724:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73039,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "724:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73042,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "743:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73054,
                                    "src": "735:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73041,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "735:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "723:22:174"
                        },
                        "returnParameters": {
                            "id": 73046,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73045,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73054,
                                    "src": "769:7:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73044,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "769:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "768:9:174"
                        },
                        "scope": 73184,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73070,
                        "nodeType": "FunctionDefinition",
                        "src": "874:158:174",
                        "nodes": [],
                        "body": {
                            "id": 73069,
                            "nodeType": "Block",
                            "src": "946:86:174",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73064,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73056,
                                                "src": "972:1:174",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73065,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73058,
                                                "src": "975:1:174",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73066,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73038,
                                                "src": "978:3:174",
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
                                            "id": 73063,
                                            "name": "mulDivUp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73128,
                                            "src": "963:8:174",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 73067,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "963:19:174",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73062,
                                    "id": 73068,
                                    "nodeType": "Return",
                                    "src": "956:26:174"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulWadUp",
                        "nameLocation": "883:8:174",
                        "parameters": {
                            "id": 73059,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73056,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "900:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73070,
                                    "src": "892:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73055,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "892:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73058,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "911:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73070,
                                    "src": "903:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73057,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "903:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "891:22:174"
                        },
                        "returnParameters": {
                            "id": 73062,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73061,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73070,
                                    "src": "937:7:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73060,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "937:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "936:9:174"
                        },
                        "scope": 73184,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73086,
                        "nodeType": "FunctionDefinition",
                        "src": "1038:164:174",
                        "nodes": [],
                        "body": {
                            "id": 73085,
                            "nodeType": "Block",
                            "src": "1112:90:174",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73080,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73072,
                                                "src": "1140:1:174",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73081,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73038,
                                                "src": "1143:3:174",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73082,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73074,
                                                "src": "1148:1:174",
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
                                            "id": 73079,
                                            "name": "mulDivDown",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73115,
                                            "src": "1129:10:174",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 73083,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1129:21:174",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73078,
                                    "id": 73084,
                                    "nodeType": "Return",
                                    "src": "1122:28:174"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divWadDown",
                        "nameLocation": "1047:10:174",
                        "parameters": {
                            "id": 73075,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73072,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1066:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73086,
                                    "src": "1058:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73071,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1058:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73074,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1077:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73086,
                                    "src": "1069:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73073,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1069:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1057:22:174"
                        },
                        "returnParameters": {
                            "id": 73078,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73077,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73086,
                                    "src": "1103:7:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73076,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1103:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1102:9:174"
                        },
                        "scope": 73184,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73102,
                        "nodeType": "FunctionDefinition",
                        "src": "1208:158:174",
                        "nodes": [],
                        "body": {
                            "id": 73101,
                            "nodeType": "Block",
                            "src": "1280:86:174",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73096,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73088,
                                                "src": "1306:1:174",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73097,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73038,
                                                "src": "1309:3:174",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73098,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73090,
                                                "src": "1314:1:174",
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
                                            "id": 73095,
                                            "name": "mulDivUp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73128,
                                            "src": "1297:8:174",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 73099,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1297:19:174",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73094,
                                    "id": 73100,
                                    "nodeType": "Return",
                                    "src": "1290:26:174"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divWadUp",
                        "nameLocation": "1217:8:174",
                        "parameters": {
                            "id": 73091,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73088,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1234:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73102,
                                    "src": "1226:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73087,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1226:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73090,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1245:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73102,
                                    "src": "1237:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73089,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1237:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1225:22:174"
                        },
                        "returnParameters": {
                            "id": 73094,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73093,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73102,
                                    "src": "1271:7:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73092,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1271:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1270:9:174"
                        },
                        "scope": 73184,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73115,
                        "nodeType": "FunctionDefinition",
                        "src": "1564:526:174",
                        "nodes": [],
                        "body": {
                            "id": 73114,
                            "nodeType": "Block",
                            "src": "1691:399:174",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "1753:331:174",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "1936:44:174",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "1961:1:174",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "1964:1:174",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1954:6:174"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "1954:12:174"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "1954:12:174"
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
                                                                    "src": "1878:11:174"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "1902:1:174"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "1908:1:174"
                                                                                        },
                                                                                        {
                                                                                            "arguments": [
                                                                                                {
                                                                                                    "name": "MAX_UINT256",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "1915:11:174"
                                                                                                },
                                                                                                {
                                                                                                    "name": "y",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "1928:1:174"
                                                                                                }
                                                                                            ],
                                                                                            "functionName": {
                                                                                                "name": "div",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "1911:3:174"
                                                                                            },
                                                                                            "nodeType": "YulFunctionCall",
                                                                                            "src": "1911:19:174"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "gt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "1905:2:174"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "1905:26:174"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "1898:3:174"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "1898:34:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "iszero",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "1891:6:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "1891:42:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1874:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1874:60:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1867:6:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1867:68:174"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "1864:116:174"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2042:32:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "x",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2055:1:174"
                                                                },
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2058:1:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2051:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2051:9:174"
                                                        },
                                                        {
                                                            "name": "denominator",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2062:11:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "div",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2047:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2047:27:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2042:1:174"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73035,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1915:11:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73108,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1878:11:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73108,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2062:11:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73104,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1908:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73104,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2055:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73106,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1902:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73106,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1928:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73106,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2058:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73111,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2042:1:174",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73113,
                                    "nodeType": "InlineAssembly",
                                    "src": "1744:340:174"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivDown",
                        "nameLocation": "1573:10:174",
                        "parameters": {
                            "id": 73109,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73104,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1601:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73115,
                                    "src": "1593:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73103,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1593:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73106,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1620:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73115,
                                    "src": "1612:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73105,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1612:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73108,
                                    "mutability": "mutable",
                                    "name": "denominator",
                                    "nameLocation": "1639:11:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73115,
                                    "src": "1631:19:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73107,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1631:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1583:73:174"
                        },
                        "returnParameters": {
                            "id": 73112,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73111,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "1688:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73115,
                                    "src": "1680:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73110,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1680:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1679:11:174"
                        },
                        "scope": 73184,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73128,
                        "nodeType": "FunctionDefinition",
                        "src": "2096:672:174",
                        "nodes": [],
                        "body": {
                            "id": 73127,
                            "nodeType": "Block",
                            "src": "2221:547:174",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "2283:479:174",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "2466:44:174",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "2491:1:174",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "2494:1:174",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2484:6:174"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "2484:12:174"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "2484:12:174"
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
                                                                    "src": "2408:11:174"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "2432:1:174"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "2438:1:174"
                                                                                        },
                                                                                        {
                                                                                            "arguments": [
                                                                                                {
                                                                                                    "name": "MAX_UINT256",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "2445:11:174"
                                                                                                },
                                                                                                {
                                                                                                    "name": "y",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "2458:1:174"
                                                                                                }
                                                                                            ],
                                                                                            "functionName": {
                                                                                                "name": "div",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "2441:3:174"
                                                                                            },
                                                                                            "nodeType": "YulFunctionCall",
                                                                                            "src": "2441:19:174"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "gt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "2435:2:174"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "2435:26:174"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "2428:3:174"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "2428:34:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "iszero",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2421:6:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2421:42:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2404:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2404:60:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2397:6:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2397:68:174"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "2394:116:174"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2679:73:174",
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
                                                                                    "src": "2699:1:174"
                                                                                },
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "2702:1:174"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "2695:3:174"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "2695:9:174"
                                                                        },
                                                                        {
                                                                            "name": "denominator",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2706:11:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mod",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2691:3:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2691:27:174"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "2720:1:174",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "gt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2688:2:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2688:34:174"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2732:1:174"
                                                                        },
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2735:1:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mul",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2728:3:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2728:9:174"
                                                                },
                                                                {
                                                                    "name": "denominator",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2739:11:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "div",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2724:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2724:27:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2684:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2684:68:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2679:1:174"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73035,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2445:11:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73121,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2408:11:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73121,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2706:11:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73121,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2739:11:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73117,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2438:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73117,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2699:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73117,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2732:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73119,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2432:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73119,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2458:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73119,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2702:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73119,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2735:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73124,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2679:1:174",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73126,
                                    "nodeType": "InlineAssembly",
                                    "src": "2274:488:174"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivUp",
                        "nameLocation": "2105:8:174",
                        "parameters": {
                            "id": 73122,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73117,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2131:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73128,
                                    "src": "2123:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73116,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2123:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73119,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "2150:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73128,
                                    "src": "2142:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73118,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2142:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73121,
                                    "mutability": "mutable",
                                    "name": "denominator",
                                    "nameLocation": "2169:11:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73128,
                                    "src": "2161:19:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73120,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2161:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2113:73:174"
                        },
                        "returnParameters": {
                            "id": 73125,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73124,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "2218:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73128,
                                    "src": "2210:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73123,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2210:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2209:11:174"
                        },
                        "scope": 73184,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73141,
                        "nodeType": "FunctionDefinition",
                        "src": "2774:2778:174",
                        "nodes": [],
                        "body": {
                            "id": 73140,
                            "nodeType": "Block",
                            "src": "2890:2662:174",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "2952:2594:174",
                                        "statements": [
                                            {
                                                "cases": [
                                                    {
                                                        "body": {
                                                            "nodeType": "YulBlock",
                                                            "src": "2994:254:174",
                                                            "statements": [
                                                                {
                                                                    "cases": [
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3044:85:174",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3100:11:174",
                                                                                        "value": {
                                                                                            "name": "scalar",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3105:6:174"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3100:1:174"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3037:92:174",
                                                                            "value": {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3042:1:174",
                                                                                "type": "",
                                                                                "value": "0"
                                                                            }
                                                                        },
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3154:80:174",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3210:6:174",
                                                                                        "value": {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "3215:1:174",
                                                                                            "type": "",
                                                                                            "value": "0"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3210:1:174"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3146:88:174",
                                                                            "value": "default"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "name": "n",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3019:1:174"
                                                                    },
                                                                    "nodeType": "YulSwitch",
                                                                    "src": "3012:222:174"
                                                                }
                                                            ]
                                                        },
                                                        "nodeType": "YulCase",
                                                        "src": "2987:261:174",
                                                        "value": {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2992:1:174",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    },
                                                    {
                                                        "body": {
                                                            "nodeType": "YulBlock",
                                                            "src": "3269:2267:174",
                                                            "statements": [
                                                                {
                                                                    "cases": [
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3327:115:174",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3413:11:174",
                                                                                        "value": {
                                                                                            "name": "scalar",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3418:6:174"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3413:1:174"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3320:122:174",
                                                                            "value": {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3325:1:174",
                                                                                "type": "",
                                                                                "value": "0"
                                                                            }
                                                                        },
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3467:104:174",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3547:6:174",
                                                                                        "value": {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3552:1:174"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3547:1:174"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3459:112:174",
                                                                            "value": "default"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "n",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "3298:1:174"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3301:1:174",
                                                                                "type": "",
                                                                                "value": "2"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "mod",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3294:3:174"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "3294:9:174"
                                                                    },
                                                                    "nodeType": "YulSwitch",
                                                                    "src": "3287:284:174"
                                                                },
                                                                {
                                                                    "nodeType": "YulVariableDeclaration",
                                                                    "src": "3651:26:174",
                                                                    "value": {
                                                                        "arguments": [
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3667:1:174",
                                                                                "type": "",
                                                                                "value": "1"
                                                                            },
                                                                            {
                                                                                "name": "scalar",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "3670:6:174"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "shr",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3663:3:174"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "3663:14:174"
                                                                    },
                                                                    "variables": [
                                                                        {
                                                                            "name": "half",
                                                                            "nodeType": "YulTypedName",
                                                                            "src": "3655:4:174",
                                                                            "type": ""
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "body": {
                                                                        "nodeType": "YulBlock",
                                                                        "src": "3951:1571:174",
                                                                        "statements": [
                                                                            {
                                                                                "body": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "4125:60:174",
                                                                                    "statements": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4158:1:174",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4161:1:174",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "revert",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4151:6:174"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4151:12:174"
                                                                                            },
                                                                                            "nodeType": "YulExpressionStatement",
                                                                                            "src": "4151:12:174"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "condition": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "4117:3:174",
                                                                                            "type": "",
                                                                                            "value": "128"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4122:1:174"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4113:3:174"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4113:11:174"
                                                                                },
                                                                                "nodeType": "YulIf",
                                                                                "src": "4110:75:174"
                                                                            },
                                                                            {
                                                                                "nodeType": "YulVariableDeclaration",
                                                                                "src": "4247:19:174",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4261:1:174"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4264:1:174"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mul",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4257:3:174"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4257:9:174"
                                                                                },
                                                                                "variables": [
                                                                                    {
                                                                                        "name": "xx",
                                                                                        "nodeType": "YulTypedName",
                                                                                        "src": "4251:2:174",
                                                                                        "type": ""
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "nodeType": "YulVariableDeclaration",
                                                                                "src": "4340:28:174",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "xx",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4359:2:174"
                                                                                        },
                                                                                        {
                                                                                            "name": "half",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4363:4:174"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "add",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4355:3:174"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4355:13:174"
                                                                                },
                                                                                "variables": [
                                                                                    {
                                                                                        "name": "xxRound",
                                                                                        "nodeType": "YulTypedName",
                                                                                        "src": "4344:7:174",
                                                                                        "type": ""
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "body": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "4464:60:174",
                                                                                    "statements": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4497:1:174",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4500:1:174",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "revert",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4490:6:174"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4490:12:174"
                                                                                            },
                                                                                            "nodeType": "YulExpressionStatement",
                                                                                            "src": "4490:12:174"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "condition": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "xxRound",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4451:7:174"
                                                                                        },
                                                                                        {
                                                                                            "name": "xx",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4460:2:174"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "lt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4448:2:174"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4448:15:174"
                                                                                },
                                                                                "nodeType": "YulIf",
                                                                                "src": "4445:79:174"
                                                                            },
                                                                            {
                                                                                "nodeType": "YulAssignment",
                                                                                "src": "4594:25:174",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "xxRound",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4603:7:174"
                                                                                        },
                                                                                        {
                                                                                            "name": "scalar",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4612:6:174"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "div",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4599:3:174"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4599:20:174"
                                                                                },
                                                                                "variableNames": [
                                                                                    {
                                                                                        "name": "x",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4594:1:174"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "body": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "4691:813:174",
                                                                                    "statements": [
                                                                                        {
                                                                                            "nodeType": "YulVariableDeclaration",
                                                                                            "src": "4759:19:174",
                                                                                            "value": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "z",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "4773:1:174"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "x",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "4776:1:174"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "mul",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4769:3:174"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4769:9:174"
                                                                                            },
                                                                                            "variables": [
                                                                                                {
                                                                                                    "name": "zx",
                                                                                                    "nodeType": "YulTypedName",
                                                                                                    "src": "4763:2:174",
                                                                                                    "type": ""
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "body": {
                                                                                                "nodeType": "YulBlock",
                                                                                                "src": "4881:209:174",
                                                                                                "statements": [
                                                                                                    {
                                                                                                        "body": {
                                                                                                            "nodeType": "YulBlock",
                                                                                                            "src": "4988:76:174",
                                                                                                            "statements": [
                                                                                                                {
                                                                                                                    "expression": {
                                                                                                                        "arguments": [
                                                                                                                            {
                                                                                                                                "kind": "number",
                                                                                                                                "nodeType": "YulLiteral",
                                                                                                                                "src": "5029:1:174",
                                                                                                                                "type": "",
                                                                                                                                "value": "0"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "kind": "number",
                                                                                                                                "nodeType": "YulLiteral",
                                                                                                                                "src": "5032:1:174",
                                                                                                                                "type": "",
                                                                                                                                "value": "0"
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "functionName": {
                                                                                                                            "name": "revert",
                                                                                                                            "nodeType": "YulIdentifier",
                                                                                                                            "src": "5022:6:174"
                                                                                                                        },
                                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                                        "src": "5022:12:174"
                                                                                                                    },
                                                                                                                    "nodeType": "YulExpressionStatement",
                                                                                                                    "src": "5022:12:174"
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
                                                                                                                            "src": "4984:1:174"
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "functionName": {
                                                                                                                        "name": "iszero",
                                                                                                                        "nodeType": "YulIdentifier",
                                                                                                                        "src": "4977:6:174"
                                                                                                                    },
                                                                                                                    "nodeType": "YulFunctionCall",
                                                                                                                    "src": "4977:9:174"
                                                                                                                }
                                                                                                            ],
                                                                                                            "functionName": {
                                                                                                                "name": "iszero",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "4970:6:174"
                                                                                                            },
                                                                                                            "nodeType": "YulFunctionCall",
                                                                                                            "src": "4970:17:174"
                                                                                                        },
                                                                                                        "nodeType": "YulIf",
                                                                                                        "src": "4967:97:174"
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
                                                                                                                        "src": "4869:2:174"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "name": "x",
                                                                                                                        "nodeType": "YulIdentifier",
                                                                                                                        "src": "4873:1:174"
                                                                                                                    }
                                                                                                                ],
                                                                                                                "functionName": {
                                                                                                                    "name": "div",
                                                                                                                    "nodeType": "YulIdentifier",
                                                                                                                    "src": "4865:3:174"
                                                                                                                },
                                                                                                                "nodeType": "YulFunctionCall",
                                                                                                                "src": "4865:10:174"
                                                                                                            },
                                                                                                            {
                                                                                                                "name": "z",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "4877:1:174"
                                                                                                            }
                                                                                                        ],
                                                                                                        "functionName": {
                                                                                                            "name": "eq",
                                                                                                            "nodeType": "YulIdentifier",
                                                                                                            "src": "4862:2:174"
                                                                                                        },
                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                        "src": "4862:17:174"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "iszero",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4855:6:174"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4855:25:174"
                                                                                            },
                                                                                            "nodeType": "YulIf",
                                                                                            "src": "4852:238:174"
                                                                                        },
                                                                                        {
                                                                                            "nodeType": "YulVariableDeclaration",
                                                                                            "src": "5172:28:174",
                                                                                            "value": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "zx",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5191:2:174"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "half",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5195:4:174"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "add",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5187:3:174"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "5187:13:174"
                                                                                            },
                                                                                            "variables": [
                                                                                                {
                                                                                                    "name": "zxRound",
                                                                                                    "nodeType": "YulTypedName",
                                                                                                    "src": "5176:7:174",
                                                                                                    "type": ""
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "body": {
                                                                                                "nodeType": "YulBlock",
                                                                                                "src": "5304:68:174",
                                                                                                "statements": [
                                                                                                    {
                                                                                                        "expression": {
                                                                                                            "arguments": [
                                                                                                                {
                                                                                                                    "kind": "number",
                                                                                                                    "nodeType": "YulLiteral",
                                                                                                                    "src": "5341:1:174",
                                                                                                                    "type": "",
                                                                                                                    "value": "0"
                                                                                                                },
                                                                                                                {
                                                                                                                    "kind": "number",
                                                                                                                    "nodeType": "YulLiteral",
                                                                                                                    "src": "5344:1:174",
                                                                                                                    "type": "",
                                                                                                                    "value": "0"
                                                                                                                }
                                                                                                            ],
                                                                                                            "functionName": {
                                                                                                                "name": "revert",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "5334:6:174"
                                                                                                            },
                                                                                                            "nodeType": "YulFunctionCall",
                                                                                                            "src": "5334:12:174"
                                                                                                        },
                                                                                                        "nodeType": "YulExpressionStatement",
                                                                                                        "src": "5334:12:174"
                                                                                                    }
                                                                                                ]
                                                                                            },
                                                                                            "condition": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "zxRound",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5291:7:174"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "zx",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5300:2:174"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "lt",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5288:2:174"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "5288:15:174"
                                                                                            },
                                                                                            "nodeType": "YulIf",
                                                                                            "src": "5285:87:174"
                                                                                        },
                                                                                        {
                                                                                            "nodeType": "YulAssignment",
                                                                                            "src": "5457:25:174",
                                                                                            "value": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "zxRound",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5466:7:174"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "scalar",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5475:6:174"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "div",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5462:3:174"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "5462:20:174"
                                                                                            },
                                                                                            "variableNames": [
                                                                                                {
                                                                                                    "name": "z",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5457:1:174"
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
                                                                                            "src": "4685:1:174"
                                                                                        },
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "4688:1:174",
                                                                                            "type": "",
                                                                                            "value": "2"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mod",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4681:3:174"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4681:9:174"
                                                                                },
                                                                                "nodeType": "YulIf",
                                                                                "src": "4678:826:174"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "condition": {
                                                                        "name": "n",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3824:1:174"
                                                                    },
                                                                    "nodeType": "YulForLoop",
                                                                    "post": {
                                                                        "nodeType": "YulBlock",
                                                                        "src": "3826:124:174",
                                                                        "statements": [
                                                                            {
                                                                                "nodeType": "YulAssignment",
                                                                                "src": "3918:14:174",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "3927:1:174",
                                                                                            "type": "",
                                                                                            "value": "1"
                                                                                        },
                                                                                        {
                                                                                            "name": "n",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3930:1:174"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3923:3:174"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "3923:9:174"
                                                                                },
                                                                                "variableNames": [
                                                                                    {
                                                                                        "name": "n",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3918:1:174"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    "pre": {
                                                                        "nodeType": "YulBlock",
                                                                        "src": "3699:124:174",
                                                                        "statements": [
                                                                            {
                                                                                "nodeType": "YulAssignment",
                                                                                "src": "3791:14:174",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "3800:1:174",
                                                                                            "type": "",
                                                                                            "value": "1"
                                                                                        },
                                                                                        {
                                                                                            "name": "n",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3803:1:174"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3796:3:174"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "3796:9:174"
                                                                                },
                                                                                "variableNames": [
                                                                                    {
                                                                                        "name": "n",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3791:1:174"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    "src": "3695:1827:174"
                                                                }
                                                            ]
                                                        },
                                                        "nodeType": "YulCase",
                                                        "src": "3261:2275:174",
                                                        "value": "default"
                                                    }
                                                ],
                                                "expression": {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2973:1:174"
                                                },
                                                "nodeType": "YulSwitch",
                                                "src": "2966:2570:174"
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73132,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3019:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73132,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3298:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73132,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3791:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73132,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3803:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73132,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3824:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73132,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3918:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73132,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3930:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73132,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4685:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73134,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3105:6:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73134,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3418:6:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73134,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3670:6:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73134,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4612:6:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73134,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5475:6:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73130,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2973:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73130,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3552:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73130,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4122:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73130,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4261:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73130,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4264:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73130,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4594:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73130,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4776:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73130,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4873:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73130,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4984:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73137,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3100:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73137,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3210:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73137,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3413:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73137,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3547:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73137,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4773:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73137,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4877:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73137,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5457:1:174",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73139,
                                    "nodeType": "InlineAssembly",
                                    "src": "2943:2603:174"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rpow",
                        "nameLocation": "2783:4:174",
                        "parameters": {
                            "id": 73135,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73130,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2805:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73141,
                                    "src": "2797:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73129,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2797:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73132,
                                    "mutability": "mutable",
                                    "name": "n",
                                    "nameLocation": "2824:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73141,
                                    "src": "2816:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73131,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2816:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73134,
                                    "mutability": "mutable",
                                    "name": "scalar",
                                    "nameLocation": "2843:6:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73141,
                                    "src": "2835:14:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73133,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2835:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2787:68:174"
                        },
                        "returnParameters": {
                            "id": 73138,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73137,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "2887:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73141,
                                    "src": "2879:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73136,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2879:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2878:11:174"
                        },
                        "scope": 73184,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73150,
                        "nodeType": "FunctionDefinition",
                        "src": "5746:3396:174",
                        "nodes": [],
                        "body": {
                            "id": 73149,
                            "nodeType": "Block",
                            "src": "5805:3337:174",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "5867:3269:174",
                                        "statements": [
                                            {
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "5881:10:174",
                                                "value": {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5890:1:174"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "y",
                                                        "nodeType": "YulTypedName",
                                                        "src": "5885:1:174",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "5971:8:174",
                                                "value": {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5976:3:174",
                                                    "type": "",
                                                    "value": "181"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5971:1:174"
                                                    }
                                                ]
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6465:80:174",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6483:16:174",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6492:3:174",
                                                                        "type": "",
                                                                        "value": "128"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6497:1:174"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6488:3:174"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6488:11:174"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6483:1:174"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6516:15:174",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6525:2:174",
                                                                        "type": "",
                                                                        "value": "64"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6529:1:174"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6521:3:174"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6521:10:174"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6516:1:174"
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
                                                                    "src": "6422:1:174"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6425:37:174",
                                                                    "type": "",
                                                                    "value": "0x10000000000000000000000000000000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6419:2:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6419:44:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6412:6:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6412:52:174"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6409:136:174"
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6598:79:174",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6616:15:174",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6625:2:174",
                                                                        "type": "",
                                                                        "value": "64"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6629:1:174"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6621:3:174"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6621:10:174"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6616:1:174"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6648:15:174",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6657:2:174",
                                                                        "type": "",
                                                                        "value": "32"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6661:1:174"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6653:3:174"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6653:10:174"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6648:1:174"
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
                                                                    "src": "6571:1:174"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6574:21:174",
                                                                    "type": "",
                                                                    "value": "0x1000000000000000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6568:2:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6568:28:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6561:6:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6561:36:174"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6558:119:174"
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6722:79:174",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6740:15:174",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6749:2:174",
                                                                        "type": "",
                                                                        "value": "32"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6753:1:174"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6745:3:174"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6745:10:174"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6740:1:174"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6772:15:174",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6781:2:174",
                                                                        "type": "",
                                                                        "value": "16"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6785:1:174"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6777:3:174"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6777:10:174"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6772:1:174"
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
                                                                    "src": "6703:1:174"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6706:13:174",
                                                                    "type": "",
                                                                    "value": "0x10000000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6700:2:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6700:20:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6693:6:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6693:28:174"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6690:111:174"
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6842:78:174",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6860:15:174",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6869:2:174",
                                                                        "type": "",
                                                                        "value": "16"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6873:1:174"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6865:3:174"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6865:10:174"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6860:1:174"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6892:14:174",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6901:1:174",
                                                                        "type": "",
                                                                        "value": "8"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6904:1:174"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6897:3:174"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6897:9:174"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6892:1:174"
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
                                                                    "src": "6827:1:174"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6830:9:174",
                                                                    "type": "",
                                                                    "value": "0x1000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6824:2:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6824:16:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6817:6:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6817:24:174"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6814:106:174"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8110:35:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8119:2:174",
                                                            "type": "",
                                                            "value": "18"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8127:1:174"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8134:1:174"
                                                                        },
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "8137:5:174",
                                                                            "type": "",
                                                                            "value": "65536"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "add",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8130:3:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8130:13:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8123:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8123:21:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8115:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8115:30:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8110:1:174"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8306:30:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8315:1:174",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8322:1:174"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8329:1:174"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8332:1:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8325:3:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8325:9:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8318:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8318:17:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8311:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8311:25:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8306:1:174"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8349:30:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8358:1:174",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8365:1:174"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8372:1:174"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8375:1:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8368:3:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8368:9:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8361:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8361:17:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8354:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8354:25:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8349:1:174"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8392:30:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8401:1:174",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8408:1:174"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8415:1:174"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8418:1:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8411:3:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8411:9:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8404:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8404:17:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8397:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8397:25:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8392:1:174"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8435:30:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8444:1:174",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8451:1:174"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8458:1:174"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8461:1:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8454:3:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8454:9:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8447:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8447:17:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8440:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8440:25:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8435:1:174"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8478:30:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8487:1:174",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8494:1:174"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8501:1:174"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8504:1:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8497:3:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8497:9:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8490:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8490:17:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8483:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8483:25:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8478:1:174"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8521:30:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8530:1:174",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8537:1:174"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8544:1:174"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8547:1:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8540:3:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8540:9:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8533:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8533:17:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8526:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8526:25:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8521:1:174"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8564:30:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8573:1:174",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8580:1:174"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8587:1:174"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8590:1:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8583:3:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8583:9:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8576:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8576:17:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8569:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8569:25:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8564:1:174"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9097:29:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "z",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9106:1:174"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "9116:1:174"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "9119:1:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "9112:3:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "9112:9:174"
                                                                },
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "9123:1:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9109:2:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9109:16:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9102:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "9102:24:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9097:1:174"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73143,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5890:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73143,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8329:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73143,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8372:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73143,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8415:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73143,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8458:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73143,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8501:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73143,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8544:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73143,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8587:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73143,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9116:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5971:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6516:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6529:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6648:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6661:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6772:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6785:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6892:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6904:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8110:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8127:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8306:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8322:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8332:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8349:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8365:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8375:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8392:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8408:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8418:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8435:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8451:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8461:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8478:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8494:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8504:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8521:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8537:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8547:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8564:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8580:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8590:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9097:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9106:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9119:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73146,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9123:1:174",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73148,
                                    "nodeType": "InlineAssembly",
                                    "src": "5858:3278:174"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sqrt",
                        "nameLocation": "5755:4:174",
                        "parameters": {
                            "id": 73144,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73143,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "5768:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73150,
                                    "src": "5760:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73142,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5760:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5759:11:174"
                        },
                        "returnParameters": {
                            "id": 73147,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73146,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "5802:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73150,
                                    "src": "5794:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73145,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5794:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5793:11:174"
                        },
                        "scope": 73184,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73161,
                        "nodeType": "FunctionDefinition",
                        "src": "9148:282:174",
                        "nodes": [],
                        "body": {
                            "id": 73160,
                            "nodeType": "Block",
                            "src": "9223:207:174",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "9285:139:174",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9400:14:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "x",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9409:1:174"
                                                        },
                                                        {
                                                            "name": "y",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9412:1:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mod",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9405:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "9405:9:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9400:1:174"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73152,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9409:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73154,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9412:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73157,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9400:1:174",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73159,
                                    "nodeType": "InlineAssembly",
                                    "src": "9276:148:174"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unsafeMod",
                        "nameLocation": "9157:9:174",
                        "parameters": {
                            "id": 73155,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73152,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "9175:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73161,
                                    "src": "9167:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73151,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9167:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73154,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "9186:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73161,
                                    "src": "9178:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73153,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9178:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9166:22:174"
                        },
                        "returnParameters": {
                            "id": 73158,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73157,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "9220:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73161,
                                    "src": "9212:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73156,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9212:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9211:11:174"
                        },
                        "scope": 73184,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73172,
                        "nodeType": "FunctionDefinition",
                        "src": "9436:285:174",
                        "nodes": [],
                        "body": {
                            "id": 73171,
                            "nodeType": "Block",
                            "src": "9511:210:174",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "9573:142:174",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9691:14:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "x",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9700:1:174"
                                                        },
                                                        {
                                                            "name": "y",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9703:1:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "div",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9696:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "9696:9:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "r",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9691:1:174"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73168,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9691:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73163,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9700:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73165,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9703:1:174",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73170,
                                    "nodeType": "InlineAssembly",
                                    "src": "9564:151:174"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unsafeDiv",
                        "nameLocation": "9445:9:174",
                        "parameters": {
                            "id": 73166,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73163,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "9463:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73172,
                                    "src": "9455:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73162,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9455:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73165,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "9474:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73172,
                                    "src": "9466:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73164,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9466:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9454:22:174"
                        },
                        "returnParameters": {
                            "id": 73169,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73168,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "9508:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73172,
                                    "src": "9500:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73167,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9500:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9499:11:174"
                        },
                        "scope": 73184,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73183,
                        "nodeType": "FunctionDefinition",
                        "src": "9727:324:174",
                        "nodes": [],
                        "body": {
                            "id": 73182,
                            "nodeType": "Block",
                            "src": "9804:247:174",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "9866:179:174",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9998:37:174",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "10014:1:174"
                                                                        },
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "10017:1:174"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mod",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "10010:3:174"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "10010:9:174"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "10021:1:174",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "gt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "10007:2:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "10007:16:174"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "x",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "10029:1:174"
                                                                },
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "10032:1:174"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "div",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "10025:3:174"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "10025:9:174"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "10003:3:174"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "10003:32:174"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9998:1:174"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73174,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10014:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73174,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10029:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73176,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10017:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73176,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10032:1:174",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73179,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9998:1:174",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73181,
                                    "nodeType": "InlineAssembly",
                                    "src": "9857:188:174"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unsafeDivUp",
                        "nameLocation": "9736:11:174",
                        "parameters": {
                            "id": 73177,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73174,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "9756:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73183,
                                    "src": "9748:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73173,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9748:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73176,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "9767:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73183,
                                    "src": "9759:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73175,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9759:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9747:22:174"
                        },
                        "returnParameters": {
                            "id": 73180,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73179,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "9801:1:174",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73183,
                                    "src": "9793:9:174",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73178,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9793:7:174",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9792:11:174"
                        },
                        "scope": 73184,
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
                    "id": 73028,
                    "nodeType": "StructuredDocumentation",
                    "src": "68:273:174",
                    "text": "@notice Arithmetic library with operations for fixed-point numbers.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @author Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    73184
                ],
                "name": "FixedPointMathLib",
                "nameLocation": "349:17:174",
                "scope": 73185,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "AGPL-3.0-only"
    },
    "id": 174
};
