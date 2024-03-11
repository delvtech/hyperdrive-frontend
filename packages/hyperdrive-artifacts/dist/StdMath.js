export const StdMath = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122013eff3196676476065e71659d24ffafdacddfcb2adbc9018868362592cd291ea64736f6c63430008140033",
        "sourceMap": "65:1294:103:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;65:1294:103;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122013eff3196676476065e71659d24ffafdacddfcb2adbc9018868362592cd291ea64736f6c63430008140033",
        "sourceMap": "65:1294:103:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdMath.sol\":\"stdMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]}},\"version\":1}",
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
                "lib/forge-std/src/StdMath.sol": "stdMath"
            },
            "libraries": {}
        },
        "sources": {
            "lib/forge-std/src/StdMath.sol": {
                "keccak256": "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2",
                "urls": [
                    "bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92",
                    "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/forge-std/src/StdMath.sol",
        "id": 31066,
        "exportedSymbols": {
            "stdMath": [
                31065
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:1328:103",
        "nodes": [
            {
                "id": 30925,
                "nodeType": "PragmaDirective",
                "src": "32:31:103",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.6",
                    ".2",
                    "<",
                    "0.9",
                    ".0"
                ]
            },
            {
                "id": 31065,
                "nodeType": "ContractDefinition",
                "src": "65:1294:103",
                "nodes": [
                    {
                        "id": 30929,
                        "nodeType": "VariableDeclaration",
                        "src": "87:115:103",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INT256_MIN",
                        "nameLocation": "111:10:103",
                        "scope": 31065,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                        },
                        "typeName": {
                            "id": 30926,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "87:6:103",
                            "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                            }
                        },
                        "value": {
                            "id": 30928,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "-",
                            "prefix": true,
                            "src": "124:78:103",
                            "subExpression": {
                                "hexValue": "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638",
                                "id": 30927,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "125:77:103",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                                    "typeString": "int_const 5789...(69 digits omitted)...9968"
                                },
                                "value": "57896044618658097711785492504343953926634992332820282019728792003956564819968"
                            },
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_minus_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                                "typeString": "int_const -578...(70 digits omitted)...9968"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 30955,
                        "nodeType": "FunctionDefinition",
                        "src": "209:306:103",
                        "nodes": [],
                        "body": {
                            "id": 30954,
                            "nodeType": "Block",
                            "src": "264:251:103",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 30938,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 30936,
                                            "name": "a",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30931,
                                            "src": "342:1:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 30937,
                                            "name": "INT256_MIN",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30929,
                                            "src": "347:10:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "342:15:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 30942,
                                    "nodeType": "IfStatement",
                                    "src": "338:130:103",
                                    "trueBody": {
                                        "id": 30941,
                                        "nodeType": "Block",
                                        "src": "359:109:103",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "hexValue": "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638",
                                                    "id": 30939,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "380:77:103",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                                                        "typeString": "int_const 5789...(69 digits omitted)...9968"
                                                    },
                                                    "value": "57896044618658097711785492504343953926634992332820282019728792003956564819968"
                                                },
                                                "functionReturnParameters": 30935,
                                                "id": 30940,
                                                "nodeType": "Return",
                                                "src": "373:84:103"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    },
                                                    "id": 30947,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 30945,
                                                        "name": "a",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 30931,
                                                        "src": "493:1:103",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "hexValue": "30",
                                                        "id": 30946,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "497:1:103",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "493:5:103",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseExpression": {
                                                    "id": 30950,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "-",
                                                    "prefix": true,
                                                    "src": "505:2:103",
                                                    "subExpression": {
                                                        "id": 30949,
                                                        "name": "a",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 30931,
                                                        "src": "506:1:103",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "id": 30951,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "Conditional",
                                                "src": "493:14:103",
                                                "trueExpression": {
                                                    "id": 30948,
                                                    "name": "a",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 30931,
                                                    "src": "501:1:103",
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
                                            "id": 30944,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "485:7:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                            },
                                            "typeName": {
                                                "id": 30943,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "485:7:103",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 30952,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "485:23:103",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 30935,
                                    "id": 30953,
                                    "nodeType": "Return",
                                    "src": "478:30:103"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "abs",
                        "nameLocation": "218:3:103",
                        "parameters": {
                            "id": 30932,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30931,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "229:1:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30955,
                                    "src": "222:8:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 30930,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "222:6:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "221:10:103"
                        },
                        "returnParameters": {
                            "id": 30935,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30934,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30955,
                                    "src": "255:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 30933,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "255:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "254:9:103"
                        },
                        "scope": 31065,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 30976,
                        "nodeType": "FunctionDefinition",
                        "src": "521:114:103",
                        "nodes": [],
                        "body": {
                            "id": 30975,
                            "nodeType": "Block",
                            "src": "590:45:103",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 30966,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 30964,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30957,
                                                "src": "607:1:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "id": 30965,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30959,
                                                "src": "611:1:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "607:5:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 30972,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 30970,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30959,
                                                "src": "623:1:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 30971,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30957,
                                                "src": "627:1:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "623:5:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 30973,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "607:21:103",
                                        "trueExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 30969,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 30967,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30957,
                                                "src": "615:1:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 30968,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30959,
                                                "src": "619:1:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "615:5:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 30963,
                                    "id": 30974,
                                    "nodeType": "Return",
                                    "src": "600:28:103"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "delta",
                        "nameLocation": "530:5:103",
                        "parameters": {
                            "id": 30960,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30957,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "544:1:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30976,
                                    "src": "536:9:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 30956,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "536:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 30959,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "555:1:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30976,
                                    "src": "547:9:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 30958,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "547:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "535:22:103"
                        },
                        "returnParameters": {
                            "id": 30963,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30962,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30976,
                                    "src": "581:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 30961,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "581:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "580:9:103"
                        },
                        "scope": 31065,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 31012,
                        "nodeType": "FunctionDefinition",
                        "src": "641:352:103",
                        "nodes": [],
                        "body": {
                            "id": 31011,
                            "nodeType": "Block",
                            "src": "708:285:103",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 30991,
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
                                                    "id": 30987,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 30985,
                                                        "name": "a",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 30978,
                                                        "src": "847:1:103",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "^",
                                                    "rightExpression": {
                                                        "id": 30986,
                                                        "name": "b",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 30980,
                                                        "src": "851:1:103",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "src": "847:5:103",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                }
                                            ],
                                            "id": 30988,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "846:7:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "id": 30990,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "-",
                                            "prefix": true,
                                            "src": "856:2:103",
                                            "subExpression": {
                                                "hexValue": "31",
                                                "id": 30989,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "857:1:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_minus_1_by_1",
                                                "typeString": "int_const -1"
                                            }
                                        },
                                        "src": "846:12:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 31002,
                                    "nodeType": "IfStatement",
                                    "src": "842:71:103",
                                    "trueBody": {
                                        "id": 31001,
                                        "nodeType": "Block",
                                        "src": "860:53:103",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 30994,
                                                                    "name": "a",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 30978,
                                                                    "src": "891:1:103",
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
                                                                "id": 30993,
                                                                "name": "abs",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 30955,
                                                                "src": "887:3:103",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                                                                    "typeString": "function (int256) pure returns (uint256)"
                                                                }
                                                            },
                                                            "id": 30995,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "887:6:103",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 30997,
                                                                    "name": "b",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 30980,
                                                                    "src": "899:1:103",
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
                                                                "id": 30996,
                                                                "name": "abs",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 30955,
                                                                "src": "895:3:103",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                                                                    "typeString": "function (int256) pure returns (uint256)"
                                                                }
                                                            },
                                                            "id": 30998,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "895:6:103",
                                                            "tryCall": false,
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
                                                            }
                                                        ],
                                                        "id": 30992,
                                                        "name": "delta",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [
                                                            30976,
                                                            31012
                                                        ],
                                                        "referencedDeclaration": 30976,
                                                        "src": "881:5:103",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 30999,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "881:21:103",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "functionReturnParameters": 30984,
                                                "id": 31000,
                                                "nodeType": "Return",
                                                "src": "874:28:103"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 31009,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 31004,
                                                    "name": "a",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 30978,
                                                    "src": "975:1:103",
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
                                                "id": 31003,
                                                "name": "abs",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30955,
                                                "src": "971:3:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                                                    "typeString": "function (int256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 31005,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "971:6:103",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "arguments": [
                                                {
                                                    "id": 31007,
                                                    "name": "b",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 30980,
                                                    "src": "984:1:103",
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
                                                "id": 31006,
                                                "name": "abs",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30955,
                                                "src": "980:3:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                                                    "typeString": "function (int256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 31008,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "980:6:103",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "971:15:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 30984,
                                    "id": 31010,
                                    "nodeType": "Return",
                                    "src": "964:22:103"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "delta",
                        "nameLocation": "650:5:103",
                        "parameters": {
                            "id": 30981,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30978,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "663:1:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31012,
                                    "src": "656:8:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 30977,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "656:6:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 30980,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "673:1:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31012,
                                    "src": "666:8:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 30979,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "666:6:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "655:20:103"
                        },
                        "returnParameters": {
                            "id": 30984,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30983,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31012,
                                    "src": "699:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 30982,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "699:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "698:9:103"
                        },
                        "scope": 31065,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 31035,
                        "nodeType": "FunctionDefinition",
                        "src": "999:160:103",
                        "nodes": [],
                        "body": {
                            "id": 31034,
                            "nodeType": "Block",
                            "src": "1075:84:103",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        31022
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31022,
                                            "mutability": "mutable",
                                            "name": "absDelta",
                                            "nameLocation": "1093:8:103",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31034,
                                            "src": "1085:16:103",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 31021,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1085:7:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31027,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 31024,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31014,
                                                "src": "1110:1:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 31025,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31016,
                                                "src": "1113:1:103",
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
                                                }
                                            ],
                                            "id": 31023,
                                            "name": "delta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                30976,
                                                31012
                                            ],
                                            "referencedDeclaration": 30976,
                                            "src": "1104:5:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 31026,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1104:11:103",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1085:30:103"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 31032,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 31030,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 31028,
                                                "name": "absDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31022,
                                                "src": "1133:8:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "*",
                                            "rightExpression": {
                                                "hexValue": "31653138",
                                                "id": 31029,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1144:4:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000000"
                                                },
                                                "value": "1e18"
                                            },
                                            "src": "1133:15:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "/",
                                        "rightExpression": {
                                            "id": 31031,
                                            "name": "b",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31016,
                                            "src": "1151:1:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1133:19:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 31020,
                                    "id": 31033,
                                    "nodeType": "Return",
                                    "src": "1126:26:103"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "percentDelta",
                        "nameLocation": "1008:12:103",
                        "parameters": {
                            "id": 31017,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31014,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "1029:1:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31035,
                                    "src": "1021:9:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 31013,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1021:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 31016,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "1040:1:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31035,
                                    "src": "1032:9:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 31015,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1032:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1020:22:103"
                        },
                        "returnParameters": {
                            "id": 31020,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31019,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31035,
                                    "src": "1066:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 31018,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1066:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1065:9:103"
                        },
                        "scope": 31065,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 31064,
                        "nodeType": "FunctionDefinition",
                        "src": "1165:192:103",
                        "nodes": [],
                        "body": {
                            "id": 31063,
                            "nodeType": "Block",
                            "src": "1239:118:103",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        31045
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31045,
                                            "mutability": "mutable",
                                            "name": "absDelta",
                                            "nameLocation": "1257:8:103",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31063,
                                            "src": "1249:16:103",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 31044,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1249:7:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31050,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 31047,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31037,
                                                "src": "1274:1:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            {
                                                "id": 31048,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31039,
                                                "src": "1277:1:103",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            ],
                                            "id": 31046,
                                            "name": "delta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                30976,
                                                31012
                                            ],
                                            "referencedDeclaration": 31012,
                                            "src": "1268:5:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                                                "typeString": "function (int256,int256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 31049,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1268:11:103",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1249:30:103"
                                },
                                {
                                    "assignments": [
                                        31052
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31052,
                                            "mutability": "mutable",
                                            "name": "absB",
                                            "nameLocation": "1297:4:103",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31063,
                                            "src": "1289:12:103",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 31051,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1289:7:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31056,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 31054,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31039,
                                                "src": "1308:1:103",
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
                                            "id": 31053,
                                            "name": "abs",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30955,
                                            "src": "1304:3:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                                                "typeString": "function (int256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 31055,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1304:6:103",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1289:21:103"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 31061,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 31059,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 31057,
                                                "name": "absDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31045,
                                                "src": "1328:8:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "*",
                                            "rightExpression": {
                                                "hexValue": "31653138",
                                                "id": 31058,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1339:4:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000000"
                                                },
                                                "value": "1e18"
                                            },
                                            "src": "1328:15:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "/",
                                        "rightExpression": {
                                            "id": 31060,
                                            "name": "absB",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31052,
                                            "src": "1346:4:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1328:22:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 31043,
                                    "id": 31062,
                                    "nodeType": "Return",
                                    "src": "1321:29:103"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "percentDelta",
                        "nameLocation": "1174:12:103",
                        "parameters": {
                            "id": 31040,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31037,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "1194:1:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31064,
                                    "src": "1187:8:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 31036,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1187:6:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 31039,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "1204:1:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31064,
                                    "src": "1197:8:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 31038,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1197:6:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1186:20:103"
                        },
                        "returnParameters": {
                            "id": 31043,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31042,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31064,
                                    "src": "1230:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 31041,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1230:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1229:9:103"
                        },
                        "scope": 31065,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "stdMath",
                "contractDependencies": [],
                "contractKind": "library",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    31065
                ],
                "name": "stdMath",
                "nameLocation": "73:7:103",
                "scope": 31066,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 103
};
