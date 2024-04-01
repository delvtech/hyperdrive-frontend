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
        "id": 38378,
        "exportedSymbols": {
            "StdStyle": [
                38377
            ],
            "VmSafe": [
                40341
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:10430:153",
        "nodes": [
            {
                "id": 37168,
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
                "id": 37170,
                "nodeType": "ImportDirective",
                "src": "66:32:153",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "./Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 38378,
                "sourceUnit": 40814,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 37169,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40341,
                            "src": "74:6:153",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 38377,
                "nodeType": "ContractDefinition",
                "src": "100:10361:153",
                "nodes": [
                    {
                        "id": 37187,
                        "nodeType": "VariableDeclaration",
                        "src": "123:92:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "vm",
                        "nameLocation": "147:2:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                            "typeString": "contract VmSafe"
                        },
                        "typeName": {
                            "id": 37172,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 37171,
                                "name": "VmSafe",
                                "nameLocations": [
                                    "123:6:153"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 40341,
                                "src": "123:6:153"
                            },
                            "referencedDeclaration": 40341,
                            "src": "123:6:153",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$40341",
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
                                                                    "id": 37181,
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
                                                                "id": 37180,
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
                                                            "id": 37182,
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
                                                        "id": 37179,
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
                                                            "id": 37178,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "175:7:153",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 37183,
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
                                                "id": 37177,
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
                                                    "id": 37176,
                                                    "name": "uint160",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "167:7:153",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 37184,
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
                                        "id": 37175,
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
                                            "id": 37174,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "159:7:153",
                                            "typeDescriptions": {}
                                        }
                                    },
                                    "id": 37185,
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
                                "id": 37173,
                                "name": "VmSafe",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 40341,
                                "src": "152:6:153",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_VmSafe_$40341_$",
                                    "typeString": "type(contract VmSafe)"
                                }
                            },
                            "id": 37186,
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
                                "typeIdentifier": "t_contract$_VmSafe_$40341",
                                "typeString": "contract VmSafe"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 37190,
                        "nodeType": "VariableDeclaration",
                        "src": "222:34:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "RED",
                        "nameLocation": "238:3:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37188,
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
                            "id": 37189,
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
                        "id": 37193,
                        "nodeType": "VariableDeclaration",
                        "src": "262:36:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "GREEN",
                        "nameLocation": "278:5:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37191,
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
                            "id": 37192,
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
                        "id": 37196,
                        "nodeType": "VariableDeclaration",
                        "src": "304:37:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "YELLOW",
                        "nameLocation": "320:6:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37194,
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
                            "id": 37195,
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
                        "id": 37199,
                        "nodeType": "VariableDeclaration",
                        "src": "347:35:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BLUE",
                        "nameLocation": "363:4:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37197,
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
                            "id": 37198,
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
                        "id": 37202,
                        "nodeType": "VariableDeclaration",
                        "src": "388:38:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAGENTA",
                        "nameLocation": "404:7:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37200,
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
                            "id": 37201,
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
                        "id": 37205,
                        "nodeType": "VariableDeclaration",
                        "src": "432:35:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CYAN",
                        "nameLocation": "448:4:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37203,
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
                            "id": 37204,
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
                        "id": 37208,
                        "nodeType": "VariableDeclaration",
                        "src": "473:34:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BOLD",
                        "nameLocation": "489:4:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37206,
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
                            "id": 37207,
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
                        "id": 37211,
                        "nodeType": "VariableDeclaration",
                        "src": "513:33:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "DIM",
                        "nameLocation": "529:3:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37209,
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
                            "id": 37210,
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
                        "id": 37214,
                        "nodeType": "VariableDeclaration",
                        "src": "552:36:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ITALIC",
                        "nameLocation": "568:6:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37212,
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
                            "id": 37213,
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
                        "id": 37217,
                        "nodeType": "VariableDeclaration",
                        "src": "594:39:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNDERLINE",
                        "nameLocation": "610:9:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37215,
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
                            "id": 37216,
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
                        "id": 37220,
                        "nodeType": "VariableDeclaration",
                        "src": "639:37:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVERSE",
                        "nameLocation": "655:7:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37218,
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
                            "id": 37219,
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
                        "id": 37223,
                        "nodeType": "VariableDeclaration",
                        "src": "682:35:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "RESET",
                        "nameLocation": "698:5:153",
                        "scope": 38377,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37221,
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
                            "id": 37222,
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
                        "id": 37243,
                        "nodeType": "FunctionDefinition",
                        "src": "724:167:153",
                        "nodes": [],
                        "body": {
                            "id": 37242,
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
                                                        "id": 37236,
                                                        "name": "style",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37225,
                                                        "src": "864:5:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    },
                                                    {
                                                        "id": 37237,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37227,
                                                        "src": "871:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    },
                                                    {
                                                        "id": 37238,
                                                        "name": "RESET",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37223,
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
                                                        "id": 37234,
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
                                                    "id": 37235,
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
                                                "id": 37239,
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
                                            "id": 37233,
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
                                                "id": 37232,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "840:6:153",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 37240,
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
                                    "functionReturnParameters": 37231,
                                    "id": 37241,
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
                            "id": 37228,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37225,
                                    "mutability": "mutable",
                                    "name": "style",
                                    "nameLocation": "759:5:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37243,
                                    "src": "745:19:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37224,
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
                                    "id": 37227,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "780:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37243,
                                    "src": "766:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37226,
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
                            "id": 37231,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37230,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37243,
                                    "src": "808:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37229,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 37256,
                        "nodeType": "FunctionDefinition",
                        "src": "897:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37255,
                            "nodeType": "Block",
                            "src": "968:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37251,
                                                "name": "RED",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37190,
                                                "src": "997:3:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37252,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37245,
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
                                            "id": 37250,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37243,
                                            "src": "985:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37253,
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
                                    "functionReturnParameters": 37249,
                                    "id": 37254,
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
                            "id": 37246,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37245,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "924:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37256,
                                    "src": "910:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37244,
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
                            "id": 37249,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37248,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37256,
                                    "src": "953:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37247,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37271,
                        "nodeType": "FunctionDefinition",
                        "src": "1020:111:153",
                        "nodes": [],
                        "body": {
                            "id": 37270,
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
                                                        "id": 37266,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37258,
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
                                                        "id": 37264,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "1106:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37265,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1109:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39873,
                                                    "src": "1106:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37267,
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
                                            "id": 37263,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37256,
                                                37271,
                                                37286,
                                                37301,
                                                37316
                                            ],
                                            "referencedDeclaration": 37256,
                                            "src": "1102:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37268,
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
                                    "functionReturnParameters": 37262,
                                    "id": 37269,
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
                            "id": 37259,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37258,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1041:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37271,
                                    "src": "1033:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37257,
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
                            "id": 37262,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37261,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37271,
                                    "src": "1070:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37260,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37286,
                        "nodeType": "FunctionDefinition",
                        "src": "1137:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37285,
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
                                                        "id": 37281,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37273,
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
                                                        "id": 37279,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "1222:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37280,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1225:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39880,
                                                    "src": "1222:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37282,
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
                                            "id": 37278,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37256,
                                                37271,
                                                37286,
                                                37301,
                                                37316
                                            ],
                                            "referencedDeclaration": 37256,
                                            "src": "1218:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37283,
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
                                    "functionReturnParameters": 37277,
                                    "id": 37284,
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
                            "id": 37274,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37273,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1157:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37286,
                                    "src": "1150:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37272,
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
                            "id": 37277,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37276,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37286,
                                    "src": "1186:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37275,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37301,
                        "nodeType": "FunctionDefinition",
                        "src": "1253:111:153",
                        "nodes": [],
                        "body": {
                            "id": 37300,
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
                                                        "id": 37296,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37288,
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
                                                        "id": 37294,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "1339:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37295,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1342:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "1339:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37297,
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
                                            "id": 37293,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37256,
                                                37271,
                                                37286,
                                                37301,
                                                37316
                                            ],
                                            "referencedDeclaration": 37256,
                                            "src": "1335:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37298,
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
                                    "functionReturnParameters": 37292,
                                    "id": 37299,
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
                            "id": 37289,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37288,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1274:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37301,
                                    "src": "1266:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37287,
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
                            "id": 37292,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37291,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37301,
                                    "src": "1303:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37290,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37316,
                        "nodeType": "FunctionDefinition",
                        "src": "1370:108:153",
                        "nodes": [],
                        "body": {
                            "id": 37315,
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
                                                        "id": 37311,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37303,
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
                                                        "id": 37309,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "1453:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37310,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1456:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39866,
                                                    "src": "1453:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37312,
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
                                            "id": 37308,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37256,
                                                37271,
                                                37286,
                                                37301,
                                                37316
                                            ],
                                            "referencedDeclaration": 37256,
                                            "src": "1449:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37313,
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
                                    "functionReturnParameters": 37307,
                                    "id": 37314,
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
                            "id": 37304,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37303,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1388:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37316,
                                    "src": "1383:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37302,
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
                            "id": 37307,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37306,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37316,
                                    "src": "1417:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37305,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37331,
                        "nodeType": "FunctionDefinition",
                        "src": "1484:121:153",
                        "nodes": [],
                        "body": {
                            "id": 37330,
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
                                                        "id": 37326,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37318,
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
                                                        "id": 37324,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "1580:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37325,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1583:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39852,
                                                    "src": "1580:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37327,
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
                                            "id": 37323,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37256,
                                                37271,
                                                37286,
                                                37301,
                                                37316
                                            ],
                                            "referencedDeclaration": 37256,
                                            "src": "1576:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37328,
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
                                    "functionReturnParameters": 37322,
                                    "id": 37329,
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
                            "id": 37319,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37318,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1515:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37331,
                                    "src": "1502:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37317,
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
                            "id": 37322,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37321,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37331,
                                    "src": "1544:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37320,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37346,
                        "nodeType": "FunctionDefinition",
                        "src": "1611:118:153",
                        "nodes": [],
                        "body": {
                            "id": 37345,
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
                                                        "id": 37341,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37333,
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
                                                        "id": 37339,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "1704:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37340,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1707:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39859,
                                                    "src": "1704:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37342,
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
                                            "id": 37338,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37256,
                                                37271,
                                                37286,
                                                37301,
                                                37316
                                            ],
                                            "referencedDeclaration": 37256,
                                            "src": "1700:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37343,
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
                                    "functionReturnParameters": 37337,
                                    "id": 37344,
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
                            "id": 37334,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37333,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1639:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37346,
                                    "src": "1631:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37332,
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
                            "id": 37337,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37336,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37346,
                                    "src": "1668:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37335,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37359,
                        "nodeType": "FunctionDefinition",
                        "src": "1735:121:153",
                        "nodes": [],
                        "body": {
                            "id": 37358,
                            "nodeType": "Block",
                            "src": "1808:48:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37354,
                                                "name": "GREEN",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37193,
                                                "src": "1837:5:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37355,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37348,
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
                                            "id": 37353,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37243,
                                            "src": "1825:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37356,
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
                                    "functionReturnParameters": 37352,
                                    "id": 37357,
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
                            "id": 37349,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37348,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1764:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37359,
                                    "src": "1750:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37347,
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
                            "id": 37352,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37351,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37359,
                                    "src": "1793:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37350,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37374,
                        "nodeType": "FunctionDefinition",
                        "src": "1862:115:153",
                        "nodes": [],
                        "body": {
                            "id": 37373,
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
                                                        "id": 37369,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37361,
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
                                                        "id": 37367,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "1952:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37368,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1955:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39873,
                                                    "src": "1952:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37370,
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
                                            "id": 37366,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37359,
                                                37374,
                                                37389,
                                                37404,
                                                37419
                                            ],
                                            "referencedDeclaration": 37359,
                                            "src": "1946:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37371,
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
                                    "functionReturnParameters": 37365,
                                    "id": 37372,
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
                            "id": 37362,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37361,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1885:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37374,
                                    "src": "1877:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37360,
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
                            "id": 37365,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37364,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37374,
                                    "src": "1914:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37363,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37389,
                        "nodeType": "FunctionDefinition",
                        "src": "1983:114:153",
                        "nodes": [],
                        "body": {
                            "id": 37388,
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
                                                        "id": 37384,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37376,
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
                                                        "id": 37382,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "2072:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37383,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2075:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39880,
                                                    "src": "2072:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37385,
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
                                            "id": 37381,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37359,
                                                37374,
                                                37389,
                                                37404,
                                                37419
                                            ],
                                            "referencedDeclaration": 37359,
                                            "src": "2066:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37386,
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
                                    "functionReturnParameters": 37380,
                                    "id": 37387,
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
                            "id": 37377,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37376,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2005:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37389,
                                    "src": "1998:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37375,
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
                            "id": 37380,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37379,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37389,
                                    "src": "2034:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37378,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37404,
                        "nodeType": "FunctionDefinition",
                        "src": "2103:115:153",
                        "nodes": [],
                        "body": {
                            "id": 37403,
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
                                                        "id": 37399,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37391,
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
                                                        "id": 37397,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "2193:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37398,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2196:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "2193:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37400,
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
                                            "id": 37396,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37359,
                                                37374,
                                                37389,
                                                37404,
                                                37419
                                            ],
                                            "referencedDeclaration": 37359,
                                            "src": "2187:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37401,
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
                                    "functionReturnParameters": 37395,
                                    "id": 37402,
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
                            "id": 37392,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37391,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2126:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37404,
                                    "src": "2118:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37390,
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
                            "id": 37395,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37394,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37404,
                                    "src": "2155:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37393,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37419,
                        "nodeType": "FunctionDefinition",
                        "src": "2224:112:153",
                        "nodes": [],
                        "body": {
                            "id": 37418,
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
                                                        "id": 37414,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37406,
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
                                                        "id": 37412,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "2311:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37413,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2314:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39866,
                                                    "src": "2311:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37415,
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
                                            "id": 37411,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37359,
                                                37374,
                                                37389,
                                                37404,
                                                37419
                                            ],
                                            "referencedDeclaration": 37359,
                                            "src": "2305:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37416,
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
                                    "functionReturnParameters": 37410,
                                    "id": 37417,
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
                            "id": 37407,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37406,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2244:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37419,
                                    "src": "2239:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37405,
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
                            "id": 37410,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37409,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37419,
                                    "src": "2273:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37408,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37434,
                        "nodeType": "FunctionDefinition",
                        "src": "2342:125:153",
                        "nodes": [],
                        "body": {
                            "id": 37433,
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
                                                        "id": 37429,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37421,
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
                                                        "id": 37427,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "2442:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37428,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2445:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39852,
                                                    "src": "2442:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37430,
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
                                            "id": 37426,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37359,
                                                37374,
                                                37389,
                                                37404,
                                                37419
                                            ],
                                            "referencedDeclaration": 37359,
                                            "src": "2436:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37431,
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
                                    "functionReturnParameters": 37425,
                                    "id": 37432,
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
                            "id": 37422,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37421,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2375:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37434,
                                    "src": "2362:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37420,
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
                            "id": 37425,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37424,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37434,
                                    "src": "2404:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37423,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37449,
                        "nodeType": "FunctionDefinition",
                        "src": "2473:122:153",
                        "nodes": [],
                        "body": {
                            "id": 37448,
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
                                                        "id": 37444,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37436,
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
                                                        "id": 37442,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "2570:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37443,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2573:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39859,
                                                    "src": "2570:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37445,
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
                                            "id": 37441,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37359,
                                                37374,
                                                37389,
                                                37404,
                                                37419
                                            ],
                                            "referencedDeclaration": 37359,
                                            "src": "2564:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37446,
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
                                    "functionReturnParameters": 37440,
                                    "id": 37447,
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
                            "id": 37437,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37436,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2503:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37449,
                                    "src": "2495:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37435,
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
                            "id": 37440,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37439,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37449,
                                    "src": "2532:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37438,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37462,
                        "nodeType": "FunctionDefinition",
                        "src": "2601:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37461,
                            "nodeType": "Block",
                            "src": "2675:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37457,
                                                "name": "YELLOW",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37196,
                                                "src": "2704:6:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37458,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37451,
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
                                            "id": 37456,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37243,
                                            "src": "2692:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37459,
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
                                    "functionReturnParameters": 37455,
                                    "id": 37460,
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
                            "id": 37452,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37451,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2631:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37462,
                                    "src": "2617:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37450,
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
                            "id": 37455,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37454,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37462,
                                    "src": "2660:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37453,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37477,
                        "nodeType": "FunctionDefinition",
                        "src": "2730:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37476,
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
                                                        "id": 37472,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37464,
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
                                                        "id": 37470,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "2822:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37471,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2825:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39873,
                                                    "src": "2822:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37473,
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
                                            "id": 37469,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37462,
                                                37477,
                                                37492,
                                                37507,
                                                37522
                                            ],
                                            "referencedDeclaration": 37462,
                                            "src": "2815:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37474,
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
                                    "functionReturnParameters": 37468,
                                    "id": 37475,
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
                            "id": 37465,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37464,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2754:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37477,
                                    "src": "2746:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37463,
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
                            "id": 37468,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37467,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37477,
                                    "src": "2783:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37466,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37492,
                        "nodeType": "FunctionDefinition",
                        "src": "2853:116:153",
                        "nodes": [],
                        "body": {
                            "id": 37491,
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
                                                        "id": 37487,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37479,
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
                                                        "id": 37485,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "2944:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37486,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2947:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39880,
                                                    "src": "2944:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37488,
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
                                            "id": 37484,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37462,
                                                37477,
                                                37492,
                                                37507,
                                                37522
                                            ],
                                            "referencedDeclaration": 37462,
                                            "src": "2937:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37489,
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
                                    "functionReturnParameters": 37483,
                                    "id": 37490,
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
                            "id": 37480,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37479,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2876:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37492,
                                    "src": "2869:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37478,
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
                            "id": 37483,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37482,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37492,
                                    "src": "2905:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37481,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37507,
                        "nodeType": "FunctionDefinition",
                        "src": "2975:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37506,
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
                                                        "id": 37502,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37494,
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
                                                        "id": 37500,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "3067:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37501,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3070:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "3067:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37503,
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
                                            "id": 37499,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37462,
                                                37477,
                                                37492,
                                                37507,
                                                37522
                                            ],
                                            "referencedDeclaration": 37462,
                                            "src": "3060:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37504,
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
                                    "functionReturnParameters": 37498,
                                    "id": 37505,
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
                            "id": 37495,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37494,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2999:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37507,
                                    "src": "2991:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37493,
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
                            "id": 37498,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37497,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37507,
                                    "src": "3028:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37496,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37522,
                        "nodeType": "FunctionDefinition",
                        "src": "3098:114:153",
                        "nodes": [],
                        "body": {
                            "id": 37521,
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
                                                        "id": 37517,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37509,
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
                                                        "id": 37515,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "3187:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37516,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3190:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39866,
                                                    "src": "3187:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37518,
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
                                            "id": 37514,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37462,
                                                37477,
                                                37492,
                                                37507,
                                                37522
                                            ],
                                            "referencedDeclaration": 37462,
                                            "src": "3180:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37519,
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
                                    "functionReturnParameters": 37513,
                                    "id": 37520,
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
                            "id": 37510,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37509,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3119:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37522,
                                    "src": "3114:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37508,
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
                            "id": 37513,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37512,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37522,
                                    "src": "3148:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37511,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37537,
                        "nodeType": "FunctionDefinition",
                        "src": "3218:127:153",
                        "nodes": [],
                        "body": {
                            "id": 37536,
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
                                                        "id": 37532,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37524,
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
                                                        "id": 37530,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "3320:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37531,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3323:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39852,
                                                    "src": "3320:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37533,
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
                                            "id": 37529,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37462,
                                                37477,
                                                37492,
                                                37507,
                                                37522
                                            ],
                                            "referencedDeclaration": 37462,
                                            "src": "3313:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37534,
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
                                    "functionReturnParameters": 37528,
                                    "id": 37535,
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
                            "id": 37525,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37524,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3252:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37537,
                                    "src": "3239:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37523,
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
                            "id": 37528,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37527,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37537,
                                    "src": "3281:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37526,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37552,
                        "nodeType": "FunctionDefinition",
                        "src": "3351:124:153",
                        "nodes": [],
                        "body": {
                            "id": 37551,
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
                                                        "id": 37547,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37539,
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
                                                        "id": 37545,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "3450:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37546,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3453:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39859,
                                                    "src": "3450:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37548,
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
                                            "id": 37544,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37462,
                                                37477,
                                                37492,
                                                37507,
                                                37522
                                            ],
                                            "referencedDeclaration": 37462,
                                            "src": "3443:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37549,
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
                                    "functionReturnParameters": 37543,
                                    "id": 37550,
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
                            "id": 37540,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37539,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3382:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37552,
                                    "src": "3374:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37538,
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
                            "id": 37543,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37542,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37552,
                                    "src": "3411:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37541,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37565,
                        "nodeType": "FunctionDefinition",
                        "src": "3481:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37564,
                            "nodeType": "Block",
                            "src": "3553:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37560,
                                                "name": "BLUE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37199,
                                                "src": "3582:4:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37561,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37554,
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
                                            "id": 37559,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37243,
                                            "src": "3570:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37562,
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
                                    "functionReturnParameters": 37558,
                                    "id": 37563,
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
                            "id": 37555,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37554,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3509:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37565,
                                    "src": "3495:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37553,
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
                            "id": 37558,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37557,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37565,
                                    "src": "3538:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37556,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37580,
                        "nodeType": "FunctionDefinition",
                        "src": "3606:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37579,
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
                                                        "id": 37575,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37567,
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
                                                        "id": 37573,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "3694:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37574,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3697:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39873,
                                                    "src": "3694:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37576,
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
                                            "id": 37572,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37565,
                                                37580,
                                                37595,
                                                37610,
                                                37625
                                            ],
                                            "referencedDeclaration": 37565,
                                            "src": "3689:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37577,
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
                                    "functionReturnParameters": 37571,
                                    "id": 37578,
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
                            "id": 37568,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37567,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3628:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37580,
                                    "src": "3620:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37566,
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
                            "id": 37571,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37570,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37580,
                                    "src": "3657:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37569,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37595,
                        "nodeType": "FunctionDefinition",
                        "src": "3725:112:153",
                        "nodes": [],
                        "body": {
                            "id": 37594,
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
                                                        "id": 37590,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37582,
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
                                                        "id": 37588,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "3812:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37589,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3815:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39880,
                                                    "src": "3812:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37591,
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
                                            "id": 37587,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37565,
                                                37580,
                                                37595,
                                                37610,
                                                37625
                                            ],
                                            "referencedDeclaration": 37565,
                                            "src": "3807:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37592,
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
                                    "functionReturnParameters": 37586,
                                    "id": 37593,
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
                            "id": 37583,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37582,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3746:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37595,
                                    "src": "3739:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37581,
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
                            "id": 37586,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37585,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37595,
                                    "src": "3775:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37584,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37610,
                        "nodeType": "FunctionDefinition",
                        "src": "3843:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37609,
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
                                                        "id": 37605,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37597,
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
                                                        "id": 37603,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "3931:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37604,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3934:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "3931:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37606,
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
                                            "id": 37602,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37565,
                                                37580,
                                                37595,
                                                37610,
                                                37625
                                            ],
                                            "referencedDeclaration": 37565,
                                            "src": "3926:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37607,
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
                                    "functionReturnParameters": 37601,
                                    "id": 37608,
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
                            "id": 37598,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37597,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3865:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37610,
                                    "src": "3857:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37596,
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
                            "id": 37601,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37600,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37610,
                                    "src": "3894:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37599,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37625,
                        "nodeType": "FunctionDefinition",
                        "src": "3962:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37624,
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
                                                        "id": 37620,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37612,
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
                                                        "id": 37618,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "4047:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37619,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4050:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39866,
                                                    "src": "4047:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37621,
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
                                            "id": 37617,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37565,
                                                37580,
                                                37595,
                                                37610,
                                                37625
                                            ],
                                            "referencedDeclaration": 37565,
                                            "src": "4042:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37622,
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
                                    "functionReturnParameters": 37616,
                                    "id": 37623,
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
                            "id": 37613,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37612,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3981:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37625,
                                    "src": "3976:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37611,
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
                            "id": 37616,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37615,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37625,
                                    "src": "4010:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37614,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37640,
                        "nodeType": "FunctionDefinition",
                        "src": "4078:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37639,
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
                                                        "id": 37635,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37627,
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
                                                        "id": 37633,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "4176:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37634,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4179:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39852,
                                                    "src": "4176:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37636,
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
                                            "id": 37632,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37565,
                                                37580,
                                                37595,
                                                37610,
                                                37625
                                            ],
                                            "referencedDeclaration": 37565,
                                            "src": "4171:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37637,
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
                                    "functionReturnParameters": 37631,
                                    "id": 37638,
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
                            "id": 37628,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37627,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4110:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37640,
                                    "src": "4097:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37626,
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
                            "id": 37631,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37630,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37640,
                                    "src": "4139:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37629,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37655,
                        "nodeType": "FunctionDefinition",
                        "src": "4207:120:153",
                        "nodes": [],
                        "body": {
                            "id": 37654,
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
                                                        "id": 37650,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37642,
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
                                                        "id": 37648,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "4302:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37649,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4305:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39859,
                                                    "src": "4302:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37651,
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
                                            "id": 37647,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37565,
                                                37580,
                                                37595,
                                                37610,
                                                37625
                                            ],
                                            "referencedDeclaration": 37565,
                                            "src": "4297:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37652,
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
                                    "functionReturnParameters": 37646,
                                    "id": 37653,
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
                            "id": 37643,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37642,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4236:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37655,
                                    "src": "4228:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37641,
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
                            "id": 37646,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37645,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37655,
                                    "src": "4265:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37644,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37668,
                        "nodeType": "FunctionDefinition",
                        "src": "4333:125:153",
                        "nodes": [],
                        "body": {
                            "id": 37667,
                            "nodeType": "Block",
                            "src": "4408:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37663,
                                                "name": "MAGENTA",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37202,
                                                "src": "4437:7:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37664,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37657,
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
                                            "id": 37662,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37243,
                                            "src": "4425:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37665,
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
                                    "functionReturnParameters": 37661,
                                    "id": 37666,
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
                            "id": 37658,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37657,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4364:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37668,
                                    "src": "4350:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37656,
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
                            "id": 37661,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37660,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37668,
                                    "src": "4393:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37659,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37683,
                        "nodeType": "FunctionDefinition",
                        "src": "4464:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37682,
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
                                                        "id": 37678,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37670,
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
                                                        "id": 37676,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "4558:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37677,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4561:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39873,
                                                    "src": "4558:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37679,
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
                                            "id": 37675,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37668,
                                                37683,
                                                37698,
                                                37713,
                                                37728
                                            ],
                                            "referencedDeclaration": 37668,
                                            "src": "4550:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37680,
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
                                    "functionReturnParameters": 37674,
                                    "id": 37681,
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
                            "id": 37671,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37670,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4489:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37683,
                                    "src": "4481:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37669,
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
                            "id": 37674,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37673,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37683,
                                    "src": "4518:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37672,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37698,
                        "nodeType": "FunctionDefinition",
                        "src": "4589:118:153",
                        "nodes": [],
                        "body": {
                            "id": 37697,
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
                                                        "id": 37693,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37685,
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
                                                        "id": 37691,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "4682:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37692,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4685:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39880,
                                                    "src": "4682:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37694,
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
                                            "id": 37690,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37668,
                                                37683,
                                                37698,
                                                37713,
                                                37728
                                            ],
                                            "referencedDeclaration": 37668,
                                            "src": "4674:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37695,
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
                                    "functionReturnParameters": 37689,
                                    "id": 37696,
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
                            "id": 37686,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37685,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4613:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37698,
                                    "src": "4606:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37684,
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
                            "id": 37689,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37688,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37698,
                                    "src": "4642:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37687,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37713,
                        "nodeType": "FunctionDefinition",
                        "src": "4713:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37712,
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
                                                        "id": 37708,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37700,
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
                                                        "id": 37706,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "4807:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37707,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4810:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "4807:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37709,
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
                                            "id": 37705,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37668,
                                                37683,
                                                37698,
                                                37713,
                                                37728
                                            ],
                                            "referencedDeclaration": 37668,
                                            "src": "4799:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37710,
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
                                    "functionReturnParameters": 37704,
                                    "id": 37711,
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
                            "id": 37701,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37700,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4738:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37713,
                                    "src": "4730:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37699,
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
                            "id": 37704,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37703,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37713,
                                    "src": "4767:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37702,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37728,
                        "nodeType": "FunctionDefinition",
                        "src": "4838:116:153",
                        "nodes": [],
                        "body": {
                            "id": 37727,
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
                                                        "id": 37723,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37715,
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
                                                        "id": 37721,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "4929:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37722,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4932:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39866,
                                                    "src": "4929:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37724,
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
                                            "id": 37720,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37668,
                                                37683,
                                                37698,
                                                37713,
                                                37728
                                            ],
                                            "referencedDeclaration": 37668,
                                            "src": "4921:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37725,
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
                                    "functionReturnParameters": 37719,
                                    "id": 37726,
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
                            "id": 37716,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37715,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4860:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37728,
                                    "src": "4855:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37714,
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
                            "id": 37719,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37718,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37728,
                                    "src": "4889:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37717,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37743,
                        "nodeType": "FunctionDefinition",
                        "src": "4960:129:153",
                        "nodes": [],
                        "body": {
                            "id": 37742,
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
                                                        "id": 37738,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37730,
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
                                                        "id": 37736,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "5064:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37737,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5067:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39852,
                                                    "src": "5064:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37739,
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
                                            "id": 37735,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37668,
                                                37683,
                                                37698,
                                                37713,
                                                37728
                                            ],
                                            "referencedDeclaration": 37668,
                                            "src": "5056:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37740,
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
                                    "functionReturnParameters": 37734,
                                    "id": 37741,
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
                            "id": 37731,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37730,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4995:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37743,
                                    "src": "4982:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37729,
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
                            "id": 37734,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37733,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37743,
                                    "src": "5024:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37732,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37758,
                        "nodeType": "FunctionDefinition",
                        "src": "5095:126:153",
                        "nodes": [],
                        "body": {
                            "id": 37757,
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
                                                        "id": 37753,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37745,
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
                                                        "id": 37751,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "5196:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37752,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5199:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39859,
                                                    "src": "5196:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37754,
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
                                            "id": 37750,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37668,
                                                37683,
                                                37698,
                                                37713,
                                                37728
                                            ],
                                            "referencedDeclaration": 37668,
                                            "src": "5188:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37755,
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
                                    "functionReturnParameters": 37749,
                                    "id": 37756,
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
                            "id": 37746,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37745,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5127:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37758,
                                    "src": "5119:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37744,
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
                            "id": 37749,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37748,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37758,
                                    "src": "5156:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37747,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37771,
                        "nodeType": "FunctionDefinition",
                        "src": "5227:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37770,
                            "nodeType": "Block",
                            "src": "5299:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37766,
                                                "name": "CYAN",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37205,
                                                "src": "5328:4:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37767,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37760,
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
                                            "id": 37765,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37243,
                                            "src": "5316:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37768,
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
                                    "functionReturnParameters": 37764,
                                    "id": 37769,
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
                            "id": 37761,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37760,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5255:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37771,
                                    "src": "5241:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37759,
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
                            "id": 37764,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37763,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37771,
                                    "src": "5284:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37762,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37786,
                        "nodeType": "FunctionDefinition",
                        "src": "5352:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37785,
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
                                                        "id": 37781,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37773,
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
                                                        "id": 37779,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "5440:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37780,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5443:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39873,
                                                    "src": "5440:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37782,
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
                                            "id": 37778,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37771,
                                                37786,
                                                37801,
                                                37816,
                                                37831
                                            ],
                                            "referencedDeclaration": 37771,
                                            "src": "5435:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37783,
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
                                    "functionReturnParameters": 37777,
                                    "id": 37784,
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
                            "id": 37774,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37773,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5374:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37786,
                                    "src": "5366:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37772,
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
                            "id": 37777,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37776,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37786,
                                    "src": "5403:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37775,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37801,
                        "nodeType": "FunctionDefinition",
                        "src": "5471:112:153",
                        "nodes": [],
                        "body": {
                            "id": 37800,
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
                                                        "id": 37796,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37788,
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
                                                        "id": 37794,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "5558:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37795,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5561:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39880,
                                                    "src": "5558:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37797,
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
                                            "id": 37793,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37771,
                                                37786,
                                                37801,
                                                37816,
                                                37831
                                            ],
                                            "referencedDeclaration": 37771,
                                            "src": "5553:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37798,
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
                                    "functionReturnParameters": 37792,
                                    "id": 37799,
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
                            "id": 37789,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37788,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5492:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37801,
                                    "src": "5485:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37787,
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
                            "id": 37792,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37791,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37801,
                                    "src": "5521:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37790,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37816,
                        "nodeType": "FunctionDefinition",
                        "src": "5589:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37815,
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
                                                        "id": 37811,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37803,
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
                                                        "id": 37809,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "5677:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37810,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5680:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "5677:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37812,
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
                                            "id": 37808,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37771,
                                                37786,
                                                37801,
                                                37816,
                                                37831
                                            ],
                                            "referencedDeclaration": 37771,
                                            "src": "5672:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37813,
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
                                    "functionReturnParameters": 37807,
                                    "id": 37814,
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
                            "id": 37804,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37803,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5611:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37816,
                                    "src": "5603:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37802,
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
                            "id": 37807,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37806,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37816,
                                    "src": "5640:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37805,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37831,
                        "nodeType": "FunctionDefinition",
                        "src": "5708:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37830,
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
                                                        "id": 37826,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37818,
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
                                                        "id": 37824,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "5793:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37825,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5796:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39866,
                                                    "src": "5793:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37827,
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
                                            "id": 37823,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37771,
                                                37786,
                                                37801,
                                                37816,
                                                37831
                                            ],
                                            "referencedDeclaration": 37771,
                                            "src": "5788:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37828,
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
                                    "functionReturnParameters": 37822,
                                    "id": 37829,
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
                            "id": 37819,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37818,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5727:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37831,
                                    "src": "5722:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37817,
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
                            "id": 37822,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37821,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37831,
                                    "src": "5756:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37820,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37846,
                        "nodeType": "FunctionDefinition",
                        "src": "5824:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37845,
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
                                                        "id": 37841,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37833,
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
                                                        "id": 37839,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "5922:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37840,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5925:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39852,
                                                    "src": "5922:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37842,
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
                                            "id": 37838,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37771,
                                                37786,
                                                37801,
                                                37816,
                                                37831
                                            ],
                                            "referencedDeclaration": 37771,
                                            "src": "5917:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37843,
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
                                    "functionReturnParameters": 37837,
                                    "id": 37844,
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
                            "id": 37834,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37833,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5856:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37846,
                                    "src": "5843:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37832,
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
                            "id": 37837,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37836,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37846,
                                    "src": "5885:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37835,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37861,
                        "nodeType": "FunctionDefinition",
                        "src": "5953:120:153",
                        "nodes": [],
                        "body": {
                            "id": 37860,
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
                                                        "id": 37856,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37848,
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
                                                        "id": 37854,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "6048:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37855,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6051:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39859,
                                                    "src": "6048:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37857,
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
                                            "id": 37853,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37771,
                                                37786,
                                                37801,
                                                37816,
                                                37831
                                            ],
                                            "referencedDeclaration": 37771,
                                            "src": "6043:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37858,
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
                                    "functionReturnParameters": 37852,
                                    "id": 37859,
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
                            "id": 37849,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37848,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5982:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37861,
                                    "src": "5974:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37847,
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
                            "id": 37852,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37851,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37861,
                                    "src": "6011:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37850,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37874,
                        "nodeType": "FunctionDefinition",
                        "src": "6079:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37873,
                            "nodeType": "Block",
                            "src": "6151:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37869,
                                                "name": "BOLD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37208,
                                                "src": "6180:4:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37870,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37863,
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
                                            "id": 37868,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37243,
                                            "src": "6168:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37871,
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
                                    "functionReturnParameters": 37867,
                                    "id": 37872,
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
                            "id": 37864,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37863,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6107:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37874,
                                    "src": "6093:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37862,
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
                            "id": 37867,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37866,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37874,
                                    "src": "6136:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37865,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37889,
                        "nodeType": "FunctionDefinition",
                        "src": "6204:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37888,
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
                                                        "id": 37884,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37876,
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
                                                        "id": 37882,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "6292:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37883,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6295:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39873,
                                                    "src": "6292:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37885,
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
                                            "id": 37881,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37874,
                                                37889,
                                                37904,
                                                37919,
                                                37934
                                            ],
                                            "referencedDeclaration": 37874,
                                            "src": "6287:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37886,
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
                                    "functionReturnParameters": 37880,
                                    "id": 37887,
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
                            "id": 37877,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37876,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6226:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37889,
                                    "src": "6218:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37875,
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
                            "id": 37880,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37879,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37889,
                                    "src": "6255:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37878,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37904,
                        "nodeType": "FunctionDefinition",
                        "src": "6323:112:153",
                        "nodes": [],
                        "body": {
                            "id": 37903,
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
                                                        "id": 37899,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37891,
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
                                                        "id": 37897,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "6410:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37898,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6413:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39880,
                                                    "src": "6410:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37900,
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
                                            "id": 37896,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37874,
                                                37889,
                                                37904,
                                                37919,
                                                37934
                                            ],
                                            "referencedDeclaration": 37874,
                                            "src": "6405:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37901,
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
                                    "functionReturnParameters": 37895,
                                    "id": 37902,
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
                            "id": 37892,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37891,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6344:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37904,
                                    "src": "6337:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37890,
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
                            "id": 37895,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37894,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37904,
                                    "src": "6373:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37893,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37919,
                        "nodeType": "FunctionDefinition",
                        "src": "6441:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37918,
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
                                                        "id": 37914,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37906,
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
                                                        "id": 37912,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "6529:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37913,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6532:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "6529:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37915,
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
                                            "id": 37911,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37874,
                                                37889,
                                                37904,
                                                37919,
                                                37934
                                            ],
                                            "referencedDeclaration": 37874,
                                            "src": "6524:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37916,
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
                                    "functionReturnParameters": 37910,
                                    "id": 37917,
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
                            "id": 37907,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37906,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6463:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37919,
                                    "src": "6455:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37905,
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
                            "id": 37910,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37909,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37919,
                                    "src": "6492:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37908,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37934,
                        "nodeType": "FunctionDefinition",
                        "src": "6560:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37933,
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
                                                        "id": 37929,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37921,
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
                                                        "id": 37927,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "6645:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37928,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6648:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39866,
                                                    "src": "6645:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37930,
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
                                            "id": 37926,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37874,
                                                37889,
                                                37904,
                                                37919,
                                                37934
                                            ],
                                            "referencedDeclaration": 37874,
                                            "src": "6640:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37931,
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
                                    "functionReturnParameters": 37925,
                                    "id": 37932,
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
                            "id": 37922,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37921,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6579:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37934,
                                    "src": "6574:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37920,
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
                            "id": 37925,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37924,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37934,
                                    "src": "6608:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37923,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37949,
                        "nodeType": "FunctionDefinition",
                        "src": "6676:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37948,
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
                                                        "id": 37944,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37936,
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
                                                        "id": 37942,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "6774:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37943,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6777:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39852,
                                                    "src": "6774:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37945,
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
                                            "id": 37941,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37874,
                                                37889,
                                                37904,
                                                37919,
                                                37934
                                            ],
                                            "referencedDeclaration": 37874,
                                            "src": "6769:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37946,
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
                                    "functionReturnParameters": 37940,
                                    "id": 37947,
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
                            "id": 37937,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37936,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6708:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37949,
                                    "src": "6695:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37935,
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
                            "id": 37940,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37939,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37949,
                                    "src": "6737:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37938,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37964,
                        "nodeType": "FunctionDefinition",
                        "src": "6805:120:153",
                        "nodes": [],
                        "body": {
                            "id": 37963,
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
                                                        "id": 37959,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37951,
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
                                                        "id": 37957,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "6900:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37958,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6903:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39859,
                                                    "src": "6900:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37960,
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
                                            "id": 37956,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37874,
                                                37889,
                                                37904,
                                                37919,
                                                37934
                                            ],
                                            "referencedDeclaration": 37874,
                                            "src": "6895:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37961,
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
                                    "functionReturnParameters": 37955,
                                    "id": 37962,
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
                            "id": 37952,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37951,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6834:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37964,
                                    "src": "6826:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37950,
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
                            "id": 37955,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37954,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37964,
                                    "src": "6863:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37953,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37977,
                        "nodeType": "FunctionDefinition",
                        "src": "6931:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37976,
                            "nodeType": "Block",
                            "src": "7002:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37972,
                                                "name": "DIM",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37211,
                                                "src": "7031:3:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37973,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37966,
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
                                            "id": 37971,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37243,
                                            "src": "7019:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37974,
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
                                    "functionReturnParameters": 37970,
                                    "id": 37975,
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
                            "id": 37967,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37966,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6958:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37977,
                                    "src": "6944:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37965,
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
                            "id": 37970,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37969,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37977,
                                    "src": "6987:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37968,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37992,
                        "nodeType": "FunctionDefinition",
                        "src": "7054:111:153",
                        "nodes": [],
                        "body": {
                            "id": 37991,
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
                                                        "id": 37987,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37979,
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
                                                        "id": 37985,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "7140:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37986,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7143:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39873,
                                                    "src": "7140:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37988,
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
                                            "id": 37984,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37977,
                                                37992,
                                                38007,
                                                38022,
                                                38037
                                            ],
                                            "referencedDeclaration": 37977,
                                            "src": "7136:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37989,
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
                                    "functionReturnParameters": 37983,
                                    "id": 37990,
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
                            "id": 37980,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37979,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7075:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37992,
                                    "src": "7067:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37978,
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
                            "id": 37983,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37982,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37992,
                                    "src": "7104:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37981,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38007,
                        "nodeType": "FunctionDefinition",
                        "src": "7171:110:153",
                        "nodes": [],
                        "body": {
                            "id": 38006,
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
                                                        "id": 38002,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37994,
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
                                                        "id": 38000,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "7256:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38001,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7259:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39880,
                                                    "src": "7256:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38003,
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
                                            "id": 37999,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37977,
                                                37992,
                                                38007,
                                                38022,
                                                38037
                                            ],
                                            "referencedDeclaration": 37977,
                                            "src": "7252:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38004,
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
                                    "functionReturnParameters": 37998,
                                    "id": 38005,
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
                            "id": 37995,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37994,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7191:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38007,
                                    "src": "7184:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37993,
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
                            "id": 37998,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37997,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38007,
                                    "src": "7220:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37996,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38022,
                        "nodeType": "FunctionDefinition",
                        "src": "7287:111:153",
                        "nodes": [],
                        "body": {
                            "id": 38021,
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
                                                        "id": 38017,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38009,
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
                                                        "id": 38015,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "7373:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38016,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7376:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "7373:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38018,
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
                                            "id": 38014,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37977,
                                                37992,
                                                38007,
                                                38022,
                                                38037
                                            ],
                                            "referencedDeclaration": 37977,
                                            "src": "7369:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38019,
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
                                    "functionReturnParameters": 38013,
                                    "id": 38020,
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
                            "id": 38010,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38009,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7308:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38022,
                                    "src": "7300:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38008,
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
                            "id": 38013,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38012,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38022,
                                    "src": "7337:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38011,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38037,
                        "nodeType": "FunctionDefinition",
                        "src": "7404:108:153",
                        "nodes": [],
                        "body": {
                            "id": 38036,
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
                                                        "id": 38032,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38024,
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
                                                        "id": 38030,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "7487:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38031,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7490:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39866,
                                                    "src": "7487:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38033,
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
                                            "id": 38029,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37977,
                                                37992,
                                                38007,
                                                38022,
                                                38037
                                            ],
                                            "referencedDeclaration": 37977,
                                            "src": "7483:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38034,
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
                                    "functionReturnParameters": 38028,
                                    "id": 38035,
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
                            "id": 38025,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38024,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7422:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38037,
                                    "src": "7417:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 38023,
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
                            "id": 38028,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38027,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38037,
                                    "src": "7451:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38026,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38052,
                        "nodeType": "FunctionDefinition",
                        "src": "7518:121:153",
                        "nodes": [],
                        "body": {
                            "id": 38051,
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
                                                        "id": 38047,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38039,
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
                                                        "id": 38045,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "7614:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38046,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7617:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39852,
                                                    "src": "7614:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38048,
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
                                            "id": 38044,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37977,
                                                37992,
                                                38007,
                                                38022,
                                                38037
                                            ],
                                            "referencedDeclaration": 37977,
                                            "src": "7610:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38049,
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
                                    "functionReturnParameters": 38043,
                                    "id": 38050,
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
                            "id": 38040,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38039,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7549:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38052,
                                    "src": "7536:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38038,
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
                            "id": 38043,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38042,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38052,
                                    "src": "7578:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38041,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38067,
                        "nodeType": "FunctionDefinition",
                        "src": "7645:118:153",
                        "nodes": [],
                        "body": {
                            "id": 38066,
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
                                                        "id": 38062,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38054,
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
                                                        "id": 38060,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "7738:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38061,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7741:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39859,
                                                    "src": "7738:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38063,
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
                                            "id": 38059,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37977,
                                                37992,
                                                38007,
                                                38022,
                                                38037
                                            ],
                                            "referencedDeclaration": 37977,
                                            "src": "7734:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38064,
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
                                    "functionReturnParameters": 38058,
                                    "id": 38065,
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
                            "id": 38055,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38054,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7673:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38067,
                                    "src": "7665:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38053,
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
                            "id": 38058,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38057,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38067,
                                    "src": "7702:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38056,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38080,
                        "nodeType": "FunctionDefinition",
                        "src": "7769:123:153",
                        "nodes": [],
                        "body": {
                            "id": 38079,
                            "nodeType": "Block",
                            "src": "7843:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 38075,
                                                "name": "ITALIC",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37214,
                                                "src": "7872:6:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 38076,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38069,
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
                                            "id": 38074,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37243,
                                            "src": "7860:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38077,
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
                                    "functionReturnParameters": 38073,
                                    "id": 38078,
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
                            "id": 38070,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38069,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7799:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38080,
                                    "src": "7785:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38068,
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
                            "id": 38073,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38072,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38080,
                                    "src": "7828:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38071,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38095,
                        "nodeType": "FunctionDefinition",
                        "src": "7898:117:153",
                        "nodes": [],
                        "body": {
                            "id": 38094,
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
                                                        "id": 38090,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38082,
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
                                                        "id": 38088,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "7990:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38089,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7993:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39873,
                                                    "src": "7990:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38091,
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
                                            "id": 38087,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38080,
                                                38095,
                                                38110,
                                                38125,
                                                38140
                                            ],
                                            "referencedDeclaration": 38080,
                                            "src": "7983:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38092,
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
                                    "functionReturnParameters": 38086,
                                    "id": 38093,
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
                            "id": 38083,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38082,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7922:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38095,
                                    "src": "7914:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38081,
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
                            "id": 38086,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38085,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38095,
                                    "src": "7951:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38084,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38110,
                        "nodeType": "FunctionDefinition",
                        "src": "8021:116:153",
                        "nodes": [],
                        "body": {
                            "id": 38109,
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
                                                        "id": 38105,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38097,
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
                                                        "id": 38103,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "8112:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38104,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8115:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39880,
                                                    "src": "8112:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38106,
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
                                            "id": 38102,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38080,
                                                38095,
                                                38110,
                                                38125,
                                                38140
                                            ],
                                            "referencedDeclaration": 38080,
                                            "src": "8105:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38107,
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
                                    "functionReturnParameters": 38101,
                                    "id": 38108,
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
                            "id": 38098,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38097,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8044:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38110,
                                    "src": "8037:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38096,
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
                            "id": 38101,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38100,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38110,
                                    "src": "8073:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38099,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38125,
                        "nodeType": "FunctionDefinition",
                        "src": "8143:117:153",
                        "nodes": [],
                        "body": {
                            "id": 38124,
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
                                                        "id": 38120,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38112,
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
                                                        "id": 38118,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "8235:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38119,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8238:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "8235:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38121,
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
                                            "id": 38117,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38080,
                                                38095,
                                                38110,
                                                38125,
                                                38140
                                            ],
                                            "referencedDeclaration": 38080,
                                            "src": "8228:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38122,
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
                                    "functionReturnParameters": 38116,
                                    "id": 38123,
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
                            "id": 38113,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38112,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8167:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38125,
                                    "src": "8159:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38111,
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
                            "id": 38116,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38115,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38125,
                                    "src": "8196:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38114,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38140,
                        "nodeType": "FunctionDefinition",
                        "src": "8266:114:153",
                        "nodes": [],
                        "body": {
                            "id": 38139,
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
                                                        "id": 38135,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38127,
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
                                                        "id": 38133,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "8355:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38134,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8358:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39866,
                                                    "src": "8355:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38136,
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
                                            "id": 38132,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38080,
                                                38095,
                                                38110,
                                                38125,
                                                38140
                                            ],
                                            "referencedDeclaration": 38080,
                                            "src": "8348:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38137,
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
                                    "functionReturnParameters": 38131,
                                    "id": 38138,
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
                            "id": 38128,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38127,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8287:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38140,
                                    "src": "8282:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 38126,
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
                            "id": 38131,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38130,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38140,
                                    "src": "8316:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38129,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38155,
                        "nodeType": "FunctionDefinition",
                        "src": "8386:127:153",
                        "nodes": [],
                        "body": {
                            "id": 38154,
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
                                                        "id": 38150,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38142,
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
                                                        "id": 38148,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "8488:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38149,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8491:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39852,
                                                    "src": "8488:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38151,
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
                                            "id": 38147,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38080,
                                                38095,
                                                38110,
                                                38125,
                                                38140
                                            ],
                                            "referencedDeclaration": 38080,
                                            "src": "8481:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38152,
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
                                    "functionReturnParameters": 38146,
                                    "id": 38153,
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
                            "id": 38143,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38142,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8420:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38155,
                                    "src": "8407:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38141,
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
                            "id": 38146,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38145,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38155,
                                    "src": "8449:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38144,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38170,
                        "nodeType": "FunctionDefinition",
                        "src": "8519:124:153",
                        "nodes": [],
                        "body": {
                            "id": 38169,
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
                                                        "id": 38165,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38157,
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
                                                        "id": 38163,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "8618:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38164,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8621:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39859,
                                                    "src": "8618:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38166,
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
                                            "id": 38162,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38080,
                                                38095,
                                                38110,
                                                38125,
                                                38140
                                            ],
                                            "referencedDeclaration": 38080,
                                            "src": "8611:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38167,
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
                                    "functionReturnParameters": 38161,
                                    "id": 38168,
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
                            "id": 38158,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38157,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8550:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38170,
                                    "src": "8542:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38156,
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
                            "id": 38161,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38160,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38170,
                                    "src": "8579:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38159,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38183,
                        "nodeType": "FunctionDefinition",
                        "src": "8649:129:153",
                        "nodes": [],
                        "body": {
                            "id": 38182,
                            "nodeType": "Block",
                            "src": "8726:52:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 38178,
                                                "name": "UNDERLINE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37217,
                                                "src": "8755:9:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 38179,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38172,
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
                                            "id": 38177,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37243,
                                            "src": "8743:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38180,
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
                                    "functionReturnParameters": 38176,
                                    "id": 38181,
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
                            "id": 38173,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38172,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8682:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38183,
                                    "src": "8668:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38171,
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
                            "id": 38176,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38175,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38183,
                                    "src": "8711:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38174,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38198,
                        "nodeType": "FunctionDefinition",
                        "src": "8784:123:153",
                        "nodes": [],
                        "body": {
                            "id": 38197,
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
                                                        "id": 38193,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38185,
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
                                                        "id": 38191,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "8882:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38192,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8885:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39873,
                                                    "src": "8882:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38194,
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
                                            "id": 38190,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38183,
                                                38198,
                                                38213,
                                                38228,
                                                38243
                                            ],
                                            "referencedDeclaration": 38183,
                                            "src": "8872:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38195,
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
                                    "functionReturnParameters": 38189,
                                    "id": 38196,
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
                            "id": 38186,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38185,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8811:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38198,
                                    "src": "8803:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38184,
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
                            "id": 38189,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38188,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38198,
                                    "src": "8840:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38187,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38213,
                        "nodeType": "FunctionDefinition",
                        "src": "8913:122:153",
                        "nodes": [],
                        "body": {
                            "id": 38212,
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
                                                        "id": 38208,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38200,
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
                                                        "id": 38206,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "9010:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38207,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9013:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39880,
                                                    "src": "9010:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38209,
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
                                            "id": 38205,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38183,
                                                38198,
                                                38213,
                                                38228,
                                                38243
                                            ],
                                            "referencedDeclaration": 38183,
                                            "src": "9000:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38210,
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
                                    "functionReturnParameters": 38204,
                                    "id": 38211,
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
                            "id": 38201,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38200,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8939:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38213,
                                    "src": "8932:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38199,
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
                            "id": 38204,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38203,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38213,
                                    "src": "8968:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38202,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38228,
                        "nodeType": "FunctionDefinition",
                        "src": "9041:123:153",
                        "nodes": [],
                        "body": {
                            "id": 38227,
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
                                                        "id": 38223,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38215,
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
                                                        "id": 38221,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "9139:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38222,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9142:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "9139:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38224,
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
                                            "id": 38220,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38183,
                                                38198,
                                                38213,
                                                38228,
                                                38243
                                            ],
                                            "referencedDeclaration": 38183,
                                            "src": "9129:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38225,
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
                                    "functionReturnParameters": 38219,
                                    "id": 38226,
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
                            "id": 38216,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38215,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9068:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38228,
                                    "src": "9060:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38214,
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
                            "id": 38219,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38218,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38228,
                                    "src": "9097:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38217,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38243,
                        "nodeType": "FunctionDefinition",
                        "src": "9170:120:153",
                        "nodes": [],
                        "body": {
                            "id": 38242,
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
                                                        "id": 38238,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38230,
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
                                                        "id": 38236,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "9265:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38237,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9268:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39866,
                                                    "src": "9265:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38239,
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
                                            "id": 38235,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38183,
                                                38198,
                                                38213,
                                                38228,
                                                38243
                                            ],
                                            "referencedDeclaration": 38183,
                                            "src": "9255:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38240,
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
                                    "functionReturnParameters": 38234,
                                    "id": 38241,
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
                            "id": 38231,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38230,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9194:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38243,
                                    "src": "9189:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 38229,
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
                            "id": 38234,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38233,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38243,
                                    "src": "9223:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38232,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38258,
                        "nodeType": "FunctionDefinition",
                        "src": "9296:133:153",
                        "nodes": [],
                        "body": {
                            "id": 38257,
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
                                                        "id": 38253,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38245,
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
                                                        "id": 38251,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "9404:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38252,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9407:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39852,
                                                    "src": "9404:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38254,
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
                                            "id": 38250,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38183,
                                                38198,
                                                38213,
                                                38228,
                                                38243
                                            ],
                                            "referencedDeclaration": 38183,
                                            "src": "9394:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38255,
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
                                    "functionReturnParameters": 38249,
                                    "id": 38256,
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
                            "id": 38246,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38245,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9333:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38258,
                                    "src": "9320:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38244,
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
                            "id": 38249,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38248,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38258,
                                    "src": "9362:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38247,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38273,
                        "nodeType": "FunctionDefinition",
                        "src": "9435:130:153",
                        "nodes": [],
                        "body": {
                            "id": 38272,
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
                                                        "id": 38268,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38260,
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
                                                        "id": 38266,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "9540:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38267,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9543:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39859,
                                                    "src": "9540:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38269,
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
                                            "id": 38265,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38183,
                                                38198,
                                                38213,
                                                38228,
                                                38243
                                            ],
                                            "referencedDeclaration": 38183,
                                            "src": "9530:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38270,
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
                                    "functionReturnParameters": 38264,
                                    "id": 38271,
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
                            "id": 38261,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38260,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9469:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38273,
                                    "src": "9461:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38259,
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
                            "id": 38264,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38263,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38273,
                                    "src": "9498:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38262,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38286,
                        "nodeType": "FunctionDefinition",
                        "src": "9571:125:153",
                        "nodes": [],
                        "body": {
                            "id": 38285,
                            "nodeType": "Block",
                            "src": "9646:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 38281,
                                                "name": "INVERSE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37220,
                                                "src": "9675:7:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 38282,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38275,
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
                                            "id": 38280,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37243,
                                            "src": "9663:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38283,
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
                                    "functionReturnParameters": 38279,
                                    "id": 38284,
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
                            "id": 38276,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38275,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9602:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38286,
                                    "src": "9588:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38274,
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
                            "id": 38279,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38278,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38286,
                                    "src": "9631:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38277,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38301,
                        "nodeType": "FunctionDefinition",
                        "src": "9702:119:153",
                        "nodes": [],
                        "body": {
                            "id": 38300,
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
                                                        "id": 38296,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38288,
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
                                                        "id": 38294,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "9796:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38295,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9799:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39873,
                                                    "src": "9796:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38297,
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
                                            "id": 38293,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38286,
                                                38301,
                                                38316,
                                                38331,
                                                38346
                                            ],
                                            "referencedDeclaration": 38286,
                                            "src": "9788:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38298,
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
                                    "functionReturnParameters": 38292,
                                    "id": 38299,
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
                            "id": 38289,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38288,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9727:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38301,
                                    "src": "9719:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38287,
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
                            "id": 38292,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38291,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38301,
                                    "src": "9756:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38290,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38316,
                        "nodeType": "FunctionDefinition",
                        "src": "9827:118:153",
                        "nodes": [],
                        "body": {
                            "id": 38315,
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
                                                        "id": 38311,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38303,
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
                                                        "id": 38309,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "9920:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38310,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9923:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39880,
                                                    "src": "9920:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38312,
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
                                            "id": 38308,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38286,
                                                38301,
                                                38316,
                                                38331,
                                                38346
                                            ],
                                            "referencedDeclaration": 38286,
                                            "src": "9912:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38313,
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
                                    "functionReturnParameters": 38307,
                                    "id": 38314,
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
                            "id": 38304,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38303,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9851:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38316,
                                    "src": "9844:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38302,
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
                            "id": 38307,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38306,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38316,
                                    "src": "9880:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38305,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38331,
                        "nodeType": "FunctionDefinition",
                        "src": "9951:119:153",
                        "nodes": [],
                        "body": {
                            "id": 38330,
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
                                                        "id": 38326,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38318,
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
                                                        "id": 38324,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "10045:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38325,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10048:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "10045:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38327,
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
                                            "id": 38323,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38286,
                                                38301,
                                                38316,
                                                38331,
                                                38346
                                            ],
                                            "referencedDeclaration": 38286,
                                            "src": "10037:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38328,
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
                                    "functionReturnParameters": 38322,
                                    "id": 38329,
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
                            "id": 38319,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38318,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9976:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38331,
                                    "src": "9968:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38317,
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
                            "id": 38322,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38321,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38331,
                                    "src": "10005:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38320,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38346,
                        "nodeType": "FunctionDefinition",
                        "src": "10076:116:153",
                        "nodes": [],
                        "body": {
                            "id": 38345,
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
                                                        "id": 38341,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38333,
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
                                                        "id": 38339,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "10167:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38340,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10170:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39866,
                                                    "src": "10167:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38342,
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
                                            "id": 38338,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38286,
                                                38301,
                                                38316,
                                                38331,
                                                38346
                                            ],
                                            "referencedDeclaration": 38286,
                                            "src": "10159:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38343,
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
                                    "functionReturnParameters": 38337,
                                    "id": 38344,
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
                            "id": 38334,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38333,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "10098:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38346,
                                    "src": "10093:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 38332,
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
                            "id": 38337,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38336,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38346,
                                    "src": "10127:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38335,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38361,
                        "nodeType": "FunctionDefinition",
                        "src": "10198:129:153",
                        "nodes": [],
                        "body": {
                            "id": 38360,
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
                                                        "id": 38356,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38348,
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
                                                        "id": 38354,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "10302:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38355,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10305:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39852,
                                                    "src": "10302:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38357,
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
                                            "id": 38353,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38286,
                                                38301,
                                                38316,
                                                38331,
                                                38346
                                            ],
                                            "referencedDeclaration": 38286,
                                            "src": "10294:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38358,
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
                                    "functionReturnParameters": 38352,
                                    "id": 38359,
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
                            "id": 38349,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38348,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "10233:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38361,
                                    "src": "10220:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38347,
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
                            "id": 38352,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38351,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38361,
                                    "src": "10262:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38350,
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
                        "scope": 38377,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38376,
                        "nodeType": "FunctionDefinition",
                        "src": "10333:126:153",
                        "nodes": [],
                        "body": {
                            "id": 38375,
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
                                                        "id": 38371,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38363,
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
                                                        "id": 38369,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37187,
                                                        "src": "10434:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40341",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38370,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10437:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39859,
                                                    "src": "10434:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38372,
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
                                            "id": 38368,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38286,
                                                38301,
                                                38316,
                                                38331,
                                                38346
                                            ],
                                            "referencedDeclaration": 38286,
                                            "src": "10426:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38373,
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
                                    "functionReturnParameters": 38367,
                                    "id": 38374,
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
                            "id": 38364,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38363,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "10365:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38376,
                                    "src": "10357:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38362,
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
                            "id": 38367,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38366,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38376,
                                    "src": "10394:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38365,
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
                        "scope": 38377,
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
                    38377
                ],
                "name": "StdStyle",
                "nameLocation": "108:8:153",
                "scope": 38378,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 153
};
