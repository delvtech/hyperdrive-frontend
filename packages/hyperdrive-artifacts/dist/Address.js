export const Address = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "AddressEmptyCode",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "AddressInsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "FailedInnerCall",
            "type": "error"
        }
    ],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122073ffb64776e369ef99b659be8693e4729a17c1ece892eaba16a7799d058ad05164736f6c63430008140033",
        "sourceMap": "195:6066:118:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;195:6066:118;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122073ffb64776e369ef99b659be8693e4729a17c1ece892eaba16a7799d058ad05164736f6c63430008140033",
        "sourceMap": "195:6066:118:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Collection of functions related to the address type\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":\"Address\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "AddressEmptyCode"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "AddressInsufficientBalance"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "FailedInnerCall"
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
                "lib/openzeppelin-contracts/contracts/utils/Address.sol": "Address"
            },
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
                "urls": [
                    "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
                    "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Address.sol",
        "id": 67260,
        "exportedSymbols": {
            "Address": [
                67259
            ]
        },
        "nodeType": "SourceUnit",
        "src": "101:6161:118",
        "nodes": [
            {
                "id": 67008,
                "nodeType": "PragmaDirective",
                "src": "101:24:118",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 67259,
                "nodeType": "ContractDefinition",
                "src": "195:6066:118",
                "nodes": [
                    {
                        "id": 67014,
                        "nodeType": "ErrorDefinition",
                        "src": "316:50:118",
                        "nodes": [],
                        "documentation": {
                            "id": 67010,
                            "nodeType": "StructuredDocumentation",
                            "src": "217:94:118",
                            "text": " @dev The ETH balance of the account is not enough to perform the operation."
                        },
                        "errorSelector": "cd786059",
                        "name": "AddressInsufficientBalance",
                        "nameLocation": "322:26:118",
                        "parameters": {
                            "id": 67013,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67012,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "357:7:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67014,
                                    "src": "349:15:118",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67011,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "349:7:118",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "348:17:118"
                        }
                    },
                    {
                        "id": 67019,
                        "nodeType": "ErrorDefinition",
                        "src": "452:39:118",
                        "nodes": [],
                        "documentation": {
                            "id": 67015,
                            "nodeType": "StructuredDocumentation",
                            "src": "372:75:118",
                            "text": " @dev There's no code at `target` (it is not a contract)."
                        },
                        "errorSelector": "9996b315",
                        "name": "AddressEmptyCode",
                        "nameLocation": "458:16:118",
                        "parameters": {
                            "id": 67018,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67017,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "483:6:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67019,
                                    "src": "475:14:118",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67016,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "475:7:118",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "474:16:118"
                        }
                    },
                    {
                        "id": 67022,
                        "nodeType": "ErrorDefinition",
                        "src": "591:24:118",
                        "nodes": [],
                        "documentation": {
                            "id": 67020,
                            "nodeType": "StructuredDocumentation",
                            "src": "497:89:118",
                            "text": " @dev A call to an address target failed. The target may have reverted."
                        },
                        "errorSelector": "1425ea42",
                        "name": "FailedInnerCall",
                        "nameLocation": "597:15:118",
                        "parameters": {
                            "id": 67021,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "612:2:118"
                        }
                    },
                    {
                        "id": 67063,
                        "nodeType": "FunctionDefinition",
                        "src": "1531:331:118",
                        "nodes": [],
                        "body": {
                            "id": 67062,
                            "nodeType": "Block",
                            "src": "1602:260:118",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 67036,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 67032,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "1624:4:118",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Address_$67259",
                                                            "typeString": "library Address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Address_$67259",
                                                            "typeString": "library Address"
                                                        }
                                                    ],
                                                    "id": 67031,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1616:7:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 67030,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1616:7:118",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 67033,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1616:13:118",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 67034,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1630:7:118",
                                            "memberName": "balance",
                                            "nodeType": "MemberAccess",
                                            "src": "1616:21:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 67035,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67027,
                                            "src": "1640:6:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1616:30:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 67045,
                                    "nodeType": "IfStatement",
                                    "src": "1612:109:118",
                                    "trueBody": {
                                        "id": 67044,
                                        "nodeType": "Block",
                                        "src": "1648:73:118",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 67040,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "1704:4:118",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Address_$67259",
                                                                        "typeString": "library Address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Address_$67259",
                                                                        "typeString": "library Address"
                                                                    }
                                                                ],
                                                                "id": 67039,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1696:7:118",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 67038,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1696:7:118",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 67041,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1696:13:118",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        ],
                                                        "id": 67037,
                                                        "name": "AddressInsufficientBalance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67014,
                                                        "src": "1669:26:118",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 67042,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1669:41:118",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 67043,
                                                "nodeType": "RevertStatement",
                                                "src": "1662:48:118"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        67047,
                                        null
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 67047,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "1737:7:118",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 67062,
                                            "src": "1732:12:118",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 67046,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1732:4:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        null
                                    ],
                                    "id": 67054,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "hexValue": "",
                                                "id": 67052,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1780:2:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                    "typeString": "literal_string \"\""
                                                },
                                                "value": ""
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                    "typeString": "literal_string \"\""
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                        "typeString": "literal_string \"\""
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 67048,
                                                    "name": "recipient",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67025,
                                                    "src": "1750:9:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "id": 67049,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1760:4:118",
                                                "memberName": "call",
                                                "nodeType": "MemberAccess",
                                                "src": "1750:14:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                }
                                            },
                                            "id": 67051,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "names": [
                                                "value"
                                            ],
                                            "nodeType": "FunctionCallOptions",
                                            "options": [
                                                {
                                                    "id": 67050,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67027,
                                                    "src": "1772:6:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "src": "1750:29:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 67053,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1750:33:118",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1731:52:118"
                                },
                                {
                                    "condition": {
                                        "id": 67056,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "1797:8:118",
                                        "subExpression": {
                                            "id": 67055,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67047,
                                            "src": "1798:7:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 67061,
                                    "nodeType": "IfStatement",
                                    "src": "1793:63:118",
                                    "trueBody": {
                                        "id": 67060,
                                        "nodeType": "Block",
                                        "src": "1807:49:118",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 67057,
                                                        "name": "FailedInnerCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67022,
                                                        "src": "1828:15:118",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 67058,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1828:17:118",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 67059,
                                                "nodeType": "RevertStatement",
                                                "src": "1821:24:118"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 67023,
                            "nodeType": "StructuredDocumentation",
                            "src": "621:905:118",
                            "text": " @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n `recipient`, forwarding all available gas and reverting on errors.\n https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n of certain opcodes, possibly making contracts go over the 2300 gas limit\n imposed by `transfer`, making them unable to receive funds via\n `transfer`. {sendValue} removes this limitation.\n https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n IMPORTANT: because control is transferred to `recipient`, care must be\n taken to not create reentrancy vulnerabilities. Consider using\n {ReentrancyGuard} or the\n https://solidity.readthedocs.io/en/v0.8.20/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sendValue",
                        "nameLocation": "1540:9:118",
                        "parameters": {
                            "id": 67028,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67025,
                                    "mutability": "mutable",
                                    "name": "recipient",
                                    "nameLocation": "1566:9:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67063,
                                    "src": "1550:25:118",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                    },
                                    "typeName": {
                                        "id": 67024,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1550:15:118",
                                        "stateMutability": "payable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67027,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1585:6:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67063,
                                    "src": "1577:14:118",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 67026,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1577:7:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1549:43:118"
                        },
                        "returnParameters": {
                            "id": 67029,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1602:0:118"
                        },
                        "scope": 67259,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 67080,
                        "nodeType": "FunctionDefinition",
                        "src": "2705:151:118",
                        "nodes": [],
                        "body": {
                            "id": 67079,
                            "nodeType": "Block",
                            "src": "2794:62:118",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 67074,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67066,
                                                "src": "2833:6:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67075,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67068,
                                                "src": "2841:4:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            {
                                                "hexValue": "30",
                                                "id": 67076,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2847:1:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                }
                                            ],
                                            "id": 67073,
                                            "name": "functionCallWithValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67126,
                                            "src": "2811:21:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bytes memory,uint256) returns (bytes memory)"
                                            }
                                        },
                                        "id": 67077,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2811:38:118",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 67072,
                                    "id": 67078,
                                    "nodeType": "Return",
                                    "src": "2804:45:118"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 67064,
                            "nodeType": "StructuredDocumentation",
                            "src": "1868:832:118",
                            "text": " @dev Performs a Solidity function call using a low level `call`. A\n plain `call` is an unsafe replacement for a function call: use this\n function instead.\n If `target` reverts with a revert reason or custom error, it is bubbled\n up by this function (like regular Solidity function calls). However, if\n the call reverted with no returned reason, this function reverts with a\n {FailedInnerCall} error.\n Returns the raw returned data. To convert to the expected return value,\n use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n Requirements:\n - `target` must be a contract.\n - calling `target` with `data` must not revert."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionCall",
                        "nameLocation": "2714:12:118",
                        "parameters": {
                            "id": 67069,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67066,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "2735:6:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67080,
                                    "src": "2727:14:118",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67065,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2727:7:118",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67068,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "2756:4:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67080,
                                    "src": "2743:17:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67067,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2743:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2726:35:118"
                        },
                        "returnParameters": {
                            "id": 67072,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67071,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67080,
                                    "src": "2780:12:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67070,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2780:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2779:14:118"
                        },
                        "scope": 67259,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 67126,
                        "nodeType": "FunctionDefinition",
                        "src": "3180:392:118",
                        "nodes": [],
                        "body": {
                            "id": 67125,
                            "nodeType": "Block",
                            "src": "3293:279:118",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 67098,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 67094,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "3315:4:118",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Address_$67259",
                                                            "typeString": "library Address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Address_$67259",
                                                            "typeString": "library Address"
                                                        }
                                                    ],
                                                    "id": 67093,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3307:7:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 67092,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3307:7:118",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 67095,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3307:13:118",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 67096,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3321:7:118",
                                            "memberName": "balance",
                                            "nodeType": "MemberAccess",
                                            "src": "3307:21:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 67097,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67087,
                                            "src": "3331:5:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3307:29:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 67107,
                                    "nodeType": "IfStatement",
                                    "src": "3303:108:118",
                                    "trueBody": {
                                        "id": 67106,
                                        "nodeType": "Block",
                                        "src": "3338:73:118",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 67102,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "3394:4:118",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Address_$67259",
                                                                        "typeString": "library Address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Address_$67259",
                                                                        "typeString": "library Address"
                                                                    }
                                                                ],
                                                                "id": 67101,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "3386:7:118",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 67100,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "3386:7:118",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 67103,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "3386:13:118",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        ],
                                                        "id": 67099,
                                                        "name": "AddressInsufficientBalance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67014,
                                                        "src": "3359:26:118",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 67104,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3359:41:118",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 67105,
                                                "nodeType": "RevertStatement",
                                                "src": "3352:48:118"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        67109,
                                        67111
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 67109,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "3426:7:118",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 67125,
                                            "src": "3421:12:118",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 67108,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3421:4:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 67111,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "3448:10:118",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 67125,
                                            "src": "3435:23:118",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 67110,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3435:5:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 67118,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 67116,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67085,
                                                "src": "3488:4:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 67112,
                                                    "name": "target",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67083,
                                                    "src": "3462:6:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 67113,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3469:4:118",
                                                "memberName": "call",
                                                "nodeType": "MemberAccess",
                                                "src": "3462:11:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                }
                                            },
                                            "id": 67115,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "names": [
                                                "value"
                                            ],
                                            "nodeType": "FunctionCallOptions",
                                            "options": [
                                                {
                                                    "id": 67114,
                                                    "name": "value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67087,
                                                    "src": "3481:5:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "src": "3462:25:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 67117,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3462:31:118",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3420:73:118"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 67120,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67083,
                                                "src": "3537:6:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67121,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67109,
                                                "src": "3545:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 67122,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67111,
                                                "src": "3554:10:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 67119,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67218,
                                            "src": "3510:26:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 67123,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3510:55:118",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 67091,
                                    "id": 67124,
                                    "nodeType": "Return",
                                    "src": "3503:62:118"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 67081,
                            "nodeType": "StructuredDocumentation",
                            "src": "2862:313:118",
                            "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but also transferring `value` wei to `target`.\n Requirements:\n - the calling contract must have an ETH balance of at least `value`.\n - the called Solidity function must be `payable`."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionCallWithValue",
                        "nameLocation": "3189:21:118",
                        "parameters": {
                            "id": 67088,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67083,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3219:6:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67126,
                                    "src": "3211:14:118",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67082,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3211:7:118",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67085,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "3240:4:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67126,
                                    "src": "3227:17:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67084,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3227:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67087,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3254:5:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67126,
                                    "src": "3246:13:118",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 67086,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3246:7:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3210:50:118"
                        },
                        "returnParameters": {
                            "id": 67091,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67090,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67126,
                                    "src": "3279:12:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67089,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3279:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3278:14:118"
                        },
                        "scope": 67259,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 67152,
                        "nodeType": "FunctionDefinition",
                        "src": "3711:254:118",
                        "nodes": [],
                        "body": {
                            "id": 67151,
                            "nodeType": "Block",
                            "src": "3811:154:118",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        67137,
                                        67139
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 67137,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "3827:7:118",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 67151,
                                            "src": "3822:12:118",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 67136,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3822:4:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 67139,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "3849:10:118",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 67151,
                                            "src": "3836:23:118",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 67138,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3836:5:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 67144,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 67142,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67131,
                                                "src": "3881:4:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 67140,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67129,
                                                "src": "3863:6:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 67141,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3870:10:118",
                                            "memberName": "staticcall",
                                            "nodeType": "MemberAccess",
                                            "src": "3863:17:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 67143,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3863:23:118",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3821:65:118"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 67146,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67129,
                                                "src": "3930:6:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67147,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67137,
                                                "src": "3938:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 67148,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67139,
                                                "src": "3947:10:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 67145,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67218,
                                            "src": "3903:26:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 67149,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3903:55:118",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 67135,
                                    "id": 67150,
                                    "nodeType": "Return",
                                    "src": "3896:62:118"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 67127,
                            "nodeType": "StructuredDocumentation",
                            "src": "3578:128:118",
                            "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a static call."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionStaticCall",
                        "nameLocation": "3720:18:118",
                        "parameters": {
                            "id": 67132,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67129,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3747:6:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67152,
                                    "src": "3739:14:118",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67128,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3739:7:118",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67131,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "3768:4:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67152,
                                    "src": "3755:17:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67130,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3755:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3738:35:118"
                        },
                        "returnParameters": {
                            "id": 67135,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67134,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67152,
                                    "src": "3797:12:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67133,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3797:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3796:14:118"
                        },
                        "scope": 67259,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 67178,
                        "nodeType": "FunctionDefinition",
                        "src": "4106:253:118",
                        "nodes": [],
                        "body": {
                            "id": 67177,
                            "nodeType": "Block",
                            "src": "4203:156:118",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        67163,
                                        67165
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 67163,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "4219:7:118",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 67177,
                                            "src": "4214:12:118",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 67162,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4214:4:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 67165,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "4241:10:118",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 67177,
                                            "src": "4228:23:118",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 67164,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4228:5:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 67170,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 67168,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67157,
                                                "src": "4275:4:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 67166,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67155,
                                                "src": "4255:6:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 67167,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4262:12:118",
                                            "memberName": "delegatecall",
                                            "nodeType": "MemberAccess",
                                            "src": "4255:19:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 67169,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4255:25:118",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4213:67:118"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 67172,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67155,
                                                "src": "4324:6:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67173,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67163,
                                                "src": "4332:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 67174,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67165,
                                                "src": "4341:10:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 67171,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67218,
                                            "src": "4297:26:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 67175,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4297:55:118",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 67161,
                                    "id": 67176,
                                    "nodeType": "Return",
                                    "src": "4290:62:118"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 67153,
                            "nodeType": "StructuredDocumentation",
                            "src": "3971:130:118",
                            "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a delegate call."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionDelegateCall",
                        "nameLocation": "4115:20:118",
                        "parameters": {
                            "id": 67158,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67155,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "4144:6:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67178,
                                    "src": "4136:14:118",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67154,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4136:7:118",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67157,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "4165:4:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67178,
                                    "src": "4152:17:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67156,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4152:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4135:35:118"
                        },
                        "returnParameters": {
                            "id": 67161,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67160,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67178,
                                    "src": "4189:12:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67159,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4189:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4188:14:118"
                        },
                        "scope": 67259,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 67218,
                        "nodeType": "FunctionDefinition",
                        "src": "4625:582:118",
                        "nodes": [],
                        "body": {
                            "id": 67217,
                            "nodeType": "Block",
                            "src": "4783:424:118",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 67191,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "4797:8:118",
                                        "subExpression": {
                                            "id": 67190,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67183,
                                            "src": "4798:7:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 67215,
                                        "nodeType": "Block",
                                        "src": "4857:344:118",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 67206,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 67200,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 67197,
                                                                "name": "returndata",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 67185,
                                                                "src": "5045:10:118",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            "id": 67198,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5056:6:118",
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5045:17:118",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 67199,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5066:1:118",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "5045:22:118",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "&&",
                                                    "rightExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 67205,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 67201,
                                                                    "name": "target",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 67181,
                                                                    "src": "5071:6:118",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "id": 67202,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5078:4:118",
                                                                "memberName": "code",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5071:11:118",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            "id": 67203,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5083:6:118",
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5071:18:118",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 67204,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5093:1:118",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "5071:23:118",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "5045:49:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 67212,
                                                "nodeType": "IfStatement",
                                                "src": "5041:119:118",
                                                "trueBody": {
                                                    "id": 67211,
                                                    "nodeType": "Block",
                                                    "src": "5096:64:118",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [
                                                                    {
                                                                        "id": 67208,
                                                                        "name": "target",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 67181,
                                                                        "src": "5138:6:118",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    ],
                                                                    "id": 67207,
                                                                    "name": "AddressEmptyCode",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 67019,
                                                                    "src": "5121:16:118",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                                        "typeString": "function (address) pure"
                                                                    }
                                                                },
                                                                "id": 67209,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "5121:24:118",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 67210,
                                                            "nodeType": "RevertStatement",
                                                            "src": "5114:31:118"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 67213,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67185,
                                                    "src": "5180:10:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "functionReturnParameters": 67189,
                                                "id": 67214,
                                                "nodeType": "Return",
                                                "src": "5173:17:118"
                                            }
                                        ]
                                    },
                                    "id": 67216,
                                    "nodeType": "IfStatement",
                                    "src": "4793:408:118",
                                    "trueBody": {
                                        "id": 67196,
                                        "nodeType": "Block",
                                        "src": "4807:44:118",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 67193,
                                                            "name": "returndata",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 67185,
                                                            "src": "4829:10:118",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "id": 67192,
                                                        "name": "_revert",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67258,
                                                        "src": "4821:7:118",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (bytes memory) pure"
                                                        }
                                                    },
                                                    "id": 67194,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4821:19:118",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 67195,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4821:19:118"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 67179,
                            "nodeType": "StructuredDocumentation",
                            "src": "4365:255:118",
                            "text": " @dev Tool to verify that a low level call to smart-contract was successful, and reverts if the target\n was not a contract or bubbling up the revert reason (falling back to {FailedInnerCall}) in case of an\n unsuccessful call."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "verifyCallResultFromTarget",
                        "nameLocation": "4634:26:118",
                        "parameters": {
                            "id": 67186,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67181,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "4678:6:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67218,
                                    "src": "4670:14:118",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67180,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4670:7:118",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67183,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "4699:7:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67218,
                                    "src": "4694:12:118",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 67182,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4694:4:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67185,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "4729:10:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67218,
                                    "src": "4716:23:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67184,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4716:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4660:85:118"
                        },
                        "returnParameters": {
                            "id": 67189,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67188,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67218,
                                    "src": "4769:12:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67187,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4769:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4768:14:118"
                        },
                        "scope": 67259,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 67240,
                        "nodeType": "FunctionDefinition",
                        "src": "5407:224:118",
                        "nodes": [],
                        "body": {
                            "id": 67239,
                            "nodeType": "Block",
                            "src": "5509:122:118",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 67229,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "5523:8:118",
                                        "subExpression": {
                                            "id": 67228,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67221,
                                            "src": "5524:7:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 67237,
                                        "nodeType": "Block",
                                        "src": "5583:42:118",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 67235,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67223,
                                                    "src": "5604:10:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "functionReturnParameters": 67227,
                                                "id": 67236,
                                                "nodeType": "Return",
                                                "src": "5597:17:118"
                                            }
                                        ]
                                    },
                                    "id": 67238,
                                    "nodeType": "IfStatement",
                                    "src": "5519:106:118",
                                    "trueBody": {
                                        "id": 67234,
                                        "nodeType": "Block",
                                        "src": "5533:44:118",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 67231,
                                                            "name": "returndata",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 67223,
                                                            "src": "5555:10:118",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "id": 67230,
                                                        "name": "_revert",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67258,
                                                        "src": "5547:7:118",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (bytes memory) pure"
                                                        }
                                                    },
                                                    "id": 67232,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5547:19:118",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 67233,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5547:19:118"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 67219,
                            "nodeType": "StructuredDocumentation",
                            "src": "5213:189:118",
                            "text": " @dev Tool to verify that a low level call was successful, and reverts if it wasn't, either by bubbling the\n revert reason or with a default {FailedInnerCall} error."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "verifyCallResult",
                        "nameLocation": "5416:16:118",
                        "parameters": {
                            "id": 67224,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67221,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "5438:7:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67240,
                                    "src": "5433:12:118",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 67220,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5433:4:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67223,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "5460:10:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67240,
                                    "src": "5447:23:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67222,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5447:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5432:39:118"
                        },
                        "returnParameters": {
                            "id": 67227,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67226,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67240,
                                    "src": "5495:12:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67225,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5495:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5494:14:118"
                        },
                        "scope": 67259,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 67258,
                        "nodeType": "FunctionDefinition",
                        "src": "5743:516:118",
                        "nodes": [],
                        "body": {
                            "id": 67257,
                            "nodeType": "Block",
                            "src": "5798:461:118",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 67249,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 67246,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67243,
                                                "src": "5874:10:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 67247,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5885:6:118",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "5874:17:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 67248,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5894:1:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "5874:21:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 67255,
                                        "nodeType": "Block",
                                        "src": "6204:49:118",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 67252,
                                                        "name": "FailedInnerCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67022,
                                                        "src": "6225:15:118",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 67253,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6225:17:118",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 67254,
                                                "nodeType": "RevertStatement",
                                                "src": "6218:24:118"
                                            }
                                        ]
                                    },
                                    "id": 67256,
                                    "nodeType": "IfStatement",
                                    "src": "5870:383:118",
                                    "trueBody": {
                                        "id": 67251,
                                        "nodeType": "Block",
                                        "src": "5897:301:118",
                                        "statements": [
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6055:133:118",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulVariableDeclaration",
                                                            "src": "6073:40:118",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "returndata",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6102:10:118"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "mload",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6096:5:118"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6096:17:118"
                                                            },
                                                            "variables": [
                                                                {
                                                                    "name": "returndata_size",
                                                                    "nodeType": "YulTypedName",
                                                                    "src": "6077:15:118",
                                                                    "type": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "6141:2:118",
                                                                                "type": "",
                                                                                "value": "32"
                                                                            },
                                                                            {
                                                                                "name": "returndata",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "6145:10:118"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "6137:3:118"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "6137:19:118"
                                                                    },
                                                                    {
                                                                        "name": "returndata_size",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6158:15:118"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6130:6:118"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6130:44:118"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "6130:44:118"
                                                        }
                                                    ]
                                                },
                                                "documentation": "@solidity memory-safe-assembly",
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 67243,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "6102:10:118",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 67243,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "6145:10:118",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "id": 67250,
                                                "nodeType": "InlineAssembly",
                                                "src": "6046:142:118"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 67241,
                            "nodeType": "StructuredDocumentation",
                            "src": "5637:101:118",
                            "text": " @dev Reverts with returndata if present. Otherwise reverts with {FailedInnerCall}."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_revert",
                        "nameLocation": "5752:7:118",
                        "parameters": {
                            "id": 67244,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67243,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "5773:10:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67258,
                                    "src": "5760:23:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 67242,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5760:5:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5759:25:118"
                        },
                        "returnParameters": {
                            "id": 67245,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5798:0:118"
                        },
                        "scope": 67259,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "private"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "Address",
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": {
                    "id": 67009,
                    "nodeType": "StructuredDocumentation",
                    "src": "127:67:118",
                    "text": " @dev Collection of functions related to the address type"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    67259
                ],
                "name": "Address",
                "nameLocation": "203:7:118",
                "scope": 67260,
                "usedErrors": [
                    67014,
                    67019,
                    67022
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 118
};
