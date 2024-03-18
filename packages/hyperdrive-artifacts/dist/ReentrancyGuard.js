export const ReentrancyGuard = {
    "abi": [
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
        }
    ],
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Contract module that helps prevent reentrant calls to a function. Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier available, which can be applied to functions to make sure there are no nested (reentrant) calls to them. Note that because there is a single `nonReentrant` guard, functions marked as `nonReentrant` may not call one another. This can be worked around by making those functions `private`, and then adding `external` `nonReentrant` entry points to them. TIP: If you would like to learn more about reentrancy and alternative ways to protect against it, check out our blog post https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":\"ReentrancyGuard\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ReentrancyGuardReentrantCall"
                }
            ],
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
                "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": "ReentrancyGuard"
            },
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
                "urls": [
                    "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
                    "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol",
        "id": 71996,
        "exportedSymbols": {
            "ReentrancyGuard": [
                71995
            ]
        },
        "nodeType": "SourceUnit",
        "src": "109:3131:171",
        "nodes": [
            {
                "id": 71928,
                "nodeType": "PragmaDirective",
                "src": "109:24:171",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 71995,
                "nodeType": "ContractDefinition",
                "src": "886:2353:171",
                "nodes": [
                    {
                        "id": 71932,
                        "nodeType": "VariableDeclaration",
                        "src": "1674:40:171",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_ENTERED",
                        "nameLocation": "1699:11:171",
                        "scope": 71995,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 71930,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1674:7:171",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "31",
                            "id": 71931,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1713:1:171",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                            },
                            "value": "1"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 71935,
                        "nodeType": "VariableDeclaration",
                        "src": "1720:36:171",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ENTERED",
                        "nameLocation": "1745:7:171",
                        "scope": 71995,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 71933,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1720:7:171",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "32",
                            "id": 71934,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1755:1:171",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_2_by_1",
                                "typeString": "int_const 2"
                            },
                            "value": "2"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 71937,
                        "nodeType": "VariableDeclaration",
                        "src": "1763:23:171",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_status",
                        "nameLocation": "1779:7:171",
                        "scope": 71995,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 71936,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1763:7:171",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 71940,
                        "nodeType": "ErrorDefinition",
                        "src": "1850:37:171",
                        "nodes": [],
                        "documentation": {
                            "id": 71938,
                            "nodeType": "StructuredDocumentation",
                            "src": "1793:52:171",
                            "text": " @dev Unauthorized reentrant call."
                        },
                        "errorSelector": "3ee5aeb5",
                        "name": "ReentrancyGuardReentrantCall",
                        "nameLocation": "1856:28:171",
                        "parameters": {
                            "id": 71939,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1884:2:171"
                        }
                    },
                    {
                        "id": 71948,
                        "nodeType": "FunctionDefinition",
                        "src": "1893:52:171",
                        "nodes": [],
                        "body": {
                            "id": 71947,
                            "nodeType": "Block",
                            "src": "1907:38:171",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 71945,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71943,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71937,
                                            "src": "1917:7:171",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71944,
                                            "name": "NOT_ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71932,
                                            "src": "1927:11:171",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1917:21:171",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 71946,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1917:21:171"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 71941,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1904:2:171"
                        },
                        "returnParameters": {
                            "id": 71942,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1907:0:171"
                        },
                        "scope": 71995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71959,
                        "nodeType": "ModifierDefinition",
                        "src": "2322:103:171",
                        "nodes": [],
                        "body": {
                            "id": 71958,
                            "nodeType": "Block",
                            "src": "2346:79:171",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 71951,
                                            "name": "_nonReentrantBefore",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71975,
                                            "src": "2356:19:171",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 71952,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2356:21:171",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71953,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2356:21:171"
                                },
                                {
                                    "id": 71954,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2387:1:171"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 71955,
                                            "name": "_nonReentrantAfter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71983,
                                            "src": "2398:18:171",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 71956,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2398:20:171",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71957,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2398:20:171"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71949,
                            "nodeType": "StructuredDocumentation",
                            "src": "1951:366:171",
                            "text": " @dev Prevents a contract from calling itself, directly or indirectly.\n Calling a `nonReentrant` function from another `nonReentrant`\n function is not supported. It is possible to prevent this from happening\n by making the `nonReentrant` function external, and making it call a\n `private` function that does the actual work."
                        },
                        "name": "nonReentrant",
                        "nameLocation": "2331:12:171",
                        "parameters": {
                            "id": 71950,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2343:2:171"
                        },
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71975,
                        "nodeType": "FunctionDefinition",
                        "src": "2431:307:171",
                        "nodes": [],
                        "body": {
                            "id": 71974,
                            "nodeType": "Block",
                            "src": "2470:268:171",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 71964,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 71962,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71937,
                                            "src": "2558:7:171",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 71963,
                                            "name": "ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71935,
                                            "src": "2569:7:171",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2558:18:171",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 71969,
                                    "nodeType": "IfStatement",
                                    "src": "2554:86:171",
                                    "trueBody": {
                                        "id": 71968,
                                        "nodeType": "Block",
                                        "src": "2578:62:171",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 71965,
                                                        "name": "ReentrancyGuardReentrantCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71940,
                                                        "src": "2599:28:171",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 71966,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2599:30:171",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71967,
                                                "nodeType": "RevertStatement",
                                                "src": "2592:37:171"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 71972,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71970,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71937,
                                            "src": "2714:7:171",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71971,
                                            "name": "ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71935,
                                            "src": "2724:7:171",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2714:17:171",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 71973,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2714:17:171"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_nonReentrantBefore",
                        "nameLocation": "2440:19:171",
                        "parameters": {
                            "id": 71960,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2459:2:171"
                        },
                        "returnParameters": {
                            "id": 71961,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2470:0:171"
                        },
                        "scope": 71995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 71983,
                        "nodeType": "FunctionDefinition",
                        "src": "2744:208:171",
                        "nodes": [],
                        "body": {
                            "id": 71982,
                            "nodeType": "Block",
                            "src": "2782:170:171",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 71980,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71978,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71937,
                                            "src": "2924:7:171",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71979,
                                            "name": "NOT_ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71932,
                                            "src": "2934:11:171",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2924:21:171",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 71981,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2924:21:171"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_nonReentrantAfter",
                        "nameLocation": "2753:18:171",
                        "parameters": {
                            "id": 71976,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2771:2:171"
                        },
                        "returnParameters": {
                            "id": 71977,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2782:0:171"
                        },
                        "scope": 71995,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 71994,
                        "nodeType": "FunctionDefinition",
                        "src": "3131:106:171",
                        "nodes": [],
                        "body": {
                            "id": 71993,
                            "nodeType": "Block",
                            "src": "3195:42:171",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 71991,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 71989,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71937,
                                            "src": "3212:7:171",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 71990,
                                            "name": "ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71935,
                                            "src": "3223:7:171",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3212:18:171",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 71988,
                                    "id": 71992,
                                    "nodeType": "Return",
                                    "src": "3205:25:171"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71984,
                            "nodeType": "StructuredDocumentation",
                            "src": "2958:168:171",
                            "text": " @dev Returns true if the reentrancy guard is currently set to \"entered\", which indicates there is a\n `nonReentrant` function in the call stack."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_reentrancyGuardEntered",
                        "nameLocation": "3140:23:171",
                        "parameters": {
                            "id": 71985,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3163:2:171"
                        },
                        "returnParameters": {
                            "id": 71988,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71987,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71994,
                                    "src": "3189:4:171",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71986,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3189:4:171",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3188:6:171"
                        },
                        "scope": 71995,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [],
                "canonicalName": "ReentrancyGuard",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 71929,
                    "nodeType": "StructuredDocumentation",
                    "src": "135:750:171",
                    "text": " @dev Contract module that helps prevent reentrant calls to a function.\n Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\n available, which can be applied to functions to make sure there are no nested\n (reentrant) calls to them.\n Note that because there is a single `nonReentrant` guard, functions marked as\n `nonReentrant` may not call one another. This can be worked around by making\n those functions `private`, and then adding `external` `nonReentrant` entry\n points to them.\n TIP: If you would like to learn more about reentrancy and alternative ways\n to protect against it, check out our blog post\n https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul]."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71995
                ],
                "name": "ReentrancyGuard",
                "nameLocation": "904:15:171",
                "scope": 71996,
                "usedErrors": [
                    71940
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 171
};
