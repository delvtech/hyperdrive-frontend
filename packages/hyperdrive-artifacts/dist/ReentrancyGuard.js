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
        "id": 71675,
        "exportedSymbols": {
            "ReentrancyGuard": [
                71674
            ]
        },
        "nodeType": "SourceUnit",
        "src": "109:3131:169",
        "nodes": [
            {
                "id": 71607,
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
                "id": 71674,
                "nodeType": "ContractDefinition",
                "src": "886:2353:169",
                "nodes": [
                    {
                        "id": 71611,
                        "nodeType": "VariableDeclaration",
                        "src": "1674:40:169",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_ENTERED",
                        "nameLocation": "1699:11:169",
                        "scope": 71674,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 71609,
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
                            "id": 71610,
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
                        "id": 71614,
                        "nodeType": "VariableDeclaration",
                        "src": "1720:36:169",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ENTERED",
                        "nameLocation": "1745:7:169",
                        "scope": 71674,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 71612,
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
                            "id": 71613,
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
                        "id": 71616,
                        "nodeType": "VariableDeclaration",
                        "src": "1763:23:169",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_status",
                        "nameLocation": "1779:7:169",
                        "scope": 71674,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 71615,
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
                        "id": 71619,
                        "nodeType": "ErrorDefinition",
                        "src": "1850:37:169",
                        "nodes": [],
                        "documentation": {
                            "id": 71617,
                            "nodeType": "StructuredDocumentation",
                            "src": "1793:52:169",
                            "text": " @dev Unauthorized reentrant call."
                        },
                        "errorSelector": "3ee5aeb5",
                        "name": "ReentrancyGuardReentrantCall",
                        "nameLocation": "1856:28:169",
                        "parameters": {
                            "id": 71618,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1884:2:169"
                        }
                    },
                    {
                        "id": 71627,
                        "nodeType": "FunctionDefinition",
                        "src": "1893:52:169",
                        "nodes": [],
                        "body": {
                            "id": 71626,
                            "nodeType": "Block",
                            "src": "1907:38:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 71624,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71622,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71616,
                                            "src": "1917:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71623,
                                            "name": "NOT_ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71611,
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
                                    "id": 71625,
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
                            "id": 71620,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1904:2:169"
                        },
                        "returnParameters": {
                            "id": 71621,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1907:0:169"
                        },
                        "scope": 71674,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71638,
                        "nodeType": "ModifierDefinition",
                        "src": "2322:103:169",
                        "nodes": [],
                        "body": {
                            "id": 71637,
                            "nodeType": "Block",
                            "src": "2346:79:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 71630,
                                            "name": "_nonReentrantBefore",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71654,
                                            "src": "2356:19:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 71631,
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
                                    "id": 71632,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2356:21:169"
                                },
                                {
                                    "id": 71633,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2387:1:169"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 71634,
                                            "name": "_nonReentrantAfter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71662,
                                            "src": "2398:18:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 71635,
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
                                    "id": 71636,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2398:20:169"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71628,
                            "nodeType": "StructuredDocumentation",
                            "src": "1951:366:169",
                            "text": " @dev Prevents a contract from calling itself, directly or indirectly.\n Calling a `nonReentrant` function from another `nonReentrant`\n function is not supported. It is possible to prevent this from happening\n by making the `nonReentrant` function external, and making it call a\n `private` function that does the actual work."
                        },
                        "name": "nonReentrant",
                        "nameLocation": "2331:12:169",
                        "parameters": {
                            "id": 71629,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2343:2:169"
                        },
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71654,
                        "nodeType": "FunctionDefinition",
                        "src": "2431:307:169",
                        "nodes": [],
                        "body": {
                            "id": 71653,
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
                                        "id": 71643,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 71641,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71616,
                                            "src": "2558:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 71642,
                                            "name": "ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71614,
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
                                    "id": 71648,
                                    "nodeType": "IfStatement",
                                    "src": "2554:86:169",
                                    "trueBody": {
                                        "id": 71647,
                                        "nodeType": "Block",
                                        "src": "2578:62:169",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 71644,
                                                        "name": "ReentrancyGuardReentrantCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71619,
                                                        "src": "2599:28:169",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 71645,
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
                                                "id": 71646,
                                                "nodeType": "RevertStatement",
                                                "src": "2592:37:169"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 71651,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71649,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71616,
                                            "src": "2714:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71650,
                                            "name": "ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71614,
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
                                    "id": 71652,
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
                            "id": 71639,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2459:2:169"
                        },
                        "returnParameters": {
                            "id": 71640,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2470:0:169"
                        },
                        "scope": 71674,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 71662,
                        "nodeType": "FunctionDefinition",
                        "src": "2744:208:169",
                        "nodes": [],
                        "body": {
                            "id": 71661,
                            "nodeType": "Block",
                            "src": "2782:170:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 71659,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71657,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71616,
                                            "src": "2924:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71658,
                                            "name": "NOT_ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71611,
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
                                    "id": 71660,
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
                            "id": 71655,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2771:2:169"
                        },
                        "returnParameters": {
                            "id": 71656,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2782:0:169"
                        },
                        "scope": 71674,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 71673,
                        "nodeType": "FunctionDefinition",
                        "src": "3131:106:169",
                        "nodes": [],
                        "body": {
                            "id": 71672,
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
                                        "id": 71670,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 71668,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71616,
                                            "src": "3212:7:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 71669,
                                            "name": "ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71614,
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
                                    "functionReturnParameters": 71667,
                                    "id": 71671,
                                    "nodeType": "Return",
                                    "src": "3205:25:169"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71663,
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
                            "id": 71664,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3163:2:169"
                        },
                        "returnParameters": {
                            "id": 71667,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71666,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71673,
                                    "src": "3189:4:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71665,
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
                        "scope": 71674,
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
                    "id": 71608,
                    "nodeType": "StructuredDocumentation",
                    "src": "135:750:169",
                    "text": " @dev Contract module that helps prevent reentrant calls to a function.\n Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\n available, which can be applied to functions to make sure there are no nested\n (reentrant) calls to them.\n Note that because there is a single `nonReentrant` guard, functions marked as\n `nonReentrant` may not call one another. This can be worked around by making\n those functions `private`, and then adding `external` `nonReentrant` entry\n points to them.\n TIP: If you would like to learn more about reentrancy and alternative ways\n to protect against it, check out our blog post\n https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul]."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71674
                ],
                "name": "ReentrancyGuard",
                "nameLocation": "904:15:169",
                "scope": 71675,
                "usedErrors": [
                    71619
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 169
};
