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
        "id": 35611,
        "exportedSymbols": {
            "VmSafe": [
                40412
            ],
            "stdJson": [
                35610
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:6173:150",
        "nodes": [
            {
                "id": 35036,
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
                "id": 35037,
                "nodeType": "PragmaDirective",
                "src": "65:33:150",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 35039,
                "nodeType": "ImportDirective",
                "src": "100:32:150",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "./Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 35611,
                "sourceUnit": 40885,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 35038,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40412,
                            "src": "108:6:150",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 35610,
                "nodeType": "ContractDefinition",
                "src": "830:5374:150",
                "nodes": [
                    {
                        "id": 35056,
                        "nodeType": "VariableDeclaration",
                        "src": "852:92:150",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "vm",
                        "nameLocation": "876:2:150",
                        "scope": 35610,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_VmSafe_$40412",
                            "typeString": "contract VmSafe"
                        },
                        "typeName": {
                            "id": 35041,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 35040,
                                "name": "VmSafe",
                                "nameLocations": [
                                    "852:6:150"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 40412,
                                "src": "852:6:150"
                            },
                            "referencedDeclaration": 40412,
                            "src": "852:6:150",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$40412",
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
                                                                    "id": 35050,
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
                                                                "id": 35049,
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
                                                            "id": 35051,
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
                                                        "id": 35048,
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
                                                            "id": 35047,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "904:7:150",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 35052,
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
                                                "id": 35046,
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
                                                    "id": 35045,
                                                    "name": "uint160",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "896:7:150",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 35053,
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
                                        "id": 35044,
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
                                            "id": 35043,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "888:7:150",
                                            "typeDescriptions": {}
                                        }
                                    },
                                    "id": 35054,
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
                                "id": 35042,
                                "name": "VmSafe",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 40412,
                                "src": "881:6:150",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_VmSafe_$40412_$",
                                    "typeString": "type(contract VmSafe)"
                                }
                            },
                            "id": 35055,
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
                                "typeIdentifier": "t_contract$_VmSafe_$40412",
                                "typeString": "contract VmSafe"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 35072,
                        "nodeType": "FunctionDefinition",
                        "src": "951:141:150",
                        "nodes": [],
                        "body": {
                            "id": 35071,
                            "nodeType": "Block",
                            "src": "1045:47:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35067,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35058,
                                                "src": "1075:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35068,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35060,
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
                                                "id": 35065,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "1062:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35066,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1065:9:150",
                                            "memberName": "parseJson",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40039,
                                            "src": "1062:12:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure external returns (bytes memory)"
                                            }
                                        },
                                        "id": 35069,
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
                                    "functionReturnParameters": 35064,
                                    "id": 35070,
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
                            "id": 35061,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35058,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "983:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35072,
                                    "src": "969:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35057,
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
                                    "id": 35060,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1003:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35072,
                                    "src": "989:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35059,
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
                            "id": 35064,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35063,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35072,
                                    "src": "1031:12:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 35062,
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
                        "scope": 35610,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35088,
                        "nodeType": "FunctionDefinition",
                        "src": "1098:135:150",
                        "nodes": [],
                        "body": {
                            "id": 35087,
                            "nodeType": "Block",
                            "src": "1182:51:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35083,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35074,
                                                "src": "1216:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35084,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35076,
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
                                                "id": 35081,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "1199:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35082,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1202:13:150",
                                            "memberName": "parseJsonUint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40055,
                                            "src": "1199:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (string memory,string memory) external returns (uint256)"
                                            }
                                        },
                                        "id": 35085,
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
                                    "functionReturnParameters": 35080,
                                    "id": 35086,
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
                            "id": 35077,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35074,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1130:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35088,
                                    "src": "1116:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35073,
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
                                    "id": 35076,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1150:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35088,
                                    "src": "1136:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35075,
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
                            "id": 35080,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35079,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35088,
                                    "src": "1173:7:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 35078,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35105,
                        "nodeType": "FunctionDefinition",
                        "src": "1239:154:150",
                        "nodes": [],
                        "body": {
                            "id": 35104,
                            "nodeType": "Block",
                            "src": "1337:56:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35100,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35090,
                                                "src": "1376:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35101,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35092,
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
                                                "id": 35098,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "1354:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35099,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1357:18:150",
                                            "memberName": "parseJsonUintArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40065,
                                            "src": "1354:21:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (uint256[] memory)"
                                            }
                                        },
                                        "id": 35102,
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
                                    "functionReturnParameters": 35097,
                                    "id": 35103,
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
                            "id": 35093,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35090,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1276:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35105,
                                    "src": "1262:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35089,
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
                                    "id": 35092,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1296:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35105,
                                    "src": "1282:17:150",
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
                            "id": 35097,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35096,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35105,
                                    "src": "1319:16:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35094,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1319:7:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 35095,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35121,
                        "nodeType": "FunctionDefinition",
                        "src": "1399:132:150",
                        "nodes": [],
                        "body": {
                            "id": 35120,
                            "nodeType": "Block",
                            "src": "1481:50:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35116,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35107,
                                                "src": "1514:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35117,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35109,
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
                                                "id": 35114,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "1498:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35115,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1501:12:150",
                                            "memberName": "parseJsonInt",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40074,
                                            "src": "1498:15:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_int256_$",
                                                "typeString": "function (string memory,string memory) external returns (int256)"
                                            }
                                        },
                                        "id": 35118,
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
                                    "functionReturnParameters": 35113,
                                    "id": 35119,
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
                            "id": 35110,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35107,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1430:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35121,
                                    "src": "1416:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35106,
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
                                    "id": 35109,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1450:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35121,
                                    "src": "1436:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35108,
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
                            "id": 35113,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35112,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35121,
                                    "src": "1473:6:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 35111,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35138,
                        "nodeType": "FunctionDefinition",
                        "src": "1537:151:150",
                        "nodes": [],
                        "body": {
                            "id": 35137,
                            "nodeType": "Block",
                            "src": "1633:55:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35133,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35123,
                                                "src": "1671:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35134,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35125,
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
                                                "id": 35131,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "1650:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35132,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1653:17:150",
                                            "memberName": "parseJsonIntArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40084,
                                            "src": "1650:20:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_int256_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (int256[] memory)"
                                            }
                                        },
                                        "id": 35135,
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
                                    "functionReturnParameters": 35130,
                                    "id": 35136,
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
                            "id": 35126,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35123,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1573:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35138,
                                    "src": "1559:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35122,
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
                                    "id": 35125,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1593:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35138,
                                    "src": "1579:17:150",
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
                            "id": 35130,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35129,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35138,
                                    "src": "1616:15:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                        "typeString": "int256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35127,
                                            "name": "int256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1616:6:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "id": 35128,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35154,
                        "nodeType": "FunctionDefinition",
                        "src": "1694:141:150",
                        "nodes": [],
                        "body": {
                            "id": 35153,
                            "nodeType": "Block",
                            "src": "1781:54:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35149,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35140,
                                                "src": "1818:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35150,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35142,
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
                                                "id": 35147,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "1798:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35148,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1801:16:150",
                                            "memberName": "parseJsonBytes32",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40169,
                                            "src": "1798:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (string memory,string memory) external returns (bytes32)"
                                            }
                                        },
                                        "id": 35151,
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
                                    "functionReturnParameters": 35146,
                                    "id": 35152,
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
                            "id": 35143,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35140,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1729:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35154,
                                    "src": "1715:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35139,
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
                                    "id": 35142,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1749:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35154,
                                    "src": "1735:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35141,
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
                            "id": 35146,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35145,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35154,
                                    "src": "1772:7:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 35144,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35171,
                        "nodeType": "FunctionDefinition",
                        "src": "1841:160:150",
                        "nodes": [],
                        "body": {
                            "id": 35170,
                            "nodeType": "Block",
                            "src": "1942:59:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35166,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35156,
                                                "src": "1984:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35167,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35158,
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
                                                "id": 35164,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "1959:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35165,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1962:21:150",
                                            "memberName": "parseJsonBytes32Array",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40179,
                                            "src": "1959:24:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (bytes32[] memory)"
                                            }
                                        },
                                        "id": 35168,
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
                                    "functionReturnParameters": 35163,
                                    "id": 35169,
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
                            "id": 35159,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35156,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "1881:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35171,
                                    "src": "1867:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35155,
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
                                    "id": 35158,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "1901:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35171,
                                    "src": "1887:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35157,
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
                            "id": 35163,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35162,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35171,
                                    "src": "1924:16:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35160,
                                            "name": "bytes32",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1924:7:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 35161,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35187,
                        "nodeType": "FunctionDefinition",
                        "src": "2007:145:150",
                        "nodes": [],
                        "body": {
                            "id": 35186,
                            "nodeType": "Block",
                            "src": "2099:53:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35182,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35173,
                                                "src": "2135:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35183,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35175,
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
                                                "id": 35180,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "2116:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35181,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2119:15:150",
                                            "memberName": "parseJsonString",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40131,
                                            "src": "2116:18:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35184,
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
                                    "functionReturnParameters": 35179,
                                    "id": 35185,
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
                            "id": 35176,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35173,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2041:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35187,
                                    "src": "2027:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35172,
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
                                    "id": 35175,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2061:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35187,
                                    "src": "2047:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35174,
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
                            "id": 35179,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35178,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35187,
                                    "src": "2084:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35177,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35204,
                        "nodeType": "FunctionDefinition",
                        "src": "2158:157:150",
                        "nodes": [],
                        "body": {
                            "id": 35203,
                            "nodeType": "Block",
                            "src": "2257:58:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35199,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35189,
                                                "src": "2298:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35200,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35191,
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
                                                "id": 35197,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "2274:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35198,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2277:20:150",
                                            "memberName": "parseJsonStringArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40141,
                                            "src": "2274:23:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (string memory[] memory)"
                                            }
                                        },
                                        "id": 35201,
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
                                    "functionReturnParameters": 35196,
                                    "id": 35202,
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
                            "id": 35192,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35189,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2197:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35204,
                                    "src": "2183:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35188,
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
                                    "id": 35191,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2217:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35204,
                                    "src": "2203:17:150",
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
                            "id": 35196,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35195,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35204,
                                    "src": "2240:15:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35193,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2240:6:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 35194,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35220,
                        "nodeType": "FunctionDefinition",
                        "src": "2321:141:150",
                        "nodes": [],
                        "body": {
                            "id": 35219,
                            "nodeType": "Block",
                            "src": "2408:54:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35215,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35206,
                                                "src": "2445:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35216,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35208,
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
                                                "id": 35213,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "2425:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35214,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2428:16:150",
                                            "memberName": "parseJsonAddress",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40112,
                                            "src": "2425:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_address_$",
                                                "typeString": "function (string memory,string memory) external returns (address)"
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
                                        "src": "2425:30:150",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 35212,
                                    "id": 35218,
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
                            "id": 35209,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35206,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2356:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35220,
                                    "src": "2342:18:150",
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
                                    "id": 35208,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2376:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35220,
                                    "src": "2362:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35207,
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
                            "id": 35212,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35211,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35220,
                                    "src": "2399:7:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 35210,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35237,
                        "nodeType": "FunctionDefinition",
                        "src": "2468:160:150",
                        "nodes": [],
                        "body": {
                            "id": 35236,
                            "nodeType": "Block",
                            "src": "2569:59:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35232,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35222,
                                                "src": "2611:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35233,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35224,
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
                                                "id": 35230,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "2586:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35231,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2589:21:150",
                                            "memberName": "parseJsonAddressArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40122,
                                            "src": "2586:24:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (address[] memory)"
                                            }
                                        },
                                        "id": 35234,
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
                                    "functionReturnParameters": 35229,
                                    "id": 35235,
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
                            "id": 35225,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35222,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2508:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35237,
                                    "src": "2494:18:150",
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
                                    "id": 35224,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2528:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35237,
                                    "src": "2514:17:150",
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
                            "id": 35229,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35228,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35237,
                                    "src": "2551:16:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35226,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2551:7:150",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 35227,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35253,
                        "nodeType": "FunctionDefinition",
                        "src": "2634:132:150",
                        "nodes": [],
                        "body": {
                            "id": 35252,
                            "nodeType": "Block",
                            "src": "2715:51:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35248,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35239,
                                                "src": "2749:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35249,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35241,
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
                                                "id": 35246,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "2732:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35247,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2735:13:150",
                                            "memberName": "parseJsonBool",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40093,
                                            "src": "2732:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$",
                                                "typeString": "function (string memory,string memory) external returns (bool)"
                                            }
                                        },
                                        "id": 35250,
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
                                    "functionReturnParameters": 35245,
                                    "id": 35251,
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
                            "id": 35242,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35239,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2666:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35253,
                                    "src": "2652:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35238,
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
                                    "id": 35241,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2686:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35253,
                                    "src": "2672:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35240,
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
                            "id": 35245,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35244,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35253,
                                    "src": "2709:4:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 35243,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35270,
                        "nodeType": "FunctionDefinition",
                        "src": "2772:151:150",
                        "nodes": [],
                        "body": {
                            "id": 35269,
                            "nodeType": "Block",
                            "src": "2867:56:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35265,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35255,
                                                "src": "2906:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35266,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35257,
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
                                                "id": 35263,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "2884:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35264,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2887:18:150",
                                            "memberName": "parseJsonBoolArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40103,
                                            "src": "2884:21:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bool_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (bool[] memory)"
                                            }
                                        },
                                        "id": 35267,
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
                                    "functionReturnParameters": 35262,
                                    "id": 35268,
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
                            "id": 35258,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35255,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2809:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35270,
                                    "src": "2795:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35254,
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
                                    "id": 35257,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2829:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35270,
                                    "src": "2815:17:150",
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
                            "id": 35262,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35261,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35270,
                                    "src": "2852:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                        "typeString": "bool[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35259,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2852:4:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 35260,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35286,
                        "nodeType": "FunctionDefinition",
                        "src": "2929:142:150",
                        "nodes": [],
                        "body": {
                            "id": 35285,
                            "nodeType": "Block",
                            "src": "3019:52:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35281,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35272,
                                                "src": "3054:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35282,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35274,
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
                                                "id": 35279,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "3036:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35280,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3039:14:150",
                                            "memberName": "parseJsonBytes",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40150,
                                            "src": "3036:17:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (bytes memory)"
                                            }
                                        },
                                        "id": 35283,
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
                                    "functionReturnParameters": 35278,
                                    "id": 35284,
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
                            "id": 35275,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35272,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "2962:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35286,
                                    "src": "2948:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35271,
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
                                    "id": 35274,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "2982:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35286,
                                    "src": "2968:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35273,
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
                            "id": 35278,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35277,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35286,
                                    "src": "3005:12:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 35276,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35303,
                        "nodeType": "FunctionDefinition",
                        "src": "3077:154:150",
                        "nodes": [],
                        "body": {
                            "id": 35302,
                            "nodeType": "Block",
                            "src": "3174:57:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35298,
                                                "name": "json",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35288,
                                                "src": "3214:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35299,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35290,
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
                                                "id": 35296,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "3191:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35297,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3194:19:150",
                                            "memberName": "parseJsonBytesArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40160,
                                            "src": "3191:22:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (bytes memory[] memory)"
                                            }
                                        },
                                        "id": 35300,
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
                                    "functionReturnParameters": 35295,
                                    "id": 35301,
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
                            "id": 35291,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35288,
                                    "mutability": "mutable",
                                    "name": "json",
                                    "nameLocation": "3115:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35303,
                                    "src": "3101:18:150",
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
                                    "id": 35290,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3135:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35303,
                                    "src": "3121:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35289,
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
                            "id": 35295,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35294,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35303,
                                    "src": "3158:14:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "bytes[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35292,
                                            "name": "bytes",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3158:5:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_storage_ptr",
                                                "typeString": "bytes"
                                            }
                                        },
                                        "id": 35293,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35322,
                        "nodeType": "FunctionDefinition",
                        "src": "3237:167:150",
                        "nodes": [],
                        "body": {
                            "id": 35321,
                            "nodeType": "Block",
                            "src": "3343:61:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35316,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35305,
                                                "src": "3377:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35317,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35307,
                                                "src": "3386:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35318,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35309,
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
                                                "id": 35314,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "3360:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35315,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3363:13:150",
                                            "memberName": "serializeBool",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40200,
                                            "src": "3360:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bool) external returns (string memory)"
                                            }
                                        },
                                        "id": 35319,
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
                                    "functionReturnParameters": 35313,
                                    "id": 35320,
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
                            "id": 35310,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35305,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "3270:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35322,
                                    "src": "3256:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35304,
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
                                    "id": 35307,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3293:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35322,
                                    "src": "3279:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35306,
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
                                    "id": 35309,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3303:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35322,
                                    "src": "3298:10:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 35308,
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
                            "id": 35313,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35312,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35322,
                                    "src": "3328:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35311,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35342,
                        "nodeType": "FunctionDefinition",
                        "src": "3410:196:150",
                        "nodes": [],
                        "body": {
                            "id": 35341,
                            "nodeType": "Block",
                            "src": "3545:61:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35336,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35324,
                                                "src": "3579:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35337,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35326,
                                                "src": "3588:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35338,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35329,
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
                                                "id": 35334,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "3562:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35335,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3565:13:150",
                                            "memberName": "serializeBool",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40278,
                                            "src": "3562:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bool_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bool[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35339,
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
                                    "functionReturnParameters": 35333,
                                    "id": 35340,
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
                            "id": 35330,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35324,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "3443:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35342,
                                    "src": "3429:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35323,
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
                                    "id": 35326,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3466:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35342,
                                    "src": "3452:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35325,
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
                                    "id": 35329,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3485:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35342,
                                    "src": "3471:19:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                        "typeString": "bool[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35327,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3471:4:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 35328,
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
                            "id": 35333,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35332,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35342,
                                    "src": "3526:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35331,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35361,
                        "nodeType": "FunctionDefinition",
                        "src": "3612:170:150",
                        "nodes": [],
                        "body": {
                            "id": 35360,
                            "nodeType": "Block",
                            "src": "3721:61:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35355,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35344,
                                                "src": "3755:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35356,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35346,
                                                "src": "3764:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35357,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35348,
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
                                                "id": 35353,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "3738:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35354,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3741:13:150",
                                            "memberName": "serializeUint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40211,
                                            "src": "3738:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,uint256) external returns (string memory)"
                                            }
                                        },
                                        "id": 35358,
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
                                    "functionReturnParameters": 35352,
                                    "id": 35359,
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
                            "id": 35349,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35344,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "3645:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35361,
                                    "src": "3631:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35343,
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
                                    "id": 35346,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3668:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35361,
                                    "src": "3654:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35345,
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
                                    "id": 35348,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3681:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35361,
                                    "src": "3673:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 35347,
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
                            "id": 35352,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35351,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35361,
                                    "src": "3706:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35350,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35381,
                        "nodeType": "FunctionDefinition",
                        "src": "3788:199:150",
                        "nodes": [],
                        "body": {
                            "id": 35380,
                            "nodeType": "Block",
                            "src": "3926:61:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35375,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35363,
                                                "src": "3960:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35376,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35365,
                                                "src": "3969:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35377,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35368,
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
                                                "id": 35373,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "3943:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35374,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3946:13:150",
                                            "memberName": "serializeUint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40290,
                                            "src": "3943:16:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,uint256[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35378,
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
                                    "functionReturnParameters": 35372,
                                    "id": 35379,
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
                            "id": 35369,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35363,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "3821:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35381,
                                    "src": "3807:21:150",
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
                                    "id": 35365,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "3844:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35381,
                                    "src": "3830:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35364,
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
                                    "id": 35368,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3866:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35381,
                                    "src": "3849:22:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35366,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3849:7:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 35367,
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
                            "id": 35372,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35371,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35381,
                                    "src": "3907:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35370,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35400,
                        "nodeType": "FunctionDefinition",
                        "src": "3993:168:150",
                        "nodes": [],
                        "body": {
                            "id": 35399,
                            "nodeType": "Block",
                            "src": "4101:60:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35394,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35383,
                                                "src": "4134:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35395,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35385,
                                                "src": "4143:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35396,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35387,
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
                                                "id": 35392,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "4118:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35393,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4121:12:150",
                                            "memberName": "serializeInt",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40222,
                                            "src": "4118:15:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_int256_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,int256) external returns (string memory)"
                                            }
                                        },
                                        "id": 35397,
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
                                    "functionReturnParameters": 35391,
                                    "id": 35398,
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
                            "id": 35388,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35383,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4026:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35400,
                                    "src": "4012:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35382,
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
                                    "id": 35385,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4049:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35400,
                                    "src": "4035:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35384,
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
                                    "id": 35387,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4061:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35400,
                                    "src": "4054:12:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 35386,
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
                            "id": 35391,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35390,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35400,
                                    "src": "4086:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35389,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35420,
                        "nodeType": "FunctionDefinition",
                        "src": "4167:197:150",
                        "nodes": [],
                        "body": {
                            "id": 35419,
                            "nodeType": "Block",
                            "src": "4304:60:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35414,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35402,
                                                "src": "4337:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35415,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35404,
                                                "src": "4346:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35416,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35407,
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
                                                "id": 35412,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "4321:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35413,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4324:12:150",
                                            "memberName": "serializeInt",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40302,
                                            "src": "4321:15:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,int256[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35417,
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
                                    "functionReturnParameters": 35411,
                                    "id": 35418,
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
                            "id": 35408,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35402,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4200:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35420,
                                    "src": "4186:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35401,
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
                                    "id": 35404,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4223:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35420,
                                    "src": "4209:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35403,
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
                                    "id": 35407,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4244:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35420,
                                    "src": "4228:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                                        "typeString": "int256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35405,
                                            "name": "int256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4228:6:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "id": 35406,
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
                            "id": 35411,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35410,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35420,
                                    "src": "4285:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35409,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35439,
                        "nodeType": "FunctionDefinition",
                        "src": "4370:173:150",
                        "nodes": [],
                        "body": {
                            "id": 35438,
                            "nodeType": "Block",
                            "src": "4479:64:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35433,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35422,
                                                "src": "4516:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35434,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35424,
                                                "src": "4525:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35435,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35426,
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
                                                "id": 35431,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "4496:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35432,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4499:16:150",
                                            "memberName": "serializeAddress",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40233,
                                            "src": "4496:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,address) external returns (string memory)"
                                            }
                                        },
                                        "id": 35436,
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
                                    "functionReturnParameters": 35430,
                                    "id": 35437,
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
                            "id": 35427,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35422,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4403:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35439,
                                    "src": "4389:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35421,
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
                                    "id": 35424,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4426:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35439,
                                    "src": "4412:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35423,
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
                                    "id": 35426,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4439:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35439,
                                    "src": "4431:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 35425,
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
                            "id": 35430,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35429,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35439,
                                    "src": "4464:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35428,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35459,
                        "nodeType": "FunctionDefinition",
                        "src": "4549:202:150",
                        "nodes": [],
                        "body": {
                            "id": 35458,
                            "nodeType": "Block",
                            "src": "4687:64:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35453,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35441,
                                                "src": "4724:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35454,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35443,
                                                "src": "4733:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35455,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35446,
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
                                                "id": 35451,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "4704:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35452,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4707:16:150",
                                            "memberName": "serializeAddress",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40314,
                                            "src": "4704:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,address[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35456,
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
                                    "functionReturnParameters": 35450,
                                    "id": 35457,
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
                            "id": 35447,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35441,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4582:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35459,
                                    "src": "4568:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35440,
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
                                    "id": 35443,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4605:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35459,
                                    "src": "4591:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35442,
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
                                    "id": 35446,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4627:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35459,
                                    "src": "4610:22:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35444,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4610:7:150",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 35445,
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
                            "id": 35450,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35449,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35459,
                                    "src": "4668:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35448,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35478,
                        "nodeType": "FunctionDefinition",
                        "src": "4757:173:150",
                        "nodes": [],
                        "body": {
                            "id": 35477,
                            "nodeType": "Block",
                            "src": "4866:64:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35472,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35461,
                                                "src": "4903:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35473,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35463,
                                                "src": "4912:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35474,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35465,
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
                                                "id": 35470,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "4883:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35471,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4886:16:150",
                                            "memberName": "serializeBytes32",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40244,
                                            "src": "4883:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bytes32) external returns (string memory)"
                                            }
                                        },
                                        "id": 35475,
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
                                    "functionReturnParameters": 35469,
                                    "id": 35476,
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
                            "id": 35466,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35461,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4790:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35478,
                                    "src": "4776:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35460,
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
                                    "id": 35463,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4813:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35478,
                                    "src": "4799:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35462,
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
                                    "id": 35465,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "4826:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35478,
                                    "src": "4818:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 35464,
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
                            "id": 35469,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35468,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35478,
                                    "src": "4851:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35467,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35498,
                        "nodeType": "FunctionDefinition",
                        "src": "4936:202:150",
                        "nodes": [],
                        "body": {
                            "id": 35497,
                            "nodeType": "Block",
                            "src": "5074:64:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35492,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35480,
                                                "src": "5111:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35493,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35482,
                                                "src": "5120:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35494,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35485,
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
                                                "id": 35490,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "5091:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35491,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5094:16:150",
                                            "memberName": "serializeBytes32",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40326,
                                            "src": "5091:19:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bytes32[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35495,
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
                                    "functionReturnParameters": 35489,
                                    "id": 35496,
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
                            "id": 35486,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35480,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "4969:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35498,
                                    "src": "4955:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35479,
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
                                    "id": 35482,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "4992:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35498,
                                    "src": "4978:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35481,
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
                                    "id": 35485,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5014:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35498,
                                    "src": "4997:22:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35483,
                                            "name": "bytes32",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4997:7:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 35484,
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
                            "id": 35489,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35488,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35498,
                                    "src": "5055:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35487,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35517,
                        "nodeType": "FunctionDefinition",
                        "src": "5144:176:150",
                        "nodes": [],
                        "body": {
                            "id": 35516,
                            "nodeType": "Block",
                            "src": "5258:62:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35511,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35500,
                                                "src": "5293:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35512,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35502,
                                                "src": "5302:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35513,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35504,
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
                                                "id": 35509,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "5275:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35510,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5278:14:150",
                                            "memberName": "serializeBytes",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40266,
                                            "src": "5275:17:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bytes memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35514,
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
                                    "functionReturnParameters": 35508,
                                    "id": 35515,
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
                            "id": 35505,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35500,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5177:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35517,
                                    "src": "5163:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35499,
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
                                    "id": 35502,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "5200:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35517,
                                    "src": "5186:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35501,
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
                                    "id": 35504,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5218:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35517,
                                    "src": "5205:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 35503,
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
                            "id": 35508,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35507,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35517,
                                    "src": "5243:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35506,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35537,
                        "nodeType": "FunctionDefinition",
                        "src": "5326:198:150",
                        "nodes": [],
                        "body": {
                            "id": 35536,
                            "nodeType": "Block",
                            "src": "5462:62:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35531,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35519,
                                                "src": "5497:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35532,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35521,
                                                "src": "5506:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35533,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35524,
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
                                                "id": 35529,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "5479:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35530,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5482:14:150",
                                            "memberName": "serializeBytes",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40350,
                                            "src": "5479:17:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,bytes memory[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35534,
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
                                    "functionReturnParameters": 35528,
                                    "id": 35535,
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
                            "id": 35525,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35519,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5359:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35537,
                                    "src": "5345:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35518,
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
                                    "id": 35521,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "5382:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35537,
                                    "src": "5368:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35520,
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
                                    "id": 35524,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5402:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35537,
                                    "src": "5387:20:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "bytes[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35522,
                                            "name": "bytes",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5387:5:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_storage_ptr",
                                                "typeString": "bytes"
                                            }
                                        },
                                        "id": 35523,
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
                            "id": 35528,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35527,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35537,
                                    "src": "5443:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35526,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35556,
                        "nodeType": "FunctionDefinition",
                        "src": "5530:198:150",
                        "nodes": [],
                        "body": {
                            "id": 35555,
                            "nodeType": "Block",
                            "src": "5665:63:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35550,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35539,
                                                "src": "5701:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35551,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35541,
                                                "src": "5710:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35552,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35543,
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
                                                "id": 35548,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "5682:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35549,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5685:15:150",
                                            "memberName": "serializeString",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40255,
                                            "src": "5682:18:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,string memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35553,
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
                                    "functionReturnParameters": 35547,
                                    "id": 35554,
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
                            "id": 35544,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35539,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5563:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35556,
                                    "src": "5549:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35538,
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
                                    "id": 35541,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "5586:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35556,
                                    "src": "5572:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35540,
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
                                    "id": 35543,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5605:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35556,
                                    "src": "5591:19:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35542,
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
                            "id": 35547,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35546,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35556,
                                    "src": "5646:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35545,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35576,
                        "nodeType": "FunctionDefinition",
                        "src": "5734:200:150",
                        "nodes": [],
                        "body": {
                            "id": 35575,
                            "nodeType": "Block",
                            "src": "5871:63:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35570,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35558,
                                                "src": "5907:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35571,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35560,
                                                "src": "5916:3:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35572,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35563,
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
                                                "id": 35568,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "5888:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35569,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5891:15:150",
                                            "memberName": "serializeString",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40338,
                                            "src": "5888:18:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory,string memory[] memory) external returns (string memory)"
                                            }
                                        },
                                        "id": 35573,
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
                                    "functionReturnParameters": 35567,
                                    "id": 35574,
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
                            "id": 35564,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35558,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5767:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35576,
                                    "src": "5753:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35557,
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
                                    "id": 35560,
                                    "mutability": "mutable",
                                    "name": "key",
                                    "nameLocation": "5790:3:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35576,
                                    "src": "5776:17:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35559,
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
                                    "id": 35563,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5811:5:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35576,
                                    "src": "5795:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35561,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5795:6:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 35562,
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
                            "id": 35567,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35566,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35576,
                                    "src": "5852:13:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35565,
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
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35591,
                        "nodeType": "FunctionDefinition",
                        "src": "5940:111:150",
                        "nodes": [],
                        "body": {
                            "id": 35590,
                            "nodeType": "Block",
                            "src": "6007:44:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35586,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35578,
                                                "src": "6030:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35587,
                                                "name": "path",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35580,
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
                                                "id": 35583,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "6017:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35585,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6020:9:150",
                                            "memberName": "writeJson",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40357,
                                            "src": "6017:12:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,string memory) external"
                                            }
                                        },
                                        "id": 35588,
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
                                    "id": 35589,
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
                            "id": 35581,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35578,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "5969:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35591,
                                    "src": "5955:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35577,
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
                                    "id": 35580,
                                    "mutability": "mutable",
                                    "name": "path",
                                    "nameLocation": "5992:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35591,
                                    "src": "5978:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35579,
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
                            "id": 35582,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6007:0:150"
                        },
                        "scope": 35610,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35609,
                        "nodeType": "FunctionDefinition",
                        "src": "6057:145:150",
                        "nodes": [],
                        "body": {
                            "id": 35608,
                            "nodeType": "Block",
                            "src": "6148:54:150",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35603,
                                                "name": "jsonKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35593,
                                                "src": "6171:7:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35604,
                                                "name": "path",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35595,
                                                "src": "6180:4:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 35605,
                                                "name": "valueKey",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35597,
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
                                                "id": 35600,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35056,
                                                "src": "6158:2:150",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_VmSafe_$40412",
                                                    "typeString": "contract VmSafe"
                                                }
                                            },
                                            "id": 35602,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6161:9:150",
                                            "memberName": "writeJson",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 40366,
                                            "src": "6158:12:150",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,string memory,string memory) external"
                                            }
                                        },
                                        "id": 35606,
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
                                    "id": 35607,
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
                            "id": 35598,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35593,
                                    "mutability": "mutable",
                                    "name": "jsonKey",
                                    "nameLocation": "6086:7:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35609,
                                    "src": "6072:21:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35592,
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
                                    "id": 35595,
                                    "mutability": "mutable",
                                    "name": "path",
                                    "nameLocation": "6109:4:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35609,
                                    "src": "6095:18:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35594,
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
                                    "id": 35597,
                                    "mutability": "mutable",
                                    "name": "valueKey",
                                    "nameLocation": "6129:8:150",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35609,
                                    "src": "6115:22:150",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35596,
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
                            "id": 35599,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6148:0:150"
                        },
                        "scope": 35610,
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
                    35610
                ],
                "name": "stdJson",
                "nameLocation": "838:7:150",
                "scope": 35611,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 150
};
