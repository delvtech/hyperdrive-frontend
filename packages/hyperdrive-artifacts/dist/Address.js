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
        "sourceMap": "195:6066:119:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;195:6066:119;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122073ffb64776e369ef99b659be8693e4729a17c1ece892eaba16a7799d058ad05164736f6c63430008140033",
        "sourceMap": "195:6066:119:-:0;;;;;;;;",
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
        "id": 66960,
        "exportedSymbols": {
            "Address": [
                66959
            ]
        },
        "nodeType": "SourceUnit",
        "src": "101:6161:119",
        "nodes": [
            {
                "id": 66708,
                "nodeType": "PragmaDirective",
                "src": "101:24:119",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 66959,
                "nodeType": "ContractDefinition",
                "src": "195:6066:119",
                "nodes": [
                    {
                        "id": 66714,
                        "nodeType": "ErrorDefinition",
                        "src": "316:50:119",
                        "nodes": [],
                        "documentation": {
                            "id": 66710,
                            "nodeType": "StructuredDocumentation",
                            "src": "217:94:119",
                            "text": " @dev The ETH balance of the account is not enough to perform the operation."
                        },
                        "errorSelector": "cd786059",
                        "name": "AddressInsufficientBalance",
                        "nameLocation": "322:26:119",
                        "parameters": {
                            "id": 66713,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66712,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "357:7:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66714,
                                    "src": "349:15:119",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66711,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "349:7:119",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "348:17:119"
                        }
                    },
                    {
                        "id": 66719,
                        "nodeType": "ErrorDefinition",
                        "src": "452:39:119",
                        "nodes": [],
                        "documentation": {
                            "id": 66715,
                            "nodeType": "StructuredDocumentation",
                            "src": "372:75:119",
                            "text": " @dev There's no code at `target` (it is not a contract)."
                        },
                        "errorSelector": "9996b315",
                        "name": "AddressEmptyCode",
                        "nameLocation": "458:16:119",
                        "parameters": {
                            "id": 66718,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66717,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "483:6:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66719,
                                    "src": "475:14:119",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66716,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "475:7:119",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "474:16:119"
                        }
                    },
                    {
                        "id": 66722,
                        "nodeType": "ErrorDefinition",
                        "src": "591:24:119",
                        "nodes": [],
                        "documentation": {
                            "id": 66720,
                            "nodeType": "StructuredDocumentation",
                            "src": "497:89:119",
                            "text": " @dev A call to an address target failed. The target may have reverted."
                        },
                        "errorSelector": "1425ea42",
                        "name": "FailedInnerCall",
                        "nameLocation": "597:15:119",
                        "parameters": {
                            "id": 66721,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "612:2:119"
                        }
                    },
                    {
                        "id": 66763,
                        "nodeType": "FunctionDefinition",
                        "src": "1531:331:119",
                        "nodes": [],
                        "body": {
                            "id": 66762,
                            "nodeType": "Block",
                            "src": "1602:260:119",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 66736,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 66732,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "1624:4:119",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Address_$66959",
                                                            "typeString": "library Address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Address_$66959",
                                                            "typeString": "library Address"
                                                        }
                                                    ],
                                                    "id": 66731,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1616:7:119",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 66730,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1616:7:119",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 66733,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1616:13:119",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 66734,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1630:7:119",
                                            "memberName": "balance",
                                            "nodeType": "MemberAccess",
                                            "src": "1616:21:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 66735,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66727,
                                            "src": "1640:6:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1616:30:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 66745,
                                    "nodeType": "IfStatement",
                                    "src": "1612:109:119",
                                    "trueBody": {
                                        "id": 66744,
                                        "nodeType": "Block",
                                        "src": "1648:73:119",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 66740,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "1704:4:119",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Address_$66959",
                                                                        "typeString": "library Address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Address_$66959",
                                                                        "typeString": "library Address"
                                                                    }
                                                                ],
                                                                "id": 66739,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1696:7:119",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 66738,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1696:7:119",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 66741,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1696:13:119",
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
                                                        "id": 66737,
                                                        "name": "AddressInsufficientBalance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66714,
                                                        "src": "1669:26:119",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 66742,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1669:41:119",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 66743,
                                                "nodeType": "RevertStatement",
                                                "src": "1662:48:119"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        66747,
                                        null
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 66747,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "1737:7:119",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 66762,
                                            "src": "1732:12:119",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 66746,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1732:4:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        null
                                    ],
                                    "id": 66754,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "hexValue": "",
                                                "id": 66752,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1780:2:119",
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
                                                    "id": 66748,
                                                    "name": "recipient",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66725,
                                                    "src": "1750:9:119",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "id": 66749,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1760:4:119",
                                                "memberName": "call",
                                                "nodeType": "MemberAccess",
                                                "src": "1750:14:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                }
                                            },
                                            "id": 66751,
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
                                                    "id": 66750,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66727,
                                                    "src": "1772:6:119",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "src": "1750:29:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 66753,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1750:33:119",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1731:52:119"
                                },
                                {
                                    "condition": {
                                        "id": 66756,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "1797:8:119",
                                        "subExpression": {
                                            "id": 66755,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66747,
                                            "src": "1798:7:119",
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
                                    "id": 66761,
                                    "nodeType": "IfStatement",
                                    "src": "1793:63:119",
                                    "trueBody": {
                                        "id": 66760,
                                        "nodeType": "Block",
                                        "src": "1807:49:119",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 66757,
                                                        "name": "FailedInnerCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66722,
                                                        "src": "1828:15:119",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 66758,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1828:17:119",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 66759,
                                                "nodeType": "RevertStatement",
                                                "src": "1821:24:119"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66723,
                            "nodeType": "StructuredDocumentation",
                            "src": "621:905:119",
                            "text": " @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n `recipient`, forwarding all available gas and reverting on errors.\n https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n of certain opcodes, possibly making contracts go over the 2300 gas limit\n imposed by `transfer`, making them unable to receive funds via\n `transfer`. {sendValue} removes this limitation.\n https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n IMPORTANT: because control is transferred to `recipient`, care must be\n taken to not create reentrancy vulnerabilities. Consider using\n {ReentrancyGuard} or the\n https://solidity.readthedocs.io/en/v0.8.20/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sendValue",
                        "nameLocation": "1540:9:119",
                        "parameters": {
                            "id": 66728,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66725,
                                    "mutability": "mutable",
                                    "name": "recipient",
                                    "nameLocation": "1566:9:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66763,
                                    "src": "1550:25:119",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                    },
                                    "typeName": {
                                        "id": 66724,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1550:15:119",
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
                                    "id": 66727,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1585:6:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66763,
                                    "src": "1577:14:119",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 66726,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1577:7:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1549:43:119"
                        },
                        "returnParameters": {
                            "id": 66729,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1602:0:119"
                        },
                        "scope": 66959,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 66780,
                        "nodeType": "FunctionDefinition",
                        "src": "2705:151:119",
                        "nodes": [],
                        "body": {
                            "id": 66779,
                            "nodeType": "Block",
                            "src": "2794:62:119",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 66774,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66766,
                                                "src": "2833:6:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 66775,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66768,
                                                "src": "2841:4:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            {
                                                "hexValue": "30",
                                                "id": 66776,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2847:1:119",
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
                                            "id": 66773,
                                            "name": "functionCallWithValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66826,
                                            "src": "2811:21:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bytes memory,uint256) returns (bytes memory)"
                                            }
                                        },
                                        "id": 66777,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2811:38:119",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 66772,
                                    "id": 66778,
                                    "nodeType": "Return",
                                    "src": "2804:45:119"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66764,
                            "nodeType": "StructuredDocumentation",
                            "src": "1868:832:119",
                            "text": " @dev Performs a Solidity function call using a low level `call`. A\n plain `call` is an unsafe replacement for a function call: use this\n function instead.\n If `target` reverts with a revert reason or custom error, it is bubbled\n up by this function (like regular Solidity function calls). However, if\n the call reverted with no returned reason, this function reverts with a\n {FailedInnerCall} error.\n Returns the raw returned data. To convert to the expected return value,\n use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n Requirements:\n - `target` must be a contract.\n - calling `target` with `data` must not revert."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionCall",
                        "nameLocation": "2714:12:119",
                        "parameters": {
                            "id": 66769,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66766,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "2735:6:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66780,
                                    "src": "2727:14:119",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66765,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2727:7:119",
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
                                    "id": 66768,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "2756:4:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66780,
                                    "src": "2743:17:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66767,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2743:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2726:35:119"
                        },
                        "returnParameters": {
                            "id": 66772,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66771,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66780,
                                    "src": "2780:12:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66770,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2780:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2779:14:119"
                        },
                        "scope": 66959,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 66826,
                        "nodeType": "FunctionDefinition",
                        "src": "3180:392:119",
                        "nodes": [],
                        "body": {
                            "id": 66825,
                            "nodeType": "Block",
                            "src": "3293:279:119",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 66798,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 66794,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "3315:4:119",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Address_$66959",
                                                            "typeString": "library Address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Address_$66959",
                                                            "typeString": "library Address"
                                                        }
                                                    ],
                                                    "id": 66793,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3307:7:119",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 66792,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3307:7:119",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 66795,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3307:13:119",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 66796,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3321:7:119",
                                            "memberName": "balance",
                                            "nodeType": "MemberAccess",
                                            "src": "3307:21:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 66797,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66787,
                                            "src": "3331:5:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3307:29:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 66807,
                                    "nodeType": "IfStatement",
                                    "src": "3303:108:119",
                                    "trueBody": {
                                        "id": 66806,
                                        "nodeType": "Block",
                                        "src": "3338:73:119",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 66802,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "3394:4:119",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Address_$66959",
                                                                        "typeString": "library Address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Address_$66959",
                                                                        "typeString": "library Address"
                                                                    }
                                                                ],
                                                                "id": 66801,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "3386:7:119",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 66800,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "3386:7:119",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 66803,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "3386:13:119",
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
                                                        "id": 66799,
                                                        "name": "AddressInsufficientBalance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66714,
                                                        "src": "3359:26:119",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 66804,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3359:41:119",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 66805,
                                                "nodeType": "RevertStatement",
                                                "src": "3352:48:119"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        66809,
                                        66811
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 66809,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "3426:7:119",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 66825,
                                            "src": "3421:12:119",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 66808,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3421:4:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 66811,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "3448:10:119",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 66825,
                                            "src": "3435:23:119",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 66810,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3435:5:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 66818,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 66816,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66785,
                                                "src": "3488:4:119",
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
                                                    "id": 66812,
                                                    "name": "target",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66783,
                                                    "src": "3462:6:119",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 66813,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3469:4:119",
                                                "memberName": "call",
                                                "nodeType": "MemberAccess",
                                                "src": "3462:11:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                }
                                            },
                                            "id": 66815,
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
                                                    "id": 66814,
                                                    "name": "value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66787,
                                                    "src": "3481:5:119",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "src": "3462:25:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 66817,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3462:31:119",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3420:73:119"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 66820,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66783,
                                                "src": "3537:6:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 66821,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66809,
                                                "src": "3545:7:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 66822,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66811,
                                                "src": "3554:10:119",
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
                                            "id": 66819,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66918,
                                            "src": "3510:26:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 66823,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3510:55:119",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 66791,
                                    "id": 66824,
                                    "nodeType": "Return",
                                    "src": "3503:62:119"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66781,
                            "nodeType": "StructuredDocumentation",
                            "src": "2862:313:119",
                            "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but also transferring `value` wei to `target`.\n Requirements:\n - the calling contract must have an ETH balance of at least `value`.\n - the called Solidity function must be `payable`."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionCallWithValue",
                        "nameLocation": "3189:21:119",
                        "parameters": {
                            "id": 66788,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66783,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3219:6:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66826,
                                    "src": "3211:14:119",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66782,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3211:7:119",
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
                                    "id": 66785,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "3240:4:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66826,
                                    "src": "3227:17:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66784,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3227:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 66787,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3254:5:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66826,
                                    "src": "3246:13:119",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 66786,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3246:7:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3210:50:119"
                        },
                        "returnParameters": {
                            "id": 66791,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66790,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66826,
                                    "src": "3279:12:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66789,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3279:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3278:14:119"
                        },
                        "scope": 66959,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 66852,
                        "nodeType": "FunctionDefinition",
                        "src": "3711:254:119",
                        "nodes": [],
                        "body": {
                            "id": 66851,
                            "nodeType": "Block",
                            "src": "3811:154:119",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        66837,
                                        66839
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 66837,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "3827:7:119",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 66851,
                                            "src": "3822:12:119",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 66836,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3822:4:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 66839,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "3849:10:119",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 66851,
                                            "src": "3836:23:119",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 66838,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3836:5:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 66844,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 66842,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66831,
                                                "src": "3881:4:119",
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
                                                "id": 66840,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66829,
                                                "src": "3863:6:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 66841,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3870:10:119",
                                            "memberName": "staticcall",
                                            "nodeType": "MemberAccess",
                                            "src": "3863:17:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 66843,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3863:23:119",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3821:65:119"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 66846,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66829,
                                                "src": "3930:6:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 66847,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66837,
                                                "src": "3938:7:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 66848,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66839,
                                                "src": "3947:10:119",
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
                                            "id": 66845,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66918,
                                            "src": "3903:26:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 66849,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3903:55:119",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 66835,
                                    "id": 66850,
                                    "nodeType": "Return",
                                    "src": "3896:62:119"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66827,
                            "nodeType": "StructuredDocumentation",
                            "src": "3578:128:119",
                            "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a static call."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionStaticCall",
                        "nameLocation": "3720:18:119",
                        "parameters": {
                            "id": 66832,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66829,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3747:6:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66852,
                                    "src": "3739:14:119",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66828,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3739:7:119",
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
                                    "id": 66831,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "3768:4:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66852,
                                    "src": "3755:17:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66830,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3755:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3738:35:119"
                        },
                        "returnParameters": {
                            "id": 66835,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66834,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66852,
                                    "src": "3797:12:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66833,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3797:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3796:14:119"
                        },
                        "scope": 66959,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 66878,
                        "nodeType": "FunctionDefinition",
                        "src": "4106:253:119",
                        "nodes": [],
                        "body": {
                            "id": 66877,
                            "nodeType": "Block",
                            "src": "4203:156:119",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        66863,
                                        66865
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 66863,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "4219:7:119",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 66877,
                                            "src": "4214:12:119",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 66862,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4214:4:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 66865,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "4241:10:119",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 66877,
                                            "src": "4228:23:119",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 66864,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4228:5:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 66870,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 66868,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66857,
                                                "src": "4275:4:119",
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
                                                "id": 66866,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66855,
                                                "src": "4255:6:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 66867,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4262:12:119",
                                            "memberName": "delegatecall",
                                            "nodeType": "MemberAccess",
                                            "src": "4255:19:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 66869,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4255:25:119",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4213:67:119"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 66872,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66855,
                                                "src": "4324:6:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 66873,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66863,
                                                "src": "4332:7:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 66874,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66865,
                                                "src": "4341:10:119",
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
                                            "id": 66871,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66918,
                                            "src": "4297:26:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 66875,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4297:55:119",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 66861,
                                    "id": 66876,
                                    "nodeType": "Return",
                                    "src": "4290:62:119"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66853,
                            "nodeType": "StructuredDocumentation",
                            "src": "3971:130:119",
                            "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a delegate call."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionDelegateCall",
                        "nameLocation": "4115:20:119",
                        "parameters": {
                            "id": 66858,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66855,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "4144:6:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66878,
                                    "src": "4136:14:119",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66854,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4136:7:119",
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
                                    "id": 66857,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "4165:4:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66878,
                                    "src": "4152:17:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66856,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4152:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4135:35:119"
                        },
                        "returnParameters": {
                            "id": 66861,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66860,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66878,
                                    "src": "4189:12:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66859,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4189:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4188:14:119"
                        },
                        "scope": 66959,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 66918,
                        "nodeType": "FunctionDefinition",
                        "src": "4625:582:119",
                        "nodes": [],
                        "body": {
                            "id": 66917,
                            "nodeType": "Block",
                            "src": "4783:424:119",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 66891,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "4797:8:119",
                                        "subExpression": {
                                            "id": 66890,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66883,
                                            "src": "4798:7:119",
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
                                        "id": 66915,
                                        "nodeType": "Block",
                                        "src": "4857:344:119",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 66906,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 66900,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 66897,
                                                                "name": "returndata",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 66885,
                                                                "src": "5045:10:119",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            "id": 66898,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5056:6:119",
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5045:17:119",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 66899,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5066:1:119",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "5045:22:119",
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
                                                        "id": 66905,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 66901,
                                                                    "name": "target",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 66881,
                                                                    "src": "5071:6:119",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "id": 66902,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5078:4:119",
                                                                "memberName": "code",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5071:11:119",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            "id": 66903,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5083:6:119",
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5071:18:119",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 66904,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5093:1:119",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "5071:23:119",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "5045:49:119",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 66912,
                                                "nodeType": "IfStatement",
                                                "src": "5041:119:119",
                                                "trueBody": {
                                                    "id": 66911,
                                                    "nodeType": "Block",
                                                    "src": "5096:64:119",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [
                                                                    {
                                                                        "id": 66908,
                                                                        "name": "target",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 66881,
                                                                        "src": "5138:6:119",
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
                                                                    "id": 66907,
                                                                    "name": "AddressEmptyCode",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 66719,
                                                                    "src": "5121:16:119",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                                        "typeString": "function (address) pure"
                                                                    }
                                                                },
                                                                "id": 66909,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "5121:24:119",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 66910,
                                                            "nodeType": "RevertStatement",
                                                            "src": "5114:31:119"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 66913,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66885,
                                                    "src": "5180:10:119",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "functionReturnParameters": 66889,
                                                "id": 66914,
                                                "nodeType": "Return",
                                                "src": "5173:17:119"
                                            }
                                        ]
                                    },
                                    "id": 66916,
                                    "nodeType": "IfStatement",
                                    "src": "4793:408:119",
                                    "trueBody": {
                                        "id": 66896,
                                        "nodeType": "Block",
                                        "src": "4807:44:119",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 66893,
                                                            "name": "returndata",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 66885,
                                                            "src": "4829:10:119",
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
                                                        "id": 66892,
                                                        "name": "_revert",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66958,
                                                        "src": "4821:7:119",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (bytes memory) pure"
                                                        }
                                                    },
                                                    "id": 66894,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4821:19:119",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 66895,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4821:19:119"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66879,
                            "nodeType": "StructuredDocumentation",
                            "src": "4365:255:119",
                            "text": " @dev Tool to verify that a low level call to smart-contract was successful, and reverts if the target\n was not a contract or bubbling up the revert reason (falling back to {FailedInnerCall}) in case of an\n unsuccessful call."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "verifyCallResultFromTarget",
                        "nameLocation": "4634:26:119",
                        "parameters": {
                            "id": 66886,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66881,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "4678:6:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66918,
                                    "src": "4670:14:119",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66880,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4670:7:119",
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
                                    "id": 66883,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "4699:7:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66918,
                                    "src": "4694:12:119",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 66882,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4694:4:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 66885,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "4729:10:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66918,
                                    "src": "4716:23:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66884,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4716:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4660:85:119"
                        },
                        "returnParameters": {
                            "id": 66889,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66888,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66918,
                                    "src": "4769:12:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66887,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4769:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4768:14:119"
                        },
                        "scope": 66959,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 66940,
                        "nodeType": "FunctionDefinition",
                        "src": "5407:224:119",
                        "nodes": [],
                        "body": {
                            "id": 66939,
                            "nodeType": "Block",
                            "src": "5509:122:119",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 66929,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "5523:8:119",
                                        "subExpression": {
                                            "id": 66928,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66921,
                                            "src": "5524:7:119",
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
                                        "id": 66937,
                                        "nodeType": "Block",
                                        "src": "5583:42:119",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 66935,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66923,
                                                    "src": "5604:10:119",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "functionReturnParameters": 66927,
                                                "id": 66936,
                                                "nodeType": "Return",
                                                "src": "5597:17:119"
                                            }
                                        ]
                                    },
                                    "id": 66938,
                                    "nodeType": "IfStatement",
                                    "src": "5519:106:119",
                                    "trueBody": {
                                        "id": 66934,
                                        "nodeType": "Block",
                                        "src": "5533:44:119",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 66931,
                                                            "name": "returndata",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 66923,
                                                            "src": "5555:10:119",
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
                                                        "id": 66930,
                                                        "name": "_revert",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66958,
                                                        "src": "5547:7:119",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (bytes memory) pure"
                                                        }
                                                    },
                                                    "id": 66932,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5547:19:119",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 66933,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5547:19:119"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66919,
                            "nodeType": "StructuredDocumentation",
                            "src": "5213:189:119",
                            "text": " @dev Tool to verify that a low level call was successful, and reverts if it wasn't, either by bubbling the\n revert reason or with a default {FailedInnerCall} error."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "verifyCallResult",
                        "nameLocation": "5416:16:119",
                        "parameters": {
                            "id": 66924,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66921,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "5438:7:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66940,
                                    "src": "5433:12:119",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 66920,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5433:4:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 66923,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "5460:10:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66940,
                                    "src": "5447:23:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66922,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5447:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5432:39:119"
                        },
                        "returnParameters": {
                            "id": 66927,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66926,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66940,
                                    "src": "5495:12:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66925,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5495:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5494:14:119"
                        },
                        "scope": 66959,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 66958,
                        "nodeType": "FunctionDefinition",
                        "src": "5743:516:119",
                        "nodes": [],
                        "body": {
                            "id": 66957,
                            "nodeType": "Block",
                            "src": "5798:461:119",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 66949,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 66946,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66943,
                                                "src": "5874:10:119",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 66947,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5885:6:119",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "5874:17:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 66948,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5894:1:119",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "5874:21:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 66955,
                                        "nodeType": "Block",
                                        "src": "6204:49:119",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 66952,
                                                        "name": "FailedInnerCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66722,
                                                        "src": "6225:15:119",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 66953,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6225:17:119",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 66954,
                                                "nodeType": "RevertStatement",
                                                "src": "6218:24:119"
                                            }
                                        ]
                                    },
                                    "id": 66956,
                                    "nodeType": "IfStatement",
                                    "src": "5870:383:119",
                                    "trueBody": {
                                        "id": 66951,
                                        "nodeType": "Block",
                                        "src": "5897:301:119",
                                        "statements": [
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6055:133:119",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulVariableDeclaration",
                                                            "src": "6073:40:119",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "returndata",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6102:10:119"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "mload",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6096:5:119"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6096:17:119"
                                                            },
                                                            "variables": [
                                                                {
                                                                    "name": "returndata_size",
                                                                    "nodeType": "YulTypedName",
                                                                    "src": "6077:15:119",
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
                                                                                "src": "6141:2:119",
                                                                                "type": "",
                                                                                "value": "32"
                                                                            },
                                                                            {
                                                                                "name": "returndata",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "6145:10:119"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "6137:3:119"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "6137:19:119"
                                                                    },
                                                                    {
                                                                        "name": "returndata_size",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6158:15:119"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6130:6:119"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6130:44:119"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "6130:44:119"
                                                        }
                                                    ]
                                                },
                                                "documentation": "@solidity memory-safe-assembly",
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 66943,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "6102:10:119",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 66943,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "6145:10:119",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "id": 66950,
                                                "nodeType": "InlineAssembly",
                                                "src": "6046:142:119"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66941,
                            "nodeType": "StructuredDocumentation",
                            "src": "5637:101:119",
                            "text": " @dev Reverts with returndata if present. Otherwise reverts with {FailedInnerCall}."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_revert",
                        "nameLocation": "5752:7:119",
                        "parameters": {
                            "id": 66944,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66943,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "5773:10:119",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66958,
                                    "src": "5760:23:119",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66942,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5760:5:119",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5759:25:119"
                        },
                        "returnParameters": {
                            "id": 66945,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5798:0:119"
                        },
                        "scope": 66959,
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
                    "id": 66709,
                    "nodeType": "StructuredDocumentation",
                    "src": "127:67:119",
                    "text": " @dev Collection of functions related to the address type"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    66959
                ],
                "name": "Address",
                "nameLocation": "203:7:119",
                "scope": 66960,
                "usedErrors": [
                    66714,
                    66719,
                    66722
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 119
};
