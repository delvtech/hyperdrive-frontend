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
        "id": 35431,
        "exportedSymbols": {
            "VmSafe": [
                40232
            ],
            "stdJson": [
                35430
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:6173:150",
        "nodes": [
            {
                "id": 34856,
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
                "id": 34857,
                "nodeType": "PragmaDirective",
                "src": "65:33:150",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 34859,
                "nodeType": "ImportDirective",
                "src": "100:32:150",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "./Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 35431,
                "sourceUnit": 40705,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 34858,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40232,
                            "src": "108:6:150",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 35430,
                "nodeType": "ContractDefinition",
                "src": "830:5374:150",
                "nodes": [
                    {
                        "id": 34876,
                        "nodeType": "VariableDeclaration",
                        "src": "852:92:150",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "vm",
                        "nameLocation": "876:2:150",
                        "scope": 35430,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                            "typeString": "contract VmSafe"
                        },
                        "typeName": {
                            "id": 34861,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 34860,
                                "name": "VmSafe",
                                "nameLocations": [
                                    "852:6:150"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 40232,
                                "src": "852:6:150"
                            },
                            "referencedDeclaration": 40232,
                            "src": "852:6:150",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$40232",
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
                                                                    "id": 34870,
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
                                                                "id": 34869,
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
                                                            "id": 34871,
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
                                                        "id": 34868,
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
                                                            "id": 34867,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "904:7:150",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 34872,
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
                                                "id": 34866,
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
                                                    "id": 34865,
                                                    "name": "uint160",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "896:7:150",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 34873,
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
                                        "id": 34864,
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
                                            "id": 34863,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "888:7:150",
                                            "typeDescriptions": {}
                                        }
                                    },
                                    "id": 34874,
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
                                "id": 34862,
                                "name": "VmSafe",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 40232,
                                "src": "881:6:150",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_VmSafe_$40232_$",
                                    "typeString": "type(contract VmSafe)"
                                }
                            },
                            "id": 34875,
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
                                "typeIdentifier": "t_contract$_VmSafe_$40232",
                                "typeString": "contract VmSafe"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34892,
                        "nodeType": "FunctionDefinition",
                        "src": "951:141:150",
                        "nodes": [],
                        "body": {
                            "id": 34891,
                            "nodeType": "Block",
                            "src": "1045:47:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34887,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34878,
                                                "src": "1075:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 34888,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34880,
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
                                                "id": 34885,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "1062:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 34886,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1065:9:150",
                                            "memberName": "parseJson",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39859,
                                            "src": "1062:12:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure external returns (bytes memory)"
                                            }
                                        },
                                        "id": 34889,
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
                                    "functionReturnParameters": 34884,
                                    "id": 34890,
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
                            "id": 34881,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34878,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "983:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34892,
                                    "src": "969:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34877,
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
                                    "id": 34880,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1003:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34892,
                                    "src": "989:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34879,
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
                            "id": 34884,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34883,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34892,
                                    "src": "1031:12:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 34882,
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
                        "scope": 35430,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34908,
                        "nodeType": "FunctionDefinition",
                        "src": "1098:135:150",
                        "nodes": [],
                        "body": {
                            "id": 34907,
                            "nodeType": "Block",
                            "src": "1182:51:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34903,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34894,
                                                "src": "1216:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 34904,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34896,
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
                                                "id": 34901,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "1199:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 34902,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1202:13:150",
                                            "memberName": "parseJsonUint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39875,
                                            "src": "1199:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (string memory,string memory) external returns (uint256)"
                                            }
                                        },
                                        "id": 34905,
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
                                    "functionReturnParameters": 34900,
                                    "id": 34906,
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
                            "id": 34897,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34894,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1130:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34908,
                                    "src": "1116:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34893,
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
                                    "id": 34896,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1150:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34908,
                                    "src": "1136:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34895,
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
                            "id": 34900,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34899,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34908,
                                    "src": "1173:7:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 34898,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34925,
                        "nodeType": "FunctionDefinition",
                        "src": "1239:154:150",
                        "nodes": [],
                        "body": {
                            "id": 34924,
                            "nodeType": "Block",
                            "src": "1337:56:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34920,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34910,
                                                "src": "1376:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 34921,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34912,
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
                                                "id": 34918,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "1354:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 34919,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1357:18:150",
                                            "memberName": "parseJsonUintArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39885,
                                            "src": "1354:21:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (uint256[] memory)"
                                            }
                                        },
                                        "id": 34922,
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
                                    "functionReturnParameters": 34917,
                                    "id": 34923,
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
                            "id": 34913,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34910,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1276:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34925,
                                    "src": "1262:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34909,
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
                                    "id": 34912,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1296:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34925,
                                    "src": "1282:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34911,
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
                            "id": 34917,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34916,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34925,
                                    "src": "1319:16:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34914,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1319:7:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 34915,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34941,
                        "nodeType": "FunctionDefinition",
                        "src": "1399:132:150",
                        "nodes": [],
                        "body": {
                            "id": 34940,
                            "nodeType": "Block",
                            "src": "1481:50:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34936,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34927,
                                                "src": "1514:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 34937,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34929,
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
                                                "id": 34934,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "1498:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 34935,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1501:12:150",
                                            "memberName": "parseJsonInt",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39894,
                                            "src": "1498:15:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_int256_$",
                                                "typeString": "function (string memory,string memory) external returns (int256)"
                                            }
                                        },
                                        "id": 34938,
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
                                    "functionReturnParameters": 34933,
                                    "id": 34939,
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
                            "id": 34930,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34927,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1430:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34941,
                                    "src": "1416:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34926,
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
                                    "id": 34929,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1450:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34941,
                                    "src": "1436:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34928,
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
                            "id": 34933,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34932,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34941,
                                    "src": "1473:6:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 34931,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34958,
                        "nodeType": "FunctionDefinition",
                        "src": "1537:151:150",
                        "nodes": [],
                        "body": {
                            "id": 34957,
                            "nodeType": "Block",
                            "src": "1633:55:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34953,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34943,
                                                "src": "1671:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 34954,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34945,
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
                                                "id": 34951,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "1650:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 34952,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1653:17:150",
                                            "memberName": "parseJsonIntArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39904,
                                            "src": "1650:20:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_int256_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (int256[] memory)"
                                            }
                                        },
                                        "id": 34955,
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
                                    "functionReturnParameters": 34950,
                                    "id": 34956,
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
                            "id": 34946,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34943,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1573:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34958,
                                    "src": "1559:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34942,
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
                                    "id": 34945,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1593:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34958,
                                    "src": "1579:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34944,
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
                            "id": 34950,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34949,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34958,
                                    "src": "1616:15:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                        "typeString": "int256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34947,
                                            "name": "int256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1616:6:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "id": 34948,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34974,
                        "nodeType": "FunctionDefinition",
                        "src": "1694:141:150",
                        "nodes": [],
                        "body": {
                            "id": 34973,
                            "nodeType": "Block",
                            "src": "1781:54:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34969,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34960,
                                                "src": "1818:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 34970,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34962,
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
                                                "id": 34967,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "1798:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 34968,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1801:16:150",
                                            "memberName": "parseJsonBytes32",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39989,
                                            "src": "1798:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (string memory,string memory) external returns (bytes32)"
                                            }
                                        },
                                        "id": 34971,
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
                                    "functionReturnParameters": 34966,
                                    "id": 34972,
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
                            "id": 34963,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34960,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1729:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34974,
                                    "src": "1715:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34959,
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
                                    "id": 34962,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1749:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34974,
                                    "src": "1735:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34961,
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
                            "id": 34966,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34965,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34974,
                                    "src": "1772:7:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 34964,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34991,
                        "nodeType": "FunctionDefinition",
                        "src": "1841:160:150",
                        "nodes": [],
                        "body": {
                            "id": 34990,
                            "nodeType": "Block",
                            "src": "1942:59:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34986,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34976,
                                                "src": "1984:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 34987,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34978,
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
                                                "id": 34984,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "1959:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 34985,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1962:21:150",
                                            "memberName": "parseJsonBytes32Array",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39999,
                                            "src": "1959:24:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (bytes32[] memory)"
                                            }
                                        },
                                        "id": 34988,
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
                                    "functionReturnParameters": 34983,
                                    "id": 34989,
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
                            "id": 34979,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34976,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1881:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34991,
                                    "src": "1867:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34975,
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
                                    "id": 34978,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1901:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34991,
                                    "src": "1887:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34977,
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
                            "id": 34983,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34982,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34991,
                                    "src": "1924:16:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34980,
                                            "name": "bytes32",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1924:7:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 34981,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35007,
                        "nodeType": "FunctionDefinition",
                        "src": "2007:145:150",
                        "nodes": [],
                        "body": {
                            "id": 35006,
                            "nodeType": "Block",
                            "src": "2099:53:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35002,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34993,
                                                "src": "2135:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35003,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34995,
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
                                                "id": 35000,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "2116:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35001,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2119:15:150",
                                            "memberName": "parseJsonString",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39951,
                                            "src": "2116:18:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35004,
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
                                    "functionReturnParameters": 34999,
                                    "id": 35005,
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
                            "id": 34996,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34993,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2041:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35007,
                                    "src": "2027:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34992,
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
                                    "id": 34995,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2061:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35007,
                                    "src": "2047:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34994,
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
                            "id": 34999,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34998,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35007,
                                    "src": "2084:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34997,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35024,
                        "nodeType": "FunctionDefinition",
                        "src": "2158:157:150",
                        "nodes": [],
                        "body": {
                            "id": 35023,
                            "nodeType": "Block",
                            "src": "2257:58:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35019,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35009,
                                                "src": "2298:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35020,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35011,
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
                                                "id": 35017,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "2274:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35018,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2277:20:150",
                                            "memberName": "parseJsonStringArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39961,
                                            "src": "2274:23:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (string memory[] memory)"
                                            }
                                        },
                                        "id": 35021,
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
                                    "functionReturnParameters": 35016,
                                    "id": 35022,
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
                            "id": 35012,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35009,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2197:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35024,
                                    "src": "2183:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35008,
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
                                    "id": 35011,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2217:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35024,
                                    "src": "2203:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35010,
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
                            "id": 35016,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35015,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35024,
                                    "src": "2240:15:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35013,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2240:6:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 35014,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35040,
                        "nodeType": "FunctionDefinition",
                        "src": "2321:141:150",
                        "nodes": [],
                        "body": {
                            "id": 35039,
                            "nodeType": "Block",
                            "src": "2408:54:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35035,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35026,
                                                "src": "2445:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35036,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35028,
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
                                                "id": 35033,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "2425:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35034,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2428:16:150",
                                            "memberName": "parseJsonAddress",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39932,
                                            "src": "2425:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_address_$",
                                                "typeString": "function (string memory,string memory) external returns (address)"
                                            }
                                        },
                                        "id": 35037,
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
                                    "functionReturnParameters": 35032,
                                    "id": 35038,
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
                            "id": 35029,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35026,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2356:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35040,
                                    "src": "2342:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35025,
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
                                    "id": 35028,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2376:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35040,
                                    "src": "2362:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35027,
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
                            "id": 35032,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35031,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35040,
                                    "src": "2399:7:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 35030,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35057,
                        "nodeType": "FunctionDefinition",
                        "src": "2468:160:150",
                        "nodes": [],
                        "body": {
                            "id": 35056,
                            "nodeType": "Block",
                            "src": "2569:59:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35052,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35042,
                                                "src": "2611:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35053,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35044,
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
                                                "id": 35050,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "2586:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35051,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2589:21:150",
                                            "memberName": "parseJsonAddressArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39942,
                                            "src": "2586:24:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (address[] memory)"
                                            }
                                        },
                                        "id": 35054,
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
                                    "functionReturnParameters": 35049,
                                    "id": 35055,
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
                            "id": 35045,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35042,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2508:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35057,
                                    "src": "2494:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35041,
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
                                    "id": 35044,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2528:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35057,
                                    "src": "2514:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35043,
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
                            "id": 35049,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35048,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35057,
                                    "src": "2551:16:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35046,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2551:7:150",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 35047,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35073,
                        "nodeType": "FunctionDefinition",
                        "src": "2634:132:150",
                        "nodes": [],
                        "body": {
                            "id": 35072,
                            "nodeType": "Block",
                            "src": "2715:51:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35068,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35059,
                                                "src": "2749:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35069,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35061,
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
                                                "id": 35066,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "2732:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35067,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2735:13:150",
                                            "memberName": "parseJsonBool",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39913,
                                            "src": "2732:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$",
                                                "typeString": "function (string memory,string memory) external returns (bool)"
                                            }
                                        },
                                        "id": 35070,
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
                                    "functionReturnParameters": 35065,
                                    "id": 35071,
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
                            "id": 35062,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35059,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2666:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35073,
                                    "src": "2652:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35058,
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
                                    "id": 35061,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2686:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35073,
                                    "src": "2672:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35060,
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
                            "id": 35065,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35064,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35073,
                                    "src": "2709:4:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 35063,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35090,
                        "nodeType": "FunctionDefinition",
                        "src": "2772:151:150",
                        "nodes": [],
                        "body": {
                            "id": 35089,
                            "nodeType": "Block",
                            "src": "2867:56:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35085,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35075,
                                                "src": "2906:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35086,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35077,
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
                                                "id": 35083,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "2884:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35084,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2887:18:150",
                                            "memberName": "parseJsonBoolArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39923,
                                            "src": "2884:21:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bool_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (bool[] memory)"
                                            }
                                        },
                                        "id": 35087,
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
                                    "functionReturnParameters": 35082,
                                    "id": 35088,
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
                            "id": 35078,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35075,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2809:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35090,
                                    "src": "2795:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35074,
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
                                    "id": 35077,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2829:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35090,
                                    "src": "2815:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35076,
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
                            "id": 35082,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35081,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35090,
                                    "src": "2852:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                        "typeString": "bool[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35079,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2852:4:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 35080,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35106,
                        "nodeType": "FunctionDefinition",
                        "src": "2929:142:150",
                        "nodes": [],
                        "body": {
                            "id": 35105,
                            "nodeType": "Block",
                            "src": "3019:52:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35101,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35092,
                                                "src": "3054:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35102,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35094,
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
                                                "id": 35099,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "3036:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35100,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3039:14:150",
                                            "memberName": "parseJsonBytes",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39970,
                                            "src": "3036:17:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (bytes memory)"
                                            }
                                        },
                                        "id": 35103,
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
                                    "functionReturnParameters": 35098,
                                    "id": 35104,
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
                            "id": 35095,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35092,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2962:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35106,
                                    "src": "2948:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35091,
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
                                    "id": 35094,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2982:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35106,
                                    "src": "2968:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35093,
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
                            "id": 35098,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35097,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35106,
                                    "src": "3005:12:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 35096,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35123,
                        "nodeType": "FunctionDefinition",
                        "src": "3077:154:150",
                        "nodes": [],
                        "body": {
                            "id": 35122,
                            "nodeType": "Block",
                            "src": "3174:57:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35118,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35108,
                                                "src": "3214:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35119,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35110,
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
                                                "id": 35116,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "3191:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35117,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3194:19:150",
                                            "memberName": "parseJsonBytesArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 39980,
                                            "src": "3191:22:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (bytes memory[] memory)"
                                            }
                                        },
                                        "id": 35120,
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
                                    "functionReturnParameters": 35115,
                                    "id": 35121,
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
                            "id": 35111,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35108,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "3115:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35123,
                                    "src": "3101:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35107,
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
                                    "id": 35110,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3135:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35123,
                                    "src": "3121:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35109,
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
                            "id": 35115,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35114,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35123,
                                    "src": "3158:14:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "bytes[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35112,
                                            "name": "bytes",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3158:5:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_storage_ptr",
                                                "typeString": "bytes"
                                            }
                                        },
                                        "id": 35113,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35142,
                        "nodeType": "FunctionDefinition",
                        "src": "3237:167:150",
                        "nodes": [],
                        "body": {
                            "id": 35141,
                            "nodeType": "Block",
                            "src": "3343:61:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35136,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35125,
                                                "src": "3377:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35137,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35127,
                                                "src": "3386:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35138,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35129,
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
                                                "id": 35134,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "3360:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35135,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3363:13:150",
                                            "memberName": "serializeBool",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40020,
                                            "src": "3360:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bool) external returns (string memory)"
                                            }
                                        },
                                        "id": 35139,
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
                                    "functionReturnParameters": 35133,
                                    "id": 35140,
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
                            "id": 35130,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35125,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "3270:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35142,
                                    "src": "3256:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35124,
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
                                    "id": 35127,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3293:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35142,
                                    "src": "3279:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35126,
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
                                    "id": 35129,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3303:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35142,
                                    "src": "3298:10:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 35128,
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
                            "id": 35133,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35132,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35142,
                                    "src": "3328:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35131,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35162,
                        "nodeType": "FunctionDefinition",
                        "src": "3410:196:150",
                        "nodes": [],
                        "body": {
                            "id": 35161,
                            "nodeType": "Block",
                            "src": "3545:61:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35156,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35144,
                                                "src": "3579:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35157,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35146,
                                                "src": "3588:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35158,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35149,
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
                                                "id": 35154,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "3562:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35155,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3565:13:150",
                                            "memberName": "serializeBool",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40098,
                                            "src": "3562:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bool_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bool[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35159,
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
                                    "functionReturnParameters": 35153,
                                    "id": 35160,
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
                            "id": 35150,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35144,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "3443:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35162,
                                    "src": "3429:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35143,
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
                                    "id": 35146,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3466:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35162,
                                    "src": "3452:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35145,
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
                                    "id": 35149,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3485:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35162,
                                    "src": "3471:19:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                        "typeString": "bool[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35147,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3471:4:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 35148,
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
                            "id": 35153,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35152,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35162,
                                    "src": "3526:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35151,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35181,
                        "nodeType": "FunctionDefinition",
                        "src": "3612:170:150",
                        "nodes": [],
                        "body": {
                            "id": 35180,
                            "nodeType": "Block",
                            "src": "3721:61:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35175,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35164,
                                                "src": "3755:7:150",
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
                                                "referencedDeclaration": 35166,
                                                "src": "3764:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35177,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35168,
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
                                                "id": 35173,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "3738:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35174,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3741:13:150",
                                            "memberName": "serializeUint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40031,
                                            "src": "3738:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,uint256) external returns (string memory)"
                                            }
                                        },
                                        "id": 35178,
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
                                    "functionReturnParameters": 35172,
                                    "id": 35179,
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
                            "id": 35169,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35164,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "3645:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35181,
                                    "src": "3631:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35163,
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
                                    "id": 35166,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3668:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35181,
                                    "src": "3654:17:150",
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
                                    "id": 35168,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3681:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35181,
                                    "src": "3673:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 35167,
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
                                    "scope": 35181,
                                    "src": "3706:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35170,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35201,
                        "nodeType": "FunctionDefinition",
                        "src": "3788:199:150",
                        "nodes": [],
                        "body": {
                            "id": 35200,
                            "nodeType": "Block",
                            "src": "3926:61:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35195,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35183,
                                                "src": "3960:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35196,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35185,
                                                "src": "3969:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35197,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35188,
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
                                                "id": 35193,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "3943:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35194,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3946:13:150",
                                            "memberName": "serializeUint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40110,
                                            "src": "3943:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,uint256[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35198,
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
                                    "functionReturnParameters": 35192,
                                    "id": 35199,
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
                            "id": 35189,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35183,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "3821:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35201,
                                    "src": "3807:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35182,
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
                                    "id": 35185,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3844:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35201,
                                    "src": "3830:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35184,
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
                                    "id": 35188,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3866:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35201,
                                    "src": "3849:22:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35186,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3849:7:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 35187,
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
                            "id": 35192,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35191,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35201,
                                    "src": "3907:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35190,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35220,
                        "nodeType": "FunctionDefinition",
                        "src": "3993:168:150",
                        "nodes": [],
                        "body": {
                            "id": 35219,
                            "nodeType": "Block",
                            "src": "4101:60:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35214,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35203,
                                                "src": "4134:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35215,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35205,
                                                "src": "4143:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35216,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35207,
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
                                                "id": 35212,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "4118:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35213,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4121:12:150",
                                            "memberName": "serializeInt",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40042,
                                            "src": "4118:15:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_int256_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,int256) external returns (string memory)"
                                            }
                                        },
                                        "id": 35217,
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
                                    "functionReturnParameters": 35211,
                                    "id": 35218,
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
                            "id": 35208,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35203,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4026:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35220,
                                    "src": "4012:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35202,
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
                                    "id": 35205,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4049:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35220,
                                    "src": "4035:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35204,
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
                                    "id": 35207,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4061:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35220,
                                    "src": "4054:12:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 35206,
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
                            "id": 35211,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35210,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35220,
                                    "src": "4086:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35209,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35240,
                        "nodeType": "FunctionDefinition",
                        "src": "4167:197:150",
                        "nodes": [],
                        "body": {
                            "id": 35239,
                            "nodeType": "Block",
                            "src": "4304:60:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35234,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35222,
                                                "src": "4337:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35235,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35224,
                                                "src": "4346:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35236,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35227,
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
                                                "id": 35232,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "4321:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35233,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4324:12:150",
                                            "memberName": "serializeInt",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40122,
                                            "src": "4321:15:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,int256[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35237,
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
                                    "functionReturnParameters": 35231,
                                    "id": 35238,
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
                            "id": 35228,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35222,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4200:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35240,
                                    "src": "4186:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35221,
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
                                    "id": 35224,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4223:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35240,
                                    "src": "4209:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35223,
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
                                    "id": 35227,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4244:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35240,
                                    "src": "4228:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                        "typeString": "int256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35225,
                                            "name": "int256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4228:6:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "id": 35226,
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
                            "id": 35231,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35230,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35240,
                                    "src": "4285:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35229,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35259,
                        "nodeType": "FunctionDefinition",
                        "src": "4370:173:150",
                        "nodes": [],
                        "body": {
                            "id": 35258,
                            "nodeType": "Block",
                            "src": "4479:64:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35253,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35242,
                                                "src": "4516:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35254,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35244,
                                                "src": "4525:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35255,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35246,
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
                                                "id": 35251,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "4496:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35252,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4499:16:150",
                                            "memberName": "serializeAddress",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40053,
                                            "src": "4496:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,address) external returns (string memory)"
                                            }
                                        },
                                        "id": 35256,
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
                                    "functionReturnParameters": 35250,
                                    "id": 35257,
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
                            "id": 35247,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35242,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4403:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35259,
                                    "src": "4389:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35241,
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
                                    "id": 35244,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4426:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35259,
                                    "src": "4412:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35243,
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
                                    "id": 35246,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4439:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35259,
                                    "src": "4431:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 35245,
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
                            "id": 35250,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35249,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35259,
                                    "src": "4464:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35248,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35279,
                        "nodeType": "FunctionDefinition",
                        "src": "4549:202:150",
                        "nodes": [],
                        "body": {
                            "id": 35278,
                            "nodeType": "Block",
                            "src": "4687:64:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35273,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35261,
                                                "src": "4724:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35274,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35263,
                                                "src": "4733:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35275,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35266,
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
                                                "id": 35271,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "4704:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35272,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4707:16:150",
                                            "memberName": "serializeAddress",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40134,
                                            "src": "4704:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,address[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35276,
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
                                    "functionReturnParameters": 35270,
                                    "id": 35277,
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
                            "id": 35267,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35261,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4582:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35279,
                                    "src": "4568:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35260,
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
                                    "id": 35263,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4605:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35279,
                                    "src": "4591:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35262,
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
                                    "id": 35266,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4627:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35279,
                                    "src": "4610:22:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35264,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4610:7:150",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 35265,
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
                            "id": 35270,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35269,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35279,
                                    "src": "4668:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35268,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35298,
                        "nodeType": "FunctionDefinition",
                        "src": "4757:173:150",
                        "nodes": [],
                        "body": {
                            "id": 35297,
                            "nodeType": "Block",
                            "src": "4866:64:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35292,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35281,
                                                "src": "4903:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35293,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35283,
                                                "src": "4912:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35294,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35285,
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
                                                "id": 35290,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "4883:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35291,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4886:16:150",
                                            "memberName": "serializeBytes32",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40064,
                                            "src": "4883:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bytes32) external returns (string memory)"
                                            }
                                        },
                                        "id": 35295,
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
                                    "functionReturnParameters": 35289,
                                    "id": 35296,
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
                            "id": 35286,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35281,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4790:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35298,
                                    "src": "4776:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35280,
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
                                    "id": 35283,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4813:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35298,
                                    "src": "4799:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35282,
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
                                    "id": 35285,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4826:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35298,
                                    "src": "4818:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 35284,
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
                            "id": 35289,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35288,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35298,
                                    "src": "4851:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35287,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35318,
                        "nodeType": "FunctionDefinition",
                        "src": "4936:202:150",
                        "nodes": [],
                        "body": {
                            "id": 35317,
                            "nodeType": "Block",
                            "src": "5074:64:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35312,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35300,
                                                "src": "5111:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35313,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35302,
                                                "src": "5120:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35314,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35305,
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
                                                "id": 35310,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "5091:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35311,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5094:16:150",
                                            "memberName": "serializeBytes32",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40146,
                                            "src": "5091:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bytes32[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35315,
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
                                    "functionReturnParameters": 35309,
                                    "id": 35316,
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
                            "id": 35306,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35300,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4969:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35318,
                                    "src": "4955:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35299,
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
                                    "id": 35302,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4992:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35318,
                                    "src": "4978:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35301,
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
                                    "id": 35305,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5014:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35318,
                                    "src": "4997:22:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35303,
                                            "name": "bytes32",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4997:7:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 35304,
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
                            "id": 35309,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35308,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35318,
                                    "src": "5055:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35307,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35337,
                        "nodeType": "FunctionDefinition",
                        "src": "5144:176:150",
                        "nodes": [],
                        "body": {
                            "id": 35336,
                            "nodeType": "Block",
                            "src": "5258:62:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35331,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35320,
                                                "src": "5293:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35332,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35322,
                                                "src": "5302:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35333,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35324,
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
                                                "id": 35329,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "5275:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35330,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5278:14:150",
                                            "memberName": "serializeBytes",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40086,
                                            "src": "5275:17:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bytes memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35334,
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
                                    "functionReturnParameters": 35328,
                                    "id": 35335,
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
                            "id": 35325,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35320,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5177:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35337,
                                    "src": "5163:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35319,
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
                                    "id": 35322,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "5200:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35337,
                                    "src": "5186:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35321,
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
                                    "id": 35324,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5218:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35337,
                                    "src": "5205:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 35323,
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
                            "id": 35328,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35327,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35337,
                                    "src": "5243:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35326,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35357,
                        "nodeType": "FunctionDefinition",
                        "src": "5326:198:150",
                        "nodes": [],
                        "body": {
                            "id": 35356,
                            "nodeType": "Block",
                            "src": "5462:62:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35351,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35339,
                                                "src": "5497:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35352,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35341,
                                                "src": "5506:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35353,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35344,
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
                                                "id": 35349,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "5479:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35350,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5482:14:150",
                                            "memberName": "serializeBytes",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40170,
                                            "src": "5479:17:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bytes memory[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35354,
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
                                    "functionReturnParameters": 35348,
                                    "id": 35355,
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
                            "id": 35345,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35339,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5359:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35357,
                                    "src": "5345:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35338,
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
                                    "id": 35341,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "5382:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35357,
                                    "src": "5368:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35340,
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
                                    "id": 35344,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5402:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35357,
                                    "src": "5387:20:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "bytes[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35342,
                                            "name": "bytes",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5387:5:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_storage_ptr",
                                                "typeString": "bytes"
                                            }
                                        },
                                        "id": 35343,
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
                            "id": 35348,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35347,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35357,
                                    "src": "5443:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35346,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35376,
                        "nodeType": "FunctionDefinition",
                        "src": "5530:198:150",
                        "nodes": [],
                        "body": {
                            "id": 35375,
                            "nodeType": "Block",
                            "src": "5665:63:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35370,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35359,
                                                "src": "5701:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35371,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35361,
                                                "src": "5710:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35372,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35363,
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
                                                "id": 35368,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "5682:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35369,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5685:15:150",
                                            "memberName": "serializeString",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40075,
                                            "src": "5682:18:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,string memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35373,
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
                                    "functionReturnParameters": 35367,
                                    "id": 35374,
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
                            "id": 35364,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35359,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5563:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35376,
                                    "src": "5549:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35358,
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
                                    "id": 35361,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "5586:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35376,
                                    "src": "5572:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35360,
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
                                    "id": 35363,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5605:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35376,
                                    "src": "5591:19:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35362,
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
                            "id": 35367,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35366,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35376,
                                    "src": "5646:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35365,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35396,
                        "nodeType": "FunctionDefinition",
                        "src": "5734:200:150",
                        "nodes": [],
                        "body": {
                            "id": 35395,
                            "nodeType": "Block",
                            "src": "5871:63:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35390,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35378,
                                                "src": "5907:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35391,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35380,
                                                "src": "5916:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35392,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35383,
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
                                                "id": 35388,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "5888:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35389,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5891:15:150",
                                            "memberName": "serializeString",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40158,
                                            "src": "5888:18:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,string memory[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35393,
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
                                    "functionReturnParameters": 35387,
                                    "id": 35394,
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
                            "id": 35384,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35378,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5767:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35396,
                                    "src": "5753:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35377,
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
                                    "id": 35380,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "5790:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35396,
                                    "src": "5776:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35379,
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
                                    "id": 35383,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5811:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35396,
                                    "src": "5795:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35381,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5795:6:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 35382,
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
                            "id": 35387,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35386,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35396,
                                    "src": "5852:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35385,
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
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35411,
                        "nodeType": "FunctionDefinition",
                        "src": "5940:111:150",
                        "nodes": [],
                        "body": {
                            "id": 35410,
                            "nodeType": "Block",
                            "src": "6007:44:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35406,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35398,
                                                "src": "6030:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35407,
                                                "name": "path",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35400,
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
                                                "id": 35403,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "6017:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35405,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6020:9:150",
                                            "memberName": "writeJson",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40177,
                                            "src": "6017:12:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,string memory) external"
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
                                        "src": "6017:27:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 35409,
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
                            "id": 35401,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35398,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5969:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35411,
                                    "src": "5955:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35397,
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
                                    "id": 35400,
                                    "mutability": "mutable",
                                    "name": "path",
                                    "nameLocation": "5992:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35411,
                                    "src": "5978:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35399,
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
                            "id": 35402,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6007:0:150"
                        },
                        "scope": 35430,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35429,
                        "nodeType": "FunctionDefinition",
                        "src": "6057:145:150",
                        "nodes": [],
                        "body": {
                            "id": 35428,
                            "nodeType": "Block",
                            "src": "6148:54:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35423,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35413,
                                                "src": "6171:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35424,
                                                "name": "path",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35415,
                                                "src": "6180:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35425,
                                                "name": "valueKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35417,
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
                                                "id": 35420,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34876,
                                                "src": "6158:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35422,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6161:9:150",
                                            "memberName": "writeJson",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40186,
                                            "src": "6158:12:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,string memory,string memory) external"
                                            }
                                        },
                                        "id": 35426,
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
                                    "id": 35427,
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
                            "id": 35418,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35413,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "6086:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35429,
                                    "src": "6072:21:150",
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
                                    "id": 35415,
                                    "mutability": "mutable",
                                    "name": "path",
                                    "nameLocation": "6109:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35429,
                                    "src": "6095:18:150",
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
                                    "id": 35417,
                                    "mutability": "mutable",
                                    "name": "valueKey",
                                    "nameLocation": "6129:8:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35429,
                                    "src": "6115:22:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35416,
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
                            "id": 35419,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6148:0:150"
                        },
                        "scope": 35430,
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
                    35430
                ],
                "name": "stdJson",
                "nameLocation": "838:7:150",
                "scope": 35431,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 150
};
