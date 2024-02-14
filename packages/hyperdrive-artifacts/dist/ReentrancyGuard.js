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
        "id": 67359,
        "exportedSymbols": {
            "ReentrancyGuard": [
                67358
            ]
        },
        "nodeType": "SourceUnit",
        "src": "109:3131:120",
        "nodes": [
            {
                "id": 67291,
                "nodeType": "PragmaDirective",
                "src": "109:24:120",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 67358,
                "nodeType": "ContractDefinition",
                "src": "886:2353:120",
                "nodes": [
                    {
                        "id": 67295,
                        "nodeType": "VariableDeclaration",
                        "src": "1674:40:120",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_ENTERED",
                        "nameLocation": "1699:11:120",
                        "scope": 67358,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 67293,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1674:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "31",
                            "id": 67294,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1713:1:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                            },
                            "value": "1"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 67298,
                        "nodeType": "VariableDeclaration",
                        "src": "1720:36:120",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ENTERED",
                        "nameLocation": "1745:7:120",
                        "scope": 67358,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 67296,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1720:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "32",
                            "id": 67297,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1755:1:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_2_by_1",
                                "typeString": "int_const 2"
                            },
                            "value": "2"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 67300,
                        "nodeType": "VariableDeclaration",
                        "src": "1763:23:120",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_status",
                        "nameLocation": "1779:7:120",
                        "scope": 67358,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 67299,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1763:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 67303,
                        "nodeType": "ErrorDefinition",
                        "src": "1850:37:120",
                        "nodes": [],
                        "documentation": {
                            "id": 67301,
                            "nodeType": "StructuredDocumentation",
                            "src": "1793:52:120",
                            "text": " @dev Unauthorized reentrant call."
                        },
                        "errorSelector": "3ee5aeb5",
                        "name": "ReentrancyGuardReentrantCall",
                        "nameLocation": "1856:28:120",
                        "parameters": {
                            "id": 67302,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1884:2:120"
                        }
                    },
                    {
                        "id": 67311,
                        "nodeType": "FunctionDefinition",
                        "src": "1893:52:120",
                        "nodes": [],
                        "body": {
                            "id": 67310,
                            "nodeType": "Block",
                            "src": "1907:38:120",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 67308,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67306,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67300,
                                            "src": "1917:7:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67307,
                                            "name": "NOT_ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67295,
                                            "src": "1927:11:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1917:21:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 67309,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1917:21:120"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 67304,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1904:2:120"
                        },
                        "returnParameters": {
                            "id": 67305,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1907:0:120"
                        },
                        "scope": 67358,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 67322,
                        "nodeType": "ModifierDefinition",
                        "src": "2322:103:120",
                        "nodes": [],
                        "body": {
                            "id": 67321,
                            "nodeType": "Block",
                            "src": "2346:79:120",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 67314,
                                            "name": "_nonReentrantBefore",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67338,
                                            "src": "2356:19:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 67315,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2356:21:120",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67316,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2356:21:120"
                                },
                                {
                                    "id": 67317,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2387:1:120"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 67318,
                                            "name": "_nonReentrantAfter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67346,
                                            "src": "2398:18:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 67319,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2398:20:120",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67320,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2398:20:120"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 67312,
                            "nodeType": "StructuredDocumentation",
                            "src": "1951:366:120",
                            "text": " @dev Prevents a contract from calling itself, directly or indirectly.\n Calling a `nonReentrant` function from another `nonReentrant`\n function is not supported. It is possible to prevent this from happening\n by making the `nonReentrant` function external, and making it call a\n `private` function that does the actual work."
                        },
                        "name": "nonReentrant",
                        "nameLocation": "2331:12:120",
                        "parameters": {
                            "id": 67313,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2343:2:120"
                        },
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 67338,
                        "nodeType": "FunctionDefinition",
                        "src": "2431:307:120",
                        "nodes": [],
                        "body": {
                            "id": 67337,
                            "nodeType": "Block",
                            "src": "2470:268:120",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 67327,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 67325,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67300,
                                            "src": "2558:7:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 67326,
                                            "name": "ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67298,
                                            "src": "2569:7:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2558:18:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 67332,
                                    "nodeType": "IfStatement",
                                    "src": "2554:86:120",
                                    "trueBody": {
                                        "id": 67331,
                                        "nodeType": "Block",
                                        "src": "2578:62:120",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 67328,
                                                        "name": "ReentrancyGuardReentrantCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67303,
                                                        "src": "2599:28:120",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 67329,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2599:30:120",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 67330,
                                                "nodeType": "RevertStatement",
                                                "src": "2592:37:120"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 67335,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67333,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67300,
                                            "src": "2714:7:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67334,
                                            "name": "ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67298,
                                            "src": "2724:7:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2714:17:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 67336,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2714:17:120"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_nonReentrantBefore",
                        "nameLocation": "2440:19:120",
                        "parameters": {
                            "id": 67323,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2459:2:120"
                        },
                        "returnParameters": {
                            "id": 67324,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2470:0:120"
                        },
                        "scope": 67358,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 67346,
                        "nodeType": "FunctionDefinition",
                        "src": "2744:208:120",
                        "nodes": [],
                        "body": {
                            "id": 67345,
                            "nodeType": "Block",
                            "src": "2782:170:120",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 67343,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67341,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67300,
                                            "src": "2924:7:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67342,
                                            "name": "NOT_ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67295,
                                            "src": "2934:11:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2924:21:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 67344,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2924:21:120"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_nonReentrantAfter",
                        "nameLocation": "2753:18:120",
                        "parameters": {
                            "id": 67339,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2771:2:120"
                        },
                        "returnParameters": {
                            "id": 67340,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2782:0:120"
                        },
                        "scope": 67358,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 67357,
                        "nodeType": "FunctionDefinition",
                        "src": "3131:106:120",
                        "nodes": [],
                        "body": {
                            "id": 67356,
                            "nodeType": "Block",
                            "src": "3195:42:120",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 67354,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 67352,
                                            "name": "_status",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67300,
                                            "src": "3212:7:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 67353,
                                            "name": "ENTERED",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67298,
                                            "src": "3223:7:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3212:18:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 67351,
                                    "id": 67355,
                                    "nodeType": "Return",
                                    "src": "3205:25:120"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 67347,
                            "nodeType": "StructuredDocumentation",
                            "src": "2958:168:120",
                            "text": " @dev Returns true if the reentrancy guard is currently set to \"entered\", which indicates there is a\n `nonReentrant` function in the call stack."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_reentrancyGuardEntered",
                        "nameLocation": "3140:23:120",
                        "parameters": {
                            "id": 67348,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3163:2:120"
                        },
                        "returnParameters": {
                            "id": 67351,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67350,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67357,
                                    "src": "3189:4:120",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 67349,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3189:4:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3188:6:120"
                        },
                        "scope": 67358,
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
                    "id": 67292,
                    "nodeType": "StructuredDocumentation",
                    "src": "135:750:120",
                    "text": " @dev Contract module that helps prevent reentrant calls to a function.\n Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\n available, which can be applied to functions to make sure there are no nested\n (reentrant) calls to them.\n Note that because there is a single `nonReentrant` guard, functions marked as\n `nonReentrant` may not call one another. This can be worked around by making\n those functions `private`, and then adding `external` `nonReentrant` entry\n points to them.\n TIP: If you would like to learn more about reentrancy and alternative ways\n to protect against it, check out our blog post\n https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul]."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    67358
                ],
                "name": "ReentrancyGuard",
                "nameLocation": "904:15:120",
                "scope": 67359,
                "usedErrors": [
                    67303
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 120
};
