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
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200bfc25ea75c040cfb033e20b97778244d8a6bc50c04d1cad9edfdfbbe52ca9b864736f6c63430008140033",
        "sourceMap": "195:6066:167:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;195:6066:167;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200bfc25ea75c040cfb033e20b97778244d8a6bc50c04d1cad9edfdfbbe52ca9b864736f6c63430008140033",
        "sourceMap": "195:6066:167:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Collection of functions related to the address type\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":\"Address\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]}},\"version\":1}",
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
        "id": 71576,
        "exportedSymbols": {
            "Address": [
                71575
            ]
        },
        "nodeType": "SourceUnit",
        "src": "101:6161:167",
        "nodes": [
            {
                "id": 71324,
                "nodeType": "PragmaDirective",
                "src": "101:24:167",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 71575,
                "nodeType": "ContractDefinition",
                "src": "195:6066:167",
                "nodes": [
                    {
                        "id": 71330,
                        "nodeType": "ErrorDefinition",
                        "src": "316:50:167",
                        "nodes": [],
                        "documentation": {
                            "id": 71326,
                            "nodeType": "StructuredDocumentation",
                            "src": "217:94:167",
                            "text": " @dev The ETH balance of the account is not enough to perform the operation."
                        },
                        "errorSelector": "cd786059",
                        "name": "AddressInsufficientBalance",
                        "nameLocation": "322:26:167",
                        "parameters": {
                            "id": 71329,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71328,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "357:7:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71330,
                                    "src": "349:15:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71327,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "349:7:167",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "348:17:167"
                        }
                    },
                    {
                        "id": 71335,
                        "nodeType": "ErrorDefinition",
                        "src": "452:39:167",
                        "nodes": [],
                        "documentation": {
                            "id": 71331,
                            "nodeType": "StructuredDocumentation",
                            "src": "372:75:167",
                            "text": " @dev There's no code at `target` (it is not a contract)."
                        },
                        "errorSelector": "9996b315",
                        "name": "AddressEmptyCode",
                        "nameLocation": "458:16:167",
                        "parameters": {
                            "id": 71334,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71333,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "483:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71335,
                                    "src": "475:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71332,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "475:7:167",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "474:16:167"
                        }
                    },
                    {
                        "id": 71338,
                        "nodeType": "ErrorDefinition",
                        "src": "591:24:167",
                        "nodes": [],
                        "documentation": {
                            "id": 71336,
                            "nodeType": "StructuredDocumentation",
                            "src": "497:89:167",
                            "text": " @dev A call to an address target failed. The target may have reverted."
                        },
                        "errorSelector": "1425ea42",
                        "name": "FailedInnerCall",
                        "nameLocation": "597:15:167",
                        "parameters": {
                            "id": 71337,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "612:2:167"
                        }
                    },
                    {
                        "id": 71379,
                        "nodeType": "FunctionDefinition",
                        "src": "1531:331:167",
                        "nodes": [],
                        "body": {
                            "id": 71378,
                            "nodeType": "Block",
                            "src": "1602:260:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 71352,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 71348,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "1624:4:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Address_$71575",
                                                            "typeString": "library Address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Address_$71575",
                                                            "typeString": "library Address"
                                                        }
                                                    ],
                                                    "id": 71347,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1616:7:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 71346,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1616:7:167",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71349,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1616:13:167",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71350,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1630:7:167",
                                            "memberName": "balance",
                                            "nodeType": "MemberAccess",
                                            "src": "1616:21:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 71351,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71343,
                                            "src": "1640:6:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1616:30:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 71361,
                                    "nodeType": "IfStatement",
                                    "src": "1612:109:167",
                                    "trueBody": {
                                        "id": 71360,
                                        "nodeType": "Block",
                                        "src": "1648:73:167",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 71356,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "1704:4:167",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Address_$71575",
                                                                        "typeString": "library Address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Address_$71575",
                                                                        "typeString": "library Address"
                                                                    }
                                                                ],
                                                                "id": 71355,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1696:7:167",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 71354,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1696:7:167",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71357,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1696:13:167",
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
                                                        "id": 71353,
                                                        "name": "AddressInsufficientBalance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71330,
                                                        "src": "1669:26:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 71358,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1669:41:167",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71359,
                                                "nodeType": "RevertStatement",
                                                "src": "1662:48:167"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        71363,
                                        null
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71363,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "1737:7:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71378,
                                            "src": "1732:12:167",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71362,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1732:4:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        null
                                    ],
                                    "id": 71370,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "hexValue": "",
                                                "id": 71368,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1780:2:167",
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
                                                    "id": 71364,
                                                    "name": "recipient",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71341,
                                                    "src": "1750:9:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "id": 71365,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1760:4:167",
                                                "memberName": "call",
                                                "nodeType": "MemberAccess",
                                                "src": "1750:14:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                }
                                            },
                                            "id": 71367,
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
                                                    "id": 71366,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71343,
                                                    "src": "1772:6:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "src": "1750:29:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 71369,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1750:33:167",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1731:52:167"
                                },
                                {
                                    "condition": {
                                        "id": 71372,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "1797:8:167",
                                        "subExpression": {
                                            "id": 71371,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71363,
                                            "src": "1798:7:167",
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
                                    "id": 71377,
                                    "nodeType": "IfStatement",
                                    "src": "1793:63:167",
                                    "trueBody": {
                                        "id": 71376,
                                        "nodeType": "Block",
                                        "src": "1807:49:167",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 71373,
                                                        "name": "FailedInnerCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71338,
                                                        "src": "1828:15:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 71374,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1828:17:167",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71375,
                                                "nodeType": "RevertStatement",
                                                "src": "1821:24:167"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71339,
                            "nodeType": "StructuredDocumentation",
                            "src": "621:905:167",
                            "text": " @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n `recipient`, forwarding all available gas and reverting on errors.\n https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n of certain opcodes, possibly making contracts go over the 2300 gas limit\n imposed by `transfer`, making them unable to receive funds via\n `transfer`. {sendValue} removes this limitation.\n https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n IMPORTANT: because control is transferred to `recipient`, care must be\n taken to not create reentrancy vulnerabilities. Consider using\n {ReentrancyGuard} or the\n https://solidity.readthedocs.io/en/v0.8.20/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sendValue",
                        "nameLocation": "1540:9:167",
                        "parameters": {
                            "id": 71344,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71341,
                                    "mutability": "mutable",
                                    "name": "recipient",
                                    "nameLocation": "1566:9:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71379,
                                    "src": "1550:25:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                    },
                                    "typeName": {
                                        "id": 71340,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1550:15:167",
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
                                    "id": 71343,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1585:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71379,
                                    "src": "1577:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71342,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1577:7:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1549:43:167"
                        },
                        "returnParameters": {
                            "id": 71345,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1602:0:167"
                        },
                        "scope": 71575,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71396,
                        "nodeType": "FunctionDefinition",
                        "src": "2705:151:167",
                        "nodes": [],
                        "body": {
                            "id": 71395,
                            "nodeType": "Block",
                            "src": "2794:62:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71390,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71382,
                                                "src": "2833:6:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71391,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71384,
                                                "src": "2841:4:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            {
                                                "hexValue": "30",
                                                "id": 71392,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2847:1:167",
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
                                            "id": 71389,
                                            "name": "functionCallWithValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71442,
                                            "src": "2811:21:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bytes memory,uint256) returns (bytes memory)"
                                            }
                                        },
                                        "id": 71393,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2811:38:167",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 71388,
                                    "id": 71394,
                                    "nodeType": "Return",
                                    "src": "2804:45:167"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71380,
                            "nodeType": "StructuredDocumentation",
                            "src": "1868:832:167",
                            "text": " @dev Performs a Solidity function call using a low level `call`. A\n plain `call` is an unsafe replacement for a function call: use this\n function instead.\n If `target` reverts with a revert reason or custom error, it is bubbled\n up by this function (like regular Solidity function calls). However, if\n the call reverted with no returned reason, this function reverts with a\n {FailedInnerCall} error.\n Returns the raw returned data. To convert to the expected return value,\n use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n Requirements:\n - `target` must be a contract.\n - calling `target` with `data` must not revert."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionCall",
                        "nameLocation": "2714:12:167",
                        "parameters": {
                            "id": 71385,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71382,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "2735:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71396,
                                    "src": "2727:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71381,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2727:7:167",
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
                                    "id": 71384,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "2756:4:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71396,
                                    "src": "2743:17:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71383,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2743:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2726:35:167"
                        },
                        "returnParameters": {
                            "id": 71388,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71387,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71396,
                                    "src": "2780:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71386,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2780:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2779:14:167"
                        },
                        "scope": 71575,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71442,
                        "nodeType": "FunctionDefinition",
                        "src": "3180:392:167",
                        "nodes": [],
                        "body": {
                            "id": 71441,
                            "nodeType": "Block",
                            "src": "3293:279:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 71414,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 71410,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "3315:4:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Address_$71575",
                                                            "typeString": "library Address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Address_$71575",
                                                            "typeString": "library Address"
                                                        }
                                                    ],
                                                    "id": 71409,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3307:7:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 71408,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3307:7:167",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71411,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3307:13:167",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71412,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3321:7:167",
                                            "memberName": "balance",
                                            "nodeType": "MemberAccess",
                                            "src": "3307:21:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 71413,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71403,
                                            "src": "3331:5:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3307:29:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 71423,
                                    "nodeType": "IfStatement",
                                    "src": "3303:108:167",
                                    "trueBody": {
                                        "id": 71422,
                                        "nodeType": "Block",
                                        "src": "3338:73:167",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 71418,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "3394:4:167",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Address_$71575",
                                                                        "typeString": "library Address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Address_$71575",
                                                                        "typeString": "library Address"
                                                                    }
                                                                ],
                                                                "id": 71417,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "3386:7:167",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 71416,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "3386:7:167",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71419,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "3386:13:167",
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
                                                        "id": 71415,
                                                        "name": "AddressInsufficientBalance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71330,
                                                        "src": "3359:26:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 71420,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3359:41:167",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71421,
                                                "nodeType": "RevertStatement",
                                                "src": "3352:48:167"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        71425,
                                        71427
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71425,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "3426:7:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71441,
                                            "src": "3421:12:167",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71424,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3421:4:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 71427,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "3448:10:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71441,
                                            "src": "3435:23:167",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71426,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3435:5:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71434,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71432,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71401,
                                                "src": "3488:4:167",
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
                                                    "id": 71428,
                                                    "name": "target",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71399,
                                                    "src": "3462:6:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 71429,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3469:4:167",
                                                "memberName": "call",
                                                "nodeType": "MemberAccess",
                                                "src": "3462:11:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                }
                                            },
                                            "id": 71431,
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
                                                    "id": 71430,
                                                    "name": "value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71403,
                                                    "src": "3481:5:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "src": "3462:25:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 71433,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3462:31:167",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3420:73:167"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71436,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71399,
                                                "src": "3537:6:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71437,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71425,
                                                "src": "3545:7:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 71438,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71427,
                                                "src": "3554:10:167",
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
                                            "id": 71435,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71534,
                                            "src": "3510:26:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 71439,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3510:55:167",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 71407,
                                    "id": 71440,
                                    "nodeType": "Return",
                                    "src": "3503:62:167"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71397,
                            "nodeType": "StructuredDocumentation",
                            "src": "2862:313:167",
                            "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but also transferring `value` wei to `target`.\n Requirements:\n - the calling contract must have an ETH balance of at least `value`.\n - the called Solidity function must be `payable`."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionCallWithValue",
                        "nameLocation": "3189:21:167",
                        "parameters": {
                            "id": 71404,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71399,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3219:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71442,
                                    "src": "3211:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71398,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3211:7:167",
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
                                    "id": 71401,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "3240:4:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71442,
                                    "src": "3227:17:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71400,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3227:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71403,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3254:5:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71442,
                                    "src": "3246:13:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71402,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3246:7:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3210:50:167"
                        },
                        "returnParameters": {
                            "id": 71407,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71406,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71442,
                                    "src": "3279:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71405,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3279:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3278:14:167"
                        },
                        "scope": 71575,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71468,
                        "nodeType": "FunctionDefinition",
                        "src": "3711:254:167",
                        "nodes": [],
                        "body": {
                            "id": 71467,
                            "nodeType": "Block",
                            "src": "3811:154:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71453,
                                        71455
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71453,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "3827:7:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71467,
                                            "src": "3822:12:167",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71452,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3822:4:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 71455,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "3849:10:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71467,
                                            "src": "3836:23:167",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71454,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3836:5:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71460,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71458,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71447,
                                                "src": "3881:4:167",
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
                                                "id": 71456,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71445,
                                                "src": "3863:6:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71457,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3870:10:167",
                                            "memberName": "staticcall",
                                            "nodeType": "MemberAccess",
                                            "src": "3863:17:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 71459,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3863:23:167",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3821:65:167"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71462,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71445,
                                                "src": "3930:6:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71463,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71453,
                                                "src": "3938:7:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 71464,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71455,
                                                "src": "3947:10:167",
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
                                            "id": 71461,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71534,
                                            "src": "3903:26:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 71465,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3903:55:167",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 71451,
                                    "id": 71466,
                                    "nodeType": "Return",
                                    "src": "3896:62:167"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71443,
                            "nodeType": "StructuredDocumentation",
                            "src": "3578:128:167",
                            "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a static call."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionStaticCall",
                        "nameLocation": "3720:18:167",
                        "parameters": {
                            "id": 71448,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71445,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3747:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71468,
                                    "src": "3739:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71444,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3739:7:167",
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
                                    "id": 71447,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "3768:4:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71468,
                                    "src": "3755:17:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71446,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3755:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3738:35:167"
                        },
                        "returnParameters": {
                            "id": 71451,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71450,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71468,
                                    "src": "3797:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71449,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3797:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3796:14:167"
                        },
                        "scope": 71575,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71494,
                        "nodeType": "FunctionDefinition",
                        "src": "4106:253:167",
                        "nodes": [],
                        "body": {
                            "id": 71493,
                            "nodeType": "Block",
                            "src": "4203:156:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71479,
                                        71481
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71479,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "4219:7:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71493,
                                            "src": "4214:12:167",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71478,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4214:4:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 71481,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "4241:10:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71493,
                                            "src": "4228:23:167",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71480,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4228:5:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71486,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71484,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71473,
                                                "src": "4275:4:167",
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
                                                "id": 71482,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71471,
                                                "src": "4255:6:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71483,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4262:12:167",
                                            "memberName": "delegatecall",
                                            "nodeType": "MemberAccess",
                                            "src": "4255:19:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 71485,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4255:25:167",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4213:67:167"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71488,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71471,
                                                "src": "4324:6:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71489,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71479,
                                                "src": "4332:7:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 71490,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71481,
                                                "src": "4341:10:167",
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
                                            "id": 71487,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71534,
                                            "src": "4297:26:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 71491,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4297:55:167",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 71477,
                                    "id": 71492,
                                    "nodeType": "Return",
                                    "src": "4290:62:167"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71469,
                            "nodeType": "StructuredDocumentation",
                            "src": "3971:130:167",
                            "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a delegate call."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionDelegateCall",
                        "nameLocation": "4115:20:167",
                        "parameters": {
                            "id": 71474,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71471,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "4144:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71494,
                                    "src": "4136:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71470,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4136:7:167",
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
                                    "id": 71473,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "4165:4:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71494,
                                    "src": "4152:17:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71472,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4152:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4135:35:167"
                        },
                        "returnParameters": {
                            "id": 71477,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71476,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71494,
                                    "src": "4189:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71475,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4189:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4188:14:167"
                        },
                        "scope": 71575,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71534,
                        "nodeType": "FunctionDefinition",
                        "src": "4625:582:167",
                        "nodes": [],
                        "body": {
                            "id": 71533,
                            "nodeType": "Block",
                            "src": "4783:424:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 71507,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "4797:8:167",
                                        "subExpression": {
                                            "id": 71506,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71499,
                                            "src": "4798:7:167",
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
                                        "id": 71531,
                                        "nodeType": "Block",
                                        "src": "4857:344:167",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 71522,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 71516,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 71513,
                                                                "name": "returndata",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71501,
                                                                "src": "5045:10:167",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            "id": 71514,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5056:6:167",
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5045:17:167",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 71515,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5066:1:167",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "5045:22:167",
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
                                                        "id": 71521,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 71517,
                                                                    "name": "target",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71497,
                                                                    "src": "5071:6:167",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "id": 71518,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5078:4:167",
                                                                "memberName": "code",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5071:11:167",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            "id": 71519,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5083:6:167",
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5071:18:167",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 71520,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5093:1:167",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "5071:23:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "5045:49:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 71528,
                                                "nodeType": "IfStatement",
                                                "src": "5041:119:167",
                                                "trueBody": {
                                                    "id": 71527,
                                                    "nodeType": "Block",
                                                    "src": "5096:64:167",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [
                                                                    {
                                                                        "id": 71524,
                                                                        "name": "target",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 71497,
                                                                        "src": "5138:6:167",
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
                                                                    "id": 71523,
                                                                    "name": "AddressEmptyCode",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71335,
                                                                    "src": "5121:16:167",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                                        "typeString": "function (address) pure"
                                                                    }
                                                                },
                                                                "id": 71525,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "5121:24:167",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 71526,
                                                            "nodeType": "RevertStatement",
                                                            "src": "5114:31:167"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 71529,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71501,
                                                    "src": "5180:10:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "functionReturnParameters": 71505,
                                                "id": 71530,
                                                "nodeType": "Return",
                                                "src": "5173:17:167"
                                            }
                                        ]
                                    },
                                    "id": 71532,
                                    "nodeType": "IfStatement",
                                    "src": "4793:408:167",
                                    "trueBody": {
                                        "id": 71512,
                                        "nodeType": "Block",
                                        "src": "4807:44:167",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 71509,
                                                            "name": "returndata",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71501,
                                                            "src": "4829:10:167",
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
                                                        "id": 71508,
                                                        "name": "_revert",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71574,
                                                        "src": "4821:7:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (bytes memory) pure"
                                                        }
                                                    },
                                                    "id": 71510,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4821:19:167",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71511,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4821:19:167"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71495,
                            "nodeType": "StructuredDocumentation",
                            "src": "4365:255:167",
                            "text": " @dev Tool to verify that a low level call to smart-contract was successful, and reverts if the target\n was not a contract or bubbling up the revert reason (falling back to {FailedInnerCall}) in case of an\n unsuccessful call."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "verifyCallResultFromTarget",
                        "nameLocation": "4634:26:167",
                        "parameters": {
                            "id": 71502,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71497,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "4678:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71534,
                                    "src": "4670:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71496,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4670:7:167",
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
                                    "id": 71499,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "4699:7:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71534,
                                    "src": "4694:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71498,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4694:4:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71501,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "4729:10:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71534,
                                    "src": "4716:23:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71500,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4716:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4660:85:167"
                        },
                        "returnParameters": {
                            "id": 71505,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71504,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71534,
                                    "src": "4769:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71503,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4769:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4768:14:167"
                        },
                        "scope": 71575,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71556,
                        "nodeType": "FunctionDefinition",
                        "src": "5407:224:167",
                        "nodes": [],
                        "body": {
                            "id": 71555,
                            "nodeType": "Block",
                            "src": "5509:122:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 71545,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "5523:8:167",
                                        "subExpression": {
                                            "id": 71544,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71537,
                                            "src": "5524:7:167",
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
                                        "id": 71553,
                                        "nodeType": "Block",
                                        "src": "5583:42:167",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 71551,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71539,
                                                    "src": "5604:10:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "functionReturnParameters": 71543,
                                                "id": 71552,
                                                "nodeType": "Return",
                                                "src": "5597:17:167"
                                            }
                                        ]
                                    },
                                    "id": 71554,
                                    "nodeType": "IfStatement",
                                    "src": "5519:106:167",
                                    "trueBody": {
                                        "id": 71550,
                                        "nodeType": "Block",
                                        "src": "5533:44:167",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 71547,
                                                            "name": "returndata",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71539,
                                                            "src": "5555:10:167",
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
                                                        "id": 71546,
                                                        "name": "_revert",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71574,
                                                        "src": "5547:7:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (bytes memory) pure"
                                                        }
                                                    },
                                                    "id": 71548,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5547:19:167",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71549,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5547:19:167"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71535,
                            "nodeType": "StructuredDocumentation",
                            "src": "5213:189:167",
                            "text": " @dev Tool to verify that a low level call was successful, and reverts if it wasn't, either by bubbling the\n revert reason or with a default {FailedInnerCall} error."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "verifyCallResult",
                        "nameLocation": "5416:16:167",
                        "parameters": {
                            "id": 71540,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71537,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "5438:7:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71556,
                                    "src": "5433:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71536,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5433:4:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71539,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "5460:10:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71556,
                                    "src": "5447:23:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71538,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5447:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5432:39:167"
                        },
                        "returnParameters": {
                            "id": 71543,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71542,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71556,
                                    "src": "5495:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71541,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5495:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5494:14:167"
                        },
                        "scope": 71575,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71574,
                        "nodeType": "FunctionDefinition",
                        "src": "5743:516:167",
                        "nodes": [],
                        "body": {
                            "id": 71573,
                            "nodeType": "Block",
                            "src": "5798:461:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 71565,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 71562,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71559,
                                                "src": "5874:10:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 71563,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5885:6:167",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "5874:17:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 71564,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5894:1:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "5874:21:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 71571,
                                        "nodeType": "Block",
                                        "src": "6204:49:167",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 71568,
                                                        "name": "FailedInnerCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71338,
                                                        "src": "6225:15:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 71569,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6225:17:167",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71570,
                                                "nodeType": "RevertStatement",
                                                "src": "6218:24:167"
                                            }
                                        ]
                                    },
                                    "id": 71572,
                                    "nodeType": "IfStatement",
                                    "src": "5870:383:167",
                                    "trueBody": {
                                        "id": 71567,
                                        "nodeType": "Block",
                                        "src": "5897:301:167",
                                        "statements": [
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6055:133:167",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulVariableDeclaration",
                                                            "src": "6073:40:167",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "returndata",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6102:10:167"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "mload",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6096:5:167"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6096:17:167"
                                                            },
                                                            "variables": [
                                                                {
                                                                    "name": "returndata_size",
                                                                    "nodeType": "YulTypedName",
                                                                    "src": "6077:15:167",
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
                                                                                "src": "6141:2:167",
                                                                                "type": "",
                                                                                "value": "32"
                                                                            },
                                                                            {
                                                                                "name": "returndata",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "6145:10:167"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "6137:3:167"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "6137:19:167"
                                                                    },
                                                                    {
                                                                        "name": "returndata_size",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6158:15:167"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6130:6:167"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6130:44:167"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "6130:44:167"
                                                        }
                                                    ]
                                                },
                                                "documentation": "@solidity memory-safe-assembly",
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 71559,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "6102:10:167",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 71559,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "6145:10:167",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "id": 71566,
                                                "nodeType": "InlineAssembly",
                                                "src": "6046:142:167"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71557,
                            "nodeType": "StructuredDocumentation",
                            "src": "5637:101:167",
                            "text": " @dev Reverts with returndata if present. Otherwise reverts with {FailedInnerCall}."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_revert",
                        "nameLocation": "5752:7:167",
                        "parameters": {
                            "id": 71560,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71559,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "5773:10:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71574,
                                    "src": "5760:23:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71558,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5760:5:167",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5759:25:167"
                        },
                        "returnParameters": {
                            "id": 71561,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5798:0:167"
                        },
                        "scope": 71575,
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
                    "id": 71325,
                    "nodeType": "StructuredDocumentation",
                    "src": "127:67:167",
                    "text": " @dev Collection of functions related to the address type"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71575
                ],
                "name": "Address",
                "nameLocation": "203:7:167",
                "scope": 71576,
                "usedErrors": [
                    71330,
                    71335,
                    71338
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 167
};
