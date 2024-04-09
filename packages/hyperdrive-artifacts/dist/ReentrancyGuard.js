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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Contract module that helps prevent reentrant calls to a function. Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier available, which can be applied to functions to make sure there are no nested (reentrant) calls to them. Note that because there is a single `nonReentrant` guard, functions marked as `nonReentrant` may not call one another. This can be worked around by making those functions `private`, and then adding `external` `nonReentrant` entry points to them. TIP: If you would like to learn more about reentrancy and alternative ways to protect against it, check out our blog post https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":\"ReentrancyGuard\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
        "id": 71746,
        "exportedSymbols": {
            "ReentrancyGuard": [
                71745
            ]
        },
        "nodeType": "SourceUnit",
        "src": "109:3131:169",
        "nodes": [
            {
                "id": 71678,
                "nodeType": "PragmaDirective",
                "src": "109:24:169",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 71745,
                "nodeType": "ContractDefinition",
                "src": "886:2353:169",
                "nodes": [
                    {
                        "id": 71682,
                        "nodeType": "VariableDeclaration",
                        "src": "1674:40:169",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_ENTERED",
                        "nameLocation": "1699:11:169",
                        "scope": 71745,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 71680,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1674:7:169",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "31",
                            "id": 71681,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1713:1:169",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                            },
                            "value": "1"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 71685,
                        "nodeType": "VariableDeclaration",
                        "src": "1720:36:169",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ENTERED",
                        "nameLocation": "1745:7:169",
                        "scope": 71745,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 71683,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1720:7:169",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "32",
                            "id": 71684,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1755:1:169",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_2_by_1",
                                "typeString": "int_const 2"
                            },
                            "value": "2"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 71687,
                        "nodeType": "VariableDeclaration",
                        "src": "1763:23:169",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_status",
                        "nameLocation": "1779:7:169",
                        "scope": 71745,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 71686,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1763:7:169",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 71690,
                        "nodeType": "ErrorDefinition",
                        "src": "1850:37:169",
                        "nodes": [],
                        "documentation": {
                            "id": 71688,
                            "nodeType": "StructuredDocumentation",
                            "src": "1793:52:169",
                            "text": " @dev Unauthorized reentrant call."
                        },
                        "errorSelector": "3ee5aeb5",
                        "name": "ReentrancyGuardReentrantCall",
                        "nameLocation": "1856:28:169",
                        "parameters": {
                            "id": 71689,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1884:2:169"
                        }
                    },
                    {
                        "id": 71698,
                        "nodeType": "FunctionDefinition",
                        "src": "1893:52:169",
                        "nodes": [],
                        "body": {
                            "id": 71697,
                            "nodeType": "Block",
                            "src": "1907:38:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 71695,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71693,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71687,
                                            "src": "1917:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71694,
                                            "name": "NOT_ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71682,
                                            "src": "1927:11:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1917:21:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 71696,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1917:21:169"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 71691,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1904:2:169"
                        },
                        "returnParameters": {
                            "id": 71692,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1907:0:169"
                        },
                        "scope": 71745,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71709,
                        "nodeType": "ModifierDefinition",
                        "src": "2322:103:169",
                        "nodes": [],
                        "body": {
                            "id": 71708,
                            "nodeType": "Block",
                            "src": "2346:79:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 71701,
                                            "name": "_nonReentrantBefore",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71725,
                                            "src": "2356:19:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 71702,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2356:21:169",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71703,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2356:21:169"
                                },
                                {
                                    "id": 71704,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2387:1:169"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 71705,
                                            "name": "_nonReentrantAfter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71733,
                                            "src": "2398:18:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 71706,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2398:20:169",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71707,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2398:20:169"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71699,
                            "nodeType": "StructuredDocumentation",
                            "src": "1951:366:169",
                            "text": " @dev Prevents a contract from calling itself, directly or indirectly.\n Calling a `nonReentrant` function from another `nonReentrant`\n function is not supported. It is possible to prevent this from happening\n by making the `nonReentrant` function external, and making it call a\n `private` function that does the actual work."
                        },
                        "name": "nonReentrant",
                        "nameLocation": "2331:12:169",
                        "parameters": {
                            "id": 71700,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2343:2:169"
                        },
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71725,
                        "nodeType": "FunctionDefinition",
                        "src": "2431:307:169",
                        "nodes": [],
                        "body": {
                            "id": 71724,
                            "nodeType": "Block",
                            "src": "2470:268:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 71714,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 71712,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71687,
                                            "src": "2558:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 71713,
                                            "name": "ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71685,
                                            "src": "2569:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2558:18:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 71719,
                                    "nodeType": "IfStatement",
                                    "src": "2554:86:169",
                                    "trueBody": {
                                        "id": 71718,
                                        "nodeType": "Block",
                                        "src": "2578:62:169",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 71715,
                                                        "name": "ReentrancyGuardReentrantCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71690,
                                                        "src": "2599:28:169",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 71716,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2599:30:169",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71717,
                                                "nodeType": "RevertStatement",
                                                "src": "2592:37:169"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 71722,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71720,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71687,
                                            "src": "2714:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71721,
                                            "name": "ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71685,
                                            "src": "2724:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2714:17:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 71723,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2714:17:169"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_nonReentrantBefore",
                        "nameLocation": "2440:19:169",
                        "parameters": {
                            "id": 71710,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2459:2:169"
                        },
                        "returnParameters": {
                            "id": 71711,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2470:0:169"
                        },
                        "scope": 71745,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 71733,
                        "nodeType": "FunctionDefinition",
                        "src": "2744:208:169",
                        "nodes": [],
                        "body": {
                            "id": 71732,
                            "nodeType": "Block",
                            "src": "2782:170:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 71730,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71728,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71687,
                                            "src": "2924:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71729,
                                            "name": "NOT_ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71682,
                                            "src": "2934:11:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2924:21:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 71731,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2924:21:169"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_nonReentrantAfter",
                        "nameLocation": "2753:18:169",
                        "parameters": {
                            "id": 71726,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2771:2:169"
                        },
                        "returnParameters": {
                            "id": 71727,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2782:0:169"
                        },
                        "scope": 71745,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 71744,
                        "nodeType": "FunctionDefinition",
                        "src": "3131:106:169",
                        "nodes": [],
                        "body": {
                            "id": 71743,
                            "nodeType": "Block",
                            "src": "3195:42:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 71741,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 71739,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71687,
                                            "src": "3212:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 71740,
                                            "name": "ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71685,
                                            "src": "3223:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3212:18:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 71738,
                                    "id": 71742,
                                    "nodeType": "Return",
                                    "src": "3205:25:169"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71734,
                            "nodeType": "StructuredDocumentation",
                            "src": "2958:168:169",
                            "text": " @dev Returns true if the reentrancy guard is currently set to \"entered\", which indicates there is a\n `nonReentrant` function in the call stack."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_reentrancyGuardEntered",
                        "nameLocation": "3140:23:169",
                        "parameters": {
                            "id": 71735,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3163:2:169"
                        },
                        "returnParameters": {
                            "id": 71738,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71737,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71744,
                                    "src": "3189:4:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71736,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3189:4:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3188:6:169"
                        },
                        "scope": 71745,
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
                    "id": 71679,
                    "nodeType": "StructuredDocumentation",
                    "src": "135:750:169",
                    "text": " @dev Contract module that helps prevent reentrant calls to a function.\n Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\n available, which can be applied to functions to make sure there are no nested\n (reentrant) calls to them.\n Note that because there is a single `nonReentrant` guard, functions marked as\n `nonReentrant` may not call one another. This can be worked around by making\n those functions `private`, and then adding `external` `nonReentrant` entry\n points to them.\n TIP: If you would like to learn more about reentrancy and alternative ways\n to protect against it, check out our blog post\n https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul]."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71745
                ],
                "name": "ReentrancyGuard",
                "nameLocation": "904:15:169",
                "scope": 71746,
                "usedErrors": [
                    71690
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 169
};
