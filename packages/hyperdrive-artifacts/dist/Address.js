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
        "id": 71467,
        "exportedSymbols": {
            "Address": [
                71466
            ]
        },
        "nodeType": "SourceUnit",
        "src": "101:6161:167",
        "nodes": [
            {
                "id": 71215,
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
                "id": 71466,
                "nodeType": "ContractDefinition",
                "src": "195:6066:167",
                "nodes": [
                    {
                        "id": 71221,
                        "nodeType": "ErrorDefinition",
                        "src": "316:50:167",
                        "nodes": [],
                        "documentation": {
                            "id": 71217,
                            "nodeType": "StructuredDocumentation",
                            "src": "217:94:167",
                            "text": " @dev The ETH balance of the account is not enough to perform the operation."
                        },
                        "errorSelector": "cd786059",
                        "name": "AddressInsufficientBalance",
                        "nameLocation": "322:26:167",
                        "parameters": {
                            "id": 71220,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71219,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "357:7:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71221,
                                    "src": "349:15:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71218,
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
                        "id": 71226,
                        "nodeType": "ErrorDefinition",
                        "src": "452:39:167",
                        "nodes": [],
                        "documentation": {
                            "id": 71222,
                            "nodeType": "StructuredDocumentation",
                            "src": "372:75:167",
                            "text": " @dev There's no code at `target` (it is not a contract)."
                        },
                        "errorSelector": "9996b315",
                        "name": "AddressEmptyCode",
                        "nameLocation": "458:16:167",
                        "parameters": {
                            "id": 71225,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71224,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "483:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71226,
                                    "src": "475:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71223,
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
                        "id": 71229,
                        "nodeType": "ErrorDefinition",
                        "src": "591:24:167",
                        "nodes": [],
                        "documentation": {
                            "id": 71227,
                            "nodeType": "StructuredDocumentation",
                            "src": "497:89:167",
                            "text": " @dev A call to an address target failed. The target may have reverted."
                        },
                        "errorSelector": "1425ea42",
                        "name": "FailedInnerCall",
                        "nameLocation": "597:15:167",
                        "parameters": {
                            "id": 71228,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "612:2:167"
                        }
                    },
                    {
                        "id": 71270,
                        "nodeType": "FunctionDefinition",
                        "src": "1531:331:167",
                        "nodes": [],
                        "body": {
                            "id": 71269,
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
                                        "id": 71243,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 71239,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "1624:4:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Address_$71466",
                                                            "typeString": "library Address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Address_$71466",
                                                            "typeString": "library Address"
                                                        }
                                                    ],
                                                    "id": 71238,
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
                                                        "id": 71237,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1616:7:167",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71240,
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
                                            "id": 71241,
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
                                            "id": 71242,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71234,
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
                                    "id": 71252,
                                    "nodeType": "IfStatement",
                                    "src": "1612:109:167",
                                    "trueBody": {
                                        "id": 71251,
                                        "nodeType": "Block",
                                        "src": "1648:73:167",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 71247,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "1704:4:167",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Address_$71466",
                                                                        "typeString": "library Address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Address_$71466",
                                                                        "typeString": "library Address"
                                                                    }
                                                                ],
                                                                "id": 71246,
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
                                                                    "id": 71245,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1696:7:167",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71248,
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
                                                        "id": 71244,
                                                        "name": "AddressInsufficientBalance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71221,
                                                        "src": "1669:26:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 71249,
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
                                                "id": 71250,
                                                "nodeType": "RevertStatement",
                                                "src": "1662:48:167"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        71254,
                                        null
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71254,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "1737:7:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71269,
                                            "src": "1732:12:167",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71253,
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
                                    "id": 71261,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "hexValue": "",
                                                "id": 71259,
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
                                                    "id": 71255,
                                                    "name": "recipient",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71232,
                                                    "src": "1750:9:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "id": 71256,
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
                                            "id": 71258,
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
                                                    "id": 71257,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71234,
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
                                        "id": 71260,
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
                                        "id": 71263,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "1797:8:167",
                                        "subExpression": {
                                            "id": 71262,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71254,
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
                                    "id": 71268,
                                    "nodeType": "IfStatement",
                                    "src": "1793:63:167",
                                    "trueBody": {
                                        "id": 71267,
                                        "nodeType": "Block",
                                        "src": "1807:49:167",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 71264,
                                                        "name": "FailedInnerCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71229,
                                                        "src": "1828:15:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 71265,
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
                                                "id": 71266,
                                                "nodeType": "RevertStatement",
                                                "src": "1821:24:167"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71230,
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
                            "id": 71235,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71232,
                                    "mutability": "mutable",
                                    "name": "recipient",
                                    "nameLocation": "1566:9:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71270,
                                    "src": "1550:25:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                    },
                                    "typeName": {
                                        "id": 71231,
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
                                    "id": 71234,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1585:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71270,
                                    "src": "1577:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71233,
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
                            "id": 71236,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1602:0:167"
                        },
                        "scope": 71466,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71287,
                        "nodeType": "FunctionDefinition",
                        "src": "2705:151:167",
                        "nodes": [],
                        "body": {
                            "id": 71286,
                            "nodeType": "Block",
                            "src": "2794:62:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71281,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71273,
                                                "src": "2833:6:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71282,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71275,
                                                "src": "2841:4:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            {
                                                "hexValue": "30",
                                                "id": 71283,
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
                                            "id": 71280,
                                            "name": "functionCallWithValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71333,
                                            "src": "2811:21:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bytes memory,uint256) returns (bytes memory)"
                                            }
                                        },
                                        "id": 71284,
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
                                    "functionReturnParameters": 71279,
                                    "id": 71285,
                                    "nodeType": "Return",
                                    "src": "2804:45:167"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71271,
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
                            "id": 71276,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71273,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "2735:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71287,
                                    "src": "2727:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71272,
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
                                    "id": 71275,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "2756:4:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71287,
                                    "src": "2743:17:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71274,
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
                            "id": 71279,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71278,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71287,
                                    "src": "2780:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71277,
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
                        "scope": 71466,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71333,
                        "nodeType": "FunctionDefinition",
                        "src": "3180:392:167",
                        "nodes": [],
                        "body": {
                            "id": 71332,
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
                                        "id": 71305,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 71301,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "3315:4:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Address_$71466",
                                                            "typeString": "library Address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Address_$71466",
                                                            "typeString": "library Address"
                                                        }
                                                    ],
                                                    "id": 71300,
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
                                                        "id": 71299,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3307:7:167",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71302,
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
                                            "id": 71303,
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
                                            "id": 71304,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71294,
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
                                    "id": 71314,
                                    "nodeType": "IfStatement",
                                    "src": "3303:108:167",
                                    "trueBody": {
                                        "id": 71313,
                                        "nodeType": "Block",
                                        "src": "3338:73:167",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 71309,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "3394:4:167",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Address_$71466",
                                                                        "typeString": "library Address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Address_$71466",
                                                                        "typeString": "library Address"
                                                                    }
                                                                ],
                                                                "id": 71308,
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
                                                                    "id": 71307,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "3386:7:167",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71310,
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
                                                        "id": 71306,
                                                        "name": "AddressInsufficientBalance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71221,
                                                        "src": "3359:26:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 71311,
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
                                                "id": 71312,
                                                "nodeType": "RevertStatement",
                                                "src": "3352:48:167"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        71316,
                                        71318
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71316,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "3426:7:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71332,
                                            "src": "3421:12:167",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71315,
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
                                            "id": 71318,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "3448:10:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71332,
                                            "src": "3435:23:167",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71317,
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
                                    "id": 71325,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71323,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71292,
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
                                                    "id": 71319,
                                                    "name": "target",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71290,
                                                    "src": "3462:6:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 71320,
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
                                            "id": 71322,
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
                                                    "id": 71321,
                                                    "name": "value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71294,
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
                                        "id": 71324,
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
                                                "id": 71327,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71290,
                                                "src": "3537:6:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71328,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71316,
                                                "src": "3545:7:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 71329,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71318,
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
                                            "id": 71326,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71425,
                                            "src": "3510:26:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 71330,
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
                                    "functionReturnParameters": 71298,
                                    "id": 71331,
                                    "nodeType": "Return",
                                    "src": "3503:62:167"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71288,
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
                            "id": 71295,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71290,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3219:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71333,
                                    "src": "3211:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71289,
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
                                    "id": 71292,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "3240:4:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71333,
                                    "src": "3227:17:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71291,
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
                                    "id": 71294,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3254:5:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71333,
                                    "src": "3246:13:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71293,
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
                            "id": 71298,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71297,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71333,
                                    "src": "3279:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71296,
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
                        "scope": 71466,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71359,
                        "nodeType": "FunctionDefinition",
                        "src": "3711:254:167",
                        "nodes": [],
                        "body": {
                            "id": 71358,
                            "nodeType": "Block",
                            "src": "3811:154:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71344,
                                        71346
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71344,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "3827:7:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71358,
                                            "src": "3822:12:167",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71343,
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
                                            "id": 71346,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "3849:10:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71358,
                                            "src": "3836:23:167",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71345,
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
                                    "id": 71351,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71349,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71338,
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
                                                "id": 71347,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71336,
                                                "src": "3863:6:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71348,
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
                                        "id": 71350,
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
                                                "id": 71353,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71336,
                                                "src": "3930:6:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71354,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71344,
                                                "src": "3938:7:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 71355,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71346,
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
                                            "id": 71352,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71425,
                                            "src": "3903:26:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 71356,
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
                                    "functionReturnParameters": 71342,
                                    "id": 71357,
                                    "nodeType": "Return",
                                    "src": "3896:62:167"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71334,
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
                            "id": 71339,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71336,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3747:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71359,
                                    "src": "3739:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71335,
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
                                    "id": 71338,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "3768:4:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71359,
                                    "src": "3755:17:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71337,
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
                            "id": 71342,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71341,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71359,
                                    "src": "3797:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71340,
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
                        "scope": 71466,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71385,
                        "nodeType": "FunctionDefinition",
                        "src": "4106:253:167",
                        "nodes": [],
                        "body": {
                            "id": 71384,
                            "nodeType": "Block",
                            "src": "4203:156:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71370,
                                        71372
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71370,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "4219:7:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71384,
                                            "src": "4214:12:167",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71369,
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
                                            "id": 71372,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "4241:10:167",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71384,
                                            "src": "4228:23:167",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71371,
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
                                    "id": 71377,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71375,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71364,
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
                                                "id": 71373,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71362,
                                                "src": "4255:6:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71374,
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
                                        "id": 71376,
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
                                                "id": 71379,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71362,
                                                "src": "4324:6:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71380,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71370,
                                                "src": "4332:7:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 71381,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71372,
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
                                            "id": 71378,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71425,
                                            "src": "4297:26:167",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 71382,
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
                                    "functionReturnParameters": 71368,
                                    "id": 71383,
                                    "nodeType": "Return",
                                    "src": "4290:62:167"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71360,
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
                            "id": 71365,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71362,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "4144:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71385,
                                    "src": "4136:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71361,
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
                                    "id": 71364,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "4165:4:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71385,
                                    "src": "4152:17:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71363,
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
                            "id": 71368,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71367,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71385,
                                    "src": "4189:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71366,
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
                        "scope": 71466,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71425,
                        "nodeType": "FunctionDefinition",
                        "src": "4625:582:167",
                        "nodes": [],
                        "body": {
                            "id": 71424,
                            "nodeType": "Block",
                            "src": "4783:424:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 71398,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "4797:8:167",
                                        "subExpression": {
                                            "id": 71397,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71390,
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
                                        "id": 71422,
                                        "nodeType": "Block",
                                        "src": "4857:344:167",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 71413,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 71407,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 71404,
                                                                "name": "returndata",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71392,
                                                                "src": "5045:10:167",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            "id": 71405,
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
                                                            "id": 71406,
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
                                                        "id": 71412,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 71408,
                                                                    "name": "target",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71388,
                                                                    "src": "5071:6:167",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "id": 71409,
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
                                                            "id": 71410,
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
                                                            "id": 71411,
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
                                                "id": 71419,
                                                "nodeType": "IfStatement",
                                                "src": "5041:119:167",
                                                "trueBody": {
                                                    "id": 71418,
                                                    "nodeType": "Block",
                                                    "src": "5096:64:167",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [
                                                                    {
                                                                        "id": 71415,
                                                                        "name": "target",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 71388,
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
                                                                    "id": 71414,
                                                                    "name": "AddressEmptyCode",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71226,
                                                                    "src": "5121:16:167",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                                        "typeString": "function (address) pure"
                                                                    }
                                                                },
                                                                "id": 71416,
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
                                                            "id": 71417,
                                                            "nodeType": "RevertStatement",
                                                            "src": "5114:31:167"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 71420,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71392,
                                                    "src": "5180:10:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "functionReturnParameters": 71396,
                                                "id": 71421,
                                                "nodeType": "Return",
                                                "src": "5173:17:167"
                                            }
                                        ]
                                    },
                                    "id": 71423,
                                    "nodeType": "IfStatement",
                                    "src": "4793:408:167",
                                    "trueBody": {
                                        "id": 71403,
                                        "nodeType": "Block",
                                        "src": "4807:44:167",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 71400,
                                                            "name": "returndata",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71392,
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
                                                        "id": 71399,
                                                        "name": "_revert",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71465,
                                                        "src": "4821:7:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (bytes memory) pure"
                                                        }
                                                    },
                                                    "id": 71401,
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
                                                "id": 71402,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4821:19:167"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71386,
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
                            "id": 71393,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71388,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "4678:6:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71425,
                                    "src": "4670:14:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71387,
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
                                    "id": 71390,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "4699:7:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71425,
                                    "src": "4694:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71389,
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
                                    "id": 71392,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "4729:10:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71425,
                                    "src": "4716:23:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71391,
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
                            "id": 71396,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71395,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71425,
                                    "src": "4769:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71394,
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
                        "scope": 71466,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71447,
                        "nodeType": "FunctionDefinition",
                        "src": "5407:224:167",
                        "nodes": [],
                        "body": {
                            "id": 71446,
                            "nodeType": "Block",
                            "src": "5509:122:167",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 71436,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "5523:8:167",
                                        "subExpression": {
                                            "id": 71435,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71428,
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
                                        "id": 71444,
                                        "nodeType": "Block",
                                        "src": "5583:42:167",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 71442,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71430,
                                                    "src": "5604:10:167",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "functionReturnParameters": 71434,
                                                "id": 71443,
                                                "nodeType": "Return",
                                                "src": "5597:17:167"
                                            }
                                        ]
                                    },
                                    "id": 71445,
                                    "nodeType": "IfStatement",
                                    "src": "5519:106:167",
                                    "trueBody": {
                                        "id": 71441,
                                        "nodeType": "Block",
                                        "src": "5533:44:167",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 71438,
                                                            "name": "returndata",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71430,
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
                                                        "id": 71437,
                                                        "name": "_revert",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71465,
                                                        "src": "5547:7:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (bytes memory) pure"
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
                                                    "src": "5547:19:167",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71440,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5547:19:167"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71426,
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
                            "id": 71431,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71428,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "5438:7:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71447,
                                    "src": "5433:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71427,
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
                                    "id": 71430,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "5460:10:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71447,
                                    "src": "5447:23:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71429,
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
                            "id": 71434,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71433,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71447,
                                    "src": "5495:12:167",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71432,
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
                        "scope": 71466,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71465,
                        "nodeType": "FunctionDefinition",
                        "src": "5743:516:167",
                        "nodes": [],
                        "body": {
                            "id": 71464,
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
                                        "id": 71456,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 71453,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71450,
                                                "src": "5874:10:167",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 71454,
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
                                            "id": 71455,
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
                                        "id": 71462,
                                        "nodeType": "Block",
                                        "src": "6204:49:167",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 71459,
                                                        "name": "FailedInnerCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71229,
                                                        "src": "6225:15:167",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 71460,
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
                                                "id": 71461,
                                                "nodeType": "RevertStatement",
                                                "src": "6218:24:167"
                                            }
                                        ]
                                    },
                                    "id": 71463,
                                    "nodeType": "IfStatement",
                                    "src": "5870:383:167",
                                    "trueBody": {
                                        "id": 71458,
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
                                                        "declaration": 71450,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "6102:10:167",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 71450,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "6145:10:167",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "id": 71457,
                                                "nodeType": "InlineAssembly",
                                                "src": "6046:142:167"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71448,
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
                            "id": 71451,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71450,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "5773:10:167",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71465,
                                    "src": "5760:23:167",
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
                            "id": 71452,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5798:0:167"
                        },
                        "scope": 71466,
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
                    "id": 71216,
                    "nodeType": "StructuredDocumentation",
                    "src": "127:67:167",
                    "text": " @dev Collection of functions related to the address type"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71466
                ],
                "name": "Address",
                "nameLocation": "203:7:167",
                "scope": 71467,
                "usedErrors": [
                    71221,
                    71226,
                    71229
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 167
};
