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
        "sourceMap": "195:6066:169:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;195:6066:169;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122073ffb64776e369ef99b659be8693e4729a17c1ece892eaba16a7799d058ad05164736f6c63430008140033",
        "sourceMap": "195:6066:169:-:0;;;;;;;;",
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
        "id": 71897,
        "exportedSymbols": {
            "Address": [
                71896
            ]
        },
        "nodeType": "SourceUnit",
        "src": "101:6161:169",
        "nodes": [
            {
                "id": 71645,
                "nodeType": "PragmaDirective",
                "src": "101:24:169",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 71896,
                "nodeType": "ContractDefinition",
                "src": "195:6066:169",
                "nodes": [
                    {
                        "id": 71651,
                        "nodeType": "ErrorDefinition",
                        "src": "316:50:169",
                        "nodes": [],
                        "documentation": {
                            "id": 71647,
                            "nodeType": "StructuredDocumentation",
                            "src": "217:94:169",
                            "text": " @dev The ETH balance of the account is not enough to perform the operation."
                        },
                        "errorSelector": "cd786059",
                        "name": "AddressInsufficientBalance",
                        "nameLocation": "322:26:169",
                        "parameters": {
                            "id": 71650,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71649,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "357:7:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71651,
                                    "src": "349:15:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71648,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "349:7:169",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "348:17:169"
                        }
                    },
                    {
                        "id": 71656,
                        "nodeType": "ErrorDefinition",
                        "src": "452:39:169",
                        "nodes": [],
                        "documentation": {
                            "id": 71652,
                            "nodeType": "StructuredDocumentation",
                            "src": "372:75:169",
                            "text": " @dev There's no code at `target` (it is not a contract)."
                        },
                        "errorSelector": "9996b315",
                        "name": "AddressEmptyCode",
                        "nameLocation": "458:16:169",
                        "parameters": {
                            "id": 71655,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71654,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "483:6:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71656,
                                    "src": "475:14:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71653,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "475:7:169",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "474:16:169"
                        }
                    },
                    {
                        "id": 71659,
                        "nodeType": "ErrorDefinition",
                        "src": "591:24:169",
                        "nodes": [],
                        "documentation": {
                            "id": 71657,
                            "nodeType": "StructuredDocumentation",
                            "src": "497:89:169",
                            "text": " @dev A call to an address target failed. The target may have reverted."
                        },
                        "errorSelector": "1425ea42",
                        "name": "FailedInnerCall",
                        "nameLocation": "597:15:169",
                        "parameters": {
                            "id": 71658,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "612:2:169"
                        }
                    },
                    {
                        "id": 71700,
                        "nodeType": "FunctionDefinition",
                        "src": "1531:331:169",
                        "nodes": [],
                        "body": {
                            "id": 71699,
                            "nodeType": "Block",
                            "src": "1602:260:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 71673,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 71669,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "1624:4:169",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Address_$71896",
                                                            "typeString": "library Address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Address_$71896",
                                                            "typeString": "library Address"
                                                        }
                                                    ],
                                                    "id": 71668,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1616:7:169",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 71667,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1616:7:169",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71670,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1616:13:169",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71671,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1630:7:169",
                                            "memberName": "balance",
                                            "nodeType": "MemberAccess",
                                            "src": "1616:21:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 71672,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71664,
                                            "src": "1640:6:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1616:30:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 71682,
                                    "nodeType": "IfStatement",
                                    "src": "1612:109:169",
                                    "trueBody": {
                                        "id": 71681,
                                        "nodeType": "Block",
                                        "src": "1648:73:169",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 71677,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "1704:4:169",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Address_$71896",
                                                                        "typeString": "library Address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Address_$71896",
                                                                        "typeString": "library Address"
                                                                    }
                                                                ],
                                                                "id": 71676,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1696:7:169",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 71675,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1696:7:169",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71678,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1696:13:169",
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
                                                        "id": 71674,
                                                        "name": "AddressInsufficientBalance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71651,
                                                        "src": "1669:26:169",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 71679,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1669:41:169",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71680,
                                                "nodeType": "RevertStatement",
                                                "src": "1662:48:169"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        71684,
                                        null
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71684,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "1737:7:169",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71699,
                                            "src": "1732:12:169",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71683,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1732:4:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        null
                                    ],
                                    "id": 71691,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "hexValue": "",
                                                "id": 71689,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1780:2:169",
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
                                                    "id": 71685,
                                                    "name": "recipient",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71662,
                                                    "src": "1750:9:169",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "id": 71686,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1760:4:169",
                                                "memberName": "call",
                                                "nodeType": "MemberAccess",
                                                "src": "1750:14:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                }
                                            },
                                            "id": 71688,
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
                                                    "id": 71687,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71664,
                                                    "src": "1772:6:169",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "src": "1750:29:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 71690,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1750:33:169",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1731:52:169"
                                },
                                {
                                    "condition": {
                                        "id": 71693,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "1797:8:169",
                                        "subExpression": {
                                            "id": 71692,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71684,
                                            "src": "1798:7:169",
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
                                    "id": 71698,
                                    "nodeType": "IfStatement",
                                    "src": "1793:63:169",
                                    "trueBody": {
                                        "id": 71697,
                                        "nodeType": "Block",
                                        "src": "1807:49:169",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 71694,
                                                        "name": "FailedInnerCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71659,
                                                        "src": "1828:15:169",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 71695,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1828:17:169",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71696,
                                                "nodeType": "RevertStatement",
                                                "src": "1821:24:169"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71660,
                            "nodeType": "StructuredDocumentation",
                            "src": "621:905:169",
                            "text": " @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n `recipient`, forwarding all available gas and reverting on errors.\n https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n of certain opcodes, possibly making contracts go over the 2300 gas limit\n imposed by `transfer`, making them unable to receive funds via\n `transfer`. {sendValue} removes this limitation.\n https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n IMPORTANT: because control is transferred to `recipient`, care must be\n taken to not create reentrancy vulnerabilities. Consider using\n {ReentrancyGuard} or the\n https://solidity.readthedocs.io/en/v0.8.20/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sendValue",
                        "nameLocation": "1540:9:169",
                        "parameters": {
                            "id": 71665,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71662,
                                    "mutability": "mutable",
                                    "name": "recipient",
                                    "nameLocation": "1566:9:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71700,
                                    "src": "1550:25:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                    },
                                    "typeName": {
                                        "id": 71661,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1550:15:169",
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
                                    "id": 71664,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1585:6:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71700,
                                    "src": "1577:14:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71663,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1577:7:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1549:43:169"
                        },
                        "returnParameters": {
                            "id": 71666,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1602:0:169"
                        },
                        "scope": 71896,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71717,
                        "nodeType": "FunctionDefinition",
                        "src": "2705:151:169",
                        "nodes": [],
                        "body": {
                            "id": 71716,
                            "nodeType": "Block",
                            "src": "2794:62:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71711,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71703,
                                                "src": "2833:6:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71712,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71705,
                                                "src": "2841:4:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            {
                                                "hexValue": "30",
                                                "id": 71713,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2847:1:169",
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
                                            "id": 71710,
                                            "name": "functionCallWithValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71763,
                                            "src": "2811:21:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bytes memory,uint256) returns (bytes memory)"
                                            }
                                        },
                                        "id": 71714,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2811:38:169",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 71709,
                                    "id": 71715,
                                    "nodeType": "Return",
                                    "src": "2804:45:169"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71701,
                            "nodeType": "StructuredDocumentation",
                            "src": "1868:832:169",
                            "text": " @dev Performs a Solidity function call using a low level `call`. A\n plain `call` is an unsafe replacement for a function call: use this\n function instead.\n If `target` reverts with a revert reason or custom error, it is bubbled\n up by this function (like regular Solidity function calls). However, if\n the call reverted with no returned reason, this function reverts with a\n {FailedInnerCall} error.\n Returns the raw returned data. To convert to the expected return value,\n use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n Requirements:\n - `target` must be a contract.\n - calling `target` with `data` must not revert."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionCall",
                        "nameLocation": "2714:12:169",
                        "parameters": {
                            "id": 71706,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71703,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "2735:6:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71717,
                                    "src": "2727:14:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71702,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2727:7:169",
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
                                    "id": 71705,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "2756:4:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71717,
                                    "src": "2743:17:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71704,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2743:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2726:35:169"
                        },
                        "returnParameters": {
                            "id": 71709,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71708,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71717,
                                    "src": "2780:12:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71707,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2780:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2779:14:169"
                        },
                        "scope": 71896,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71763,
                        "nodeType": "FunctionDefinition",
                        "src": "3180:392:169",
                        "nodes": [],
                        "body": {
                            "id": 71762,
                            "nodeType": "Block",
                            "src": "3293:279:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 71735,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 71731,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "3315:4:169",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Address_$71896",
                                                            "typeString": "library Address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Address_$71896",
                                                            "typeString": "library Address"
                                                        }
                                                    ],
                                                    "id": 71730,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3307:7:169",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 71729,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3307:7:169",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71732,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3307:13:169",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71733,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3321:7:169",
                                            "memberName": "balance",
                                            "nodeType": "MemberAccess",
                                            "src": "3307:21:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 71734,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71724,
                                            "src": "3331:5:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3307:29:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 71744,
                                    "nodeType": "IfStatement",
                                    "src": "3303:108:169",
                                    "trueBody": {
                                        "id": 71743,
                                        "nodeType": "Block",
                                        "src": "3338:73:169",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 71739,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "3394:4:169",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Address_$71896",
                                                                        "typeString": "library Address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Address_$71896",
                                                                        "typeString": "library Address"
                                                                    }
                                                                ],
                                                                "id": 71738,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "3386:7:169",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 71737,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "3386:7:169",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71740,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "3386:13:169",
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
                                                        "id": 71736,
                                                        "name": "AddressInsufficientBalance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71651,
                                                        "src": "3359:26:169",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 71741,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3359:41:169",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71742,
                                                "nodeType": "RevertStatement",
                                                "src": "3352:48:169"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        71746,
                                        71748
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71746,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "3426:7:169",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71762,
                                            "src": "3421:12:169",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71745,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3421:4:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 71748,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "3448:10:169",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71762,
                                            "src": "3435:23:169",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71747,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3435:5:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71755,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71753,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71722,
                                                "src": "3488:4:169",
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
                                                    "id": 71749,
                                                    "name": "target",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71720,
                                                    "src": "3462:6:169",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 71750,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3469:4:169",
                                                "memberName": "call",
                                                "nodeType": "MemberAccess",
                                                "src": "3462:11:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                }
                                            },
                                            "id": 71752,
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
                                                    "id": 71751,
                                                    "name": "value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71724,
                                                    "src": "3481:5:169",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "src": "3462:25:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 71754,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3462:31:169",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3420:73:169"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71757,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71720,
                                                "src": "3537:6:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71758,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71746,
                                                "src": "3545:7:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 71759,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71748,
                                                "src": "3554:10:169",
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
                                            "id": 71756,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71855,
                                            "src": "3510:26:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 71760,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3510:55:169",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 71728,
                                    "id": 71761,
                                    "nodeType": "Return",
                                    "src": "3503:62:169"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71718,
                            "nodeType": "StructuredDocumentation",
                            "src": "2862:313:169",
                            "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but also transferring `value` wei to `target`.\n Requirements:\n - the calling contract must have an ETH balance of at least `value`.\n - the called Solidity function must be `payable`."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionCallWithValue",
                        "nameLocation": "3189:21:169",
                        "parameters": {
                            "id": 71725,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71720,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3219:6:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71763,
                                    "src": "3211:14:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71719,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3211:7:169",
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
                                    "id": 71722,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "3240:4:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71763,
                                    "src": "3227:17:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71721,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3227:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71724,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3254:5:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71763,
                                    "src": "3246:13:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71723,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3246:7:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3210:50:169"
                        },
                        "returnParameters": {
                            "id": 71728,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71727,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71763,
                                    "src": "3279:12:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71726,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3279:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3278:14:169"
                        },
                        "scope": 71896,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71789,
                        "nodeType": "FunctionDefinition",
                        "src": "3711:254:169",
                        "nodes": [],
                        "body": {
                            "id": 71788,
                            "nodeType": "Block",
                            "src": "3811:154:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71774,
                                        71776
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71774,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "3827:7:169",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71788,
                                            "src": "3822:12:169",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71773,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3822:4:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 71776,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "3849:10:169",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71788,
                                            "src": "3836:23:169",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71775,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3836:5:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71781,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71779,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71768,
                                                "src": "3881:4:169",
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
                                                "id": 71777,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71766,
                                                "src": "3863:6:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71778,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3870:10:169",
                                            "memberName": "staticcall",
                                            "nodeType": "MemberAccess",
                                            "src": "3863:17:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 71780,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3863:23:169",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3821:65:169"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71783,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71766,
                                                "src": "3930:6:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71784,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71774,
                                                "src": "3938:7:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 71785,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71776,
                                                "src": "3947:10:169",
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
                                            "id": 71782,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71855,
                                            "src": "3903:26:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 71786,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3903:55:169",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 71772,
                                    "id": 71787,
                                    "nodeType": "Return",
                                    "src": "3896:62:169"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71764,
                            "nodeType": "StructuredDocumentation",
                            "src": "3578:128:169",
                            "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a static call."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionStaticCall",
                        "nameLocation": "3720:18:169",
                        "parameters": {
                            "id": 71769,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71766,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3747:6:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71789,
                                    "src": "3739:14:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71765,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3739:7:169",
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
                                    "id": 71768,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "3768:4:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71789,
                                    "src": "3755:17:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71767,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3755:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3738:35:169"
                        },
                        "returnParameters": {
                            "id": 71772,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71771,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71789,
                                    "src": "3797:12:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71770,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3797:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3796:14:169"
                        },
                        "scope": 71896,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71815,
                        "nodeType": "FunctionDefinition",
                        "src": "4106:253:169",
                        "nodes": [],
                        "body": {
                            "id": 71814,
                            "nodeType": "Block",
                            "src": "4203:156:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71800,
                                        71802
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71800,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "4219:7:169",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71814,
                                            "src": "4214:12:169",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71799,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4214:4:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 71802,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "4241:10:169",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71814,
                                            "src": "4228:23:169",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71801,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4228:5:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71807,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71805,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71794,
                                                "src": "4275:4:169",
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
                                                "id": 71803,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71792,
                                                "src": "4255:6:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71804,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4262:12:169",
                                            "memberName": "delegatecall",
                                            "nodeType": "MemberAccess",
                                            "src": "4255:19:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 71806,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4255:25:169",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4213:67:169"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71809,
                                                "name": "target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71792,
                                                "src": "4324:6:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71810,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71800,
                                                "src": "4332:7:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 71811,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71802,
                                                "src": "4341:10:169",
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
                                            "id": 71808,
                                            "name": "verifyCallResultFromTarget",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71855,
                                            "src": "4297:26:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address,bool,bytes memory) view returns (bytes memory)"
                                            }
                                        },
                                        "id": 71812,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4297:55:169",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 71798,
                                    "id": 71813,
                                    "nodeType": "Return",
                                    "src": "4290:62:169"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71790,
                            "nodeType": "StructuredDocumentation",
                            "src": "3971:130:169",
                            "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a delegate call."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "functionDelegateCall",
                        "nameLocation": "4115:20:169",
                        "parameters": {
                            "id": 71795,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71792,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "4144:6:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71815,
                                    "src": "4136:14:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71791,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4136:7:169",
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
                                    "id": 71794,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "4165:4:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71815,
                                    "src": "4152:17:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71793,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4152:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4135:35:169"
                        },
                        "returnParameters": {
                            "id": 71798,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71797,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71815,
                                    "src": "4189:12:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71796,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4189:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4188:14:169"
                        },
                        "scope": 71896,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71855,
                        "nodeType": "FunctionDefinition",
                        "src": "4625:582:169",
                        "nodes": [],
                        "body": {
                            "id": 71854,
                            "nodeType": "Block",
                            "src": "4783:424:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 71828,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "4797:8:169",
                                        "subExpression": {
                                            "id": 71827,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71820,
                                            "src": "4798:7:169",
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
                                        "id": 71852,
                                        "nodeType": "Block",
                                        "src": "4857:344:169",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 71843,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 71837,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 71834,
                                                                "name": "returndata",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71822,
                                                                "src": "5045:10:169",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            "id": 71835,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5056:6:169",
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5045:17:169",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 71836,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5066:1:169",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "5045:22:169",
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
                                                        "id": 71842,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 71838,
                                                                    "name": "target",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71818,
                                                                    "src": "5071:6:169",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "id": 71839,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5078:4:169",
                                                                "memberName": "code",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5071:11:169",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            "id": 71840,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5083:6:169",
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5071:18:169",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 71841,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5093:1:169",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "5071:23:169",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "5045:49:169",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 71849,
                                                "nodeType": "IfStatement",
                                                "src": "5041:119:169",
                                                "trueBody": {
                                                    "id": 71848,
                                                    "nodeType": "Block",
                                                    "src": "5096:64:169",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [
                                                                    {
                                                                        "id": 71845,
                                                                        "name": "target",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 71818,
                                                                        "src": "5138:6:169",
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
                                                                    "id": 71844,
                                                                    "name": "AddressEmptyCode",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71656,
                                                                    "src": "5121:16:169",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                                        "typeString": "function (address) pure"
                                                                    }
                                                                },
                                                                "id": 71846,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "5121:24:169",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 71847,
                                                            "nodeType": "RevertStatement",
                                                            "src": "5114:31:169"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 71850,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71822,
                                                    "src": "5180:10:169",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "functionReturnParameters": 71826,
                                                "id": 71851,
                                                "nodeType": "Return",
                                                "src": "5173:17:169"
                                            }
                                        ]
                                    },
                                    "id": 71853,
                                    "nodeType": "IfStatement",
                                    "src": "4793:408:169",
                                    "trueBody": {
                                        "id": 71833,
                                        "nodeType": "Block",
                                        "src": "4807:44:169",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 71830,
                                                            "name": "returndata",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71822,
                                                            "src": "4829:10:169",
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
                                                        "id": 71829,
                                                        "name": "_revert",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71895,
                                                        "src": "4821:7:169",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (bytes memory) pure"
                                                        }
                                                    },
                                                    "id": 71831,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4821:19:169",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71832,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4821:19:169"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71816,
                            "nodeType": "StructuredDocumentation",
                            "src": "4365:255:169",
                            "text": " @dev Tool to verify that a low level call to smart-contract was successful, and reverts if the target\n was not a contract or bubbling up the revert reason (falling back to {FailedInnerCall}) in case of an\n unsuccessful call."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "verifyCallResultFromTarget",
                        "nameLocation": "4634:26:169",
                        "parameters": {
                            "id": 71823,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71818,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "4678:6:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71855,
                                    "src": "4670:14:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71817,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4670:7:169",
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
                                    "id": 71820,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "4699:7:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71855,
                                    "src": "4694:12:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71819,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4694:4:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71822,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "4729:10:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71855,
                                    "src": "4716:23:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71821,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4716:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4660:85:169"
                        },
                        "returnParameters": {
                            "id": 71826,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71825,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71855,
                                    "src": "4769:12:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71824,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4769:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4768:14:169"
                        },
                        "scope": 71896,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71877,
                        "nodeType": "FunctionDefinition",
                        "src": "5407:224:169",
                        "nodes": [],
                        "body": {
                            "id": 71876,
                            "nodeType": "Block",
                            "src": "5509:122:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 71866,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "5523:8:169",
                                        "subExpression": {
                                            "id": 71865,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71858,
                                            "src": "5524:7:169",
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
                                        "id": 71874,
                                        "nodeType": "Block",
                                        "src": "5583:42:169",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 71872,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71860,
                                                    "src": "5604:10:169",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "functionReturnParameters": 71864,
                                                "id": 71873,
                                                "nodeType": "Return",
                                                "src": "5597:17:169"
                                            }
                                        ]
                                    },
                                    "id": 71875,
                                    "nodeType": "IfStatement",
                                    "src": "5519:106:169",
                                    "trueBody": {
                                        "id": 71871,
                                        "nodeType": "Block",
                                        "src": "5533:44:169",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 71868,
                                                            "name": "returndata",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71860,
                                                            "src": "5555:10:169",
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
                                                        "id": 71867,
                                                        "name": "_revert",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71895,
                                                        "src": "5547:7:169",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (bytes memory) pure"
                                                        }
                                                    },
                                                    "id": 71869,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5547:19:169",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71870,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5547:19:169"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71856,
                            "nodeType": "StructuredDocumentation",
                            "src": "5213:189:169",
                            "text": " @dev Tool to verify that a low level call was successful, and reverts if it wasn't, either by bubbling the\n revert reason or with a default {FailedInnerCall} error."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "verifyCallResult",
                        "nameLocation": "5416:16:169",
                        "parameters": {
                            "id": 71861,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71858,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "5438:7:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71877,
                                    "src": "5433:12:169",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71857,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5433:4:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71860,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "5460:10:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71877,
                                    "src": "5447:23:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71859,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5447:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5432:39:169"
                        },
                        "returnParameters": {
                            "id": 71864,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71863,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71877,
                                    "src": "5495:12:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71862,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5495:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5494:14:169"
                        },
                        "scope": 71896,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71895,
                        "nodeType": "FunctionDefinition",
                        "src": "5743:516:169",
                        "nodes": [],
                        "body": {
                            "id": 71894,
                            "nodeType": "Block",
                            "src": "5798:461:169",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 71886,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 71883,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71880,
                                                "src": "5874:10:169",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 71884,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5885:6:169",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "5874:17:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 71885,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5894:1:169",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "5874:21:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 71892,
                                        "nodeType": "Block",
                                        "src": "6204:49:169",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 71889,
                                                        "name": "FailedInnerCall",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71659,
                                                        "src": "6225:15:169",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 71890,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6225:17:169",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71891,
                                                "nodeType": "RevertStatement",
                                                "src": "6218:24:169"
                                            }
                                        ]
                                    },
                                    "id": 71893,
                                    "nodeType": "IfStatement",
                                    "src": "5870:383:169",
                                    "trueBody": {
                                        "id": 71888,
                                        "nodeType": "Block",
                                        "src": "5897:301:169",
                                        "statements": [
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6055:133:169",
                                                    "statements": [
                                                        {
                                                            "nodeType": "YulVariableDeclaration",
                                                            "src": "6073:40:169",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "returndata",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6102:10:169"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "mload",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6096:5:169"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6096:17:169"
                                                            },
                                                            "variables": [
                                                                {
                                                                    "name": "returndata_size",
                                                                    "nodeType": "YulTypedName",
                                                                    "src": "6077:15:169",
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
                                                                                "src": "6141:2:169",
                                                                                "type": "",
                                                                                "value": "32"
                                                                            },
                                                                            {
                                                                                "name": "returndata",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "6145:10:169"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "6137:3:169"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "6137:19:169"
                                                                    },
                                                                    {
                                                                        "name": "returndata_size",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6158:15:169"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6130:6:169"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6130:44:169"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "6130:44:169"
                                                        }
                                                    ]
                                                },
                                                "documentation": "@solidity memory-safe-assembly",
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 71880,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "6102:10:169",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 71880,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "6145:10:169",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "id": 71887,
                                                "nodeType": "InlineAssembly",
                                                "src": "6046:142:169"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71878,
                            "nodeType": "StructuredDocumentation",
                            "src": "5637:101:169",
                            "text": " @dev Reverts with returndata if present. Otherwise reverts with {FailedInnerCall}."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_revert",
                        "nameLocation": "5752:7:169",
                        "parameters": {
                            "id": 71881,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71880,
                                    "mutability": "mutable",
                                    "name": "returndata",
                                    "nameLocation": "5773:10:169",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71895,
                                    "src": "5760:23:169",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71879,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5760:5:169",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5759:25:169"
                        },
                        "returnParameters": {
                            "id": 71882,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5798:0:169"
                        },
                        "scope": 71896,
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
                    "id": 71646,
                    "nodeType": "StructuredDocumentation",
                    "src": "127:67:169",
                    "text": " @dev Collection of functions related to the address type"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71896
                ],
                "name": "Address",
                "nameLocation": "203:7:169",
                "scope": 71897,
                "usedErrors": [
                    71651,
                    71656,
                    71659
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 169
};
