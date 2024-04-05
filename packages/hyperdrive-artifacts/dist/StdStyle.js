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
        "id": 38269,
        "exportedSymbols": {
            "StdStyle": [
                38268
            ],
            "VmSafe": [
                40232
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:10430:153",
        "nodes": [
            {
                "id": 37059,
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
                "id": 37061,
                "nodeType": "ImportDirective",
                "src": "66:32:153",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "./Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 38269,
                "sourceUnit": 40705,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 37060,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40232,
                            "src": "74:6:153",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 38268,
                "nodeType": "ContractDefinition",
                "src": "100:10361:153",
                "nodes": [
                    {
                        "id": 37078,
                        "nodeType": "VariableDeclaration",
                        "src": "123:92:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "vm",
                        "nameLocation": "147:2:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                            "typeString": "contract VmSafe"
                        },
                        "typeName": {
                            "id": 37063,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 37062,
                                "name": "VmSafe",
                                "nameLocations": [
                                    "123:6:153"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 40232,
                                "src": "123:6:153"
                            },
                            "referencedDeclaration": 40232,
                            "src": "123:6:153",
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
                                                                    "id": 37072,
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
                                                                "id": 37071,
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
                                                            "id": 37073,
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
                                                        "id": 37070,
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
                                                            "id": 37069,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "175:7:153",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 37074,
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
                                                "id": 37068,
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
                                                    "id": 37067,
                                                    "name": "uint160",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "167:7:153",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 37075,
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
                                        "id": 37066,
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
                                            "id": 37065,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "159:7:153",
                                            "typeDescriptions": {}
                                        }
                                    },
                                    "id": 37076,
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
                                "id": 37064,
                                "name": "VmSafe",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 40232,
                                "src": "152:6:153",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_VmSafe_$40232_$",
                                    "typeString": "type(contract VmSafe)"
                                }
                            },
                            "id": 37077,
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
                                "typeIdentifier": "t_contract$_VmSafe_$40232",
                                "typeString": "contract VmSafe"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 37081,
                        "nodeType": "VariableDeclaration",
                        "src": "222:34:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "RED",
                        "nameLocation": "238:3:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37079,
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
                            "id": 37080,
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
                        "id": 37084,
                        "nodeType": "VariableDeclaration",
                        "src": "262:36:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "GREEN",
                        "nameLocation": "278:5:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37082,
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
                            "id": 37083,
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
                        "id": 37087,
                        "nodeType": "VariableDeclaration",
                        "src": "304:37:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "YELLOW",
                        "nameLocation": "320:6:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37085,
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
                            "id": 37086,
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
                        "id": 37090,
                        "nodeType": "VariableDeclaration",
                        "src": "347:35:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BLUE",
                        "nameLocation": "363:4:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37088,
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
                            "id": 37089,
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
                        "id": 37093,
                        "nodeType": "VariableDeclaration",
                        "src": "388:38:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAGENTA",
                        "nameLocation": "404:7:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37091,
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
                            "id": 37092,
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
                        "id": 37096,
                        "nodeType": "VariableDeclaration",
                        "src": "432:35:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CYAN",
                        "nameLocation": "448:4:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37094,
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
                            "id": 37095,
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
                        "id": 37099,
                        "nodeType": "VariableDeclaration",
                        "src": "473:34:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BOLD",
                        "nameLocation": "489:4:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37097,
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
                            "id": 37098,
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
                        "id": 37102,
                        "nodeType": "VariableDeclaration",
                        "src": "513:33:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "DIM",
                        "nameLocation": "529:3:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37100,
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
                            "id": 37101,
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
                        "id": 37105,
                        "nodeType": "VariableDeclaration",
                        "src": "552:36:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ITALIC",
                        "nameLocation": "568:6:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37103,
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
                            "id": 37104,
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
                        "id": 37108,
                        "nodeType": "VariableDeclaration",
                        "src": "594:39:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNDERLINE",
                        "nameLocation": "610:9:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37106,
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
                            "id": 37107,
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
                        "id": 37111,
                        "nodeType": "VariableDeclaration",
                        "src": "639:37:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVERSE",
                        "nameLocation": "655:7:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37109,
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
                            "id": 37110,
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
                        "id": 37114,
                        "nodeType": "VariableDeclaration",
                        "src": "682:35:153",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "RESET",
                        "nameLocation": "698:5:153",
                        "scope": 38268,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 37112,
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
                            "id": 37113,
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
                        "id": 37134,
                        "nodeType": "FunctionDefinition",
                        "src": "724:167:153",
                        "nodes": [],
                        "body": {
                            "id": 37133,
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
                                                        "id": 37127,
                                                        "name": "style",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37116,
                                                        "src": "864:5:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    },
                                                    {
                                                        "id": 37128,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37118,
                                                        "src": "871:4:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    },
                                                    {
                                                        "id": 37129,
                                                        "name": "RESET",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37114,
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
                                                        "id": 37125,
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
                                                    "id": 37126,
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
                                                "id": 37130,
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
                                            "id": 37124,
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
                                                "id": 37123,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "840:6:153",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 37131,
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
                                    "functionReturnParameters": 37122,
                                    "id": 37132,
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
                            "id": 37119,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37116,
                                    "mutability": "mutable",
                                    "name": "style",
                                    "nameLocation": "759:5:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37134,
                                    "src": "745:19:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37115,
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
                                    "id": 37118,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "780:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37134,
                                    "src": "766:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37117,
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
                            "id": 37122,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37121,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37134,
                                    "src": "808:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37120,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 37147,
                        "nodeType": "FunctionDefinition",
                        "src": "897:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37146,
                            "nodeType": "Block",
                            "src": "968:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37142,
                                                "name": "RED",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37081,
                                                "src": "997:3:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37143,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37136,
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
                                            "id": 37141,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37134,
                                            "src": "985:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37144,
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
                                    "functionReturnParameters": 37140,
                                    "id": 37145,
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
                            "id": 37137,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37136,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "924:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37147,
                                    "src": "910:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37135,
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
                            "id": 37140,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37139,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37147,
                                    "src": "953:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37138,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37162,
                        "nodeType": "FunctionDefinition",
                        "src": "1020:111:153",
                        "nodes": [],
                        "body": {
                            "id": 37161,
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
                                                        "id": 37157,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37149,
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
                                                        "id": 37155,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "1106:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37156,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1109:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39764,
                                                    "src": "1106:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37158,
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
                                            "id": 37154,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37147,
                                                37162,
                                                37177,
                                                37192,
                                                37207
                                            ],
                                            "referencedDeclaration": 37147,
                                            "src": "1102:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37159,
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
                                    "functionReturnParameters": 37153,
                                    "id": 37160,
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
                            "id": 37150,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37149,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1041:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37162,
                                    "src": "1033:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37148,
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
                            "id": 37153,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37152,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37162,
                                    "src": "1070:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37151,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37177,
                        "nodeType": "FunctionDefinition",
                        "src": "1137:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37176,
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
                                                        "id": 37172,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37164,
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
                                                        "id": 37170,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "1222:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37171,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1225:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39771,
                                                    "src": "1222:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37173,
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
                                            "id": 37169,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37147,
                                                37162,
                                                37177,
                                                37192,
                                                37207
                                            ],
                                            "referencedDeclaration": 37147,
                                            "src": "1218:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37174,
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
                                    "functionReturnParameters": 37168,
                                    "id": 37175,
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
                            "id": 37165,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37164,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1157:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37177,
                                    "src": "1150:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37163,
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
                            "id": 37168,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37167,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37177,
                                    "src": "1186:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37166,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37192,
                        "nodeType": "FunctionDefinition",
                        "src": "1253:111:153",
                        "nodes": [],
                        "body": {
                            "id": 37191,
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
                                                        "id": 37187,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37179,
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
                                                        "id": 37185,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "1339:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37186,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1342:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39736,
                                                    "src": "1339:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37188,
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
                                            "id": 37184,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37147,
                                                37162,
                                                37177,
                                                37192,
                                                37207
                                            ],
                                            "referencedDeclaration": 37147,
                                            "src": "1335:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37189,
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
                                    "functionReturnParameters": 37183,
                                    "id": 37190,
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
                            "id": 37180,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37179,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1274:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37192,
                                    "src": "1266:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37178,
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
                            "id": 37183,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37182,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37192,
                                    "src": "1303:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37181,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37207,
                        "nodeType": "FunctionDefinition",
                        "src": "1370:108:153",
                        "nodes": [],
                        "body": {
                            "id": 37206,
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
                                                        "id": 37202,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37194,
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
                                                        "id": 37200,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "1453:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37201,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1456:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39757,
                                                    "src": "1453:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37203,
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
                                            "id": 37199,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37147,
                                                37162,
                                                37177,
                                                37192,
                                                37207
                                            ],
                                            "referencedDeclaration": 37147,
                                            "src": "1449:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "1449:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37198,
                                    "id": 37205,
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
                            "id": 37195,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37194,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1388:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37207,
                                    "src": "1383:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37193,
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
                            "id": 37198,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37197,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37207,
                                    "src": "1417:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37196,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37222,
                        "nodeType": "FunctionDefinition",
                        "src": "1484:121:153",
                        "nodes": [],
                        "body": {
                            "id": 37221,
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
                                                        "id": 37217,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37209,
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
                                                        "id": 37215,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "1580:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37216,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1583:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39743,
                                                    "src": "1580:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
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
                                            "id": 37214,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37147,
                                                37162,
                                                37177,
                                                37192,
                                                37207
                                            ],
                                            "referencedDeclaration": 37147,
                                            "src": "1576:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37219,
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
                                    "functionReturnParameters": 37213,
                                    "id": 37220,
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
                            "id": 37210,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37209,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1515:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37222,
                                    "src": "1502:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37208,
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
                            "id": 37213,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37212,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37222,
                                    "src": "1544:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37211,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37237,
                        "nodeType": "FunctionDefinition",
                        "src": "1611:118:153",
                        "nodes": [],
                        "body": {
                            "id": 37236,
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
                                                        "id": 37232,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37224,
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
                                                        "id": 37230,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "1704:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37231,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1707:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39750,
                                                    "src": "1704:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
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
                                            "id": 37229,
                                            "name": "red",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37147,
                                                37162,
                                                37177,
                                                37192,
                                                37207
                                            ],
                                            "referencedDeclaration": 37147,
                                            "src": "1700:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37234,
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
                                    "functionReturnParameters": 37228,
                                    "id": 37235,
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
                            "id": 37225,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37224,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1639:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37237,
                                    "src": "1631:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37223,
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
                            "id": 37228,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37227,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37237,
                                    "src": "1668:13:153",
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37250,
                        "nodeType": "FunctionDefinition",
                        "src": "1735:121:153",
                        "nodes": [],
                        "body": {
                            "id": 37249,
                            "nodeType": "Block",
                            "src": "1808:48:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37245,
                                                "name": "GREEN",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37084,
                                                "src": "1837:5:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37246,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37239,
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
                                            "id": 37244,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37134,
                                            "src": "1825:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
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
                                        "src": "1825:24:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37243,
                                    "id": 37248,
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
                            "id": 37240,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37239,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1764:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37250,
                                    "src": "1750:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37238,
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
                            "id": 37243,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37242,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37250,
                                    "src": "1793:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37241,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37265,
                        "nodeType": "FunctionDefinition",
                        "src": "1862:115:153",
                        "nodes": [],
                        "body": {
                            "id": 37264,
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
                                                        "id": 37260,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37252,
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
                                                        "id": 37258,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "1952:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37259,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1955:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39764,
                                                    "src": "1952:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37261,
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
                                            "id": 37257,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37250,
                                                37265,
                                                37280,
                                                37295,
                                                37310
                                            ],
                                            "referencedDeclaration": 37250,
                                            "src": "1946:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "1946:24:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37256,
                                    "id": 37263,
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
                            "id": 37253,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37252,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "1885:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37265,
                                    "src": "1877:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37251,
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
                            "id": 37256,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37255,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37265,
                                    "src": "1914:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37254,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37280,
                        "nodeType": "FunctionDefinition",
                        "src": "1983:114:153",
                        "nodes": [],
                        "body": {
                            "id": 37279,
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
                                                        "id": 37275,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37267,
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
                                                        "id": 37273,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "2072:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37274,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2075:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39771,
                                                    "src": "2072:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37276,
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
                                            "id": 37272,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37250,
                                                37265,
                                                37280,
                                                37295,
                                                37310
                                            ],
                                            "referencedDeclaration": 37250,
                                            "src": "2066:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "2066:24:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37271,
                                    "id": 37278,
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
                            "id": 37268,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37267,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2005:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37280,
                                    "src": "1998:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37266,
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
                            "id": 37271,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37270,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37280,
                                    "src": "2034:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37269,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37295,
                        "nodeType": "FunctionDefinition",
                        "src": "2103:115:153",
                        "nodes": [],
                        "body": {
                            "id": 37294,
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
                                                        "id": 37290,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37282,
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
                                                        "id": 37288,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "2193:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37289,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2196:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39736,
                                                    "src": "2193:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37291,
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
                                            "id": 37287,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37250,
                                                37265,
                                                37280,
                                                37295,
                                                37310
                                            ],
                                            "referencedDeclaration": 37250,
                                            "src": "2187:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "2187:24:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37286,
                                    "id": 37293,
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
                            "id": 37283,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37282,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2126:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37295,
                                    "src": "2118:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37281,
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
                            "id": 37286,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37285,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37295,
                                    "src": "2155:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37284,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37310,
                        "nodeType": "FunctionDefinition",
                        "src": "2224:112:153",
                        "nodes": [],
                        "body": {
                            "id": 37309,
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
                                                        "id": 37305,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37297,
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
                                                        "id": 37303,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "2311:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37304,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2314:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39757,
                                                    "src": "2311:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37306,
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
                                            "id": 37302,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37250,
                                                37265,
                                                37280,
                                                37295,
                                                37310
                                            ],
                                            "referencedDeclaration": 37250,
                                            "src": "2305:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "2305:24:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37301,
                                    "id": 37308,
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
                            "id": 37298,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37297,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2244:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37310,
                                    "src": "2239:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37296,
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
                            "id": 37301,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37300,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37310,
                                    "src": "2273:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37299,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37325,
                        "nodeType": "FunctionDefinition",
                        "src": "2342:125:153",
                        "nodes": [],
                        "body": {
                            "id": 37324,
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
                                                        "id": 37320,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37312,
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
                                                        "id": 37318,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "2442:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37319,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2445:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39743,
                                                    "src": "2442:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
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
                                            "id": 37317,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37250,
                                                37265,
                                                37280,
                                                37295,
                                                37310
                                            ],
                                            "referencedDeclaration": 37250,
                                            "src": "2436:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37322,
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
                                    "functionReturnParameters": 37316,
                                    "id": 37323,
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
                            "id": 37313,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37312,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2375:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37325,
                                    "src": "2362:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37311,
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
                            "id": 37316,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37315,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37325,
                                    "src": "2404:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37314,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37340,
                        "nodeType": "FunctionDefinition",
                        "src": "2473:122:153",
                        "nodes": [],
                        "body": {
                            "id": 37339,
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
                                                        "id": 37335,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37327,
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
                                                        "id": 37333,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "2570:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37334,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2573:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39750,
                                                    "src": "2570:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
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
                                            "id": 37332,
                                            "name": "green",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37250,
                                                37265,
                                                37280,
                                                37295,
                                                37310
                                            ],
                                            "referencedDeclaration": 37250,
                                            "src": "2564:5:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37337,
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
                                    "functionReturnParameters": 37331,
                                    "id": 37338,
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
                            "id": 37328,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37327,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2503:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37340,
                                    "src": "2495:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37326,
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
                            "id": 37331,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37330,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37340,
                                    "src": "2532:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37329,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37353,
                        "nodeType": "FunctionDefinition",
                        "src": "2601:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37352,
                            "nodeType": "Block",
                            "src": "2675:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37348,
                                                "name": "YELLOW",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37087,
                                                "src": "2704:6:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37349,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37342,
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
                                            "id": 37347,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37134,
                                            "src": "2692:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
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
                                        "src": "2692:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37346,
                                    "id": 37351,
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
                            "id": 37343,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37342,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2631:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37353,
                                    "src": "2617:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37341,
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
                            "id": 37346,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37345,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37353,
                                    "src": "2660:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37344,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37368,
                        "nodeType": "FunctionDefinition",
                        "src": "2730:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37367,
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
                                                        "id": 37363,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37355,
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
                                                        "id": 37361,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "2822:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37362,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2825:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39764,
                                                    "src": "2822:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37364,
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
                                            "id": 37360,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37353,
                                                37368,
                                                37383,
                                                37398,
                                                37413
                                            ],
                                            "referencedDeclaration": 37353,
                                            "src": "2815:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "2815:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37359,
                                    "id": 37366,
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
                            "id": 37356,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37355,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2754:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37368,
                                    "src": "2746:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37354,
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
                            "id": 37359,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37358,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37368,
                                    "src": "2783:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37357,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37383,
                        "nodeType": "FunctionDefinition",
                        "src": "2853:116:153",
                        "nodes": [],
                        "body": {
                            "id": 37382,
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
                                                        "id": 37378,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37370,
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
                                                        "id": 37376,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "2944:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37377,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2947:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39771,
                                                    "src": "2944:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37379,
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
                                            "id": 37375,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37353,
                                                37368,
                                                37383,
                                                37398,
                                                37413
                                            ],
                                            "referencedDeclaration": 37353,
                                            "src": "2937:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "2937:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37374,
                                    "id": 37381,
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
                            "id": 37371,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37370,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2876:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37383,
                                    "src": "2869:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37369,
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
                            "id": 37374,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37373,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37383,
                                    "src": "2905:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37372,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37398,
                        "nodeType": "FunctionDefinition",
                        "src": "2975:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37397,
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
                                                        "id": 37393,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37385,
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
                                                        "id": 37391,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "3067:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37392,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3070:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39736,
                                                    "src": "3067:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37394,
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
                                            "id": 37390,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37353,
                                                37368,
                                                37383,
                                                37398,
                                                37413
                                            ],
                                            "referencedDeclaration": 37353,
                                            "src": "3060:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "3060:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37389,
                                    "id": 37396,
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
                            "id": 37386,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37385,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "2999:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37398,
                                    "src": "2991:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37384,
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
                            "id": 37389,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37388,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37398,
                                    "src": "3028:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37387,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37413,
                        "nodeType": "FunctionDefinition",
                        "src": "3098:114:153",
                        "nodes": [],
                        "body": {
                            "id": 37412,
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
                                                        "id": 37408,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37400,
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
                                                        "id": 37406,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "3187:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37407,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3190:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39757,
                                                    "src": "3187:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37409,
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
                                            "id": 37405,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37353,
                                                37368,
                                                37383,
                                                37398,
                                                37413
                                            ],
                                            "referencedDeclaration": 37353,
                                            "src": "3180:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "3180:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37404,
                                    "id": 37411,
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
                            "id": 37401,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37400,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3119:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37413,
                                    "src": "3114:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37399,
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
                            "id": 37404,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37403,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37413,
                                    "src": "3148:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37402,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37428,
                        "nodeType": "FunctionDefinition",
                        "src": "3218:127:153",
                        "nodes": [],
                        "body": {
                            "id": 37427,
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
                                                        "id": 37423,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37415,
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
                                                        "id": 37421,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "3320:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37422,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3323:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39743,
                                                    "src": "3320:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
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
                                            "id": 37420,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37353,
                                                37368,
                                                37383,
                                                37398,
                                                37413
                                            ],
                                            "referencedDeclaration": 37353,
                                            "src": "3313:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37425,
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
                                    "functionReturnParameters": 37419,
                                    "id": 37426,
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
                            "id": 37416,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37415,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3252:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37428,
                                    "src": "3239:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37414,
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
                            "id": 37419,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37418,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37428,
                                    "src": "3281:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37417,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37443,
                        "nodeType": "FunctionDefinition",
                        "src": "3351:124:153",
                        "nodes": [],
                        "body": {
                            "id": 37442,
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
                                                        "id": 37438,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37430,
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
                                                        "id": 37436,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "3450:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37437,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3453:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39750,
                                                    "src": "3450:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
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
                                            "id": 37435,
                                            "name": "yellow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37353,
                                                37368,
                                                37383,
                                                37398,
                                                37413
                                            ],
                                            "referencedDeclaration": 37353,
                                            "src": "3443:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37440,
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
                                    "functionReturnParameters": 37434,
                                    "id": 37441,
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
                            "id": 37431,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37430,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3382:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37443,
                                    "src": "3374:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37429,
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
                            "id": 37434,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37433,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37443,
                                    "src": "3411:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37432,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37456,
                        "nodeType": "FunctionDefinition",
                        "src": "3481:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37455,
                            "nodeType": "Block",
                            "src": "3553:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37451,
                                                "name": "BLUE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37090,
                                                "src": "3582:4:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37452,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37445,
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
                                            "id": 37450,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37134,
                                            "src": "3570:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
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
                                        "src": "3570:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37449,
                                    "id": 37454,
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
                            "id": 37446,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37445,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3509:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37456,
                                    "src": "3495:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37444,
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
                            "id": 37449,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37448,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37456,
                                    "src": "3538:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37447,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37471,
                        "nodeType": "FunctionDefinition",
                        "src": "3606:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37470,
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
                                                        "id": 37466,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37458,
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
                                                        "id": 37464,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "3694:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37465,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3697:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39764,
                                                    "src": "3694:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37467,
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
                                            "id": 37463,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37456,
                                                37471,
                                                37486,
                                                37501,
                                                37516
                                            ],
                                            "referencedDeclaration": 37456,
                                            "src": "3689:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "3689:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37462,
                                    "id": 37469,
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
                            "id": 37459,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37458,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3628:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37471,
                                    "src": "3620:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37457,
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
                            "id": 37462,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37461,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37471,
                                    "src": "3657:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37460,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37486,
                        "nodeType": "FunctionDefinition",
                        "src": "3725:112:153",
                        "nodes": [],
                        "body": {
                            "id": 37485,
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
                                                        "id": 37481,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37473,
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
                                                        "id": 37479,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "3812:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37480,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3815:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39771,
                                                    "src": "3812:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37482,
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
                                            "id": 37478,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37456,
                                                37471,
                                                37486,
                                                37501,
                                                37516
                                            ],
                                            "referencedDeclaration": 37456,
                                            "src": "3807:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "3807:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37477,
                                    "id": 37484,
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
                            "id": 37474,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37473,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3746:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37486,
                                    "src": "3739:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37472,
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
                            "id": 37477,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37476,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37486,
                                    "src": "3775:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37475,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37501,
                        "nodeType": "FunctionDefinition",
                        "src": "3843:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37500,
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
                                                        "id": 37496,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37488,
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
                                                        "id": 37494,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "3931:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37495,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3934:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39736,
                                                    "src": "3931:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37497,
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
                                            "id": 37493,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37456,
                                                37471,
                                                37486,
                                                37501,
                                                37516
                                            ],
                                            "referencedDeclaration": 37456,
                                            "src": "3926:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "3926:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37492,
                                    "id": 37499,
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
                            "id": 37489,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37488,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3865:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37501,
                                    "src": "3857:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37487,
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
                            "id": 37492,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37491,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37501,
                                    "src": "3894:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37490,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37516,
                        "nodeType": "FunctionDefinition",
                        "src": "3962:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37515,
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
                                                        "id": 37511,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37503,
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
                                                        "id": 37509,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "4047:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37510,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4050:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39757,
                                                    "src": "4047:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37512,
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
                                            "id": 37508,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37456,
                                                37471,
                                                37486,
                                                37501,
                                                37516
                                            ],
                                            "referencedDeclaration": 37456,
                                            "src": "4042:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "4042:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37507,
                                    "id": 37514,
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
                            "id": 37504,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37503,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "3981:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37516,
                                    "src": "3976:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37502,
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
                            "id": 37507,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37506,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37516,
                                    "src": "4010:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37505,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37531,
                        "nodeType": "FunctionDefinition",
                        "src": "4078:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37530,
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
                                                        "id": 37526,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37518,
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
                                                        "id": 37524,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "4176:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37525,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4179:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39743,
                                                    "src": "4176:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
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
                                            "id": 37523,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37456,
                                                37471,
                                                37486,
                                                37501,
                                                37516
                                            ],
                                            "referencedDeclaration": 37456,
                                            "src": "4171:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37528,
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
                                    "functionReturnParameters": 37522,
                                    "id": 37529,
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
                            "id": 37519,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37518,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4110:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37531,
                                    "src": "4097:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37517,
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
                            "id": 37522,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37521,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37531,
                                    "src": "4139:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37520,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37546,
                        "nodeType": "FunctionDefinition",
                        "src": "4207:120:153",
                        "nodes": [],
                        "body": {
                            "id": 37545,
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
                                                        "id": 37541,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37533,
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
                                                        "id": 37539,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "4302:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37540,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4305:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39750,
                                                    "src": "4302:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
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
                                            "id": 37538,
                                            "name": "blue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37456,
                                                37471,
                                                37486,
                                                37501,
                                                37516
                                            ],
                                            "referencedDeclaration": 37456,
                                            "src": "4297:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37543,
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
                                    "functionReturnParameters": 37537,
                                    "id": 37544,
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
                            "id": 37534,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37533,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4236:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37546,
                                    "src": "4228:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37532,
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
                            "id": 37537,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37536,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37546,
                                    "src": "4265:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37535,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37559,
                        "nodeType": "FunctionDefinition",
                        "src": "4333:125:153",
                        "nodes": [],
                        "body": {
                            "id": 37558,
                            "nodeType": "Block",
                            "src": "4408:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37554,
                                                "name": "MAGENTA",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37093,
                                                "src": "4437:7:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37555,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37548,
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
                                            "id": 37553,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37134,
                                            "src": "4425:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
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
                                        "src": "4425:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37552,
                                    "id": 37557,
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
                            "id": 37549,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37548,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4364:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37559,
                                    "src": "4350:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37547,
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
                            "id": 37552,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37551,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37559,
                                    "src": "4393:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37550,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37574,
                        "nodeType": "FunctionDefinition",
                        "src": "4464:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37573,
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
                                                        "id": 37569,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37561,
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
                                                        "id": 37567,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "4558:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37568,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4561:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39764,
                                                    "src": "4558:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37570,
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
                                            "id": 37566,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37559,
                                                37574,
                                                37589,
                                                37604,
                                                37619
                                            ],
                                            "referencedDeclaration": 37559,
                                            "src": "4550:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "4550:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37565,
                                    "id": 37572,
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
                            "id": 37562,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37561,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4489:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37574,
                                    "src": "4481:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37560,
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
                            "id": 37565,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37564,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37574,
                                    "src": "4518:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37563,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37589,
                        "nodeType": "FunctionDefinition",
                        "src": "4589:118:153",
                        "nodes": [],
                        "body": {
                            "id": 37588,
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
                                                        "id": 37584,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37576,
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
                                                        "id": 37582,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "4682:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37583,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4685:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39771,
                                                    "src": "4682:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37585,
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
                                            "id": 37581,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37559,
                                                37574,
                                                37589,
                                                37604,
                                                37619
                                            ],
                                            "referencedDeclaration": 37559,
                                            "src": "4674:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "4674:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37580,
                                    "id": 37587,
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
                            "id": 37577,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37576,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4613:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37589,
                                    "src": "4606:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37575,
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
                            "id": 37580,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37579,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37589,
                                    "src": "4642:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37578,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37604,
                        "nodeType": "FunctionDefinition",
                        "src": "4713:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37603,
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
                                                        "id": 37599,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37591,
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
                                                        "id": 37597,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "4807:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37598,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4810:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39736,
                                                    "src": "4807:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37600,
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
                                            "id": 37596,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37559,
                                                37574,
                                                37589,
                                                37604,
                                                37619
                                            ],
                                            "referencedDeclaration": 37559,
                                            "src": "4799:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "4799:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37595,
                                    "id": 37602,
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
                            "id": 37592,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37591,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4738:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37604,
                                    "src": "4730:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37590,
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
                            "id": 37595,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37594,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37604,
                                    "src": "4767:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37593,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37619,
                        "nodeType": "FunctionDefinition",
                        "src": "4838:116:153",
                        "nodes": [],
                        "body": {
                            "id": 37618,
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
                                                        "id": 37614,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37606,
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
                                                        "id": 37612,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "4929:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37613,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4932:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39757,
                                                    "src": "4929:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37615,
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
                                            "id": 37611,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37559,
                                                37574,
                                                37589,
                                                37604,
                                                37619
                                            ],
                                            "referencedDeclaration": 37559,
                                            "src": "4921:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "4921:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37610,
                                    "id": 37617,
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
                            "id": 37607,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37606,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4860:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37619,
                                    "src": "4855:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37605,
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
                            "id": 37610,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37609,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37619,
                                    "src": "4889:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37608,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37634,
                        "nodeType": "FunctionDefinition",
                        "src": "4960:129:153",
                        "nodes": [],
                        "body": {
                            "id": 37633,
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
                                                        "id": 37629,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37621,
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
                                                        "id": 37627,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "5064:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37628,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5067:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39743,
                                                    "src": "5064:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
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
                                            "id": 37626,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37559,
                                                37574,
                                                37589,
                                                37604,
                                                37619
                                            ],
                                            "referencedDeclaration": 37559,
                                            "src": "5056:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37631,
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
                                    "functionReturnParameters": 37625,
                                    "id": 37632,
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
                            "id": 37622,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37621,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "4995:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37634,
                                    "src": "4982:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37620,
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
                            "id": 37625,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37624,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37634,
                                    "src": "5024:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37623,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37649,
                        "nodeType": "FunctionDefinition",
                        "src": "5095:126:153",
                        "nodes": [],
                        "body": {
                            "id": 37648,
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
                                                        "id": 37644,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37636,
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
                                                        "id": 37642,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "5196:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37643,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5199:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39750,
                                                    "src": "5196:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
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
                                            "id": 37641,
                                            "name": "magenta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37559,
                                                37574,
                                                37589,
                                                37604,
                                                37619
                                            ],
                                            "referencedDeclaration": 37559,
                                            "src": "5188:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37646,
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
                                    "functionReturnParameters": 37640,
                                    "id": 37647,
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
                            "id": 37637,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37636,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5127:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37649,
                                    "src": "5119:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37635,
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
                            "id": 37640,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37639,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37649,
                                    "src": "5156:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37638,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37662,
                        "nodeType": "FunctionDefinition",
                        "src": "5227:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37661,
                            "nodeType": "Block",
                            "src": "5299:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37657,
                                                "name": "CYAN",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37096,
                                                "src": "5328:4:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37658,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37651,
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
                                            "id": 37656,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37134,
                                            "src": "5316:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
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
                                        "src": "5316:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37655,
                                    "id": 37660,
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
                            "id": 37652,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37651,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5255:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37662,
                                    "src": "5241:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37650,
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
                            "id": 37655,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37654,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37662,
                                    "src": "5284:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37653,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37677,
                        "nodeType": "FunctionDefinition",
                        "src": "5352:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37676,
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
                                                        "id": 37672,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37664,
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
                                                        "id": 37670,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "5440:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37671,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5443:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39764,
                                                    "src": "5440:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37673,
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
                                            "id": 37669,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37662,
                                                37677,
                                                37692,
                                                37707,
                                                37722
                                            ],
                                            "referencedDeclaration": 37662,
                                            "src": "5435:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "5435:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37668,
                                    "id": 37675,
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
                            "id": 37665,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37664,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5374:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37677,
                                    "src": "5366:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37663,
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
                            "id": 37668,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37667,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37677,
                                    "src": "5403:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37666,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37692,
                        "nodeType": "FunctionDefinition",
                        "src": "5471:112:153",
                        "nodes": [],
                        "body": {
                            "id": 37691,
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
                                                        "id": 37687,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37679,
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
                                                        "id": 37685,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "5558:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37686,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5561:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39771,
                                                    "src": "5558:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37688,
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
                                            "id": 37684,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37662,
                                                37677,
                                                37692,
                                                37707,
                                                37722
                                            ],
                                            "referencedDeclaration": 37662,
                                            "src": "5553:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "5553:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37683,
                                    "id": 37690,
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
                            "id": 37680,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37679,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5492:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37692,
                                    "src": "5485:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37678,
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
                            "id": 37683,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37682,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37692,
                                    "src": "5521:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37681,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37707,
                        "nodeType": "FunctionDefinition",
                        "src": "5589:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37706,
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
                                                        "id": 37702,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37694,
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
                                                        "id": 37700,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "5677:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37701,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5680:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39736,
                                                    "src": "5677:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37703,
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
                                            "id": 37699,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37662,
                                                37677,
                                                37692,
                                                37707,
                                                37722
                                            ],
                                            "referencedDeclaration": 37662,
                                            "src": "5672:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "5672:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37698,
                                    "id": 37705,
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
                            "id": 37695,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37694,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5611:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37707,
                                    "src": "5603:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37693,
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
                            "id": 37698,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37697,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37707,
                                    "src": "5640:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37696,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37722,
                        "nodeType": "FunctionDefinition",
                        "src": "5708:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37721,
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
                                                        "id": 37717,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37709,
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
                                                        "id": 37715,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "5793:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37716,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5796:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39757,
                                                    "src": "5793:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37718,
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
                                            "id": 37714,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37662,
                                                37677,
                                                37692,
                                                37707,
                                                37722
                                            ],
                                            "referencedDeclaration": 37662,
                                            "src": "5788:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "5788:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37713,
                                    "id": 37720,
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
                            "id": 37710,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37709,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5727:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37722,
                                    "src": "5722:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37708,
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
                            "id": 37713,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37712,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37722,
                                    "src": "5756:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37711,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37737,
                        "nodeType": "FunctionDefinition",
                        "src": "5824:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37736,
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
                                                        "id": 37732,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37724,
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
                                                        "id": 37730,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "5922:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37731,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5925:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39743,
                                                    "src": "5922:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
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
                                            "id": 37729,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37662,
                                                37677,
                                                37692,
                                                37707,
                                                37722
                                            ],
                                            "referencedDeclaration": 37662,
                                            "src": "5917:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37734,
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
                                    "functionReturnParameters": 37728,
                                    "id": 37735,
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
                            "id": 37725,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37724,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5856:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37737,
                                    "src": "5843:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37723,
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
                            "id": 37728,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37727,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37737,
                                    "src": "5885:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37726,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37752,
                        "nodeType": "FunctionDefinition",
                        "src": "5953:120:153",
                        "nodes": [],
                        "body": {
                            "id": 37751,
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
                                                        "id": 37747,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37739,
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
                                                        "id": 37745,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "6048:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37746,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6051:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39750,
                                                    "src": "6048:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
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
                                            "id": 37744,
                                            "name": "cyan",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37662,
                                                37677,
                                                37692,
                                                37707,
                                                37722
                                            ],
                                            "referencedDeclaration": 37662,
                                            "src": "6043:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37749,
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
                                    "functionReturnParameters": 37743,
                                    "id": 37750,
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
                            "id": 37740,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37739,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "5982:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37752,
                                    "src": "5974:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37738,
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
                            "id": 37743,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37742,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37752,
                                    "src": "6011:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37741,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37765,
                        "nodeType": "FunctionDefinition",
                        "src": "6079:119:153",
                        "nodes": [],
                        "body": {
                            "id": 37764,
                            "nodeType": "Block",
                            "src": "6151:47:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37760,
                                                "name": "BOLD",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37099,
                                                "src": "6180:4:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37761,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37754,
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
                                            "id": 37759,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37134,
                                            "src": "6168:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
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
                                        "src": "6168:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37758,
                                    "id": 37763,
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
                            "id": 37755,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37754,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6107:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37765,
                                    "src": "6093:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37753,
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
                            "id": 37758,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37757,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37765,
                                    "src": "6136:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37756,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37780,
                        "nodeType": "FunctionDefinition",
                        "src": "6204:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37779,
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
                                                        "id": 37775,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37767,
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
                                                        "id": 37773,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "6292:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37774,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6295:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39764,
                                                    "src": "6292:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37776,
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
                                            "id": 37772,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37765,
                                                37780,
                                                37795,
                                                37810,
                                                37825
                                            ],
                                            "referencedDeclaration": 37765,
                                            "src": "6287:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "6287:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37771,
                                    "id": 37778,
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
                            "id": 37768,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37767,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6226:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37780,
                                    "src": "6218:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37766,
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
                            "id": 37771,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37770,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37780,
                                    "src": "6255:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37769,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37795,
                        "nodeType": "FunctionDefinition",
                        "src": "6323:112:153",
                        "nodes": [],
                        "body": {
                            "id": 37794,
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
                                                        "id": 37790,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37782,
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
                                                        "id": 37788,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "6410:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37789,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6413:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39771,
                                                    "src": "6410:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37791,
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
                                            "id": 37787,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37765,
                                                37780,
                                                37795,
                                                37810,
                                                37825
                                            ],
                                            "referencedDeclaration": 37765,
                                            "src": "6405:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "6405:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37786,
                                    "id": 37793,
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
                            "id": 37783,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37782,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6344:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37795,
                                    "src": "6337:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37781,
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
                            "id": 37786,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37785,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37795,
                                    "src": "6373:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37784,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37810,
                        "nodeType": "FunctionDefinition",
                        "src": "6441:113:153",
                        "nodes": [],
                        "body": {
                            "id": 37809,
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
                                                        "id": 37805,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37797,
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
                                                        "id": 37803,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "6529:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37804,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6532:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39736,
                                                    "src": "6529:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37806,
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
                                            "id": 37802,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37765,
                                                37780,
                                                37795,
                                                37810,
                                                37825
                                            ],
                                            "referencedDeclaration": 37765,
                                            "src": "6524:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "6524:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37801,
                                    "id": 37808,
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
                            "id": 37798,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37797,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6463:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37810,
                                    "src": "6455:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37796,
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
                            "id": 37801,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37800,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37810,
                                    "src": "6492:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37799,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37825,
                        "nodeType": "FunctionDefinition",
                        "src": "6560:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37824,
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
                                                        "id": 37820,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37812,
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
                                                        "id": 37818,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "6645:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37819,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6648:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39757,
                                                    "src": "6645:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37821,
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
                                            "id": 37817,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37765,
                                                37780,
                                                37795,
                                                37810,
                                                37825
                                            ],
                                            "referencedDeclaration": 37765,
                                            "src": "6640:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "6640:23:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37816,
                                    "id": 37823,
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
                            "id": 37813,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37812,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6579:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37825,
                                    "src": "6574:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37811,
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
                            "id": 37816,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37815,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37825,
                                    "src": "6608:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37814,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37840,
                        "nodeType": "FunctionDefinition",
                        "src": "6676:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37839,
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
                                                        "id": 37835,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37827,
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
                                                        "id": 37833,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "6774:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37834,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6777:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39743,
                                                    "src": "6774:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
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
                                            "id": 37832,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37765,
                                                37780,
                                                37795,
                                                37810,
                                                37825
                                            ],
                                            "referencedDeclaration": 37765,
                                            "src": "6769:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37837,
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
                                    "functionReturnParameters": 37831,
                                    "id": 37838,
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
                            "id": 37828,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37827,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6708:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37840,
                                    "src": "6695:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37826,
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
                            "id": 37831,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37830,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37840,
                                    "src": "6737:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37829,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37855,
                        "nodeType": "FunctionDefinition",
                        "src": "6805:120:153",
                        "nodes": [],
                        "body": {
                            "id": 37854,
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
                                                        "id": 37850,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37842,
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
                                                        "id": 37848,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "6900:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37849,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6903:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39750,
                                                    "src": "6900:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
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
                                            "id": 37847,
                                            "name": "bold",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37765,
                                                37780,
                                                37795,
                                                37810,
                                                37825
                                            ],
                                            "referencedDeclaration": 37765,
                                            "src": "6895:4:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37852,
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
                                    "functionReturnParameters": 37846,
                                    "id": 37853,
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
                            "id": 37843,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37842,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6834:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37855,
                                    "src": "6826:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37841,
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
                            "id": 37846,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37845,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37855,
                                    "src": "6863:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37844,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37868,
                        "nodeType": "FunctionDefinition",
                        "src": "6931:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37867,
                            "nodeType": "Block",
                            "src": "7002:46:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37863,
                                                "name": "DIM",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37102,
                                                "src": "7031:3:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37864,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37857,
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
                                            "id": 37862,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37134,
                                            "src": "7019:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
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
                                        "src": "7019:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37861,
                                    "id": 37866,
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
                            "id": 37858,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37857,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "6958:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37868,
                                    "src": "6944:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37856,
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
                            "id": 37861,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37860,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37868,
                                    "src": "6987:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37859,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37883,
                        "nodeType": "FunctionDefinition",
                        "src": "7054:111:153",
                        "nodes": [],
                        "body": {
                            "id": 37882,
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
                                                        "id": 37878,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37870,
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
                                                        "id": 37876,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "7140:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37877,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7143:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39764,
                                                    "src": "7140:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37879,
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
                                            "id": 37875,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37868,
                                                37883,
                                                37898,
                                                37913,
                                                37928
                                            ],
                                            "referencedDeclaration": 37868,
                                            "src": "7136:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "7136:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37874,
                                    "id": 37881,
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
                            "id": 37871,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37870,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7075:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37883,
                                    "src": "7067:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37869,
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
                            "id": 37874,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37873,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37883,
                                    "src": "7104:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37872,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37898,
                        "nodeType": "FunctionDefinition",
                        "src": "7171:110:153",
                        "nodes": [],
                        "body": {
                            "id": 37897,
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
                                                        "id": 37893,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37885,
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
                                                        "id": 37891,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "7256:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37892,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7259:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39771,
                                                    "src": "7256:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37894,
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
                                            "id": 37890,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37868,
                                                37883,
                                                37898,
                                                37913,
                                                37928
                                            ],
                                            "referencedDeclaration": 37868,
                                            "src": "7252:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "7252:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37889,
                                    "id": 37896,
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
                            "id": 37886,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37885,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7191:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37898,
                                    "src": "7184:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37884,
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
                            "id": 37889,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37888,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37898,
                                    "src": "7220:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37887,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37913,
                        "nodeType": "FunctionDefinition",
                        "src": "7287:111:153",
                        "nodes": [],
                        "body": {
                            "id": 37912,
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
                                                        "id": 37908,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37900,
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
                                                        "id": 37906,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "7373:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37907,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7376:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39736,
                                                    "src": "7373:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37909,
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
                                            "id": 37905,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37868,
                                                37883,
                                                37898,
                                                37913,
                                                37928
                                            ],
                                            "referencedDeclaration": 37868,
                                            "src": "7369:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "7369:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37904,
                                    "id": 37911,
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
                            "id": 37901,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37900,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7308:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37913,
                                    "src": "7300:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 37899,
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
                            "id": 37904,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37903,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37913,
                                    "src": "7337:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37902,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37928,
                        "nodeType": "FunctionDefinition",
                        "src": "7404:108:153",
                        "nodes": [],
                        "body": {
                            "id": 37927,
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
                                                        "id": 37923,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37915,
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
                                                        "id": 37921,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "7487:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37922,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7490:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39757,
                                                    "src": "7487:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37924,
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
                                            "id": 37920,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37868,
                                                37883,
                                                37898,
                                                37913,
                                                37928
                                            ],
                                            "referencedDeclaration": 37868,
                                            "src": "7483:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "7483:22:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37919,
                                    "id": 37926,
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
                            "id": 37916,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37915,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7422:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37928,
                                    "src": "7417:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 37914,
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
                            "id": 37919,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37918,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37928,
                                    "src": "7451:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37917,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37943,
                        "nodeType": "FunctionDefinition",
                        "src": "7518:121:153",
                        "nodes": [],
                        "body": {
                            "id": 37942,
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
                                                        "id": 37938,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37930,
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
                                                        "id": 37936,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "7614:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37937,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7617:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39743,
                                                    "src": "7614:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
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
                                            "id": 37935,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37868,
                                                37883,
                                                37898,
                                                37913,
                                                37928
                                            ],
                                            "referencedDeclaration": 37868,
                                            "src": "7610:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37940,
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
                                    "functionReturnParameters": 37934,
                                    "id": 37941,
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
                            "id": 37931,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37930,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7549:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37943,
                                    "src": "7536:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 37929,
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
                            "id": 37934,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37933,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37943,
                                    "src": "7578:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37932,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37958,
                        "nodeType": "FunctionDefinition",
                        "src": "7645:118:153",
                        "nodes": [],
                        "body": {
                            "id": 37957,
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
                                                        "id": 37953,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37945,
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
                                                        "id": 37951,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "7738:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37952,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7741:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39750,
                                                    "src": "7738:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
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
                                            "id": 37950,
                                            "name": "dim",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37868,
                                                37883,
                                                37898,
                                                37913,
                                                37928
                                            ],
                                            "referencedDeclaration": 37868,
                                            "src": "7734:3:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 37955,
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
                                    "functionReturnParameters": 37949,
                                    "id": 37956,
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
                            "id": 37946,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37945,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7673:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37958,
                                    "src": "7665:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 37944,
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
                            "id": 37949,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37948,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37958,
                                    "src": "7702:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37947,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37971,
                        "nodeType": "FunctionDefinition",
                        "src": "7769:123:153",
                        "nodes": [],
                        "body": {
                            "id": 37970,
                            "nodeType": "Block",
                            "src": "7843:49:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 37966,
                                                "name": "ITALIC",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37105,
                                                "src": "7872:6:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 37967,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37960,
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
                                            "id": 37965,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37134,
                                            "src": "7860:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
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
                                        "src": "7860:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37964,
                                    "id": 37969,
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
                            "id": 37961,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37960,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7799:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37971,
                                    "src": "7785:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37959,
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
                            "id": 37964,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37963,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37971,
                                    "src": "7828:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37962,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 37986,
                        "nodeType": "FunctionDefinition",
                        "src": "7898:117:153",
                        "nodes": [],
                        "body": {
                            "id": 37985,
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
                                                        "id": 37981,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37973,
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
                                                        "id": 37979,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "7990:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37980,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7993:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39764,
                                                    "src": "7990:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37982,
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
                                            "id": 37978,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37971,
                                                37986,
                                                38001,
                                                38016,
                                                38031
                                            ],
                                            "referencedDeclaration": 37971,
                                            "src": "7983:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "7983:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37977,
                                    "id": 37984,
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
                            "id": 37974,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37973,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "7922:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37986,
                                    "src": "7914:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 37972,
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
                            "id": 37977,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37976,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 37986,
                                    "src": "7951:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37975,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38001,
                        "nodeType": "FunctionDefinition",
                        "src": "8021:116:153",
                        "nodes": [],
                        "body": {
                            "id": 38000,
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
                                                        "id": 37996,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37988,
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
                                                        "id": 37994,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "8112:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 37995,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8115:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39771,
                                                    "src": "8112:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 37997,
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
                                            "id": 37993,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37971,
                                                37986,
                                                38001,
                                                38016,
                                                38031
                                            ],
                                            "referencedDeclaration": 37971,
                                            "src": "8105:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "8105:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 37992,
                                    "id": 37999,
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
                            "id": 37989,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37988,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8044:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38001,
                                    "src": "8037:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 37987,
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
                            "id": 37992,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 37991,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38001,
                                    "src": "8073:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 37990,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38016,
                        "nodeType": "FunctionDefinition",
                        "src": "8143:117:153",
                        "nodes": [],
                        "body": {
                            "id": 38015,
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
                                                        "id": 38011,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38003,
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
                                                        "id": 38009,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "8235:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38010,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8238:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39736,
                                                    "src": "8235:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38012,
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
                                            "id": 38008,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37971,
                                                37986,
                                                38001,
                                                38016,
                                                38031
                                            ],
                                            "referencedDeclaration": 37971,
                                            "src": "8228:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "8228:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38007,
                                    "id": 38014,
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
                            "id": 38004,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38003,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8167:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38016,
                                    "src": "8159:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38002,
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
                            "id": 38007,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38006,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38016,
                                    "src": "8196:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38005,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38031,
                        "nodeType": "FunctionDefinition",
                        "src": "8266:114:153",
                        "nodes": [],
                        "body": {
                            "id": 38030,
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
                                                        "id": 38026,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38018,
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
                                                        "id": 38024,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "8355:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38025,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8358:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39757,
                                                    "src": "8355:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38027,
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
                                            "id": 38023,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37971,
                                                37986,
                                                38001,
                                                38016,
                                                38031
                                            ],
                                            "referencedDeclaration": 37971,
                                            "src": "8348:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "8348:25:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38022,
                                    "id": 38029,
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
                            "id": 38019,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38018,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8287:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38031,
                                    "src": "8282:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 38017,
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
                            "id": 38022,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38021,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38031,
                                    "src": "8316:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38020,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38046,
                        "nodeType": "FunctionDefinition",
                        "src": "8386:127:153",
                        "nodes": [],
                        "body": {
                            "id": 38045,
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
                                                        "id": 38041,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38033,
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
                                                        "id": 38039,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "8488:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38040,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8491:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39743,
                                                    "src": "8488:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
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
                                            "id": 38038,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37971,
                                                37986,
                                                38001,
                                                38016,
                                                38031
                                            ],
                                            "referencedDeclaration": 37971,
                                            "src": "8481:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38043,
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
                                    "functionReturnParameters": 38037,
                                    "id": 38044,
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
                            "id": 38034,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38033,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8420:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38046,
                                    "src": "8407:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38032,
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
                            "id": 38037,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38036,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38046,
                                    "src": "8449:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38035,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38061,
                        "nodeType": "FunctionDefinition",
                        "src": "8519:124:153",
                        "nodes": [],
                        "body": {
                            "id": 38060,
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
                                                        "id": 38056,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38048,
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
                                                        "id": 38054,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "8618:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38055,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8621:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39750,
                                                    "src": "8618:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
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
                                            "id": 38053,
                                            "name": "italic",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                37971,
                                                37986,
                                                38001,
                                                38016,
                                                38031
                                            ],
                                            "referencedDeclaration": 37971,
                                            "src": "8611:6:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38058,
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
                                    "functionReturnParameters": 38052,
                                    "id": 38059,
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
                            "id": 38049,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38048,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8550:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38061,
                                    "src": "8542:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38047,
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
                            "id": 38052,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38051,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38061,
                                    "src": "8579:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38050,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38074,
                        "nodeType": "FunctionDefinition",
                        "src": "8649:129:153",
                        "nodes": [],
                        "body": {
                            "id": 38073,
                            "nodeType": "Block",
                            "src": "8726:52:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 38069,
                                                "name": "UNDERLINE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37108,
                                                "src": "8755:9:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 38070,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38063,
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
                                            "id": 38068,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37134,
                                            "src": "8743:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
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
                                        "src": "8743:28:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38067,
                                    "id": 38072,
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
                            "id": 38064,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38063,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8682:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38074,
                                    "src": "8668:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38062,
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
                            "id": 38067,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38066,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38074,
                                    "src": "8711:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38065,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38089,
                        "nodeType": "FunctionDefinition",
                        "src": "8784:123:153",
                        "nodes": [],
                        "body": {
                            "id": 38088,
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
                                                        "id": 38084,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38076,
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
                                                        "id": 38082,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "8882:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38083,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8885:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39764,
                                                    "src": "8882:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38085,
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
                                            "id": 38081,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38074,
                                                38089,
                                                38104,
                                                38119,
                                                38134
                                            ],
                                            "referencedDeclaration": 38074,
                                            "src": "8872:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "8872:28:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38080,
                                    "id": 38087,
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
                            "id": 38077,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38076,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8811:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38089,
                                    "src": "8803:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38075,
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
                            "id": 38080,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38079,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38089,
                                    "src": "8840:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38078,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38104,
                        "nodeType": "FunctionDefinition",
                        "src": "8913:122:153",
                        "nodes": [],
                        "body": {
                            "id": 38103,
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
                                                        "id": 38099,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38091,
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
                                                        "id": 38097,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "9010:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38098,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9013:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39771,
                                                    "src": "9010:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38100,
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
                                            "id": 38096,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38074,
                                                38089,
                                                38104,
                                                38119,
                                                38134
                                            ],
                                            "referencedDeclaration": 38074,
                                            "src": "9000:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "9000:28:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38095,
                                    "id": 38102,
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
                            "id": 38092,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38091,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "8939:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38104,
                                    "src": "8932:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38090,
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
                            "id": 38095,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38094,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38104,
                                    "src": "8968:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38093,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38119,
                        "nodeType": "FunctionDefinition",
                        "src": "9041:123:153",
                        "nodes": [],
                        "body": {
                            "id": 38118,
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
                                                        "id": 38114,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38106,
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
                                                        "id": 38112,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "9139:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38113,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9142:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39736,
                                                    "src": "9139:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38115,
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
                                            "id": 38111,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38074,
                                                38089,
                                                38104,
                                                38119,
                                                38134
                                            ],
                                            "referencedDeclaration": 38074,
                                            "src": "9129:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "9129:28:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38110,
                                    "id": 38117,
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
                            "id": 38107,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38106,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9068:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38119,
                                    "src": "9060:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38105,
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
                            "id": 38110,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38109,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38119,
                                    "src": "9097:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38108,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38134,
                        "nodeType": "FunctionDefinition",
                        "src": "9170:120:153",
                        "nodes": [],
                        "body": {
                            "id": 38133,
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
                                                        "id": 38129,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38121,
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
                                                        "id": 38127,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "9265:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38128,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9268:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39757,
                                                    "src": "9265:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38130,
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
                                            "id": 38126,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38074,
                                                38089,
                                                38104,
                                                38119,
                                                38134
                                            ],
                                            "referencedDeclaration": 38074,
                                            "src": "9255:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "9255:28:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38125,
                                    "id": 38132,
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
                            "id": 38122,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38121,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9194:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38134,
                                    "src": "9189:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 38120,
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
                            "id": 38125,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38124,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38134,
                                    "src": "9223:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38123,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38149,
                        "nodeType": "FunctionDefinition",
                        "src": "9296:133:153",
                        "nodes": [],
                        "body": {
                            "id": 38148,
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
                                                        "id": 38144,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38136,
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
                                                        "id": 38142,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "9404:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38143,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9407:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39743,
                                                    "src": "9404:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
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
                                            "id": 38141,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38074,
                                                38089,
                                                38104,
                                                38119,
                                                38134
                                            ],
                                            "referencedDeclaration": 38074,
                                            "src": "9394:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38146,
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
                                    "functionReturnParameters": 38140,
                                    "id": 38147,
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
                            "id": 38137,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38136,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9333:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38149,
                                    "src": "9320:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38135,
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
                            "id": 38140,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38139,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38149,
                                    "src": "9362:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38138,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38164,
                        "nodeType": "FunctionDefinition",
                        "src": "9435:130:153",
                        "nodes": [],
                        "body": {
                            "id": 38163,
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
                                                        "id": 38159,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38151,
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
                                                        "id": 38157,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "9540:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38158,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9543:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39750,
                                                    "src": "9540:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
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
                                            "id": 38156,
                                            "name": "underline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38074,
                                                38089,
                                                38104,
                                                38119,
                                                38134
                                            ],
                                            "referencedDeclaration": 38074,
                                            "src": "9530:9:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38161,
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
                                    "functionReturnParameters": 38155,
                                    "id": 38162,
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
                            "id": 38152,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38151,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9469:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38164,
                                    "src": "9461:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38150,
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
                            "id": 38155,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38154,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38164,
                                    "src": "9498:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38153,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38177,
                        "nodeType": "FunctionDefinition",
                        "src": "9571:125:153",
                        "nodes": [],
                        "body": {
                            "id": 38176,
                            "nodeType": "Block",
                            "src": "9646:50:153",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 38172,
                                                "name": "INVERSE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37111,
                                                "src": "9675:7:153",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 38173,
                                                "name": "self",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38166,
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
                                            "id": 38171,
                                            "name": "styleConcat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37134,
                                            "src": "9663:11:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) pure returns (string memory)"
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
                                        "src": "9663:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38170,
                                    "id": 38175,
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
                            "id": 38167,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38166,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9602:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38177,
                                    "src": "9588:18:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38165,
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
                            "id": 38170,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38169,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38177,
                                    "src": "9631:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38168,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38192,
                        "nodeType": "FunctionDefinition",
                        "src": "9702:119:153",
                        "nodes": [],
                        "body": {
                            "id": 38191,
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
                                                        "id": 38187,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38179,
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
                                                        "id": 38185,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "9796:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38186,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9799:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39764,
                                                    "src": "9796:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38188,
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
                                            "id": 38184,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38177,
                                                38192,
                                                38207,
                                                38222,
                                                38237
                                            ],
                                            "referencedDeclaration": 38177,
                                            "src": "9788:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "9788:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38183,
                                    "id": 38190,
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
                            "id": 38180,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38179,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9727:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38192,
                                    "src": "9719:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38178,
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
                            "id": 38183,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38182,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38192,
                                    "src": "9756:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38181,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38207,
                        "nodeType": "FunctionDefinition",
                        "src": "9827:118:153",
                        "nodes": [],
                        "body": {
                            "id": 38206,
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
                                                        "id": 38202,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38194,
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
                                                        "id": 38200,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "9920:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38201,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9923:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39771,
                                                    "src": "9920:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38203,
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
                                            "id": 38199,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38177,
                                                38192,
                                                38207,
                                                38222,
                                                38237
                                            ],
                                            "referencedDeclaration": 38177,
                                            "src": "9912:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "9912:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38198,
                                    "id": 38205,
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
                            "id": 38195,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38194,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9851:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38207,
                                    "src": "9844:11:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38193,
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
                            "id": 38198,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38197,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38207,
                                    "src": "9880:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38196,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38222,
                        "nodeType": "FunctionDefinition",
                        "src": "9951:119:153",
                        "nodes": [],
                        "body": {
                            "id": 38221,
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
                                                        "id": 38217,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38209,
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
                                                        "id": 38215,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "10045:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38216,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10048:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39736,
                                                    "src": "10045:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (address) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38218,
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
                                            "id": 38214,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38177,
                                                38192,
                                                38207,
                                                38222,
                                                38237
                                            ],
                                            "referencedDeclaration": 38177,
                                            "src": "10037:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "10037:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38213,
                                    "id": 38220,
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
                            "id": 38210,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38209,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "9976:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38222,
                                    "src": "9968:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38208,
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
                            "id": 38213,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38212,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38222,
                                    "src": "10005:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38211,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38237,
                        "nodeType": "FunctionDefinition",
                        "src": "10076:116:153",
                        "nodes": [],
                        "body": {
                            "id": 38236,
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
                                                        "id": 38232,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38224,
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
                                                        "id": 38230,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "10167:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38231,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10170:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39757,
                                                    "src": "10167:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bool) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38233,
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
                                            "id": 38229,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38177,
                                                38192,
                                                38207,
                                                38222,
                                                38237
                                            ],
                                            "referencedDeclaration": 38177,
                                            "src": "10159:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                        "src": "10159:26:153",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 38228,
                                    "id": 38235,
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
                            "id": 38225,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38224,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "10098:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38237,
                                    "src": "10093:9:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 38223,
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
                            "id": 38228,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38227,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38237,
                                    "src": "10127:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38226,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38252,
                        "nodeType": "FunctionDefinition",
                        "src": "10198:129:153",
                        "nodes": [],
                        "body": {
                            "id": 38251,
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
                                                        "id": 38247,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38239,
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
                                                        "id": 38245,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "10302:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38246,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10305:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39743,
                                                    "src": "10302:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes memory) pure external returns (string memory)"
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
                                            "id": 38244,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38177,
                                                38192,
                                                38207,
                                                38222,
                                                38237
                                            ],
                                            "referencedDeclaration": 38177,
                                            "src": "10294:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38249,
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
                                    "functionReturnParameters": 38243,
                                    "id": 38250,
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
                            "id": 38240,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38239,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "10233:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38252,
                                    "src": "10220:17:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38238,
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
                            "id": 38243,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38242,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38252,
                                    "src": "10262:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38241,
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
                        "scope": 38268,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38267,
                        "nodeType": "FunctionDefinition",
                        "src": "10333:126:153",
                        "nodes": [],
                        "body": {
                            "id": 38266,
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
                                                        "id": 38262,
                                                        "name": "self",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38254,
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
                                                        "id": 38260,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 37078,
                                                        "src": "10434:2:153",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40232",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38261,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10437:8:153",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39750,
                                                    "src": "10434:11:153",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (bytes32) pure external returns (string memory)"
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
                                            "id": 38259,
                                            "name": "inverse",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38177,
                                                38192,
                                                38207,
                                                38222,
                                                38237
                                            ],
                                            "referencedDeclaration": 38177,
                                            "src": "10426:7:153",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                            }
                                        },
                                        "id": 38264,
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
                                    "functionReturnParameters": 38258,
                                    "id": 38265,
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
                            "id": 38255,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38254,
                                    "mutability": "mutable",
                                    "name": "self",
                                    "nameLocation": "10365:4:153",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38267,
                                    "src": "10357:12:153",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38253,
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
                            "id": 38258,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38257,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38267,
                                    "src": "10394:13:153",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 38256,
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
                        "scope": 38268,
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
                    38268
                ],
                "name": "StdStyle",
                "nameLocation": "108:8:153",
                "scope": 38269,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 153
};
