export const stdJson = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220de85fd6d5d2fa863e4fdb1e677deff5459de250f3e3e86b1f67d678243ad8be264736f6c63430008140033",
        "sourceMap": "830:5374:150:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;830:5374:150;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220de85fd6d5d2fa863e4fdb1e677deff5459de250f3e3e86b1f67d678243ad8be264736f6c63430008140033",
        "sourceMap": "830:5374:150:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdJson.sol\":\"stdJson\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
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
                "lib/forge-std/src/StdJson.sol": "stdJson"
            },
            "libraries": {}
        },
        "sources": {
            "lib/forge-std/src/StdJson.sol": {
                "keccak256": "0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b",
                "urls": [
                    "bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c",
                    "dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/Vm.sol": {
                "keccak256": "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4",
                "urls": [
                    "bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241",
                    "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/forge-std/src/StdJson.sol",
        "id": 35505,
        "exportedSymbols": {
            "VmSafe": [
                40306
            ],
            "stdJson": [
                35504
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:6173:150",
        "nodes": [
            {
                "id": 34930,
                "nodeType": "PragmaDirective",
                "src": "32:31:150",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.6",
                    ".0",
                    "<",
                    "0.9",
                    ".0"
                ]
            },
            {
                "id": 34931,
                "nodeType": "PragmaDirective",
                "src": "65:33:150",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 34933,
                "nodeType": "ImportDirective",
                "src": "100:32:150",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "./Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 35505,
                "sourceUnit": 40779,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34932,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40306,
                            "src": "108:6:150",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 35504,
                "nodeType": "ContractDefinition",
                "src": "830:5374:150",
                "nodes": [
                    {
                        "id": 34950,
                        "nodeType": "VariableDeclaration",
                        "src": "852:92:150",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "vm",
                        "nameLocation": "876:2:150",
                        "scope": 35504,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                            "typeString": "contract VmSafe"
                        },
                        "typeName": {
                            "id": 34935,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 34934,
                                "name": "VmSafe",
                                "nameLocations": [
                                    "852:6:150"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 40306,
                                "src": "852:6:150"
                            },
                            "referencedDeclaration": 40306,
                            "src": "852:6:150",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$40306",
                                "typeString": "contract VmSafe"
                            }
                        },
                        "value": {
                            "arguments": [
                                {
                                    "arguments": [
                                        {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "hexValue": "6865766d20636865617420636f6465",
                                                                    "id": 34944,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "922:17:150",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d",
                                                                        "typeString": "literal_string \"hevm cheat code\""
                                                                    },
                                                                    "value": "hevm cheat code"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d",
                                                                        "typeString": "literal_string \"hevm cheat code\""
                                                                    }
                                                                ],
                                                                "id": 34943,
                                                                "name": "keccak256",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -8,
                                                                "src": "912:9:150",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                }
                                                            },
                                                            "id": 34945,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "912:28:150",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        ],
                                                        "id": 34942,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "904:7:150",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 34941,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "904:7:150",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 34946,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "904:37:150",
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
                                                    }
                                                ],
                                                "id": 34940,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "896:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint160_$",
                                                    "typeString": "type(uint160)"
                                                },
                                                "typeName": {
                                                    "id": 34939,
                                                    "name": "uint160",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "896:7:150",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 34947,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "896:46:150",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint160",
                                                "typeString": "uint160"
                                            }
                                        }
                                    ],
                                    "expression": {
                                        "argumentTypes": [
                                            {
                                                "typeIdentifier": "t_uint160",
                                                "typeString": "uint160"
                                            }
                                        ],
                                        "id": 34938,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "888:7:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_$",
                                            "typeString": "type(address)"
                                        },
                                        "typeName": {
                                            "id": 34937,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "888:7:150",
                                            "typeDescriptions": {}
                                        }
                                    },
                                    "id": 34948,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "888:55:150",
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
                                "id": 34936,
                                "name": "VmSafe",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 40306,
                                "src": "881:6:150",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_VmSafe_$40306_$",
                                    "typeString": "type(contract VmSafe)"
                                }
                            },
                            "id": 34949,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "881:63:150",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$40306",
                                "typeString": "contract VmSafe"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34966,
                        "nodeType": "FunctionDefinition",
                        "src": "951:141:150",
                        "nodes": [],
                        "body": {
                            "id": 34965,
                            "nodeType": "Block",
                            "src": "1045:47:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34961,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34952,
                                                "src": "1075:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 34962,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34954,
                                                "src": "1081:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 34959,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "1062:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 34960,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1065:9:150",
                                            "memberName": "parseJson",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39933,
                                            "src": "1062:12:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure external returns (bytes memory)"
                                            }
                                        },
                                        "id": 34963,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1062:23:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 34958,
                                    "id": 34964,
                                    "nodeType": "Return",
                                    "src": "1055:30:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "parseRaw",
                        "nameLocation": "960:8:150",
                        "parameters": {
                            "id": 34955,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34952,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "983:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34966,
                                    "src": "969:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34951,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "969:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 34954,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1003:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34966,
                                    "src": "989:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34953,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "989:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "968:39:150"
                        },
                        "returnParameters": {
                            "id": 34958,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34957,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34966,
                                    "src": "1031:12:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 34956,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1031:5:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1030:14:150"
                        },
                        "scope": 35504,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34982,
                        "nodeType": "FunctionDefinition",
                        "src": "1098:135:150",
                        "nodes": [],
                        "body": {
                            "id": 34981,
                            "nodeType": "Block",
                            "src": "1182:51:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34977,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34968,
                                                "src": "1216:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 34978,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34970,
                                                "src": "1222:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 34975,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "1199:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 34976,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1202:13:150",
                                            "memberName": "parseJsonUint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39949,
                                            "src": "1199:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (string memory,string memory) external returns (uint256)"
                                            }
                                        },
                                        "id": 34979,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1199:27:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 34974,
                                    "id": 34980,
                                    "nodeType": "Return",
                                    "src": "1192:34:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readUint",
                        "nameLocation": "1107:8:150",
                        "parameters": {
                            "id": 34971,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34968,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1130:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34982,
                                    "src": "1116:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34967,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1116:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 34970,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1150:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34982,
                                    "src": "1136:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34969,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1136:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1115:39:150"
                        },
                        "returnParameters": {
                            "id": 34974,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34973,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34982,
                                    "src": "1173:7:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 34972,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1173:7:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1172:9:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34999,
                        "nodeType": "FunctionDefinition",
                        "src": "1239:154:150",
                        "nodes": [],
                        "body": {
                            "id": 34998,
                            "nodeType": "Block",
                            "src": "1337:56:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34994,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34984,
                                                "src": "1376:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 34995,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34986,
                                                "src": "1382:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 34992,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "1354:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 34993,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1357:18:150",
                                            "memberName": "parseJsonUintArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39959,
                                            "src": "1354:21:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (uint256[] memory)"
                                            }
                                        },
                                        "id": 34996,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1354:32:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 34991,
                                    "id": 34997,
                                    "nodeType": "Return",
                                    "src": "1347:39:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readUintArray",
                        "nameLocation": "1248:13:150",
                        "parameters": {
                            "id": 34987,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34984,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1276:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34999,
                                    "src": "1262:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34983,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1262:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 34986,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1296:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34999,
                                    "src": "1282:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34985,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1282:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1261:39:150"
                        },
                        "returnParameters": {
                            "id": 34991,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34990,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34999,
                                    "src": "1319:16:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34988,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1319:7:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 34989,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1319:9:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1318:18:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35015,
                        "nodeType": "FunctionDefinition",
                        "src": "1399:132:150",
                        "nodes": [],
                        "body": {
                            "id": 35014,
                            "nodeType": "Block",
                            "src": "1481:50:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35010,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35001,
                                                "src": "1514:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35011,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35003,
                                                "src": "1520:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35008,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "1498:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35009,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1501:12:150",
                                            "memberName": "parseJsonInt",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39968,
                                            "src": "1498:15:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_int256_$",
                                                "typeString": "function (string memory,string memory) external returns (int256)"
                                            }
                                        },
                                        "id": 35012,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1498:26:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 35007,
                                    "id": 35013,
                                    "nodeType": "Return",
                                    "src": "1491:33:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readInt",
                        "nameLocation": "1408:7:150",
                        "parameters": {
                            "id": 35004,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35001,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1430:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35015,
                                    "src": "1416:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35000,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1416:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35003,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1450:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35015,
                                    "src": "1436:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35002,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1436:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1415:39:150"
                        },
                        "returnParameters": {
                            "id": 35007,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35006,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35015,
                                    "src": "1473:6:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 35005,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1473:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1472:8:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35032,
                        "nodeType": "FunctionDefinition",
                        "src": "1537:151:150",
                        "nodes": [],
                        "body": {
                            "id": 35031,
                            "nodeType": "Block",
                            "src": "1633:55:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35027,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35017,
                                                "src": "1671:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35028,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35019,
                                                "src": "1677:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35025,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "1650:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35026,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1653:17:150",
                                            "memberName": "parseJsonIntArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39978,
                                            "src": "1650:20:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_int256_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (int256[] memory)"
                                            }
                                        },
                                        "id": 35029,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1650:31:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                            "typeString": "int256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 35024,
                                    "id": 35030,
                                    "nodeType": "Return",
                                    "src": "1643:38:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readIntArray",
                        "nameLocation": "1546:12:150",
                        "parameters": {
                            "id": 35020,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35017,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1573:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35032,
                                    "src": "1559:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35016,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1559:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35019,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1593:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35032,
                                    "src": "1579:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35018,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1579:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1558:39:150"
                        },
                        "returnParameters": {
                            "id": 35024,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35023,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35032,
                                    "src": "1616:15:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                        "typeString": "int256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35021,
                                            "name": "int256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1616:6:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "id": 35022,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1616:8:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                                            "typeString": "int256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1615:17:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35048,
                        "nodeType": "FunctionDefinition",
                        "src": "1694:141:150",
                        "nodes": [],
                        "body": {
                            "id": 35047,
                            "nodeType": "Block",
                            "src": "1781:54:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35043,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35034,
                                                "src": "1818:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35044,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35036,
                                                "src": "1824:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35041,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "1798:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35042,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1801:16:150",
                                            "memberName": "parseJsonBytes32",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40063,
                                            "src": "1798:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (string memory,string memory) external returns (bytes32)"
                                            }
                                        },
                                        "id": 35045,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1798:30:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 35040,
                                    "id": 35046,
                                    "nodeType": "Return",
                                    "src": "1791:37:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readBytes32",
                        "nameLocation": "1703:11:150",
                        "parameters": {
                            "id": 35037,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35034,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1729:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35048,
                                    "src": "1715:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35033,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1715:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35036,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1749:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35048,
                                    "src": "1735:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35035,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1735:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1714:39:150"
                        },
                        "returnParameters": {
                            "id": 35040,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35039,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35048,
                                    "src": "1772:7:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 35038,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1772:7:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1771:9:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35065,
                        "nodeType": "FunctionDefinition",
                        "src": "1841:160:150",
                        "nodes": [],
                        "body": {
                            "id": 35064,
                            "nodeType": "Block",
                            "src": "1942:59:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35060,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35050,
                                                "src": "1984:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35061,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35052,
                                                "src": "1990:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35058,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "1959:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35059,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1962:21:150",
                                            "memberName": "parseJsonBytes32Array",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40073,
                                            "src": "1959:24:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (bytes32[] memory)"
                                            }
                                        },
                                        "id": 35062,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1959:35:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                            "typeString": "bytes32[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 35057,
                                    "id": 35063,
                                    "nodeType": "Return",
                                    "src": "1952:42:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readBytes32Array",
                        "nameLocation": "1850:16:150",
                        "parameters": {
                            "id": 35053,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35050,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1881:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35065,
                                    "src": "1867:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35049,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1867:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35052,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1901:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35065,
                                    "src": "1887:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35051,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1887:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1866:39:150"
                        },
                        "returnParameters": {
                            "id": 35057,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35056,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35065,
                                    "src": "1924:16:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35054,
                                            "name": "bytes32",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1924:7:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 35055,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1924:9:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                                            "typeString": "bytes32[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1923:18:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35081,
                        "nodeType": "FunctionDefinition",
                        "src": "2007:145:150",
                        "nodes": [],
                        "body": {
                            "id": 35080,
                            "nodeType": "Block",
                            "src": "2099:53:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35076,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35067,
                                                "src": "2135:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35077,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35069,
                                                "src": "2141:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35074,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "2116:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35075,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2119:15:150",
                                            "memberName": "parseJsonString",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40025,
                                            "src": "2116:18:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35078,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2116:29:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35073,
                                    "id": 35079,
                                    "nodeType": "Return",
                                    "src": "2109:36:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readString",
                        "nameLocation": "2016:10:150",
                        "parameters": {
                            "id": 35070,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35067,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2041:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35081,
                                    "src": "2027:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35066,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2027:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35069,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2061:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35081,
                                    "src": "2047:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35068,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2047:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2026:39:150"
                        },
                        "returnParameters": {
                            "id": 35073,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35072,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35081,
                                    "src": "2084:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35071,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2084:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2083:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35098,
                        "nodeType": "FunctionDefinition",
                        "src": "2158:157:150",
                        "nodes": [],
                        "body": {
                            "id": 35097,
                            "nodeType": "Block",
                            "src": "2257:58:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35093,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35083,
                                                "src": "2298:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35094,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35085,
                                                "src": "2304:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35091,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "2274:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35092,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2277:20:150",
                                            "memberName": "parseJsonStringArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40035,
                                            "src": "2274:23:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (string memory[] memory)"
                                            }
                                        },
                                        "id": 35095,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2274:34:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "string memory[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 35090,
                                    "id": 35096,
                                    "nodeType": "Return",
                                    "src": "2267:41:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readStringArray",
                        "nameLocation": "2167:15:150",
                        "parameters": {
                            "id": 35086,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35083,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2197:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35098,
                                    "src": "2183:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35082,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2183:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35085,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2217:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35098,
                                    "src": "2203:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35084,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2203:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2182:39:150"
                        },
                        "returnParameters": {
                            "id": 35090,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35089,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35098,
                                    "src": "2240:15:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35087,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2240:6:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 35088,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2240:8:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                            "typeString": "string[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2239:17:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35114,
                        "nodeType": "FunctionDefinition",
                        "src": "2321:141:150",
                        "nodes": [],
                        "body": {
                            "id": 35113,
                            "nodeType": "Block",
                            "src": "2408:54:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35109,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35100,
                                                "src": "2445:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35110,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35102,
                                                "src": "2451:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35107,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "2425:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35108,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2428:16:150",
                                            "memberName": "parseJsonAddress",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40006,
                                            "src": "2425:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_address_$",
                                                "typeString": "function (string memory,string memory) external returns (address)"
                                            }
                                        },
                                        "id": 35111,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2425:30:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 35106,
                                    "id": 35112,
                                    "nodeType": "Return",
                                    "src": "2418:37:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readAddress",
                        "nameLocation": "2330:11:150",
                        "parameters": {
                            "id": 35103,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35100,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2356:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35114,
                                    "src": "2342:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35099,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2342:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35102,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2376:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35114,
                                    "src": "2362:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35101,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2362:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2341:39:150"
                        },
                        "returnParameters": {
                            "id": 35106,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35105,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35114,
                                    "src": "2399:7:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 35104,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2399:7:150",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2398:9:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35131,
                        "nodeType": "FunctionDefinition",
                        "src": "2468:160:150",
                        "nodes": [],
                        "body": {
                            "id": 35130,
                            "nodeType": "Block",
                            "src": "2569:59:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35126,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35116,
                                                "src": "2611:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35127,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35118,
                                                "src": "2617:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35124,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "2586:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35125,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2589:21:150",
                                            "memberName": "parseJsonAddressArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40016,
                                            "src": "2586:24:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (address[] memory)"
                                            }
                                        },
                                        "id": 35128,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2586:35:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 35123,
                                    "id": 35129,
                                    "nodeType": "Return",
                                    "src": "2579:42:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readAddressArray",
                        "nameLocation": "2477:16:150",
                        "parameters": {
                            "id": 35119,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35116,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2508:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35131,
                                    "src": "2494:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35115,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2494:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35118,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2528:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35131,
                                    "src": "2514:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35117,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2514:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2493:39:150"
                        },
                        "returnParameters": {
                            "id": 35123,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35122,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35131,
                                    "src": "2551:16:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35120,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2551:7:150",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 35121,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2551:9:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2550:18:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35147,
                        "nodeType": "FunctionDefinition",
                        "src": "2634:132:150",
                        "nodes": [],
                        "body": {
                            "id": 35146,
                            "nodeType": "Block",
                            "src": "2715:51:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35142,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35133,
                                                "src": "2749:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35143,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35135,
                                                "src": "2755:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35140,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "2732:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35141,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2735:13:150",
                                            "memberName": "parseJsonBool",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39987,
                                            "src": "2732:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$",
                                                "typeString": "function (string memory,string memory) external returns (bool)"
                                            }
                                        },
                                        "id": 35144,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2732:27:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 35139,
                                    "id": 35145,
                                    "nodeType": "Return",
                                    "src": "2725:34:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readBool",
                        "nameLocation": "2643:8:150",
                        "parameters": {
                            "id": 35136,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35133,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2666:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35147,
                                    "src": "2652:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35132,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2652:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35135,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2686:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35147,
                                    "src": "2672:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35134,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2672:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2651:39:150"
                        },
                        "returnParameters": {
                            "id": 35139,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35138,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35147,
                                    "src": "2709:4:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 35137,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2709:4:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2708:6:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35164,
                        "nodeType": "FunctionDefinition",
                        "src": "2772:151:150",
                        "nodes": [],
                        "body": {
                            "id": 35163,
                            "nodeType": "Block",
                            "src": "2867:56:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35159,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35149,
                                                "src": "2906:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35160,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35151,
                                                "src": "2912:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35157,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "2884:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35158,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2887:18:150",
                                            "memberName": "parseJsonBoolArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39997,
                                            "src": "2884:21:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bool_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (bool[] memory)"
                                            }
                                        },
                                        "id": 35161,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2884:32:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                            "typeString": "bool[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 35156,
                                    "id": 35162,
                                    "nodeType": "Return",
                                    "src": "2877:39:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readBoolArray",
                        "nameLocation": "2781:13:150",
                        "parameters": {
                            "id": 35152,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35149,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2809:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35164,
                                    "src": "2795:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35148,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2795:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35151,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2829:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35164,
                                    "src": "2815:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35150,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2815:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2794:39:150"
                        },
                        "returnParameters": {
                            "id": 35156,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35155,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35164,
                                    "src": "2852:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                        "typeString": "bool[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35153,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2852:4:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 35154,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2852:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                                            "typeString": "bool[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2851:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35180,
                        "nodeType": "FunctionDefinition",
                        "src": "2929:142:150",
                        "nodes": [],
                        "body": {
                            "id": 35179,
                            "nodeType": "Block",
                            "src": "3019:52:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35175,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35166,
                                                "src": "3054:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35176,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35168,
                                                "src": "3060:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35173,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "3036:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35174,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3039:14:150",
                                            "memberName": "parseJsonBytes",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40044,
                                            "src": "3036:17:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (bytes memory)"
                                            }
                                        },
                                        "id": 35177,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3036:28:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 35172,
                                    "id": 35178,
                                    "nodeType": "Return",
                                    "src": "3029:35:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readBytes",
                        "nameLocation": "2938:9:150",
                        "parameters": {
                            "id": 35169,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35166,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2962:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35180,
                                    "src": "2948:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35165,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2948:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35168,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2982:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35180,
                                    "src": "2968:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35167,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2968:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2947:39:150"
                        },
                        "returnParameters": {
                            "id": 35172,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35171,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35180,
                                    "src": "3005:12:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 35170,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3005:5:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3004:14:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35197,
                        "nodeType": "FunctionDefinition",
                        "src": "3077:154:150",
                        "nodes": [],
                        "body": {
                            "id": 35196,
                            "nodeType": "Block",
                            "src": "3174:57:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35192,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35182,
                                                "src": "3214:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35193,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35184,
                                                "src": "3220:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35190,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "3191:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35191,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3194:19:150",
                                            "memberName": "parseJsonBytesArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40054,
                                            "src": "3191:22:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (bytes memory[] memory)"
                                            }
                                        },
                                        "id": 35194,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3191:33:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "bytes memory[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 35189,
                                    "id": 35195,
                                    "nodeType": "Return",
                                    "src": "3184:40:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "readBytesArray",
                        "nameLocation": "3086:14:150",
                        "parameters": {
                            "id": 35185,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35182,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "3115:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35197,
                                    "src": "3101:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35181,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3101:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35184,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3135:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35197,
                                    "src": "3121:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35183,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3121:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3100:39:150"
                        },
                        "returnParameters": {
                            "id": 35189,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35188,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35197,
                                    "src": "3158:14:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "bytes[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35186,
                                            "name": "bytes",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3158:5:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_storage_ptr",
                                                "typeString": "bytes"
                                            }
                                        },
                                        "id": 35187,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3158:7:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                                            "typeString": "bytes[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3157:16:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35216,
                        "nodeType": "FunctionDefinition",
                        "src": "3237:167:150",
                        "nodes": [],
                        "body": {
                            "id": 35215,
                            "nodeType": "Block",
                            "src": "3343:61:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35210,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35199,
                                                "src": "3377:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35211,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35201,
                                                "src": "3386:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35212,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35203,
                                                "src": "3391:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35208,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "3360:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35209,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3363:13:150",
                                            "memberName": "serializeBool",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40094,
                                            "src": "3360:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bool) external returns (string memory)"
                                            }
                                        },
                                        "id": 35213,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3360:37:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35207,
                                    "id": 35214,
                                    "nodeType": "Return",
                                    "src": "3353:44:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "3246:9:150",
                        "parameters": {
                            "id": 35204,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35199,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "3270:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35216,
                                    "src": "3256:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35198,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3256:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35201,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3293:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35216,
                                    "src": "3279:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35200,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3279:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35203,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3303:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35216,
                                    "src": "3298:10:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 35202,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3298:4:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3255:54:150"
                        },
                        "returnParameters": {
                            "id": 35207,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35206,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35216,
                                    "src": "3328:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35205,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3328:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3327:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35236,
                        "nodeType": "FunctionDefinition",
                        "src": "3410:196:150",
                        "nodes": [],
                        "body": {
                            "id": 35235,
                            "nodeType": "Block",
                            "src": "3545:61:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35230,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35218,
                                                "src": "3579:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35231,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35220,
                                                "src": "3588:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35232,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35223,
                                                "src": "3593:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                                    "typeString": "bool[] memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                                    "typeString": "bool[] memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35228,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "3562:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35229,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3565:13:150",
                                            "memberName": "serializeBool",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40172,
                                            "src": "3562:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bool_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bool[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35233,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3562:37:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35227,
                                    "id": 35234,
                                    "nodeType": "Return",
                                    "src": "3555:44:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "3419:9:150",
                        "parameters": {
                            "id": 35224,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35218,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "3443:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35236,
                                    "src": "3429:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35217,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3429:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35220,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3466:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35236,
                                    "src": "3452:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35219,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3452:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35223,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3485:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35236,
                                    "src": "3471:19:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                        "typeString": "bool[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35221,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3471:4:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 35222,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3471:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                                            "typeString": "bool[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3428:63:150"
                        },
                        "returnParameters": {
                            "id": 35227,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35226,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35236,
                                    "src": "3526:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35225,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3526:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3525:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35255,
                        "nodeType": "FunctionDefinition",
                        "src": "3612:170:150",
                        "nodes": [],
                        "body": {
                            "id": 35254,
                            "nodeType": "Block",
                            "src": "3721:61:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35249,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35238,
                                                "src": "3755:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35250,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35240,
                                                "src": "3764:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35251,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35242,
                                                "src": "3769:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35247,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "3738:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35248,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3741:13:150",
                                            "memberName": "serializeUint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40105,
                                            "src": "3738:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,uint256) external returns (string memory)"
                                            }
                                        },
                                        "id": 35252,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3738:37:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35246,
                                    "id": 35253,
                                    "nodeType": "Return",
                                    "src": "3731:44:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "3621:9:150",
                        "parameters": {
                            "id": 35243,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35238,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "3645:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35255,
                                    "src": "3631:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35237,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3631:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35240,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3668:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35255,
                                    "src": "3654:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35239,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3654:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35242,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3681:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35255,
                                    "src": "3673:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 35241,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3673:7:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3630:57:150"
                        },
                        "returnParameters": {
                            "id": 35246,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35245,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35255,
                                    "src": "3706:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35244,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3706:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3705:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35275,
                        "nodeType": "FunctionDefinition",
                        "src": "3788:199:150",
                        "nodes": [],
                        "body": {
                            "id": 35274,
                            "nodeType": "Block",
                            "src": "3926:61:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35269,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35257,
                                                "src": "3960:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35270,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35259,
                                                "src": "3969:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35271,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35262,
                                                "src": "3974:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35267,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "3943:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35268,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3946:13:150",
                                            "memberName": "serializeUint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40184,
                                            "src": "3943:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,uint256[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35272,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3943:37:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35266,
                                    "id": 35273,
                                    "nodeType": "Return",
                                    "src": "3936:44:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "3797:9:150",
                        "parameters": {
                            "id": 35263,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35257,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "3821:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35275,
                                    "src": "3807:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35256,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3807:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35259,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3844:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35275,
                                    "src": "3830:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35258,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3830:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35262,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3866:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35275,
                                    "src": "3849:22:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35260,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3849:7:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 35261,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3849:9:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3806:66:150"
                        },
                        "returnParameters": {
                            "id": 35266,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35265,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35275,
                                    "src": "3907:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35264,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3907:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3906:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35294,
                        "nodeType": "FunctionDefinition",
                        "src": "3993:168:150",
                        "nodes": [],
                        "body": {
                            "id": 35293,
                            "nodeType": "Block",
                            "src": "4101:60:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35288,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35277,
                                                "src": "4134:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35289,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35279,
                                                "src": "4143:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35290,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35281,
                                                "src": "4148:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35286,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "4118:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35287,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4121:12:150",
                                            "memberName": "serializeInt",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40116,
                                            "src": "4118:15:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_int256_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,int256) external returns (string memory)"
                                            }
                                        },
                                        "id": 35291,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4118:36:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35285,
                                    "id": 35292,
                                    "nodeType": "Return",
                                    "src": "4111:43:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "4002:9:150",
                        "parameters": {
                            "id": 35282,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35277,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4026:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35294,
                                    "src": "4012:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35276,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4012:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35279,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4049:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35294,
                                    "src": "4035:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35278,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4035:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35281,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4061:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35294,
                                    "src": "4054:12:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 35280,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4054:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4011:56:150"
                        },
                        "returnParameters": {
                            "id": 35285,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35284,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35294,
                                    "src": "4086:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35283,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4086:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4085:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35314,
                        "nodeType": "FunctionDefinition",
                        "src": "4167:197:150",
                        "nodes": [],
                        "body": {
                            "id": 35313,
                            "nodeType": "Block",
                            "src": "4304:60:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35308,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35296,
                                                "src": "4337:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35309,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35298,
                                                "src": "4346:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35310,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35301,
                                                "src": "4351:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                                    "typeString": "int256[] memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                                    "typeString": "int256[] memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35306,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "4321:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35307,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4324:12:150",
                                            "memberName": "serializeInt",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40196,
                                            "src": "4321:15:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,int256[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35311,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4321:36:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35305,
                                    "id": 35312,
                                    "nodeType": "Return",
                                    "src": "4314:43:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "4176:9:150",
                        "parameters": {
                            "id": 35302,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35296,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4200:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35314,
                                    "src": "4186:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35295,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4186:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35298,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4223:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35314,
                                    "src": "4209:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35297,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4209:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35301,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4244:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35314,
                                    "src": "4228:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                        "typeString": "int256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35299,
                                            "name": "int256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4228:6:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "id": 35300,
                                        "nodeType": "ArrayTypeName",
                                        "src": "4228:8:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                                            "typeString": "int256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4185:65:150"
                        },
                        "returnParameters": {
                            "id": 35305,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35304,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35314,
                                    "src": "4285:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35303,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4285:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4284:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35333,
                        "nodeType": "FunctionDefinition",
                        "src": "4370:173:150",
                        "nodes": [],
                        "body": {
                            "id": 35332,
                            "nodeType": "Block",
                            "src": "4479:64:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35327,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35316,
                                                "src": "4516:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35328,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35318,
                                                "src": "4525:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35329,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35320,
                                                "src": "4530:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35325,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "4496:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35326,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4499:16:150",
                                            "memberName": "serializeAddress",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40127,
                                            "src": "4496:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,address) external returns (string memory)"
                                            }
                                        },
                                        "id": 35330,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4496:40:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35324,
                                    "id": 35331,
                                    "nodeType": "Return",
                                    "src": "4489:47:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "4379:9:150",
                        "parameters": {
                            "id": 35321,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35316,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4403:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35333,
                                    "src": "4389:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35315,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4389:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35318,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4426:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35333,
                                    "src": "4412:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35317,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4412:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35320,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4439:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35333,
                                    "src": "4431:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 35319,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4431:7:150",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4388:57:150"
                        },
                        "returnParameters": {
                            "id": 35324,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35323,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35333,
                                    "src": "4464:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35322,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4464:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4463:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35353,
                        "nodeType": "FunctionDefinition",
                        "src": "4549:202:150",
                        "nodes": [],
                        "body": {
                            "id": 35352,
                            "nodeType": "Block",
                            "src": "4687:64:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35347,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35335,
                                                "src": "4724:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35348,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35337,
                                                "src": "4733:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35349,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35340,
                                                "src": "4738:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[] memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[] memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35345,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "4704:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35346,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4707:16:150",
                                            "memberName": "serializeAddress",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40208,
                                            "src": "4704:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,address[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35350,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4704:40:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35344,
                                    "id": 35351,
                                    "nodeType": "Return",
                                    "src": "4697:47:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "4558:9:150",
                        "parameters": {
                            "id": 35341,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35335,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4582:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35353,
                                    "src": "4568:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35334,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4568:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35337,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4605:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35353,
                                    "src": "4591:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35336,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4591:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35340,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4627:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35353,
                                    "src": "4610:22:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35338,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4610:7:150",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 35339,
                                        "nodeType": "ArrayTypeName",
                                        "src": "4610:9:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4567:66:150"
                        },
                        "returnParameters": {
                            "id": 35344,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35343,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35353,
                                    "src": "4668:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35342,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4668:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4667:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35372,
                        "nodeType": "FunctionDefinition",
                        "src": "4757:173:150",
                        "nodes": [],
                        "body": {
                            "id": 35371,
                            "nodeType": "Block",
                            "src": "4866:64:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35366,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35355,
                                                "src": "4903:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35367,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35357,
                                                "src": "4912:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35368,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35359,
                                                "src": "4917:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35364,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "4883:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35365,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4886:16:150",
                                            "memberName": "serializeBytes32",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40138,
                                            "src": "4883:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bytes32) external returns (string memory)"
                                            }
                                        },
                                        "id": 35369,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4883:40:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35363,
                                    "id": 35370,
                                    "nodeType": "Return",
                                    "src": "4876:47:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "4766:9:150",
                        "parameters": {
                            "id": 35360,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35355,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4790:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35372,
                                    "src": "4776:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35354,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4776:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35357,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4813:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35372,
                                    "src": "4799:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35356,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4799:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35359,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4826:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35372,
                                    "src": "4818:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 35358,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4818:7:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4775:57:150"
                        },
                        "returnParameters": {
                            "id": 35363,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35362,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35372,
                                    "src": "4851:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35361,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4851:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4850:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35392,
                        "nodeType": "FunctionDefinition",
                        "src": "4936:202:150",
                        "nodes": [],
                        "body": {
                            "id": 35391,
                            "nodeType": "Block",
                            "src": "5074:64:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35386,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35374,
                                                "src": "5111:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35387,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35376,
                                                "src": "5120:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35388,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35379,
                                                "src": "5125:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                    "typeString": "bytes32[] memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                    "typeString": "bytes32[] memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35384,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "5091:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35385,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5094:16:150",
                                            "memberName": "serializeBytes32",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40220,
                                            "src": "5091:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bytes32[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35389,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5091:40:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35383,
                                    "id": 35390,
                                    "nodeType": "Return",
                                    "src": "5084:47:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "4945:9:150",
                        "parameters": {
                            "id": 35380,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35374,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4969:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35392,
                                    "src": "4955:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35373,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4955:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35376,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4992:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35392,
                                    "src": "4978:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35375,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4978:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35379,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5014:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35392,
                                    "src": "4997:22:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35377,
                                            "name": "bytes32",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4997:7:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 35378,
                                        "nodeType": "ArrayTypeName",
                                        "src": "4997:9:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                                            "typeString": "bytes32[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4954:66:150"
                        },
                        "returnParameters": {
                            "id": 35383,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35382,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35392,
                                    "src": "5055:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35381,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5055:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5054:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35411,
                        "nodeType": "FunctionDefinition",
                        "src": "5144:176:150",
                        "nodes": [],
                        "body": {
                            "id": 35410,
                            "nodeType": "Block",
                            "src": "5258:62:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35405,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35394,
                                                "src": "5293:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35406,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35396,
                                                "src": "5302:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35407,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35398,
                                                "src": "5307:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35403,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "5275:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35404,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5278:14:150",
                                            "memberName": "serializeBytes",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40160,
                                            "src": "5275:17:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bytes memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35408,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5275:38:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35402,
                                    "id": 35409,
                                    "nodeType": "Return",
                                    "src": "5268:45:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "5153:9:150",
                        "parameters": {
                            "id": 35399,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35394,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5177:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35411,
                                    "src": "5163:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35393,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5163:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35396,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "5200:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35411,
                                    "src": "5186:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35395,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5186:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35398,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5218:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35411,
                                    "src": "5205:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 35397,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5205:5:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5162:62:150"
                        },
                        "returnParameters": {
                            "id": 35402,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35401,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35411,
                                    "src": "5243:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35400,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5243:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5242:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35431,
                        "nodeType": "FunctionDefinition",
                        "src": "5326:198:150",
                        "nodes": [],
                        "body": {
                            "id": 35430,
                            "nodeType": "Block",
                            "src": "5462:62:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35425,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35413,
                                                "src": "5497:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35426,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35415,
                                                "src": "5506:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35427,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35418,
                                                "src": "5511:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                                    "typeString": "bytes memory[] memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                                    "typeString": "bytes memory[] memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35423,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "5479:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35424,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5482:14:150",
                                            "memberName": "serializeBytes",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40244,
                                            "src": "5479:17:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bytes memory[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35428,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5479:38:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35422,
                                    "id": 35429,
                                    "nodeType": "Return",
                                    "src": "5472:45:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "5335:9:150",
                        "parameters": {
                            "id": 35419,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35413,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5359:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35431,
                                    "src": "5345:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35412,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5345:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35415,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "5382:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35431,
                                    "src": "5368:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35414,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5368:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35418,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5402:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35431,
                                    "src": "5387:20:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "bytes[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35416,
                                            "name": "bytes",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5387:5:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_storage_ptr",
                                                "typeString": "bytes"
                                            }
                                        },
                                        "id": 35417,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5387:7:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                                            "typeString": "bytes[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5344:64:150"
                        },
                        "returnParameters": {
                            "id": 35422,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35421,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35431,
                                    "src": "5443:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35420,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5443:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5442:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35450,
                        "nodeType": "FunctionDefinition",
                        "src": "5530:198:150",
                        "nodes": [],
                        "body": {
                            "id": 35449,
                            "nodeType": "Block",
                            "src": "5665:63:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35444,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35433,
                                                "src": "5701:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35445,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35435,
                                                "src": "5710:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35446,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35437,
                                                "src": "5715:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35442,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "5682:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35443,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5685:15:150",
                                            "memberName": "serializeString",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40149,
                                            "src": "5682:18:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,string memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35447,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5682:39:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35441,
                                    "id": 35448,
                                    "nodeType": "Return",
                                    "src": "5675:46:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "5539:9:150",
                        "parameters": {
                            "id": 35438,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35433,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5563:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35450,
                                    "src": "5549:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35432,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5549:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35435,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "5586:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35450,
                                    "src": "5572:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35434,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5572:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35437,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5605:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35450,
                                    "src": "5591:19:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35436,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5591:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5548:63:150"
                        },
                        "returnParameters": {
                            "id": 35441,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35440,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35450,
                                    "src": "5646:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35439,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5646:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5645:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35470,
                        "nodeType": "FunctionDefinition",
                        "src": "5734:200:150",
                        "nodes": [],
                        "body": {
                            "id": 35469,
                            "nodeType": "Block",
                            "src": "5871:63:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35464,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35452,
                                                "src": "5907:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35465,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35454,
                                                "src": "5916:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35466,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35457,
                                                "src": "5921:5:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                                    "typeString": "string memory[] memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                                    "typeString": "string memory[] memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35462,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "5888:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35463,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5891:15:150",
                                            "memberName": "serializeString",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40232,
                                            "src": "5888:18:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,string memory[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35467,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5888:39:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 35461,
                                    "id": 35468,
                                    "nodeType": "Return",
                                    "src": "5881:46:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "serialize",
                        "nameLocation": "5743:9:150",
                        "parameters": {
                            "id": 35458,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35452,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5767:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35470,
                                    "src": "5753:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35451,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5753:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35454,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "5790:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35470,
                                    "src": "5776:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35453,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5776:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35457,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5811:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35470,
                                    "src": "5795:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35455,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5795:6:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 35456,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5795:8:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                            "typeString": "string[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5752:65:150"
                        },
                        "returnParameters": {
                            "id": 35461,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35460,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35470,
                                    "src": "5852:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35459,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5852:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5851:15:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35485,
                        "nodeType": "FunctionDefinition",
                        "src": "5940:111:150",
                        "nodes": [],
                        "body": {
                            "id": 35484,
                            "nodeType": "Block",
                            "src": "6007:44:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35480,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35472,
                                                "src": "6030:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35481,
                                                "name": "path",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35474,
                                                "src": "6039:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35477,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "6017:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35479,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6020:9:150",
                                            "memberName": "writeJson",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40251,
                                            "src": "6017:12:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,string memory) external"
                                            }
                                        },
                                        "id": 35482,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6017:27:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 35483,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6017:27:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "write",
                        "nameLocation": "5949:5:150",
                        "parameters": {
                            "id": 35475,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35472,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5969:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35485,
                                    "src": "5955:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35471,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5955:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35474,
                                    "mutability": "mutable",
                                    "name": "path",
                                    "nameLocation": "5992:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35485,
                                    "src": "5978:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35473,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5978:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5954:43:150"
                        },
                        "returnParameters": {
                            "id": 35476,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6007:0:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35503,
                        "nodeType": "FunctionDefinition",
                        "src": "6057:145:150",
                        "nodes": [],
                        "body": {
                            "id": 35502,
                            "nodeType": "Block",
                            "src": "6148:54:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35497,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35487,
                                                "src": "6171:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35498,
                                                "name": "path",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35489,
                                                "src": "6180:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35499,
                                                "name": "valueKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35491,
                                                "src": "6186:8:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35494,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34950,
                                                "src": "6158:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35496,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6161:9:150",
                                            "memberName": "writeJson",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40260,
                                            "src": "6158:12:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,string memory,string memory) external"
                                            }
                                        },
                                        "id": 35500,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6158:37:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 35501,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6158:37:150"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "write",
                        "nameLocation": "6066:5:150",
                        "parameters": {
                            "id": 35492,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35487,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "6086:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35503,
                                    "src": "6072:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35486,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6072:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35489,
                                    "mutability": "mutable",
                                    "name": "path",
                                    "nameLocation": "6109:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35503,
                                    "src": "6095:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35488,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6095:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35491,
                                    "mutability": "mutable",
                                    "name": "valueKey",
                                    "nameLocation": "6129:8:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35503,
                                    "src": "6115:22:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35490,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6115:6:150",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6071:67:150"
                        },
                        "returnParameters": {
                            "id": 35493,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6148:0:150"
                        },
                        "scope": 35504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "stdJson",
                "contractDependencies": [],
                "contractKind": "library",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    35504
                ],
                "name": "stdJson",
                "nameLocation": "838:7:150",
                "scope": 35505,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 150
};
