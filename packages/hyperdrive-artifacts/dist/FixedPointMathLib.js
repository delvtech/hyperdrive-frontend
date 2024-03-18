export const FixedPointMathLib = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207833532335256498efdbb7d8373135640993cd82a007b563f92be27d6ba4d9c364736f6c63430008140033",
        "sourceMap": "341:9712:176:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;341:9712:176;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207833532335256498efdbb7d8373135640993cd82a007b563f92be27d6ba4d9c364736f6c63430008140033",
        "sourceMap": "341:9712:176:-:0;;;;;;;;",
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
        "id": 73541,
        "exportedSymbols": {
            "FixedPointMathLib": [
                73540
            ]
        },
        "nodeType": "SourceUnit",
        "src": "42:10012:176",
        "nodes": [
            {
                "id": 73383,
                "nodeType": "PragmaDirective",
                "src": "42:24:176",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.8",
                    ".0"
                ]
            },
            {
                "id": 73540,
                "nodeType": "ContractDefinition",
                "src": "341:9712:176",
                "nodes": [
                    {
                        "id": 73391,
                        "nodeType": "VariableDeclaration",
                        "src": "566:50:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_UINT256",
                        "nameLocation": "592:11:176",
                        "scope": 73540,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73385,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "566:7:176",
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
                            "id": 73390,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "leftExpression": {
                                "commonType": {
                                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                                },
                                "id": 73388,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                    "hexValue": "32",
                                    "id": 73386,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "606:1:176",
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
                                    "id": 73387,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "609:3:176",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_rational_256_by_1",
                                        "typeString": "int_const 256"
                                    },
                                    "value": "256"
                                },
                                "src": "606:6:176",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                                }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                                "hexValue": "31",
                                "id": 73389,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "615:1:176",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                },
                                "value": "1"
                            },
                            "src": "606:10:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                                "typeString": "int_const 1157...(70 digits omitted)...9935"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73394,
                        "nodeType": "VariableDeclaration",
                        "src": "623:36:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "WAD",
                        "nameLocation": "649:3:176",
                        "scope": 73540,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73392,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "623:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "31653138",
                            "id": 73393,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "655:4:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73410,
                        "nodeType": "FunctionDefinition",
                        "src": "704:164:176",
                        "nodes": [],
                        "body": {
                            "id": 73409,
                            "nodeType": "Block",
                            "src": "778:90:176",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73404,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73396,
                                                "src": "806:1:176",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73405,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73398,
                                                "src": "809:1:176",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73406,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73394,
                                                "src": "812:3:176",
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
                                            "id": 73403,
                                            "name": "mulDivDown",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73471,
                                            "src": "795:10:176",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 73407,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "795:21:176",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73402,
                                    "id": 73408,
                                    "nodeType": "Return",
                                    "src": "788:28:176"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulWadDown",
                        "nameLocation": "713:10:176",
                        "parameters": {
                            "id": 73399,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73396,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "732:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73410,
                                    "src": "724:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73395,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "724:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73398,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "743:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73410,
                                    "src": "735:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73397,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "735:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "723:22:176"
                        },
                        "returnParameters": {
                            "id": 73402,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73401,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73410,
                                    "src": "769:7:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73400,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "769:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "768:9:176"
                        },
                        "scope": 73540,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73426,
                        "nodeType": "FunctionDefinition",
                        "src": "874:158:176",
                        "nodes": [],
                        "body": {
                            "id": 73425,
                            "nodeType": "Block",
                            "src": "946:86:176",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73420,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73412,
                                                "src": "972:1:176",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73421,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73414,
                                                "src": "975:1:176",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73422,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73394,
                                                "src": "978:3:176",
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
                                            "id": 73419,
                                            "name": "mulDivUp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73484,
                                            "src": "963:8:176",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 73423,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "963:19:176",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73418,
                                    "id": 73424,
                                    "nodeType": "Return",
                                    "src": "956:26:176"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulWadUp",
                        "nameLocation": "883:8:176",
                        "parameters": {
                            "id": 73415,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73412,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "900:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73426,
                                    "src": "892:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73411,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "892:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73414,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "911:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73426,
                                    "src": "903:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73413,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "903:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "891:22:176"
                        },
                        "returnParameters": {
                            "id": 73418,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73417,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73426,
                                    "src": "937:7:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73416,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "937:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "936:9:176"
                        },
                        "scope": 73540,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73442,
                        "nodeType": "FunctionDefinition",
                        "src": "1038:164:176",
                        "nodes": [],
                        "body": {
                            "id": 73441,
                            "nodeType": "Block",
                            "src": "1112:90:176",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73436,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73428,
                                                "src": "1140:1:176",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73437,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73394,
                                                "src": "1143:3:176",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73438,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73430,
                                                "src": "1148:1:176",
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
                                            "id": 73435,
                                            "name": "mulDivDown",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73471,
                                            "src": "1129:10:176",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 73439,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1129:21:176",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73434,
                                    "id": 73440,
                                    "nodeType": "Return",
                                    "src": "1122:28:176"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divWadDown",
                        "nameLocation": "1047:10:176",
                        "parameters": {
                            "id": 73431,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73428,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1066:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73442,
                                    "src": "1058:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73427,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1058:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73430,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1077:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73442,
                                    "src": "1069:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73429,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1069:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1057:22:176"
                        },
                        "returnParameters": {
                            "id": 73434,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73433,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73442,
                                    "src": "1103:7:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73432,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1103:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1102:9:176"
                        },
                        "scope": 73540,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73458,
                        "nodeType": "FunctionDefinition",
                        "src": "1208:158:176",
                        "nodes": [],
                        "body": {
                            "id": 73457,
                            "nodeType": "Block",
                            "src": "1280:86:176",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73452,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73444,
                                                "src": "1306:1:176",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73453,
                                                "name": "WAD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73394,
                                                "src": "1309:3:176",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73454,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73446,
                                                "src": "1314:1:176",
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
                                            "id": 73451,
                                            "name": "mulDivUp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73484,
                                            "src": "1297:8:176",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 73455,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1297:19:176",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73450,
                                    "id": 73456,
                                    "nodeType": "Return",
                                    "src": "1290:26:176"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divWadUp",
                        "nameLocation": "1217:8:176",
                        "parameters": {
                            "id": 73447,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73444,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1234:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73458,
                                    "src": "1226:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73443,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1226:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73446,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1245:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73458,
                                    "src": "1237:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73445,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1237:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1225:22:176"
                        },
                        "returnParameters": {
                            "id": 73450,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73449,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73458,
                                    "src": "1271:7:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73448,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1271:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1270:9:176"
                        },
                        "scope": 73540,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73471,
                        "nodeType": "FunctionDefinition",
                        "src": "1564:526:176",
                        "nodes": [],
                        "body": {
                            "id": 73470,
                            "nodeType": "Block",
                            "src": "1691:399:176",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "1753:331:176",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "1936:44:176",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "1961:1:176",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "1964:1:176",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1954:6:176"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "1954:12:176"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "1954:12:176"
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
                                                                    "src": "1878:11:176"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "1902:1:176"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "1908:1:176"
                                                                                        },
                                                                                        {
                                                                                            "arguments": [
                                                                                                {
                                                                                                    "name": "MAX_UINT256",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "1915:11:176"
                                                                                                },
                                                                                                {
                                                                                                    "name": "y",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "1928:1:176"
                                                                                                }
                                                                                            ],
                                                                                            "functionName": {
                                                                                                "name": "div",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "1911:3:176"
                                                                                            },
                                                                                            "nodeType": "YulFunctionCall",
                                                                                            "src": "1911:19:176"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "gt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "1905:2:176"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "1905:26:176"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "1898:3:176"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "1898:34:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "iszero",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "1891:6:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "1891:42:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1874:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1874:60:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1867:6:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1867:68:176"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "1864:116:176"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2042:32:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "x",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2055:1:176"
                                                                },
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2058:1:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2051:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2051:9:176"
                                                        },
                                                        {
                                                            "name": "denominator",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2062:11:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "div",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2047:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2047:27:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2042:1:176"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73391,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1915:11:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73464,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1878:11:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73464,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2062:11:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73460,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1908:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73460,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2055:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73462,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1902:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73462,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1928:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73462,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2058:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73467,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2042:1:176",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73469,
                                    "nodeType": "InlineAssembly",
                                    "src": "1744:340:176"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivDown",
                        "nameLocation": "1573:10:176",
                        "parameters": {
                            "id": 73465,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73460,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1601:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73471,
                                    "src": "1593:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73459,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1593:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73462,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1620:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73471,
                                    "src": "1612:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73461,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1612:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73464,
                                    "mutability": "mutable",
                                    "name": "denominator",
                                    "nameLocation": "1639:11:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73471,
                                    "src": "1631:19:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73463,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1631:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1583:73:176"
                        },
                        "returnParameters": {
                            "id": 73468,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73467,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "1688:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73471,
                                    "src": "1680:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73466,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1680:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1679:11:176"
                        },
                        "scope": 73540,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73484,
                        "nodeType": "FunctionDefinition",
                        "src": "2096:672:176",
                        "nodes": [],
                        "body": {
                            "id": 73483,
                            "nodeType": "Block",
                            "src": "2221:547:176",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "2283:479:176",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "2466:44:176",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "2491:1:176",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "2494:1:176",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2484:6:176"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "2484:12:176"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "2484:12:176"
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
                                                                    "src": "2408:11:176"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "2432:1:176"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "2438:1:176"
                                                                                        },
                                                                                        {
                                                                                            "arguments": [
                                                                                                {
                                                                                                    "name": "MAX_UINT256",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "2445:11:176"
                                                                                                },
                                                                                                {
                                                                                                    "name": "y",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "2458:1:176"
                                                                                                }
                                                                                            ],
                                                                                            "functionName": {
                                                                                                "name": "div",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "2441:3:176"
                                                                                            },
                                                                                            "nodeType": "YulFunctionCall",
                                                                                            "src": "2441:19:176"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "gt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "2435:2:176"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "2435:26:176"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "2428:3:176"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "2428:34:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "iszero",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2421:6:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2421:42:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2404:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2404:60:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2397:6:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2397:68:176"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "2394:116:176"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2679:73:176",
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
                                                                                    "src": "2699:1:176"
                                                                                },
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "2702:1:176"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "2695:3:176"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "2695:9:176"
                                                                        },
                                                                        {
                                                                            "name": "denominator",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2706:11:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mod",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2691:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2691:27:176"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "2720:1:176",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "gt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2688:2:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2688:34:176"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2732:1:176"
                                                                        },
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2735:1:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mul",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2728:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2728:9:176"
                                                                },
                                                                {
                                                                    "name": "denominator",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2739:11:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "div",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2724:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2724:27:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2684:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2684:68:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2679:1:176"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73391,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2445:11:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73477,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2408:11:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73477,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2706:11:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73477,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2739:11:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73473,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2438:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73473,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2699:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73473,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2732:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73475,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2432:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73475,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2458:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73475,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2702:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73475,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2735:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73480,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2679:1:176",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73482,
                                    "nodeType": "InlineAssembly",
                                    "src": "2274:488:176"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivUp",
                        "nameLocation": "2105:8:176",
                        "parameters": {
                            "id": 73478,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73473,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2131:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73484,
                                    "src": "2123:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73472,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2123:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73475,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "2150:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73484,
                                    "src": "2142:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73474,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2142:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73477,
                                    "mutability": "mutable",
                                    "name": "denominator",
                                    "nameLocation": "2169:11:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73484,
                                    "src": "2161:19:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73476,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2161:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2113:73:176"
                        },
                        "returnParameters": {
                            "id": 73481,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73480,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "2218:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73484,
                                    "src": "2210:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73479,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2210:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2209:11:176"
                        },
                        "scope": 73540,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73497,
                        "nodeType": "FunctionDefinition",
                        "src": "2774:2778:176",
                        "nodes": [],
                        "body": {
                            "id": 73496,
                            "nodeType": "Block",
                            "src": "2890:2662:176",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "2952:2594:176",
                                        "statements": [
                                            {
                                                "cases": [
                                                    {
                                                        "body": {
                                                            "nodeType": "YulBlock",
                                                            "src": "2994:254:176",
                                                            "statements": [
                                                                {
                                                                    "cases": [
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3044:85:176",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3100:11:176",
                                                                                        "value": {
                                                                                            "name": "scalar",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3105:6:176"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3100:1:176"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3037:92:176",
                                                                            "value": {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3042:1:176",
                                                                                "type": "",
                                                                                "value": "0"
                                                                            }
                                                                        },
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3154:80:176",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3210:6:176",
                                                                                        "value": {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "3215:1:176",
                                                                                            "type": "",
                                                                                            "value": "0"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3210:1:176"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3146:88:176",
                                                                            "value": "default"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "name": "n",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3019:1:176"
                                                                    },
                                                                    "nodeType": "YulSwitch",
                                                                    "src": "3012:222:176"
                                                                }
                                                            ]
                                                        },
                                                        "nodeType": "YulCase",
                                                        "src": "2987:261:176",
                                                        "value": {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2992:1:176",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    },
                                                    {
                                                        "body": {
                                                            "nodeType": "YulBlock",
                                                            "src": "3269:2267:176",
                                                            "statements": [
                                                                {
                                                                    "cases": [
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3327:115:176",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3413:11:176",
                                                                                        "value": {
                                                                                            "name": "scalar",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3418:6:176"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3413:1:176"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3320:122:176",
                                                                            "value": {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3325:1:176",
                                                                                "type": "",
                                                                                "value": "0"
                                                                            }
                                                                        },
                                                                        {
                                                                            "body": {
                                                                                "nodeType": "YulBlock",
                                                                                "src": "3467:104:176",
                                                                                "statements": [
                                                                                    {
                                                                                        "nodeType": "YulAssignment",
                                                                                        "src": "3547:6:176",
                                                                                        "value": {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3552:1:176"
                                                                                        },
                                                                                        "variableNames": [
                                                                                            {
                                                                                                "name": "z",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "3547:1:176"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "nodeType": "YulCase",
                                                                            "src": "3459:112:176",
                                                                            "value": "default"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "n",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "3298:1:176"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3301:1:176",
                                                                                "type": "",
                                                                                "value": "2"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "mod",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3294:3:176"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "3294:9:176"
                                                                    },
                                                                    "nodeType": "YulSwitch",
                                                                    "src": "3287:284:176"
                                                                },
                                                                {
                                                                    "nodeType": "YulVariableDeclaration",
                                                                    "src": "3651:26:176",
                                                                    "value": {
                                                                        "arguments": [
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "3667:1:176",
                                                                                "type": "",
                                                                                "value": "1"
                                                                            },
                                                                            {
                                                                                "name": "scalar",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "3670:6:176"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "shr",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3663:3:176"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "3663:14:176"
                                                                    },
                                                                    "variables": [
                                                                        {
                                                                            "name": "half",
                                                                            "nodeType": "YulTypedName",
                                                                            "src": "3655:4:176",
                                                                            "type": ""
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "body": {
                                                                        "nodeType": "YulBlock",
                                                                        "src": "3951:1571:176",
                                                                        "statements": [
                                                                            {
                                                                                "body": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "4125:60:176",
                                                                                    "statements": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4158:1:176",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4161:1:176",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "revert",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4151:6:176"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4151:12:176"
                                                                                            },
                                                                                            "nodeType": "YulExpressionStatement",
                                                                                            "src": "4151:12:176"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "condition": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "4117:3:176",
                                                                                            "type": "",
                                                                                            "value": "128"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4122:1:176"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4113:3:176"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4113:11:176"
                                                                                },
                                                                                "nodeType": "YulIf",
                                                                                "src": "4110:75:176"
                                                                            },
                                                                            {
                                                                                "nodeType": "YulVariableDeclaration",
                                                                                "src": "4247:19:176",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4261:1:176"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4264:1:176"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mul",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4257:3:176"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4257:9:176"
                                                                                },
                                                                                "variables": [
                                                                                    {
                                                                                        "name": "xx",
                                                                                        "nodeType": "YulTypedName",
                                                                                        "src": "4251:2:176",
                                                                                        "type": ""
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "nodeType": "YulVariableDeclaration",
                                                                                "src": "4340:28:176",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "xx",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4359:2:176"
                                                                                        },
                                                                                        {
                                                                                            "name": "half",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4363:4:176"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "add",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4355:3:176"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4355:13:176"
                                                                                },
                                                                                "variables": [
                                                                                    {
                                                                                        "name": "xxRound",
                                                                                        "nodeType": "YulTypedName",
                                                                                        "src": "4344:7:176",
                                                                                        "type": ""
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "body": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "4464:60:176",
                                                                                    "statements": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4497:1:176",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4500:1:176",
                                                                                                        "type": "",
                                                                                                        "value": "0"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "revert",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4490:6:176"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4490:12:176"
                                                                                            },
                                                                                            "nodeType": "YulExpressionStatement",
                                                                                            "src": "4490:12:176"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "condition": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "xxRound",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4451:7:176"
                                                                                        },
                                                                                        {
                                                                                            "name": "xx",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4460:2:176"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "lt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4448:2:176"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4448:15:176"
                                                                                },
                                                                                "nodeType": "YulIf",
                                                                                "src": "4445:79:176"
                                                                            },
                                                                            {
                                                                                "nodeType": "YulAssignment",
                                                                                "src": "4594:25:176",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "xxRound",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4603:7:176"
                                                                                        },
                                                                                        {
                                                                                            "name": "scalar",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4612:6:176"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "div",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4599:3:176"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4599:20:176"
                                                                                },
                                                                                "variableNames": [
                                                                                    {
                                                                                        "name": "x",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4594:1:176"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "body": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "4691:813:176",
                                                                                    "statements": [
                                                                                        {
                                                                                            "nodeType": "YulVariableDeclaration",
                                                                                            "src": "4759:19:176",
                                                                                            "value": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "z",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "4773:1:176"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "x",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "4776:1:176"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "mul",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4769:3:176"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4769:9:176"
                                                                                            },
                                                                                            "variables": [
                                                                                                {
                                                                                                    "name": "zx",
                                                                                                    "nodeType": "YulTypedName",
                                                                                                    "src": "4763:2:176",
                                                                                                    "type": ""
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "body": {
                                                                                                "nodeType": "YulBlock",
                                                                                                "src": "4881:209:176",
                                                                                                "statements": [
                                                                                                    {
                                                                                                        "body": {
                                                                                                            "nodeType": "YulBlock",
                                                                                                            "src": "4988:76:176",
                                                                                                            "statements": [
                                                                                                                {
                                                                                                                    "expression": {
                                                                                                                        "arguments": [
                                                                                                                            {
                                                                                                                                "kind": "number",
                                                                                                                                "nodeType": "YulLiteral",
                                                                                                                                "src": "5029:1:176",
                                                                                                                                "type": "",
                                                                                                                                "value": "0"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "kind": "number",
                                                                                                                                "nodeType": "YulLiteral",
                                                                                                                                "src": "5032:1:176",
                                                                                                                                "type": "",
                                                                                                                                "value": "0"
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "functionName": {
                                                                                                                            "name": "revert",
                                                                                                                            "nodeType": "YulIdentifier",
                                                                                                                            "src": "5022:6:176"
                                                                                                                        },
                                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                                        "src": "5022:12:176"
                                                                                                                    },
                                                                                                                    "nodeType": "YulExpressionStatement",
                                                                                                                    "src": "5022:12:176"
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
                                                                                                                            "src": "4984:1:176"
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "functionName": {
                                                                                                                        "name": "iszero",
                                                                                                                        "nodeType": "YulIdentifier",
                                                                                                                        "src": "4977:6:176"
                                                                                                                    },
                                                                                                                    "nodeType": "YulFunctionCall",
                                                                                                                    "src": "4977:9:176"
                                                                                                                }
                                                                                                            ],
                                                                                                            "functionName": {
                                                                                                                "name": "iszero",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "4970:6:176"
                                                                                                            },
                                                                                                            "nodeType": "YulFunctionCall",
                                                                                                            "src": "4970:17:176"
                                                                                                        },
                                                                                                        "nodeType": "YulIf",
                                                                                                        "src": "4967:97:176"
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
                                                                                                                        "src": "4869:2:176"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "name": "x",
                                                                                                                        "nodeType": "YulIdentifier",
                                                                                                                        "src": "4873:1:176"
                                                                                                                    }
                                                                                                                ],
                                                                                                                "functionName": {
                                                                                                                    "name": "div",
                                                                                                                    "nodeType": "YulIdentifier",
                                                                                                                    "src": "4865:3:176"
                                                                                                                },
                                                                                                                "nodeType": "YulFunctionCall",
                                                                                                                "src": "4865:10:176"
                                                                                                            },
                                                                                                            {
                                                                                                                "name": "z",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "4877:1:176"
                                                                                                            }
                                                                                                        ],
                                                                                                        "functionName": {
                                                                                                            "name": "eq",
                                                                                                            "nodeType": "YulIdentifier",
                                                                                                            "src": "4862:2:176"
                                                                                                        },
                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                        "src": "4862:17:176"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "iszero",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4855:6:176"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4855:25:176"
                                                                                            },
                                                                                            "nodeType": "YulIf",
                                                                                            "src": "4852:238:176"
                                                                                        },
                                                                                        {
                                                                                            "nodeType": "YulVariableDeclaration",
                                                                                            "src": "5172:28:176",
                                                                                            "value": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "zx",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5191:2:176"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "half",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5195:4:176"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "add",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5187:3:176"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "5187:13:176"
                                                                                            },
                                                                                            "variables": [
                                                                                                {
                                                                                                    "name": "zxRound",
                                                                                                    "nodeType": "YulTypedName",
                                                                                                    "src": "5176:7:176",
                                                                                                    "type": ""
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "body": {
                                                                                                "nodeType": "YulBlock",
                                                                                                "src": "5304:68:176",
                                                                                                "statements": [
                                                                                                    {
                                                                                                        "expression": {
                                                                                                            "arguments": [
                                                                                                                {
                                                                                                                    "kind": "number",
                                                                                                                    "nodeType": "YulLiteral",
                                                                                                                    "src": "5341:1:176",
                                                                                                                    "type": "",
                                                                                                                    "value": "0"
                                                                                                                },
                                                                                                                {
                                                                                                                    "kind": "number",
                                                                                                                    "nodeType": "YulLiteral",
                                                                                                                    "src": "5344:1:176",
                                                                                                                    "type": "",
                                                                                                                    "value": "0"
                                                                                                                }
                                                                                                            ],
                                                                                                            "functionName": {
                                                                                                                "name": "revert",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "5334:6:176"
                                                                                                            },
                                                                                                            "nodeType": "YulFunctionCall",
                                                                                                            "src": "5334:12:176"
                                                                                                        },
                                                                                                        "nodeType": "YulExpressionStatement",
                                                                                                        "src": "5334:12:176"
                                                                                                    }
                                                                                                ]
                                                                                            },
                                                                                            "condition": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "zxRound",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5291:7:176"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "zx",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5300:2:176"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "lt",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5288:2:176"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "5288:15:176"
                                                                                            },
                                                                                            "nodeType": "YulIf",
                                                                                            "src": "5285:87:176"
                                                                                        },
                                                                                        {
                                                                                            "nodeType": "YulAssignment",
                                                                                            "src": "5457:25:176",
                                                                                            "value": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "zxRound",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5466:7:176"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "scalar",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "5475:6:176"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "div",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5462:3:176"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "5462:20:176"
                                                                                            },
                                                                                            "variableNames": [
                                                                                                {
                                                                                                    "name": "z",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "5457:1:176"
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
                                                                                            "src": "4685:1:176"
                                                                                        },
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "4688:1:176",
                                                                                            "type": "",
                                                                                            "value": "2"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mod",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4681:3:176"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4681:9:176"
                                                                                },
                                                                                "nodeType": "YulIf",
                                                                                "src": "4678:826:176"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "condition": {
                                                                        "name": "n",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3824:1:176"
                                                                    },
                                                                    "nodeType": "YulForLoop",
                                                                    "post": {
                                                                        "nodeType": "YulBlock",
                                                                        "src": "3826:124:176",
                                                                        "statements": [
                                                                            {
                                                                                "nodeType": "YulAssignment",
                                                                                "src": "3918:14:176",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "3927:1:176",
                                                                                            "type": "",
                                                                                            "value": "1"
                                                                                        },
                                                                                        {
                                                                                            "name": "n",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3930:1:176"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3923:3:176"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "3923:9:176"
                                                                                },
                                                                                "variableNames": [
                                                                                    {
                                                                                        "name": "n",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3918:1:176"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    "pre": {
                                                                        "nodeType": "YulBlock",
                                                                        "src": "3699:124:176",
                                                                        "statements": [
                                                                            {
                                                                                "nodeType": "YulAssignment",
                                                                                "src": "3791:14:176",
                                                                                "value": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "3800:1:176",
                                                                                            "type": "",
                                                                                            "value": "1"
                                                                                        },
                                                                                        {
                                                                                            "name": "n",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "3803:1:176"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3796:3:176"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "3796:9:176"
                                                                                },
                                                                                "variableNames": [
                                                                                    {
                                                                                        "name": "n",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "3791:1:176"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    "src": "3695:1827:176"
                                                                }
                                                            ]
                                                        },
                                                        "nodeType": "YulCase",
                                                        "src": "3261:2275:176",
                                                        "value": "default"
                                                    }
                                                ],
                                                "expression": {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2973:1:176"
                                                },
                                                "nodeType": "YulSwitch",
                                                "src": "2966:2570:176"
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73488,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3019:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73488,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3298:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73488,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3791:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73488,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3803:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73488,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3824:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73488,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3918:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73488,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3930:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73488,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4685:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73490,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3105:6:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73490,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3418:6:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73490,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3670:6:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73490,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4612:6:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73490,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5475:6:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73486,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2973:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73486,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3552:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73486,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4122:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73486,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4261:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73486,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4264:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73486,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4594:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73486,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4776:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73486,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4873:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73486,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4984:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73493,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3100:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73493,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3210:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73493,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3413:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73493,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3547:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73493,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4773:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73493,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4877:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73493,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5457:1:176",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73495,
                                    "nodeType": "InlineAssembly",
                                    "src": "2943:2603:176"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rpow",
                        "nameLocation": "2783:4:176",
                        "parameters": {
                            "id": 73491,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73486,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2805:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73497,
                                    "src": "2797:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73485,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2797:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73488,
                                    "mutability": "mutable",
                                    "name": "n",
                                    "nameLocation": "2824:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73497,
                                    "src": "2816:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73487,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2816:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73490,
                                    "mutability": "mutable",
                                    "name": "scalar",
                                    "nameLocation": "2843:6:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73497,
                                    "src": "2835:14:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73489,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2835:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2787:68:176"
                        },
                        "returnParameters": {
                            "id": 73494,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73493,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "2887:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73497,
                                    "src": "2879:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73492,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2879:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2878:11:176"
                        },
                        "scope": 73540,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73506,
                        "nodeType": "FunctionDefinition",
                        "src": "5746:3396:176",
                        "nodes": [],
                        "body": {
                            "id": 73505,
                            "nodeType": "Block",
                            "src": "5805:3337:176",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "5867:3269:176",
                                        "statements": [
                                            {
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "5881:10:176",
                                                "value": {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5890:1:176"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "y",
                                                        "nodeType": "YulTypedName",
                                                        "src": "5885:1:176",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "5971:8:176",
                                                "value": {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5976:3:176",
                                                    "type": "",
                                                    "value": "181"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5971:1:176"
                                                    }
                                                ]
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6465:80:176",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6483:16:176",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6492:3:176",
                                                                        "type": "",
                                                                        "value": "128"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6497:1:176"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6488:3:176"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6488:11:176"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6483:1:176"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6516:15:176",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6525:2:176",
                                                                        "type": "",
                                                                        "value": "64"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6529:1:176"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6521:3:176"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6521:10:176"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6516:1:176"
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
                                                                    "src": "6422:1:176"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6425:37:176",
                                                                    "type": "",
                                                                    "value": "0x10000000000000000000000000000000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6419:2:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6419:44:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6412:6:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6412:52:176"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6409:136:176"
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6598:79:176",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6616:15:176",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6625:2:176",
                                                                        "type": "",
                                                                        "value": "64"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6629:1:176"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6621:3:176"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6621:10:176"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6616:1:176"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6648:15:176",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6657:2:176",
                                                                        "type": "",
                                                                        "value": "32"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6661:1:176"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6653:3:176"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6653:10:176"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6648:1:176"
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
                                                                    "src": "6571:1:176"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6574:21:176",
                                                                    "type": "",
                                                                    "value": "0x1000000000000000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6568:2:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6568:28:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6561:6:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6561:36:176"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6558:119:176"
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6722:79:176",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6740:15:176",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6749:2:176",
                                                                        "type": "",
                                                                        "value": "32"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6753:1:176"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6745:3:176"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6745:10:176"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6740:1:176"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6772:15:176",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6781:2:176",
                                                                        "type": "",
                                                                        "value": "16"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6785:1:176"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6777:3:176"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6777:10:176"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6772:1:176"
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
                                                                    "src": "6703:1:176"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6706:13:176",
                                                                    "type": "",
                                                                    "value": "0x10000000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6700:2:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6700:20:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6693:6:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6693:28:176"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6690:111:176"
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6842:78:176",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6860:15:176",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6869:2:176",
                                                                        "type": "",
                                                                        "value": "16"
                                                                    },
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6873:1:176"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6865:3:176"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6865:10:176"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6860:1:176"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nodeType": "YulAssignment",
                                                            "src": "6892:14:176",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "6901:1:176",
                                                                        "type": "",
                                                                        "value": "8"
                                                                    },
                                                                    {
                                                                        "name": "z",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6904:1:176"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "shl",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6897:3:176"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6897:9:176"
                                                            },
                                                            "variableNames": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6892:1:176"
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
                                                                    "src": "6827:1:176"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6830:9:176",
                                                                    "type": "",
                                                                    "value": "0x1000000"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6824:2:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6824:16:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6817:6:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6817:24:176"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "6814:106:176"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8110:35:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8119:2:176",
                                                            "type": "",
                                                            "value": "18"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8127:1:176"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8134:1:176"
                                                                        },
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "8137:5:176",
                                                                            "type": "",
                                                                            "value": "65536"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "add",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8130:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8130:13:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8123:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8123:21:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8115:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8115:30:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8110:1:176"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8306:30:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8315:1:176",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8322:1:176"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8329:1:176"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8332:1:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8325:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8325:9:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8318:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8318:17:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8311:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8311:25:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8306:1:176"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8349:30:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8358:1:176",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8365:1:176"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8372:1:176"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8375:1:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8368:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8368:9:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8361:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8361:17:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8354:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8354:25:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8349:1:176"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8392:30:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8401:1:176",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8408:1:176"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8415:1:176"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8418:1:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8411:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8411:9:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8404:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8404:17:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8397:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8397:25:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8392:1:176"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8435:30:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8444:1:176",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8451:1:176"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8458:1:176"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8461:1:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8454:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8454:9:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8447:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8447:17:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8440:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8440:25:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8435:1:176"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8478:30:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8487:1:176",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8494:1:176"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8501:1:176"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8504:1:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8497:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8497:9:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8490:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8490:17:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8483:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8483:25:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8478:1:176"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8521:30:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8530:1:176",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8537:1:176"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8544:1:176"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8547:1:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8540:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8540:9:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8533:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8533:17:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8526:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8526:25:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8521:1:176"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8564:30:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "8573:1:176",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8580:1:176"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8587:1:176"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8590:1:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8583:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "8583:9:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8576:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8576:17:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8569:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8569:25:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8564:1:176"
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9097:29:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "z",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9106:1:176"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "9116:1:176"
                                                                        },
                                                                        {
                                                                            "name": "z",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "9119:1:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "9112:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "9112:9:176"
                                                                },
                                                                {
                                                                    "name": "z",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "9123:1:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9109:2:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9109:16:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9102:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "9102:24:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9097:1:176"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73499,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5890:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73499,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8329:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73499,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8372:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73499,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8415:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73499,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8458:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73499,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8501:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73499,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8544:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73499,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8587:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73499,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9116:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5971:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6516:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6529:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6648:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6661:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6772:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6785:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6892:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "6904:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8110:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8127:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8306:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8322:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8332:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8349:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8365:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8375:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8392:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8408:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8418:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8435:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8451:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8461:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8478:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8494:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8504:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8521:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8537:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8547:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8564:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8580:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8590:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9097:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9106:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9119:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73502,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9123:1:176",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73504,
                                    "nodeType": "InlineAssembly",
                                    "src": "5858:3278:176"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sqrt",
                        "nameLocation": "5755:4:176",
                        "parameters": {
                            "id": 73500,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73499,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "5768:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73506,
                                    "src": "5760:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73498,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5760:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5759:11:176"
                        },
                        "returnParameters": {
                            "id": 73503,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73502,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "5802:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73506,
                                    "src": "5794:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73501,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5794:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5793:11:176"
                        },
                        "scope": 73540,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73517,
                        "nodeType": "FunctionDefinition",
                        "src": "9148:282:176",
                        "nodes": [],
                        "body": {
                            "id": 73516,
                            "nodeType": "Block",
                            "src": "9223:207:176",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "9285:139:176",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9400:14:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "x",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9409:1:176"
                                                        },
                                                        {
                                                            "name": "y",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9412:1:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mod",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9405:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "9405:9:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9400:1:176"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73508,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9409:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73510,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9412:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73513,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9400:1:176",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73515,
                                    "nodeType": "InlineAssembly",
                                    "src": "9276:148:176"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unsafeMod",
                        "nameLocation": "9157:9:176",
                        "parameters": {
                            "id": 73511,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73508,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "9175:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73517,
                                    "src": "9167:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73507,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9167:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73510,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "9186:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73517,
                                    "src": "9178:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73509,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9178:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9166:22:176"
                        },
                        "returnParameters": {
                            "id": 73514,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73513,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "9220:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73517,
                                    "src": "9212:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73512,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9212:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9211:11:176"
                        },
                        "scope": 73540,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73528,
                        "nodeType": "FunctionDefinition",
                        "src": "9436:285:176",
                        "nodes": [],
                        "body": {
                            "id": 73527,
                            "nodeType": "Block",
                            "src": "9511:210:176",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "9573:142:176",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9691:14:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "x",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9700:1:176"
                                                        },
                                                        {
                                                            "name": "y",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9703:1:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "div",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9696:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "9696:9:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "r",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9691:1:176"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73524,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9691:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73519,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9700:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73521,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9703:1:176",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73526,
                                    "nodeType": "InlineAssembly",
                                    "src": "9564:151:176"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unsafeDiv",
                        "nameLocation": "9445:9:176",
                        "parameters": {
                            "id": 73522,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73519,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "9463:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73528,
                                    "src": "9455:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73518,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9455:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73521,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "9474:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73528,
                                    "src": "9466:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73520,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9466:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9454:22:176"
                        },
                        "returnParameters": {
                            "id": 73525,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73524,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "9508:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73528,
                                    "src": "9500:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73523,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9500:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9499:11:176"
                        },
                        "scope": 73540,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 73539,
                        "nodeType": "FunctionDefinition",
                        "src": "9727:324:176",
                        "nodes": [],
                        "body": {
                            "id": 73538,
                            "nodeType": "Block",
                            "src": "9804:247:176",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "9866:179:176",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "9998:37:176",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "10014:1:176"
                                                                        },
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "10017:1:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mod",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "10010:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "10010:9:176"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "10021:1:176",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "gt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "10007:2:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "10007:16:176"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "x",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "10029:1:176"
                                                                },
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "10032:1:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "div",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "10025:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "10025:9:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "10003:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "10003:32:176"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9998:1:176"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 73530,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10014:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73530,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10029:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73532,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10017:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73532,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "10032:1:176",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 73535,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "9998:1:176",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 73537,
                                    "nodeType": "InlineAssembly",
                                    "src": "9857:188:176"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unsafeDivUp",
                        "nameLocation": "9736:11:176",
                        "parameters": {
                            "id": 73533,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73530,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "9756:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73539,
                                    "src": "9748:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73529,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9748:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73532,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "9767:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73539,
                                    "src": "9759:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73531,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9759:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9747:22:176"
                        },
                        "returnParameters": {
                            "id": 73536,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73535,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "9801:1:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73539,
                                    "src": "9793:9:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73534,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9793:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9792:11:176"
                        },
                        "scope": 73540,
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
                    "id": 73384,
                    "nodeType": "StructuredDocumentation",
                    "src": "68:273:176",
                    "text": "@notice Arithmetic library with operations for fixed-point numbers.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @author Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    73540
                ],
                "name": "FixedPointMathLib",
                "nameLocation": "349:17:176",
                "scope": 73541,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "AGPL-3.0-only"
    },
    "id": 176
};
