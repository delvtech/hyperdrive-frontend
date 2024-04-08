export const StdStyle = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122048d089dcfcce48eb5cd5cdf527a33c3bbbe671eeccc6cb0f6053c64f5cce8da064736f6c63430008140033",
        "sourceMap": "100:10361:153:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;100:10361:153;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122048d089dcfcce48eb5cd5cdf527a33c3bbbe671eeccc6cb0f6053c64f5cce8da064736f6c63430008140033",
        "sourceMap": "100:10361:153:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdStyle.sol\":\"StdStyle\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdStyle.sol\":{\"keccak256\":\"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8\",\"dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
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
                "lib/forge-std/src/StdStyle.sol": "StdStyle"
            },
            "libraries": {}
        },
        "sources": {
            "lib/forge-std/src/StdStyle.sol": {
                "keccak256": "0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d",
                "urls": [
                    "bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8",
                    "dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"
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
        "absolutePath": "lib/forge-std/src/StdStyle.sol",
        "id": 38343,
        "exportedSymbols": {
            "StdStyle": [
                38342
            ],
            "VmSafe": [
                40306
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:10430:153",
        "nodes": [
            {
                "id": 37133,
                "nodeType": "PragmaDirective",
                "src": "32:32:153",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.4",
                    ".22",
                    "<",
                    "0.9",
                    ".0"
                ]
            },
            {
                "id": 37135,
                "nodeType": "ImportDirective",
                "src": "66:32:153",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "./Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 38343,
                "sourceUnit": 40779,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 37134,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40306,
                            "src": "74:6:153",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 38342,
                "nodeType": "ContractDefinition",
                "src": "100:10361:153",
                "nodes": [
                    {
                        "id": 37152,
                        "nodeType": "VariableDeclaration",
                        "src": "123:92:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "vm",
                        "nameLocation": "147:2:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                            "typeString": "contract VmSafe"
                        },
                        "typeName": {
                            "id": 37137,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 37136,
                                "name": "VmSafe",
                                "nameLocations": [
                                    "123:6:153"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 40306,
                                "src": "123:6:153"
                            },
                            "referencedDeclaration": 40306,
                            "src": "123:6:153",
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
                                                                    "id": 37146,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "193:17:153",
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
                                                                "id": 37145,
                                                                "name": "keccak256",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -8,
                                                                "src": "183:9:153",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                }
                                                            },
                                                            "id": 37147,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "183:28:153",
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
                                                        "id": 37144,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "175:7:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 37143,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "175:7:153",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 37148,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "175:37:153",
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
                                                "id": 37142,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "167:7:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint160_$",
                                                    "typeString": "type(uint160)"
                                                },
                                                "typeName": {
                                                    "id": 37141,
                                                    "name": "uint160",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "167:7:153",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 37149,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "167:46:153",
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
                                        "id": 37140,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "159:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_$",
                                            "typeString": "type(address)"
                                        },
                                        "typeName": {
                                            "id": 37139,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "159:7:153",
                                            "typeDescriptions": {}
                                        }
                                    },
                                    "id": 37150,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "159:55:153",
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
                                "id": 37138,
                                "name": "VmSafe",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 40306,
                                "src": "152:6:153",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_VmSafe_$40306_$",
                                    "typeString": "type(contract VmSafe)"
                                }
                            },
                            "id": 37151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "152:63:153",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$40306",
                                "typeString": "contract VmSafe"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 37155,
                        "nodeType": "VariableDeclaration",
                        "src": "222:34:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "RED",
                        "nameLocation": "238:3:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37153,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "222:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": {
                            "hexValue": "1b5b39316d",
                            "id": 37154,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "244:12:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_e865f62b1188865fdbe08fdbe8546369f5c78a8f677a27514aadc154b4263c18",
                                "typeString": "literal_string hex\"1b5b39316d\""
                            },
                            "value": "\u001b[91m"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 37158,
                        "nodeType": "VariableDeclaration",
                        "src": "262:36:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "GREEN",
                        "nameLocation": "278:5:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37156,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "262:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": {
                            "hexValue": "1b5b39326d",
                            "id": 37157,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "286:12:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_250c6c79af2fd59b948ba31b977e669524bbf27faba009961b135f1635e1e32b",
                                "typeString": "literal_string hex\"1b5b39326d\""
                            },
                            "value": "\u001b[92m"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 37161,
                        "nodeType": "VariableDeclaration",
                        "src": "304:37:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "YELLOW",
                        "nameLocation": "320:6:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37159,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "304:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": {
                            "hexValue": "1b5b39336d",
                            "id": 37160,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "329:12:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_801b445b8c4f71d86cf740b8fd9f85e172d35421144725dd58fed362de2e6cf5",
                                "typeString": "literal_string hex\"1b5b39336d\""
                            },
                            "value": "\u001b[93m"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 37164,
                        "nodeType": "VariableDeclaration",
                        "src": "347:35:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BLUE",
                        "nameLocation": "363:4:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37162,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "347:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": {
                            "hexValue": "1b5b39346d",
                            "id": 37163,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "370:12:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_66ecf2e89553c52e360a74737e5e4e3d15e4d08217c17497ca50efb90c95d593",
                                "typeString": "literal_string hex\"1b5b39346d\""
                            },
                            "value": "\u001b[94m"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 37167,
                        "nodeType": "VariableDeclaration",
                        "src": "388:38:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAGENTA",
                        "nameLocation": "404:7:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37165,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "388:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": {
                            "hexValue": "1b5b39356d",
                            "id": 37166,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "414:12:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b81cf1fd9bcd2b49f14457c6168490b5ff507c85cc3778934da8235d270d6b5b",
                                "typeString": "literal_string hex\"1b5b39356d\""
                            },
                            "value": "\u001b[95m"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 37170,
                        "nodeType": "VariableDeclaration",
                        "src": "432:35:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CYAN",
                        "nameLocation": "448:4:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37168,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "432:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": {
                            "hexValue": "1b5b39366d",
                            "id": 37169,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "455:12:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_f73c74e3aa04446480bd18c1b857a46321f6d66d2bfb703d52333566c779447b",
                                "typeString": "literal_string hex\"1b5b39366d\""
                            },
                            "value": "\u001b[96m"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 37173,
                        "nodeType": "VariableDeclaration",
                        "src": "473:34:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BOLD",
                        "nameLocation": "489:4:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37171,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "473:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": {
                            "hexValue": "1b5b316d",
                            "id": 37172,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "496:11:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_b25b1471c5d449346ad6b37b501b2d5911d6e2bad13ad71d09cdfa3d3b140a17",
                                "typeString": "literal_string hex\"1b5b316d\""
                            },
                            "value": "\u001b[1m"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 37176,
                        "nodeType": "VariableDeclaration",
                        "src": "513:33:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "DIM",
                        "nameLocation": "529:3:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37174,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "513:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": {
                            "hexValue": "1b5b326d",
                            "id": 37175,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "535:11:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_2f556fa434add49eadfa043e74ff00496b89a16068544c1118ec19f5d8603d51",
                                "typeString": "literal_string hex\"1b5b326d\""
                            },
                            "value": "\u001b[2m"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 37179,
                        "nodeType": "VariableDeclaration",
                        "src": "552:36:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ITALIC",
                        "nameLocation": "568:6:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37177,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "552:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": {
                            "hexValue": "1b5b336d",
                            "id": 37178,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "577:11:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_3889f2814cfbcc60c7a881028023c05aed4a6dae60be0df554f690b1f4e7411f",
                                "typeString": "literal_string hex\"1b5b336d\""
                            },
                            "value": "\u001b[3m"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 37182,
                        "nodeType": "VariableDeclaration",
                        "src": "594:39:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNDERLINE",
                        "nameLocation": "610:9:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37180,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "594:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": {
                            "hexValue": "1b5b346d",
                            "id": 37181,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "622:11:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_48cbbbbdbcd789b35edf67deaad6f96f406603d9181318ca90ef32f90fedb5bb",
                                "typeString": "literal_string hex\"1b5b346d\""
                            },
                            "value": "\u001b[4m"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 37185,
                        "nodeType": "VariableDeclaration",
                        "src": "639:37:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVERSE",
                        "nameLocation": "655:7:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37183,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "639:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": {
                            "hexValue": "1b5b376d",
                            "id": 37184,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "665:11:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_963e08c830a620b3640a99ac46ac6850f28c8f20be064518b3acc7016c3e286e",
                                "typeString": "literal_string hex\"1b5b376d\""
                            },
                            "value": "\u001b[7m"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 37188,
                        "nodeType": "VariableDeclaration",
                        "src": "682:35:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "RESET",
                        "nameLocation": "698:5:153",
                        "scope": 38342,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37186,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "682:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": {
                            "hexValue": "1b5b306d",
                            "id": 37187,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "706:11:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_289c700ce2c600d61adfc66f83b41c26150052f3ea6c772e582ea6afd03d1949",
                                "typeString": "literal_string hex\"1b5b306d\""
                            },
                            "value": "\u001b[0m"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 37208,
                        "nodeType": "FunctionDefinition",
                        "src": "724:167:153",
                        "nodes": [],
                        "body": {
                            "id": 37207,
                            "nodeType": "Block",
                            "src": "823:68:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37201,
                                                        "name": "style",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37190,
                                                        "src": "864:5:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    },
                                                    {
                                                        "id": 37202,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37192,
                                                        "src": "871:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    },
                                                    {
                                                        "id": 37203,
                                                        "name": "RESET",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37188,
                                                        "src": "877:5:153",
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
                                                        "id": 37199,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "847:3:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 37200,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "851:12:153",
                                                    "memberName": "encodePacked",
                                                    "nodeType": "MemberAccess",
                                                    "src": "847:16:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 37204,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "847:36:153",
                                                "tryCall": false,
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
                                            "id": 37198,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "840:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                "typeString": "type(string storage pointer)"
                                            },
                                            "typeName": {
                                                "id": 37197,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "840:6:153",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 37205,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "840:44:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37196,
                                    "id": 37206,
                                    "nodeType": "Return",
                                    "src": "833:51:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "styleConcat",
                        "nameLocation": "733:11:153",
                        "parameters": {
                            "id": 37193,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37190,
                                    "mutability": "mutable",
                                    "name": "style",
                                    "nameLocation": "759:5:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37208,
                                    "src": "745:19:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37189,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "745:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 37192,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "780:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37208,
                                    "src": "766:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37191,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "766:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "744:41:153"
                        },
                        "returnParameters": {
                            "id": 37196,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37195,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37208,
                                    "src": "808:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37194,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "808:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "807:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 37221,
                        "nodeType": "FunctionDefinition",
                        "src": "897:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37220,
                            "nodeType": "Block",
                            "src": "968:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37216,
                                                "name": "RED",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37155,
                                                "src": "997:3:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37217,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37210,
                                                "src": "1002:4:153",
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
                                            "id": 37215,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37208,
                                            "src": "985:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37218,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "985:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37214,
                                    "id": 37219,
                                    "nodeType": "Return",
                                    "src": "978:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "red",
                        "nameLocation": "906:3:153",
                        "parameters": {
                            "id": 37211,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37210,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "924:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37221,
                                    "src": "910:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37209,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "910:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "909:20:153"
                        },
                        "returnParameters": {
                            "id": 37214,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37213,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37221,
                                    "src": "953:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37212,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "953:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "952:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37236,
                        "nodeType": "FunctionDefinition",
                        "src": "1020:111:153",
                        "nodes": [],
                        "body": {
                            "id": 37235,
                            "nodeType": "Block",
                            "src": "1085:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37231,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37223,
                                                        "src": "1118:4:153",
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
                                                    "expression": {
                                                        "id": 37229,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "1106:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37230,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1109:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39838,
                                                    "src": "1106:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37232,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1106:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37228,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37221,
                                                37236,
                                                37251,
                                                37266,
                                                37281
                                            ],
                                            "referencedDeclaration": 37221,
                                            "src": "1102:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37233,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1102:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37227,
                                    "id": 37234,
                                    "nodeType": "Return",
                                    "src": "1095:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "red",
                        "nameLocation": "1029:3:153",
                        "parameters": {
                            "id": 37224,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37223,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1041:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37236,
                                    "src": "1033:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37222,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1033:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1032:14:153"
                        },
                        "returnParameters": {
                            "id": 37227,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37226,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37236,
                                    "src": "1070:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37225,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1070:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1069:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37251,
                        "nodeType": "FunctionDefinition",
                        "src": "1137:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37250,
                            "nodeType": "Block",
                            "src": "1201:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37246,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37238,
                                                        "src": "1234:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37244,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "1222:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37245,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1225:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "1222:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37247,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1222:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37243,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37221,
                                                37236,
                                                37251,
                                                37266,
                                                37281
                                            ],
                                            "referencedDeclaration": 37221,
                                            "src": "1218:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37248,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1218:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37242,
                                    "id": 37249,
                                    "nodeType": "Return",
                                    "src": "1211:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "red",
                        "nameLocation": "1146:3:153",
                        "parameters": {
                            "id": 37239,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37238,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1157:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37251,
                                    "src": "1150:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37237,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1150:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1149:13:153"
                        },
                        "returnParameters": {
                            "id": 37242,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37241,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37251,
                                    "src": "1186:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37240,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1186:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1185:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37266,
                        "nodeType": "FunctionDefinition",
                        "src": "1253:111:153",
                        "nodes": [],
                        "body": {
                            "id": 37265,
                            "nodeType": "Block",
                            "src": "1318:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37261,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37253,
                                                        "src": "1351:4:153",
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
                                                    "expression": {
                                                        "id": 37259,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "1339:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37260,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1342:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39810,
                                                    "src": "1339:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37262,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1339:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37258,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37221,
                                                37236,
                                                37251,
                                                37266,
                                                37281
                                            ],
                                            "referencedDeclaration": 37221,
                                            "src": "1335:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37263,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1335:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37257,
                                    "id": 37264,
                                    "nodeType": "Return",
                                    "src": "1328:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "red",
                        "nameLocation": "1262:3:153",
                        "parameters": {
                            "id": 37254,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37253,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1274:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37266,
                                    "src": "1266:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37252,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1266:7:153",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1265:14:153"
                        },
                        "returnParameters": {
                            "id": 37257,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37256,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37266,
                                    "src": "1303:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37255,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1303:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1302:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37281,
                        "nodeType": "FunctionDefinition",
                        "src": "1370:108:153",
                        "nodes": [],
                        "body": {
                            "id": 37280,
                            "nodeType": "Block",
                            "src": "1432:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37276,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37268,
                                                        "src": "1465:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37274,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "1453:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37275,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1456:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39831,
                                                    "src": "1453:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37277,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1453:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37273,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37221,
                                                37236,
                                                37251,
                                                37266,
                                                37281
                                            ],
                                            "referencedDeclaration": 37221,
                                            "src": "1449:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37278,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1449:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37272,
                                    "id": 37279,
                                    "nodeType": "Return",
                                    "src": "1442:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "red",
                        "nameLocation": "1379:3:153",
                        "parameters": {
                            "id": 37269,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37268,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1388:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37281,
                                    "src": "1383:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37267,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1383:4:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1382:11:153"
                        },
                        "returnParameters": {
                            "id": 37272,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37271,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37281,
                                    "src": "1417:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37270,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1417:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1416:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37296,
                        "nodeType": "FunctionDefinition",
                        "src": "1484:121:153",
                        "nodes": [],
                        "body": {
                            "id": 37295,
                            "nodeType": "Block",
                            "src": "1559:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37291,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37283,
                                                        "src": "1592:4:153",
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
                                                        "id": 37289,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "1580:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37290,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1583:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39817,
                                                    "src": "1580:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37292,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1580:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37288,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37221,
                                                37236,
                                                37251,
                                                37266,
                                                37281
                                            ],
                                            "referencedDeclaration": 37221,
                                            "src": "1576:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37293,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1576:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37287,
                                    "id": 37294,
                                    "nodeType": "Return",
                                    "src": "1569:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "redBytes",
                        "nameLocation": "1493:8:153",
                        "parameters": {
                            "id": 37284,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37283,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1515:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37296,
                                    "src": "1502:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37282,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1502:5:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1501:19:153"
                        },
                        "returnParameters": {
                            "id": 37287,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37286,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37296,
                                    "src": "1544:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37285,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1544:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1543:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37311,
                        "nodeType": "FunctionDefinition",
                        "src": "1611:118:153",
                        "nodes": [],
                        "body": {
                            "id": 37310,
                            "nodeType": "Block",
                            "src": "1683:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37306,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37298,
                                                        "src": "1716:4:153",
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
                                                    "expression": {
                                                        "id": 37304,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "1704:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37305,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1707:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39824,
                                                    "src": "1704:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37307,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1704:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37303,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37221,
                                                37236,
                                                37251,
                                                37266,
                                                37281
                                            ],
                                            "referencedDeclaration": 37221,
                                            "src": "1700:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37308,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1700:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37302,
                                    "id": 37309,
                                    "nodeType": "Return",
                                    "src": "1693:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "redBytes32",
                        "nameLocation": "1620:10:153",
                        "parameters": {
                            "id": 37299,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37298,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1639:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37311,
                                    "src": "1631:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37297,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1631:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1630:14:153"
                        },
                        "returnParameters": {
                            "id": 37302,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37301,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37311,
                                    "src": "1668:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37300,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1668:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1667:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37324,
                        "nodeType": "FunctionDefinition",
                        "src": "1735:121:153",
                        "nodes": [],
                        "body": {
                            "id": 37323,
                            "nodeType": "Block",
                            "src": "1808:48:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37319,
                                                "name": "GREEN",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37158,
                                                "src": "1837:5:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37320,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37313,
                                                "src": "1844:4:153",
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
                                            "id": 37318,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37208,
                                            "src": "1825:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37321,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1825:24:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37317,
                                    "id": 37322,
                                    "nodeType": "Return",
                                    "src": "1818:31:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "green",
                        "nameLocation": "1744:5:153",
                        "parameters": {
                            "id": 37314,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37313,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1764:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37324,
                                    "src": "1750:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37312,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1750:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1749:20:153"
                        },
                        "returnParameters": {
                            "id": 37317,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37316,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37324,
                                    "src": "1793:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37315,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1793:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1792:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37339,
                        "nodeType": "FunctionDefinition",
                        "src": "1862:115:153",
                        "nodes": [],
                        "body": {
                            "id": 37338,
                            "nodeType": "Block",
                            "src": "1929:48:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37334,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37326,
                                                        "src": "1964:4:153",
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
                                                    "expression": {
                                                        "id": 37332,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "1952:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37333,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1955:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39838,
                                                    "src": "1952:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37335,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1952:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37331,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37324,
                                                37339,
                                                37354,
                                                37369,
                                                37384
                                            ],
                                            "referencedDeclaration": 37324,
                                            "src": "1946:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37336,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1946:24:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37330,
                                    "id": 37337,
                                    "nodeType": "Return",
                                    "src": "1939:31:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "green",
                        "nameLocation": "1871:5:153",
                        "parameters": {
                            "id": 37327,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37326,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1885:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37339,
                                    "src": "1877:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37325,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1877:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1876:14:153"
                        },
                        "returnParameters": {
                            "id": 37330,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37329,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37339,
                                    "src": "1914:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37328,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1914:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1913:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37354,
                        "nodeType": "FunctionDefinition",
                        "src": "1983:114:153",
                        "nodes": [],
                        "body": {
                            "id": 37353,
                            "nodeType": "Block",
                            "src": "2049:48:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37349,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37341,
                                                        "src": "2084:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37347,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "2072:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37348,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2075:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "2072:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37350,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2072:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37346,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37324,
                                                37339,
                                                37354,
                                                37369,
                                                37384
                                            ],
                                            "referencedDeclaration": 37324,
                                            "src": "2066:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37351,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2066:24:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37345,
                                    "id": 37352,
                                    "nodeType": "Return",
                                    "src": "2059:31:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "green",
                        "nameLocation": "1992:5:153",
                        "parameters": {
                            "id": 37342,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37341,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2005:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37354,
                                    "src": "1998:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37340,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1998:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1997:13:153"
                        },
                        "returnParameters": {
                            "id": 37345,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37344,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37354,
                                    "src": "2034:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37343,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2034:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2033:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37369,
                        "nodeType": "FunctionDefinition",
                        "src": "2103:115:153",
                        "nodes": [],
                        "body": {
                            "id": 37368,
                            "nodeType": "Block",
                            "src": "2170:48:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37364,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37356,
                                                        "src": "2205:4:153",
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
                                                    "expression": {
                                                        "id": 37362,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "2193:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37363,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2196:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39810,
                                                    "src": "2193:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37365,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2193:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37361,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37324,
                                                37339,
                                                37354,
                                                37369,
                                                37384
                                            ],
                                            "referencedDeclaration": 37324,
                                            "src": "2187:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37366,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2187:24:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37360,
                                    "id": 37367,
                                    "nodeType": "Return",
                                    "src": "2180:31:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "green",
                        "nameLocation": "2112:5:153",
                        "parameters": {
                            "id": 37357,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37356,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2126:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37369,
                                    "src": "2118:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37355,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2118:7:153",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2117:14:153"
                        },
                        "returnParameters": {
                            "id": 37360,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37359,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37369,
                                    "src": "2155:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37358,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2155:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2154:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37384,
                        "nodeType": "FunctionDefinition",
                        "src": "2224:112:153",
                        "nodes": [],
                        "body": {
                            "id": 37383,
                            "nodeType": "Block",
                            "src": "2288:48:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37379,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37371,
                                                        "src": "2323:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37377,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "2311:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37378,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2314:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39831,
                                                    "src": "2311:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37380,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2311:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37376,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37324,
                                                37339,
                                                37354,
                                                37369,
                                                37384
                                            ],
                                            "referencedDeclaration": 37324,
                                            "src": "2305:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37381,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2305:24:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37375,
                                    "id": 37382,
                                    "nodeType": "Return",
                                    "src": "2298:31:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "green",
                        "nameLocation": "2233:5:153",
                        "parameters": {
                            "id": 37372,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37371,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2244:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37384,
                                    "src": "2239:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37370,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2239:4:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2238:11:153"
                        },
                        "returnParameters": {
                            "id": 37375,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37374,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37384,
                                    "src": "2273:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37373,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2273:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2272:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37399,
                        "nodeType": "FunctionDefinition",
                        "src": "2342:125:153",
                        "nodes": [],
                        "body": {
                            "id": 37398,
                            "nodeType": "Block",
                            "src": "2419:48:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37394,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37386,
                                                        "src": "2454:4:153",
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
                                                        "id": 37392,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "2442:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37393,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2445:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39817,
                                                    "src": "2442:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37395,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2442:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37391,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37324,
                                                37339,
                                                37354,
                                                37369,
                                                37384
                                            ],
                                            "referencedDeclaration": 37324,
                                            "src": "2436:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37396,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2436:24:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37390,
                                    "id": 37397,
                                    "nodeType": "Return",
                                    "src": "2429:31:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "greenBytes",
                        "nameLocation": "2351:10:153",
                        "parameters": {
                            "id": 37387,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37386,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2375:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37399,
                                    "src": "2362:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37385,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2362:5:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2361:19:153"
                        },
                        "returnParameters": {
                            "id": 37390,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37389,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37399,
                                    "src": "2404:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37388,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2404:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2403:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37414,
                        "nodeType": "FunctionDefinition",
                        "src": "2473:122:153",
                        "nodes": [],
                        "body": {
                            "id": 37413,
                            "nodeType": "Block",
                            "src": "2547:48:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37409,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37401,
                                                        "src": "2582:4:153",
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
                                                    "expression": {
                                                        "id": 37407,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "2570:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37408,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2573:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39824,
                                                    "src": "2570:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37410,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2570:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37406,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37324,
                                                37339,
                                                37354,
                                                37369,
                                                37384
                                            ],
                                            "referencedDeclaration": 37324,
                                            "src": "2564:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37411,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2564:24:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37405,
                                    "id": 37412,
                                    "nodeType": "Return",
                                    "src": "2557:31:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "greenBytes32",
                        "nameLocation": "2482:12:153",
                        "parameters": {
                            "id": 37402,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37401,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2503:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37414,
                                    "src": "2495:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37400,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2495:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2494:14:153"
                        },
                        "returnParameters": {
                            "id": 37405,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37404,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37414,
                                    "src": "2532:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37403,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2532:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2531:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37427,
                        "nodeType": "FunctionDefinition",
                        "src": "2601:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37426,
                            "nodeType": "Block",
                            "src": "2675:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37422,
                                                "name": "YELLOW",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37161,
                                                "src": "2704:6:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37423,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37416,
                                                "src": "2712:4:153",
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
                                            "id": 37421,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37208,
                                            "src": "2692:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37424,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2692:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37420,
                                    "id": 37425,
                                    "nodeType": "Return",
                                    "src": "2685:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "yellow",
                        "nameLocation": "2610:6:153",
                        "parameters": {
                            "id": 37417,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37416,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2631:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37427,
                                    "src": "2617:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37415,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2617:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2616:20:153"
                        },
                        "returnParameters": {
                            "id": 37420,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37419,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37427,
                                    "src": "2660:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37418,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2660:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2659:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37442,
                        "nodeType": "FunctionDefinition",
                        "src": "2730:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37441,
                            "nodeType": "Block",
                            "src": "2798:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37437,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37429,
                                                        "src": "2834:4:153",
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
                                                    "expression": {
                                                        "id": 37435,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "2822:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37436,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2825:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39838,
                                                    "src": "2822:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37438,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2822:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37434,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37427,
                                                37442,
                                                37457,
                                                37472,
                                                37487
                                            ],
                                            "referencedDeclaration": 37427,
                                            "src": "2815:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37439,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2815:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37433,
                                    "id": 37440,
                                    "nodeType": "Return",
                                    "src": "2808:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "yellow",
                        "nameLocation": "2739:6:153",
                        "parameters": {
                            "id": 37430,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37429,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2754:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37442,
                                    "src": "2746:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37428,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2746:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2745:14:153"
                        },
                        "returnParameters": {
                            "id": 37433,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37432,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37442,
                                    "src": "2783:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37431,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2783:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2782:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37457,
                        "nodeType": "FunctionDefinition",
                        "src": "2853:116:153",
                        "nodes": [],
                        "body": {
                            "id": 37456,
                            "nodeType": "Block",
                            "src": "2920:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37452,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37444,
                                                        "src": "2956:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37450,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "2944:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37451,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2947:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "2944:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37453,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2944:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37449,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37427,
                                                37442,
                                                37457,
                                                37472,
                                                37487
                                            ],
                                            "referencedDeclaration": 37427,
                                            "src": "2937:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37454,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2937:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37448,
                                    "id": 37455,
                                    "nodeType": "Return",
                                    "src": "2930:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "yellow",
                        "nameLocation": "2862:6:153",
                        "parameters": {
                            "id": 37445,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37444,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2876:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37457,
                                    "src": "2869:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37443,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2869:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2868:13:153"
                        },
                        "returnParameters": {
                            "id": 37448,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37447,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37457,
                                    "src": "2905:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37446,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2905:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2904:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37472,
                        "nodeType": "FunctionDefinition",
                        "src": "2975:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37471,
                            "nodeType": "Block",
                            "src": "3043:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37467,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37459,
                                                        "src": "3079:4:153",
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
                                                    "expression": {
                                                        "id": 37465,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "3067:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37466,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3070:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39810,
                                                    "src": "3067:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37468,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3067:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37464,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37427,
                                                37442,
                                                37457,
                                                37472,
                                                37487
                                            ],
                                            "referencedDeclaration": 37427,
                                            "src": "3060:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37469,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3060:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37463,
                                    "id": 37470,
                                    "nodeType": "Return",
                                    "src": "3053:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "yellow",
                        "nameLocation": "2984:6:153",
                        "parameters": {
                            "id": 37460,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37459,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2999:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37472,
                                    "src": "2991:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37458,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2991:7:153",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2990:14:153"
                        },
                        "returnParameters": {
                            "id": 37463,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37462,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37472,
                                    "src": "3028:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37461,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3028:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3027:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37487,
                        "nodeType": "FunctionDefinition",
                        "src": "3098:114:153",
                        "nodes": [],
                        "body": {
                            "id": 37486,
                            "nodeType": "Block",
                            "src": "3163:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37482,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37474,
                                                        "src": "3199:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37480,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "3187:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37481,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3190:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39831,
                                                    "src": "3187:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37483,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3187:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37479,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37427,
                                                37442,
                                                37457,
                                                37472,
                                                37487
                                            ],
                                            "referencedDeclaration": 37427,
                                            "src": "3180:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37484,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3180:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37478,
                                    "id": 37485,
                                    "nodeType": "Return",
                                    "src": "3173:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "yellow",
                        "nameLocation": "3107:6:153",
                        "parameters": {
                            "id": 37475,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37474,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3119:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37487,
                                    "src": "3114:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37473,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3114:4:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3113:11:153"
                        },
                        "returnParameters": {
                            "id": 37478,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37477,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37487,
                                    "src": "3148:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37476,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3148:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3147:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37502,
                        "nodeType": "FunctionDefinition",
                        "src": "3218:127:153",
                        "nodes": [],
                        "body": {
                            "id": 37501,
                            "nodeType": "Block",
                            "src": "3296:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37497,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37489,
                                                        "src": "3332:4:153",
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
                                                        "id": 37495,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "3320:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37496,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3323:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39817,
                                                    "src": "3320:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37498,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3320:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37494,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37427,
                                                37442,
                                                37457,
                                                37472,
                                                37487
                                            ],
                                            "referencedDeclaration": 37427,
                                            "src": "3313:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37499,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3313:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37493,
                                    "id": 37500,
                                    "nodeType": "Return",
                                    "src": "3306:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "yellowBytes",
                        "nameLocation": "3227:11:153",
                        "parameters": {
                            "id": 37490,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37489,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3252:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37502,
                                    "src": "3239:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37488,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3239:5:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3238:19:153"
                        },
                        "returnParameters": {
                            "id": 37493,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37492,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37502,
                                    "src": "3281:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37491,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3281:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3280:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37517,
                        "nodeType": "FunctionDefinition",
                        "src": "3351:124:153",
                        "nodes": [],
                        "body": {
                            "id": 37516,
                            "nodeType": "Block",
                            "src": "3426:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37512,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37504,
                                                        "src": "3462:4:153",
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
                                                    "expression": {
                                                        "id": 37510,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "3450:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37511,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3453:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39824,
                                                    "src": "3450:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37513,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3450:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37509,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37427,
                                                37442,
                                                37457,
                                                37472,
                                                37487
                                            ],
                                            "referencedDeclaration": 37427,
                                            "src": "3443:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37514,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3443:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37508,
                                    "id": 37515,
                                    "nodeType": "Return",
                                    "src": "3436:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "yellowBytes32",
                        "nameLocation": "3360:13:153",
                        "parameters": {
                            "id": 37505,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37504,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3382:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37517,
                                    "src": "3374:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37503,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3374:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3373:14:153"
                        },
                        "returnParameters": {
                            "id": 37508,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37507,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37517,
                                    "src": "3411:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37506,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3411:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3410:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37530,
                        "nodeType": "FunctionDefinition",
                        "src": "3481:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37529,
                            "nodeType": "Block",
                            "src": "3553:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37525,
                                                "name": "BLUE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37164,
                                                "src": "3582:4:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37526,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37519,
                                                "src": "3588:4:153",
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
                                            "id": 37524,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37208,
                                            "src": "3570:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37527,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3570:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37523,
                                    "id": 37528,
                                    "nodeType": "Return",
                                    "src": "3563:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "blue",
                        "nameLocation": "3490:4:153",
                        "parameters": {
                            "id": 37520,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37519,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3509:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37530,
                                    "src": "3495:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37518,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3495:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3494:20:153"
                        },
                        "returnParameters": {
                            "id": 37523,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37522,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37530,
                                    "src": "3538:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37521,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3538:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3537:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37545,
                        "nodeType": "FunctionDefinition",
                        "src": "3606:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37544,
                            "nodeType": "Block",
                            "src": "3672:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37540,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37532,
                                                        "src": "3706:4:153",
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
                                                    "expression": {
                                                        "id": 37538,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "3694:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37539,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3697:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39838,
                                                    "src": "3694:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37541,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3694:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37537,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37530,
                                                37545,
                                                37560,
                                                37575,
                                                37590
                                            ],
                                            "referencedDeclaration": 37530,
                                            "src": "3689:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37542,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3689:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37536,
                                    "id": 37543,
                                    "nodeType": "Return",
                                    "src": "3682:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "blue",
                        "nameLocation": "3615:4:153",
                        "parameters": {
                            "id": 37533,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37532,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3628:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37545,
                                    "src": "3620:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37531,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3620:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3619:14:153"
                        },
                        "returnParameters": {
                            "id": 37536,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37535,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37545,
                                    "src": "3657:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37534,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3657:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3656:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37560,
                        "nodeType": "FunctionDefinition",
                        "src": "3725:112:153",
                        "nodes": [],
                        "body": {
                            "id": 37559,
                            "nodeType": "Block",
                            "src": "3790:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37555,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37547,
                                                        "src": "3824:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37553,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "3812:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37554,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3815:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "3812:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37556,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3812:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37552,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37530,
                                                37545,
                                                37560,
                                                37575,
                                                37590
                                            ],
                                            "referencedDeclaration": 37530,
                                            "src": "3807:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37557,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3807:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37551,
                                    "id": 37558,
                                    "nodeType": "Return",
                                    "src": "3800:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "blue",
                        "nameLocation": "3734:4:153",
                        "parameters": {
                            "id": 37548,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37547,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3746:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37560,
                                    "src": "3739:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37546,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3739:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3738:13:153"
                        },
                        "returnParameters": {
                            "id": 37551,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37550,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37560,
                                    "src": "3775:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37549,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3775:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3774:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37575,
                        "nodeType": "FunctionDefinition",
                        "src": "3843:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37574,
                            "nodeType": "Block",
                            "src": "3909:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37570,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37562,
                                                        "src": "3943:4:153",
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
                                                    "expression": {
                                                        "id": 37568,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "3931:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37569,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3934:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39810,
                                                    "src": "3931:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37571,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3931:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37567,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37530,
                                                37545,
                                                37560,
                                                37575,
                                                37590
                                            ],
                                            "referencedDeclaration": 37530,
                                            "src": "3926:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37572,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3926:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37566,
                                    "id": 37573,
                                    "nodeType": "Return",
                                    "src": "3919:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "blue",
                        "nameLocation": "3852:4:153",
                        "parameters": {
                            "id": 37563,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37562,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3865:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37575,
                                    "src": "3857:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37561,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3857:7:153",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3856:14:153"
                        },
                        "returnParameters": {
                            "id": 37566,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37565,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37575,
                                    "src": "3894:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37564,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3894:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3893:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37590,
                        "nodeType": "FunctionDefinition",
                        "src": "3962:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37589,
                            "nodeType": "Block",
                            "src": "4025:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37585,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37577,
                                                        "src": "4059:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37583,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "4047:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37584,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4050:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39831,
                                                    "src": "4047:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37586,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4047:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37582,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37530,
                                                37545,
                                                37560,
                                                37575,
                                                37590
                                            ],
                                            "referencedDeclaration": 37530,
                                            "src": "4042:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37587,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4042:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37581,
                                    "id": 37588,
                                    "nodeType": "Return",
                                    "src": "4035:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "blue",
                        "nameLocation": "3971:4:153",
                        "parameters": {
                            "id": 37578,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37577,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3981:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37590,
                                    "src": "3976:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37576,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3976:4:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3975:11:153"
                        },
                        "returnParameters": {
                            "id": 37581,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37580,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37590,
                                    "src": "4010:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37579,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4010:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4009:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37605,
                        "nodeType": "FunctionDefinition",
                        "src": "4078:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37604,
                            "nodeType": "Block",
                            "src": "4154:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37600,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37592,
                                                        "src": "4188:4:153",
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
                                                        "id": 37598,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "4176:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37599,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4179:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39817,
                                                    "src": "4176:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37601,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4176:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37597,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37530,
                                                37545,
                                                37560,
                                                37575,
                                                37590
                                            ],
                                            "referencedDeclaration": 37530,
                                            "src": "4171:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37602,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4171:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37596,
                                    "id": 37603,
                                    "nodeType": "Return",
                                    "src": "4164:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "blueBytes",
                        "nameLocation": "4087:9:153",
                        "parameters": {
                            "id": 37593,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37592,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4110:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37605,
                                    "src": "4097:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37591,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4097:5:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4096:19:153"
                        },
                        "returnParameters": {
                            "id": 37596,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37595,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37605,
                                    "src": "4139:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37594,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4139:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4138:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37620,
                        "nodeType": "FunctionDefinition",
                        "src": "4207:120:153",
                        "nodes": [],
                        "body": {
                            "id": 37619,
                            "nodeType": "Block",
                            "src": "4280:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37615,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37607,
                                                        "src": "4314:4:153",
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
                                                    "expression": {
                                                        "id": 37613,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "4302:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37614,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4305:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39824,
                                                    "src": "4302:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37616,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4302:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37612,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37530,
                                                37545,
                                                37560,
                                                37575,
                                                37590
                                            ],
                                            "referencedDeclaration": 37530,
                                            "src": "4297:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37617,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4297:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37611,
                                    "id": 37618,
                                    "nodeType": "Return",
                                    "src": "4290:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "blueBytes32",
                        "nameLocation": "4216:11:153",
                        "parameters": {
                            "id": 37608,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37607,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4236:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37620,
                                    "src": "4228:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37606,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4228:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4227:14:153"
                        },
                        "returnParameters": {
                            "id": 37611,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37610,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37620,
                                    "src": "4265:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37609,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4265:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4264:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37633,
                        "nodeType": "FunctionDefinition",
                        "src": "4333:125:153",
                        "nodes": [],
                        "body": {
                            "id": 37632,
                            "nodeType": "Block",
                            "src": "4408:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37628,
                                                "name": "MAGENTA",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37167,
                                                "src": "4437:7:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37629,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37622,
                                                "src": "4446:4:153",
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
                                            "id": 37627,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37208,
                                            "src": "4425:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37630,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4425:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37626,
                                    "id": 37631,
                                    "nodeType": "Return",
                                    "src": "4418:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "magenta",
                        "nameLocation": "4342:7:153",
                        "parameters": {
                            "id": 37623,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37622,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4364:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37633,
                                    "src": "4350:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37621,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4350:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4349:20:153"
                        },
                        "returnParameters": {
                            "id": 37626,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37625,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37633,
                                    "src": "4393:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37624,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4393:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4392:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37648,
                        "nodeType": "FunctionDefinition",
                        "src": "4464:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37647,
                            "nodeType": "Block",
                            "src": "4533:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37643,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37635,
                                                        "src": "4570:4:153",
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
                                                    "expression": {
                                                        "id": 37641,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "4558:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37642,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4561:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39838,
                                                    "src": "4558:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37644,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4558:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37640,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37633,
                                                37648,
                                                37663,
                                                37678,
                                                37693
                                            ],
                                            "referencedDeclaration": 37633,
                                            "src": "4550:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37645,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4550:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37639,
                                    "id": 37646,
                                    "nodeType": "Return",
                                    "src": "4543:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "magenta",
                        "nameLocation": "4473:7:153",
                        "parameters": {
                            "id": 37636,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37635,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4489:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37648,
                                    "src": "4481:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37634,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4481:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4480:14:153"
                        },
                        "returnParameters": {
                            "id": 37639,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37638,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37648,
                                    "src": "4518:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37637,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4518:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4517:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37663,
                        "nodeType": "FunctionDefinition",
                        "src": "4589:118:153",
                        "nodes": [],
                        "body": {
                            "id": 37662,
                            "nodeType": "Block",
                            "src": "4657:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37658,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37650,
                                                        "src": "4694:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37656,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "4682:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37657,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4685:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "4682:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37659,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4682:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37655,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37633,
                                                37648,
                                                37663,
                                                37678,
                                                37693
                                            ],
                                            "referencedDeclaration": 37633,
                                            "src": "4674:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37660,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4674:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37654,
                                    "id": 37661,
                                    "nodeType": "Return",
                                    "src": "4667:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "magenta",
                        "nameLocation": "4598:7:153",
                        "parameters": {
                            "id": 37651,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37650,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4613:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37663,
                                    "src": "4606:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37649,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4606:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4605:13:153"
                        },
                        "returnParameters": {
                            "id": 37654,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37653,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37663,
                                    "src": "4642:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37652,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4642:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4641:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37678,
                        "nodeType": "FunctionDefinition",
                        "src": "4713:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37677,
                            "nodeType": "Block",
                            "src": "4782:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37673,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37665,
                                                        "src": "4819:4:153",
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
                                                    "expression": {
                                                        "id": 37671,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "4807:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37672,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4810:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39810,
                                                    "src": "4807:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37674,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4807:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37670,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37633,
                                                37648,
                                                37663,
                                                37678,
                                                37693
                                            ],
                                            "referencedDeclaration": 37633,
                                            "src": "4799:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37675,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4799:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37669,
                                    "id": 37676,
                                    "nodeType": "Return",
                                    "src": "4792:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "magenta",
                        "nameLocation": "4722:7:153",
                        "parameters": {
                            "id": 37666,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37665,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4738:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37678,
                                    "src": "4730:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37664,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4730:7:153",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4729:14:153"
                        },
                        "returnParameters": {
                            "id": 37669,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37668,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37678,
                                    "src": "4767:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37667,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4767:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4766:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37693,
                        "nodeType": "FunctionDefinition",
                        "src": "4838:116:153",
                        "nodes": [],
                        "body": {
                            "id": 37692,
                            "nodeType": "Block",
                            "src": "4904:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37688,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37680,
                                                        "src": "4941:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37686,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "4929:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37687,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4932:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39831,
                                                    "src": "4929:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37689,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4929:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37685,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37633,
                                                37648,
                                                37663,
                                                37678,
                                                37693
                                            ],
                                            "referencedDeclaration": 37633,
                                            "src": "4921:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37690,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4921:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37684,
                                    "id": 37691,
                                    "nodeType": "Return",
                                    "src": "4914:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "magenta",
                        "nameLocation": "4847:7:153",
                        "parameters": {
                            "id": 37681,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37680,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4860:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37693,
                                    "src": "4855:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37679,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4855:4:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4854:11:153"
                        },
                        "returnParameters": {
                            "id": 37684,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37683,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37693,
                                    "src": "4889:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37682,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4889:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4888:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37708,
                        "nodeType": "FunctionDefinition",
                        "src": "4960:129:153",
                        "nodes": [],
                        "body": {
                            "id": 37707,
                            "nodeType": "Block",
                            "src": "5039:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37703,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37695,
                                                        "src": "5076:4:153",
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
                                                        "id": 37701,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "5064:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37702,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5067:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39817,
                                                    "src": "5064:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37704,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5064:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37700,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37633,
                                                37648,
                                                37663,
                                                37678,
                                                37693
                                            ],
                                            "referencedDeclaration": 37633,
                                            "src": "5056:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37705,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5056:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37699,
                                    "id": 37706,
                                    "nodeType": "Return",
                                    "src": "5049:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "magentaBytes",
                        "nameLocation": "4969:12:153",
                        "parameters": {
                            "id": 37696,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37695,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4995:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37708,
                                    "src": "4982:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37694,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4982:5:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4981:19:153"
                        },
                        "returnParameters": {
                            "id": 37699,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37698,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37708,
                                    "src": "5024:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37697,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5024:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5023:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37723,
                        "nodeType": "FunctionDefinition",
                        "src": "5095:126:153",
                        "nodes": [],
                        "body": {
                            "id": 37722,
                            "nodeType": "Block",
                            "src": "5171:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37718,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37710,
                                                        "src": "5208:4:153",
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
                                                    "expression": {
                                                        "id": 37716,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "5196:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37717,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5199:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39824,
                                                    "src": "5196:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37719,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5196:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37715,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37633,
                                                37648,
                                                37663,
                                                37678,
                                                37693
                                            ],
                                            "referencedDeclaration": 37633,
                                            "src": "5188:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37720,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5188:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37714,
                                    "id": 37721,
                                    "nodeType": "Return",
                                    "src": "5181:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "magentaBytes32",
                        "nameLocation": "5104:14:153",
                        "parameters": {
                            "id": 37711,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37710,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5127:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37723,
                                    "src": "5119:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37709,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5119:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5118:14:153"
                        },
                        "returnParameters": {
                            "id": 37714,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37713,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37723,
                                    "src": "5156:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37712,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5156:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5155:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37736,
                        "nodeType": "FunctionDefinition",
                        "src": "5227:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37735,
                            "nodeType": "Block",
                            "src": "5299:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37731,
                                                "name": "CYAN",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37170,
                                                "src": "5328:4:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37732,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37725,
                                                "src": "5334:4:153",
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
                                            "id": 37730,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37208,
                                            "src": "5316:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37733,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5316:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37729,
                                    "id": 37734,
                                    "nodeType": "Return",
                                    "src": "5309:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "cyan",
                        "nameLocation": "5236:4:153",
                        "parameters": {
                            "id": 37726,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37725,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5255:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37736,
                                    "src": "5241:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37724,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5241:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5240:20:153"
                        },
                        "returnParameters": {
                            "id": 37729,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37728,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37736,
                                    "src": "5284:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37727,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5284:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5283:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37751,
                        "nodeType": "FunctionDefinition",
                        "src": "5352:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37750,
                            "nodeType": "Block",
                            "src": "5418:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37746,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37738,
                                                        "src": "5452:4:153",
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
                                                    "expression": {
                                                        "id": 37744,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "5440:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37745,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5443:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39838,
                                                    "src": "5440:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37747,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5440:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37743,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37736,
                                                37751,
                                                37766,
                                                37781,
                                                37796
                                            ],
                                            "referencedDeclaration": 37736,
                                            "src": "5435:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37748,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5435:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37742,
                                    "id": 37749,
                                    "nodeType": "Return",
                                    "src": "5428:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "cyan",
                        "nameLocation": "5361:4:153",
                        "parameters": {
                            "id": 37739,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37738,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5374:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37751,
                                    "src": "5366:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37737,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5366:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5365:14:153"
                        },
                        "returnParameters": {
                            "id": 37742,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37741,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37751,
                                    "src": "5403:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37740,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5403:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5402:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37766,
                        "nodeType": "FunctionDefinition",
                        "src": "5471:112:153",
                        "nodes": [],
                        "body": {
                            "id": 37765,
                            "nodeType": "Block",
                            "src": "5536:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37761,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37753,
                                                        "src": "5570:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37759,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "5558:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37760,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5561:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "5558:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37762,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5558:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37758,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37736,
                                                37751,
                                                37766,
                                                37781,
                                                37796
                                            ],
                                            "referencedDeclaration": 37736,
                                            "src": "5553:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37763,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5553:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37757,
                                    "id": 37764,
                                    "nodeType": "Return",
                                    "src": "5546:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "cyan",
                        "nameLocation": "5480:4:153",
                        "parameters": {
                            "id": 37754,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37753,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5492:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37766,
                                    "src": "5485:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37752,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5485:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5484:13:153"
                        },
                        "returnParameters": {
                            "id": 37757,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37756,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37766,
                                    "src": "5521:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37755,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5521:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5520:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37781,
                        "nodeType": "FunctionDefinition",
                        "src": "5589:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37780,
                            "nodeType": "Block",
                            "src": "5655:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37776,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37768,
                                                        "src": "5689:4:153",
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
                                                    "expression": {
                                                        "id": 37774,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "5677:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37775,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5680:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39810,
                                                    "src": "5677:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37777,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5677:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37773,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37736,
                                                37751,
                                                37766,
                                                37781,
                                                37796
                                            ],
                                            "referencedDeclaration": 37736,
                                            "src": "5672:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37778,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5672:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37772,
                                    "id": 37779,
                                    "nodeType": "Return",
                                    "src": "5665:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "cyan",
                        "nameLocation": "5598:4:153",
                        "parameters": {
                            "id": 37769,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37768,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5611:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37781,
                                    "src": "5603:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37767,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5603:7:153",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5602:14:153"
                        },
                        "returnParameters": {
                            "id": 37772,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37771,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37781,
                                    "src": "5640:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37770,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5640:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5639:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37796,
                        "nodeType": "FunctionDefinition",
                        "src": "5708:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37795,
                            "nodeType": "Block",
                            "src": "5771:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37791,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37783,
                                                        "src": "5805:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37789,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "5793:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37790,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5796:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39831,
                                                    "src": "5793:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37792,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5793:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37788,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37736,
                                                37751,
                                                37766,
                                                37781,
                                                37796
                                            ],
                                            "referencedDeclaration": 37736,
                                            "src": "5788:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37793,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5788:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37787,
                                    "id": 37794,
                                    "nodeType": "Return",
                                    "src": "5781:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "cyan",
                        "nameLocation": "5717:4:153",
                        "parameters": {
                            "id": 37784,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37783,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5727:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37796,
                                    "src": "5722:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37782,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5722:4:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5721:11:153"
                        },
                        "returnParameters": {
                            "id": 37787,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37786,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37796,
                                    "src": "5756:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37785,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5756:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5755:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37811,
                        "nodeType": "FunctionDefinition",
                        "src": "5824:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37810,
                            "nodeType": "Block",
                            "src": "5900:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37806,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37798,
                                                        "src": "5934:4:153",
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
                                                        "id": 37804,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "5922:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37805,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5925:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39817,
                                                    "src": "5922:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37807,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5922:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37803,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37736,
                                                37751,
                                                37766,
                                                37781,
                                                37796
                                            ],
                                            "referencedDeclaration": 37736,
                                            "src": "5917:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37808,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5917:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37802,
                                    "id": 37809,
                                    "nodeType": "Return",
                                    "src": "5910:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "cyanBytes",
                        "nameLocation": "5833:9:153",
                        "parameters": {
                            "id": 37799,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37798,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5856:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37811,
                                    "src": "5843:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37797,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5843:5:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5842:19:153"
                        },
                        "returnParameters": {
                            "id": 37802,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37801,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37811,
                                    "src": "5885:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37800,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5885:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5884:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37826,
                        "nodeType": "FunctionDefinition",
                        "src": "5953:120:153",
                        "nodes": [],
                        "body": {
                            "id": 37825,
                            "nodeType": "Block",
                            "src": "6026:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37821,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37813,
                                                        "src": "6060:4:153",
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
                                                    "expression": {
                                                        "id": 37819,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "6048:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37820,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6051:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39824,
                                                    "src": "6048:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37822,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6048:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37818,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37736,
                                                37751,
                                                37766,
                                                37781,
                                                37796
                                            ],
                                            "referencedDeclaration": 37736,
                                            "src": "6043:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37823,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6043:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37817,
                                    "id": 37824,
                                    "nodeType": "Return",
                                    "src": "6036:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "cyanBytes32",
                        "nameLocation": "5962:11:153",
                        "parameters": {
                            "id": 37814,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37813,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5982:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37826,
                                    "src": "5974:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37812,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5974:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5973:14:153"
                        },
                        "returnParameters": {
                            "id": 37817,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37816,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37826,
                                    "src": "6011:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37815,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6011:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6010:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37839,
                        "nodeType": "FunctionDefinition",
                        "src": "6079:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37838,
                            "nodeType": "Block",
                            "src": "6151:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37834,
                                                "name": "BOLD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37173,
                                                "src": "6180:4:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37835,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37828,
                                                "src": "6186:4:153",
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
                                            "id": 37833,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37208,
                                            "src": "6168:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37836,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6168:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37832,
                                    "id": 37837,
                                    "nodeType": "Return",
                                    "src": "6161:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "bold",
                        "nameLocation": "6088:4:153",
                        "parameters": {
                            "id": 37829,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37828,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6107:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37839,
                                    "src": "6093:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37827,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6093:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6092:20:153"
                        },
                        "returnParameters": {
                            "id": 37832,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37831,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37839,
                                    "src": "6136:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37830,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6136:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6135:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37854,
                        "nodeType": "FunctionDefinition",
                        "src": "6204:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37853,
                            "nodeType": "Block",
                            "src": "6270:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37849,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37841,
                                                        "src": "6304:4:153",
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
                                                    "expression": {
                                                        "id": 37847,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "6292:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37848,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6295:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39838,
                                                    "src": "6292:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37850,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6292:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37846,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37839,
                                                37854,
                                                37869,
                                                37884,
                                                37899
                                            ],
                                            "referencedDeclaration": 37839,
                                            "src": "6287:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37851,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6287:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37845,
                                    "id": 37852,
                                    "nodeType": "Return",
                                    "src": "6280:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "bold",
                        "nameLocation": "6213:4:153",
                        "parameters": {
                            "id": 37842,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37841,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6226:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37854,
                                    "src": "6218:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37840,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6218:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6217:14:153"
                        },
                        "returnParameters": {
                            "id": 37845,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37844,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37854,
                                    "src": "6255:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37843,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6255:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6254:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37869,
                        "nodeType": "FunctionDefinition",
                        "src": "6323:112:153",
                        "nodes": [],
                        "body": {
                            "id": 37868,
                            "nodeType": "Block",
                            "src": "6388:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37864,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37856,
                                                        "src": "6422:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37862,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "6410:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37863,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6413:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "6410:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37865,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6410:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37861,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37839,
                                                37854,
                                                37869,
                                                37884,
                                                37899
                                            ],
                                            "referencedDeclaration": 37839,
                                            "src": "6405:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37866,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6405:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37860,
                                    "id": 37867,
                                    "nodeType": "Return",
                                    "src": "6398:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "bold",
                        "nameLocation": "6332:4:153",
                        "parameters": {
                            "id": 37857,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37856,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6344:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37869,
                                    "src": "6337:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37855,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6337:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6336:13:153"
                        },
                        "returnParameters": {
                            "id": 37860,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37859,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37869,
                                    "src": "6373:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37858,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6373:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6372:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37884,
                        "nodeType": "FunctionDefinition",
                        "src": "6441:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37883,
                            "nodeType": "Block",
                            "src": "6507:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37879,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37871,
                                                        "src": "6541:4:153",
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
                                                    "expression": {
                                                        "id": 37877,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "6529:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37878,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6532:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39810,
                                                    "src": "6529:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37880,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6529:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37876,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37839,
                                                37854,
                                                37869,
                                                37884,
                                                37899
                                            ],
                                            "referencedDeclaration": 37839,
                                            "src": "6524:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37881,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6524:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37875,
                                    "id": 37882,
                                    "nodeType": "Return",
                                    "src": "6517:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "bold",
                        "nameLocation": "6450:4:153",
                        "parameters": {
                            "id": 37872,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37871,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6463:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37884,
                                    "src": "6455:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37870,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6455:7:153",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6454:14:153"
                        },
                        "returnParameters": {
                            "id": 37875,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37874,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37884,
                                    "src": "6492:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37873,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6492:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6491:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37899,
                        "nodeType": "FunctionDefinition",
                        "src": "6560:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37898,
                            "nodeType": "Block",
                            "src": "6623:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37894,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37886,
                                                        "src": "6657:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37892,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "6645:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37893,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6648:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39831,
                                                    "src": "6645:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37895,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6645:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37891,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37839,
                                                37854,
                                                37869,
                                                37884,
                                                37899
                                            ],
                                            "referencedDeclaration": 37839,
                                            "src": "6640:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37896,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6640:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37890,
                                    "id": 37897,
                                    "nodeType": "Return",
                                    "src": "6633:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "bold",
                        "nameLocation": "6569:4:153",
                        "parameters": {
                            "id": 37887,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37886,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6579:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37899,
                                    "src": "6574:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37885,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6574:4:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6573:11:153"
                        },
                        "returnParameters": {
                            "id": 37890,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37889,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37899,
                                    "src": "6608:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37888,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6608:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6607:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37914,
                        "nodeType": "FunctionDefinition",
                        "src": "6676:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37913,
                            "nodeType": "Block",
                            "src": "6752:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37909,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37901,
                                                        "src": "6786:4:153",
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
                                                        "id": 37907,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "6774:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37908,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6777:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39817,
                                                    "src": "6774:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37910,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6774:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37906,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37839,
                                                37854,
                                                37869,
                                                37884,
                                                37899
                                            ],
                                            "referencedDeclaration": 37839,
                                            "src": "6769:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37911,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6769:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37905,
                                    "id": 37912,
                                    "nodeType": "Return",
                                    "src": "6762:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "boldBytes",
                        "nameLocation": "6685:9:153",
                        "parameters": {
                            "id": 37902,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37901,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6708:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37914,
                                    "src": "6695:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37900,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6695:5:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6694:19:153"
                        },
                        "returnParameters": {
                            "id": 37905,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37904,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37914,
                                    "src": "6737:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37903,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6737:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6736:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37929,
                        "nodeType": "FunctionDefinition",
                        "src": "6805:120:153",
                        "nodes": [],
                        "body": {
                            "id": 37928,
                            "nodeType": "Block",
                            "src": "6878:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37924,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37916,
                                                        "src": "6912:4:153",
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
                                                    "expression": {
                                                        "id": 37922,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "6900:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37923,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6903:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39824,
                                                    "src": "6900:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37925,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6900:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37921,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37839,
                                                37854,
                                                37869,
                                                37884,
                                                37899
                                            ],
                                            "referencedDeclaration": 37839,
                                            "src": "6895:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37926,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6895:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37920,
                                    "id": 37927,
                                    "nodeType": "Return",
                                    "src": "6888:30:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "boldBytes32",
                        "nameLocation": "6814:11:153",
                        "parameters": {
                            "id": 37917,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37916,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6834:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37929,
                                    "src": "6826:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37915,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6826:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6825:14:153"
                        },
                        "returnParameters": {
                            "id": 37920,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37919,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37929,
                                    "src": "6863:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37918,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6863:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6862:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37942,
                        "nodeType": "FunctionDefinition",
                        "src": "6931:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37941,
                            "nodeType": "Block",
                            "src": "7002:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37937,
                                                "name": "DIM",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37176,
                                                "src": "7031:3:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37938,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37931,
                                                "src": "7036:4:153",
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
                                            "id": 37936,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37208,
                                            "src": "7019:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37939,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7019:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37935,
                                    "id": 37940,
                                    "nodeType": "Return",
                                    "src": "7012:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "dim",
                        "nameLocation": "6940:3:153",
                        "parameters": {
                            "id": 37932,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37931,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6958:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37942,
                                    "src": "6944:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37930,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6944:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6943:20:153"
                        },
                        "returnParameters": {
                            "id": 37935,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37934,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37942,
                                    "src": "6987:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37933,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6987:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6986:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37957,
                        "nodeType": "FunctionDefinition",
                        "src": "7054:111:153",
                        "nodes": [],
                        "body": {
                            "id": 37956,
                            "nodeType": "Block",
                            "src": "7119:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37952,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37944,
                                                        "src": "7152:4:153",
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
                                                    "expression": {
                                                        "id": 37950,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "7140:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37951,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7143:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39838,
                                                    "src": "7140:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37953,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7140:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37949,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37942,
                                                37957,
                                                37972,
                                                37987,
                                                38002
                                            ],
                                            "referencedDeclaration": 37942,
                                            "src": "7136:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37954,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7136:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37948,
                                    "id": 37955,
                                    "nodeType": "Return",
                                    "src": "7129:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "dim",
                        "nameLocation": "7063:3:153",
                        "parameters": {
                            "id": 37945,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37944,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7075:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37957,
                                    "src": "7067:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37943,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7067:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7066:14:153"
                        },
                        "returnParameters": {
                            "id": 37948,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37947,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37957,
                                    "src": "7104:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37946,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7104:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7103:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37972,
                        "nodeType": "FunctionDefinition",
                        "src": "7171:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37971,
                            "nodeType": "Block",
                            "src": "7235:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37967,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37959,
                                                        "src": "7268:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37965,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "7256:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37966,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7259:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "7256:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37968,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7256:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37964,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37942,
                                                37957,
                                                37972,
                                                37987,
                                                38002
                                            ],
                                            "referencedDeclaration": 37942,
                                            "src": "7252:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37969,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7252:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37963,
                                    "id": 37970,
                                    "nodeType": "Return",
                                    "src": "7245:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "dim",
                        "nameLocation": "7180:3:153",
                        "parameters": {
                            "id": 37960,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37959,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7191:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37972,
                                    "src": "7184:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37958,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7184:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7183:13:153"
                        },
                        "returnParameters": {
                            "id": 37963,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37962,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37972,
                                    "src": "7220:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37961,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7220:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7219:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37987,
                        "nodeType": "FunctionDefinition",
                        "src": "7287:111:153",
                        "nodes": [],
                        "body": {
                            "id": 37986,
                            "nodeType": "Block",
                            "src": "7352:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37982,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37974,
                                                        "src": "7385:4:153",
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
                                                    "expression": {
                                                        "id": 37980,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "7373:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37981,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7376:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39810,
                                                    "src": "7373:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37983,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7373:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37979,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37942,
                                                37957,
                                                37972,
                                                37987,
                                                38002
                                            ],
                                            "referencedDeclaration": 37942,
                                            "src": "7369:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37984,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7369:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37978,
                                    "id": 37985,
                                    "nodeType": "Return",
                                    "src": "7362:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "dim",
                        "nameLocation": "7296:3:153",
                        "parameters": {
                            "id": 37975,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37974,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7308:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37987,
                                    "src": "7300:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37973,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7300:7:153",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7299:14:153"
                        },
                        "returnParameters": {
                            "id": 37978,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37977,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37987,
                                    "src": "7337:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37976,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7337:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7336:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38002,
                        "nodeType": "FunctionDefinition",
                        "src": "7404:108:153",
                        "nodes": [],
                        "body": {
                            "id": 38001,
                            "nodeType": "Block",
                            "src": "7466:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 37997,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37989,
                                                        "src": "7499:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 37995,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "7487:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37996,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7490:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39831,
                                                    "src": "7487:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37998,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7487:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 37994,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37942,
                                                37957,
                                                37972,
                                                37987,
                                                38002
                                            ],
                                            "referencedDeclaration": 37942,
                                            "src": "7483:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37999,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7483:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37993,
                                    "id": 38000,
                                    "nodeType": "Return",
                                    "src": "7476:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "dim",
                        "nameLocation": "7413:3:153",
                        "parameters": {
                            "id": 37990,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37989,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7422:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38002,
                                    "src": "7417:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37988,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7417:4:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7416:11:153"
                        },
                        "returnParameters": {
                            "id": 37993,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37992,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38002,
                                    "src": "7451:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37991,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7451:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7450:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38017,
                        "nodeType": "FunctionDefinition",
                        "src": "7518:121:153",
                        "nodes": [],
                        "body": {
                            "id": 38016,
                            "nodeType": "Block",
                            "src": "7593:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38012,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38004,
                                                        "src": "7626:4:153",
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
                                                        "id": 38010,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "7614:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38011,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7617:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39817,
                                                    "src": "7614:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38013,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7614:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38009,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37942,
                                                37957,
                                                37972,
                                                37987,
                                                38002
                                            ],
                                            "referencedDeclaration": 37942,
                                            "src": "7610:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38014,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7610:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38008,
                                    "id": 38015,
                                    "nodeType": "Return",
                                    "src": "7603:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "dimBytes",
                        "nameLocation": "7527:8:153",
                        "parameters": {
                            "id": 38005,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38004,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7549:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38017,
                                    "src": "7536:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38003,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7536:5:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7535:19:153"
                        },
                        "returnParameters": {
                            "id": 38008,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38007,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38017,
                                    "src": "7578:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38006,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7578:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7577:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38032,
                        "nodeType": "FunctionDefinition",
                        "src": "7645:118:153",
                        "nodes": [],
                        "body": {
                            "id": 38031,
                            "nodeType": "Block",
                            "src": "7717:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38027,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38019,
                                                        "src": "7750:4:153",
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
                                                    "expression": {
                                                        "id": 38025,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "7738:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38026,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7741:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39824,
                                                    "src": "7738:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38028,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7738:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38024,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37942,
                                                37957,
                                                37972,
                                                37987,
                                                38002
                                            ],
                                            "referencedDeclaration": 37942,
                                            "src": "7734:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38029,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7734:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38023,
                                    "id": 38030,
                                    "nodeType": "Return",
                                    "src": "7727:29:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "dimBytes32",
                        "nameLocation": "7654:10:153",
                        "parameters": {
                            "id": 38020,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38019,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7673:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38032,
                                    "src": "7665:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38018,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7665:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7664:14:153"
                        },
                        "returnParameters": {
                            "id": 38023,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38022,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38032,
                                    "src": "7702:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38021,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7702:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7701:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38045,
                        "nodeType": "FunctionDefinition",
                        "src": "7769:123:153",
                        "nodes": [],
                        "body": {
                            "id": 38044,
                            "nodeType": "Block",
                            "src": "7843:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 38040,
                                                "name": "ITALIC",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37179,
                                                "src": "7872:6:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 38041,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38034,
                                                "src": "7880:4:153",
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
                                            "id": 38039,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37208,
                                            "src": "7860:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38042,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7860:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38038,
                                    "id": 38043,
                                    "nodeType": "Return",
                                    "src": "7853:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "italic",
                        "nameLocation": "7778:6:153",
                        "parameters": {
                            "id": 38035,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38034,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7799:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38045,
                                    "src": "7785:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38033,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7785:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7784:20:153"
                        },
                        "returnParameters": {
                            "id": 38038,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38037,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38045,
                                    "src": "7828:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38036,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7828:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7827:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38060,
                        "nodeType": "FunctionDefinition",
                        "src": "7898:117:153",
                        "nodes": [],
                        "body": {
                            "id": 38059,
                            "nodeType": "Block",
                            "src": "7966:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38055,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38047,
                                                        "src": "8002:4:153",
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
                                                    "expression": {
                                                        "id": 38053,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "7990:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38054,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7993:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39838,
                                                    "src": "7990:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38056,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7990:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38052,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38045,
                                                38060,
                                                38075,
                                                38090,
                                                38105
                                            ],
                                            "referencedDeclaration": 38045,
                                            "src": "7983:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38057,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7983:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38051,
                                    "id": 38058,
                                    "nodeType": "Return",
                                    "src": "7976:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "italic",
                        "nameLocation": "7907:6:153",
                        "parameters": {
                            "id": 38048,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38047,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7922:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38060,
                                    "src": "7914:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38046,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7914:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7913:14:153"
                        },
                        "returnParameters": {
                            "id": 38051,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38050,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38060,
                                    "src": "7951:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38049,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7951:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7950:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38075,
                        "nodeType": "FunctionDefinition",
                        "src": "8021:116:153",
                        "nodes": [],
                        "body": {
                            "id": 38074,
                            "nodeType": "Block",
                            "src": "8088:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38070,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38062,
                                                        "src": "8124:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 38068,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "8112:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38069,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8115:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "8112:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38071,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8112:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38067,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38045,
                                                38060,
                                                38075,
                                                38090,
                                                38105
                                            ],
                                            "referencedDeclaration": 38045,
                                            "src": "8105:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38072,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8105:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38066,
                                    "id": 38073,
                                    "nodeType": "Return",
                                    "src": "8098:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "italic",
                        "nameLocation": "8030:6:153",
                        "parameters": {
                            "id": 38063,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38062,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8044:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38075,
                                    "src": "8037:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38061,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8037:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8036:13:153"
                        },
                        "returnParameters": {
                            "id": 38066,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38065,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38075,
                                    "src": "8073:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38064,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8073:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8072:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38090,
                        "nodeType": "FunctionDefinition",
                        "src": "8143:117:153",
                        "nodes": [],
                        "body": {
                            "id": 38089,
                            "nodeType": "Block",
                            "src": "8211:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38085,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38077,
                                                        "src": "8247:4:153",
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
                                                    "expression": {
                                                        "id": 38083,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "8235:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38084,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8238:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39810,
                                                    "src": "8235:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38086,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8235:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38082,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38045,
                                                38060,
                                                38075,
                                                38090,
                                                38105
                                            ],
                                            "referencedDeclaration": 38045,
                                            "src": "8228:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38087,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8228:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38081,
                                    "id": 38088,
                                    "nodeType": "Return",
                                    "src": "8221:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "italic",
                        "nameLocation": "8152:6:153",
                        "parameters": {
                            "id": 38078,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38077,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8167:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38090,
                                    "src": "8159:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38076,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8159:7:153",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8158:14:153"
                        },
                        "returnParameters": {
                            "id": 38081,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38080,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38090,
                                    "src": "8196:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38079,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8196:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8195:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38105,
                        "nodeType": "FunctionDefinition",
                        "src": "8266:114:153",
                        "nodes": [],
                        "body": {
                            "id": 38104,
                            "nodeType": "Block",
                            "src": "8331:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38100,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38092,
                                                        "src": "8367:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 38098,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "8355:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38099,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8358:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39831,
                                                    "src": "8355:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38101,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8355:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38097,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38045,
                                                38060,
                                                38075,
                                                38090,
                                                38105
                                            ],
                                            "referencedDeclaration": 38045,
                                            "src": "8348:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38102,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8348:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38096,
                                    "id": 38103,
                                    "nodeType": "Return",
                                    "src": "8341:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "italic",
                        "nameLocation": "8275:6:153",
                        "parameters": {
                            "id": 38093,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38092,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8287:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38105,
                                    "src": "8282:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 38091,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8282:4:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8281:11:153"
                        },
                        "returnParameters": {
                            "id": 38096,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38095,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38105,
                                    "src": "8316:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38094,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8316:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8315:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38120,
                        "nodeType": "FunctionDefinition",
                        "src": "8386:127:153",
                        "nodes": [],
                        "body": {
                            "id": 38119,
                            "nodeType": "Block",
                            "src": "8464:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38115,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38107,
                                                        "src": "8500:4:153",
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
                                                        "id": 38113,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "8488:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38114,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8491:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39817,
                                                    "src": "8488:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38116,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8488:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38112,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38045,
                                                38060,
                                                38075,
                                                38090,
                                                38105
                                            ],
                                            "referencedDeclaration": 38045,
                                            "src": "8481:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38117,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8481:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38111,
                                    "id": 38118,
                                    "nodeType": "Return",
                                    "src": "8474:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "italicBytes",
                        "nameLocation": "8395:11:153",
                        "parameters": {
                            "id": 38108,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38107,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8420:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38120,
                                    "src": "8407:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38106,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8407:5:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8406:19:153"
                        },
                        "returnParameters": {
                            "id": 38111,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38110,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38120,
                                    "src": "8449:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38109,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8449:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8448:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38135,
                        "nodeType": "FunctionDefinition",
                        "src": "8519:124:153",
                        "nodes": [],
                        "body": {
                            "id": 38134,
                            "nodeType": "Block",
                            "src": "8594:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38130,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38122,
                                                        "src": "8630:4:153",
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
                                                    "expression": {
                                                        "id": 38128,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "8618:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38129,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8621:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39824,
                                                    "src": "8618:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38131,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8618:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38127,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38045,
                                                38060,
                                                38075,
                                                38090,
                                                38105
                                            ],
                                            "referencedDeclaration": 38045,
                                            "src": "8611:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38132,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8611:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38126,
                                    "id": 38133,
                                    "nodeType": "Return",
                                    "src": "8604:32:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "italicBytes32",
                        "nameLocation": "8528:13:153",
                        "parameters": {
                            "id": 38123,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38122,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8550:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38135,
                                    "src": "8542:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38121,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8542:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8541:14:153"
                        },
                        "returnParameters": {
                            "id": 38126,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38125,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38135,
                                    "src": "8579:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38124,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8579:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8578:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38148,
                        "nodeType": "FunctionDefinition",
                        "src": "8649:129:153",
                        "nodes": [],
                        "body": {
                            "id": 38147,
                            "nodeType": "Block",
                            "src": "8726:52:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 38143,
                                                "name": "UNDERLINE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37182,
                                                "src": "8755:9:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 38144,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38137,
                                                "src": "8766:4:153",
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
                                            "id": 38142,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37208,
                                            "src": "8743:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38145,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8743:28:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38141,
                                    "id": 38146,
                                    "nodeType": "Return",
                                    "src": "8736:35:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "underline",
                        "nameLocation": "8658:9:153",
                        "parameters": {
                            "id": 38138,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38137,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8682:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38148,
                                    "src": "8668:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38136,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8668:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8667:20:153"
                        },
                        "returnParameters": {
                            "id": 38141,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38140,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38148,
                                    "src": "8711:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38139,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8711:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8710:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38163,
                        "nodeType": "FunctionDefinition",
                        "src": "8784:123:153",
                        "nodes": [],
                        "body": {
                            "id": 38162,
                            "nodeType": "Block",
                            "src": "8855:52:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38158,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38150,
                                                        "src": "8894:4:153",
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
                                                    "expression": {
                                                        "id": 38156,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "8882:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38157,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8885:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39838,
                                                    "src": "8882:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38159,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8882:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38155,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38148,
                                                38163,
                                                38178,
                                                38193,
                                                38208
                                            ],
                                            "referencedDeclaration": 38148,
                                            "src": "8872:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38160,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8872:28:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38154,
                                    "id": 38161,
                                    "nodeType": "Return",
                                    "src": "8865:35:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "underline",
                        "nameLocation": "8793:9:153",
                        "parameters": {
                            "id": 38151,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38150,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8811:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38163,
                                    "src": "8803:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38149,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8803:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8802:14:153"
                        },
                        "returnParameters": {
                            "id": 38154,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38153,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38163,
                                    "src": "8840:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38152,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8840:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8839:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38178,
                        "nodeType": "FunctionDefinition",
                        "src": "8913:122:153",
                        "nodes": [],
                        "body": {
                            "id": 38177,
                            "nodeType": "Block",
                            "src": "8983:52:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38173,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38165,
                                                        "src": "9022:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 38171,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "9010:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38172,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9013:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "9010:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38174,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9010:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38170,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38148,
                                                38163,
                                                38178,
                                                38193,
                                                38208
                                            ],
                                            "referencedDeclaration": 38148,
                                            "src": "9000:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38175,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9000:28:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38169,
                                    "id": 38176,
                                    "nodeType": "Return",
                                    "src": "8993:35:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "underline",
                        "nameLocation": "8922:9:153",
                        "parameters": {
                            "id": 38166,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38165,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8939:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38178,
                                    "src": "8932:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38164,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8932:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8931:13:153"
                        },
                        "returnParameters": {
                            "id": 38169,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38168,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38178,
                                    "src": "8968:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38167,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8968:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8967:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38193,
                        "nodeType": "FunctionDefinition",
                        "src": "9041:123:153",
                        "nodes": [],
                        "body": {
                            "id": 38192,
                            "nodeType": "Block",
                            "src": "9112:52:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38188,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38180,
                                                        "src": "9151:4:153",
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
                                                    "expression": {
                                                        "id": 38186,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "9139:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38187,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9142:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39810,
                                                    "src": "9139:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38189,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9139:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38185,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38148,
                                                38163,
                                                38178,
                                                38193,
                                                38208
                                            ],
                                            "referencedDeclaration": 38148,
                                            "src": "9129:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38190,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9129:28:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38184,
                                    "id": 38191,
                                    "nodeType": "Return",
                                    "src": "9122:35:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "underline",
                        "nameLocation": "9050:9:153",
                        "parameters": {
                            "id": 38181,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38180,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9068:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38193,
                                    "src": "9060:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38179,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9060:7:153",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9059:14:153"
                        },
                        "returnParameters": {
                            "id": 38184,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38183,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38193,
                                    "src": "9097:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38182,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9097:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9096:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38208,
                        "nodeType": "FunctionDefinition",
                        "src": "9170:120:153",
                        "nodes": [],
                        "body": {
                            "id": 38207,
                            "nodeType": "Block",
                            "src": "9238:52:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38203,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38195,
                                                        "src": "9277:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 38201,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "9265:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38202,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9268:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39831,
                                                    "src": "9265:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38204,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9265:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38200,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38148,
                                                38163,
                                                38178,
                                                38193,
                                                38208
                                            ],
                                            "referencedDeclaration": 38148,
                                            "src": "9255:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38205,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9255:28:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38199,
                                    "id": 38206,
                                    "nodeType": "Return",
                                    "src": "9248:35:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "underline",
                        "nameLocation": "9179:9:153",
                        "parameters": {
                            "id": 38196,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38195,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9194:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38208,
                                    "src": "9189:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 38194,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9189:4:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9188:11:153"
                        },
                        "returnParameters": {
                            "id": 38199,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38198,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38208,
                                    "src": "9223:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38197,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9223:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9222:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38223,
                        "nodeType": "FunctionDefinition",
                        "src": "9296:133:153",
                        "nodes": [],
                        "body": {
                            "id": 38222,
                            "nodeType": "Block",
                            "src": "9377:52:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38218,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38210,
                                                        "src": "9416:4:153",
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
                                                        "id": 38216,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "9404:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38217,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9407:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39817,
                                                    "src": "9404:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38219,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9404:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38215,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38148,
                                                38163,
                                                38178,
                                                38193,
                                                38208
                                            ],
                                            "referencedDeclaration": 38148,
                                            "src": "9394:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38220,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9394:28:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38214,
                                    "id": 38221,
                                    "nodeType": "Return",
                                    "src": "9387:35:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "underlineBytes",
                        "nameLocation": "9305:14:153",
                        "parameters": {
                            "id": 38211,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38210,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9333:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38223,
                                    "src": "9320:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38209,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9320:5:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9319:19:153"
                        },
                        "returnParameters": {
                            "id": 38214,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38213,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38223,
                                    "src": "9362:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38212,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9362:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9361:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38238,
                        "nodeType": "FunctionDefinition",
                        "src": "9435:130:153",
                        "nodes": [],
                        "body": {
                            "id": 38237,
                            "nodeType": "Block",
                            "src": "9513:52:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38233,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38225,
                                                        "src": "9552:4:153",
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
                                                    "expression": {
                                                        "id": 38231,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "9540:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38232,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9543:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39824,
                                                    "src": "9540:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38234,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9540:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38230,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38148,
                                                38163,
                                                38178,
                                                38193,
                                                38208
                                            ],
                                            "referencedDeclaration": 38148,
                                            "src": "9530:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38235,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9530:28:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38229,
                                    "id": 38236,
                                    "nodeType": "Return",
                                    "src": "9523:35:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "underlineBytes32",
                        "nameLocation": "9444:16:153",
                        "parameters": {
                            "id": 38226,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38225,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9469:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38238,
                                    "src": "9461:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38224,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9461:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9460:14:153"
                        },
                        "returnParameters": {
                            "id": 38229,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38228,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38238,
                                    "src": "9498:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38227,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9498:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9497:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38251,
                        "nodeType": "FunctionDefinition",
                        "src": "9571:125:153",
                        "nodes": [],
                        "body": {
                            "id": 38250,
                            "nodeType": "Block",
                            "src": "9646:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 38246,
                                                "name": "INVERSE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37185,
                                                "src": "9675:7:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 38247,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38240,
                                                "src": "9684:4:153",
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
                                            "id": 38245,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37208,
                                            "src": "9663:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38248,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9663:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38244,
                                    "id": 38249,
                                    "nodeType": "Return",
                                    "src": "9656:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "inverse",
                        "nameLocation": "9580:7:153",
                        "parameters": {
                            "id": 38241,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38240,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9602:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38251,
                                    "src": "9588:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38239,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9588:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9587:20:153"
                        },
                        "returnParameters": {
                            "id": 38244,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38243,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38251,
                                    "src": "9631:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38242,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9631:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9630:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38266,
                        "nodeType": "FunctionDefinition",
                        "src": "9702:119:153",
                        "nodes": [],
                        "body": {
                            "id": 38265,
                            "nodeType": "Block",
                            "src": "9771:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38261,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38253,
                                                        "src": "9808:4:153",
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
                                                    "expression": {
                                                        "id": 38259,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "9796:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38260,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9799:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39838,
                                                    "src": "9796:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38262,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9796:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38258,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38251,
                                                38266,
                                                38281,
                                                38296,
                                                38311
                                            ],
                                            "referencedDeclaration": 38251,
                                            "src": "9788:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38263,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9788:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38257,
                                    "id": 38264,
                                    "nodeType": "Return",
                                    "src": "9781:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "inverse",
                        "nameLocation": "9711:7:153",
                        "parameters": {
                            "id": 38254,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38253,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9727:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38266,
                                    "src": "9719:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38252,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9719:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9718:14:153"
                        },
                        "returnParameters": {
                            "id": 38257,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38256,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38266,
                                    "src": "9756:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38255,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9756:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9755:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38281,
                        "nodeType": "FunctionDefinition",
                        "src": "9827:118:153",
                        "nodes": [],
                        "body": {
                            "id": 38280,
                            "nodeType": "Block",
                            "src": "9895:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38276,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38268,
                                                        "src": "9932:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 38274,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "9920:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38275,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9923:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "9920:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38277,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9920:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38273,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38251,
                                                38266,
                                                38281,
                                                38296,
                                                38311
                                            ],
                                            "referencedDeclaration": 38251,
                                            "src": "9912:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38278,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9912:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38272,
                                    "id": 38279,
                                    "nodeType": "Return",
                                    "src": "9905:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "inverse",
                        "nameLocation": "9836:7:153",
                        "parameters": {
                            "id": 38269,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38268,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9851:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38281,
                                    "src": "9844:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38267,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9844:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9843:13:153"
                        },
                        "returnParameters": {
                            "id": 38272,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38271,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38281,
                                    "src": "9880:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38270,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9880:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9879:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38296,
                        "nodeType": "FunctionDefinition",
                        "src": "9951:119:153",
                        "nodes": [],
                        "body": {
                            "id": 38295,
                            "nodeType": "Block",
                            "src": "10020:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38291,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38283,
                                                        "src": "10057:4:153",
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
                                                    "expression": {
                                                        "id": 38289,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "10045:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38290,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10048:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39810,
                                                    "src": "10045:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38292,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10045:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38288,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38251,
                                                38266,
                                                38281,
                                                38296,
                                                38311
                                            ],
                                            "referencedDeclaration": 38251,
                                            "src": "10037:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38293,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10037:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38287,
                                    "id": 38294,
                                    "nodeType": "Return",
                                    "src": "10030:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "inverse",
                        "nameLocation": "9960:7:153",
                        "parameters": {
                            "id": 38284,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38283,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9976:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38296,
                                    "src": "9968:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38282,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9968:7:153",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9967:14:153"
                        },
                        "returnParameters": {
                            "id": 38287,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38286,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38296,
                                    "src": "10005:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38285,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10005:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10004:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38311,
                        "nodeType": "FunctionDefinition",
                        "src": "10076:116:153",
                        "nodes": [],
                        "body": {
                            "id": 38310,
                            "nodeType": "Block",
                            "src": "10142:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38306,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38298,
                                                        "src": "10179:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 38304,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "10167:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38305,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10170:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39831,
                                                    "src": "10167:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38307,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10167:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38303,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38251,
                                                38266,
                                                38281,
                                                38296,
                                                38311
                                            ],
                                            "referencedDeclaration": 38251,
                                            "src": "10159:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38308,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10159:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38302,
                                    "id": 38309,
                                    "nodeType": "Return",
                                    "src": "10152:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "inverse",
                        "nameLocation": "10085:7:153",
                        "parameters": {
                            "id": 38299,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38298,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "10098:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38311,
                                    "src": "10093:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 38297,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10093:4:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10092:11:153"
                        },
                        "returnParameters": {
                            "id": 38302,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38301,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38311,
                                    "src": "10127:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38300,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10127:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10126:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38326,
                        "nodeType": "FunctionDefinition",
                        "src": "10198:129:153",
                        "nodes": [],
                        "body": {
                            "id": 38325,
                            "nodeType": "Block",
                            "src": "10277:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38321,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38313,
                                                        "src": "10314:4:153",
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
                                                        "id": 38319,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "10302:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38320,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10305:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39817,
                                                    "src": "10302:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38322,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10302:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38318,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38251,
                                                38266,
                                                38281,
                                                38296,
                                                38311
                                            ],
                                            "referencedDeclaration": 38251,
                                            "src": "10294:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38323,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10294:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38317,
                                    "id": 38324,
                                    "nodeType": "Return",
                                    "src": "10287:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "inverseBytes",
                        "nameLocation": "10207:12:153",
                        "parameters": {
                            "id": 38314,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38313,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "10233:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38326,
                                    "src": "10220:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38312,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10220:5:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10219:19:153"
                        },
                        "returnParameters": {
                            "id": 38317,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38316,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38326,
                                    "src": "10262:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38315,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10262:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10261:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38341,
                        "nodeType": "FunctionDefinition",
                        "src": "10333:126:153",
                        "nodes": [],
                        "body": {
                            "id": 38340,
                            "nodeType": "Block",
                            "src": "10409:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38336,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38328,
                                                        "src": "10446:4:153",
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
                                                    "expression": {
                                                        "id": 38334,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37152,
                                                        "src": "10434:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38335,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10437:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39824,
                                                    "src": "10434:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38337,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10434:17:153",
                                                "tryCall": false,
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
                                                }
                                            ],
                                            "id": 38333,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38251,
                                                38266,
                                                38281,
                                                38296,
                                                38311
                                            ],
                                            "referencedDeclaration": 38251,
                                            "src": "10426:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38338,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10426:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38332,
                                    "id": 38339,
                                    "nodeType": "Return",
                                    "src": "10419:33:153"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "inverseBytes32",
                        "nameLocation": "10342:14:153",
                        "parameters": {
                            "id": 38329,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38328,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "10365:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38341,
                                    "src": "10357:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38327,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10357:7:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10356:14:153"
                        },
                        "returnParameters": {
                            "id": 38332,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38331,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38341,
                                    "src": "10394:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38330,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10394:6:153",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10393:15:153"
                        },
                        "scope": 38342,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "StdStyle",
                "contractDependencies": [],
                "contractKind": "library",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    38342
                ],
                "name": "StdStyle",
                "nameLocation": "108:8:153",
                "scope": 38343,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 153
};
