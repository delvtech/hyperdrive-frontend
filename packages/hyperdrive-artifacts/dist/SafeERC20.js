export const SafeERC20 = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "currentAllowance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "requestedDecrease",
                    "type": "uint256"
                }
            ],
            "name": "SafeERC20FailedDecreaseAllowance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "SafeERC20FailedOperation",
            "type": "error"
        }
    ],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122090530dced4b935e7c114c603a244842acb7154f18289a6d16d4e3f00161db36864736f6c63430008140033",
        "sourceMap": "751:5018:166:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;751:5018:166;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122090530dced4b935e7c114c603a244842acb7154f18289a6d16d4e3f00161db36864736f6c63430008140033",
        "sourceMap": "751:5018:166:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"currentAllowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"requestedDecrease\",\"type\":\"uint256\"}],\"name\":\"SafeERC20FailedDecreaseAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Wrappers around ERC20 operations that throw on failure (when the token contract returns false). Tokens that return no value (and instead revert or throw on failure) are also supported, non-reverting calls are assumed to be successful. To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract, which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\",\"errors\":{\"SafeERC20FailedDecreaseAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failed `decreaseAllowance` request.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"SafeERC20\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":\"SafeERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]}},\"version\":1}",
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
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currentAllowance",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "requestedDecrease",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "SafeERC20FailedDecreaseAllowance"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "SafeERC20FailedOperation"
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
                "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": "SafeERC20"
            },
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
                "urls": [
                    "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
                    "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
                "urls": [
                    "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
                    "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                "keccak256": "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
                "urls": [
                    "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
                    "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"
                ],
                "license": "MIT"
            },
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
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
        "id": 71323,
        "exportedSymbols": {
            "Address": [
                71575
            ],
            "IERC20": [
                70970
            ],
            "IERC20Permit": [
                71032
            ],
            "SafeERC20": [
                71322
            ]
        },
        "nodeType": "SourceUnit",
        "src": "115:5655:166",
        "nodes": [
            {
                "id": 71034,
                "nodeType": "PragmaDirective",
                "src": "115:24:166",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 71036,
                "nodeType": "ImportDirective",
                "src": "141:37:166",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
                "file": "../IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 71323,
                "sourceUnit": 70971,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 71035,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70970,
                            "src": "149:6:166",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 71038,
                "nodeType": "ImportDirective",
                "src": "179:60:166",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol",
                "file": "../extensions/IERC20Permit.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 71323,
                "sourceUnit": 71033,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 71037,
                            "name": "IERC20Permit",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71032,
                            "src": "187:12:166",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 71040,
                "nodeType": "ImportDirective",
                "src": "240:51:166",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Address.sol",
                "file": "../../../utils/Address.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 71323,
                "sourceUnit": 71576,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 71039,
                            "name": "Address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71575,
                            "src": "248:7:166",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 71322,
                "nodeType": "ContractDefinition",
                "src": "751:5018:166",
                "nodes": [
                    {
                        "id": 71044,
                        "nodeType": "UsingForDirective",
                        "src": "775:26:166",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 71042,
                            "name": "Address",
                            "nameLocations": [
                                "781:7:166"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 71575,
                            "src": "781:7:166"
                        },
                        "typeName": {
                            "id": 71043,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "793:7:166",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        }
                    },
                    {
                        "id": 71049,
                        "nodeType": "ErrorDefinition",
                        "src": "876:46:166",
                        "nodes": [],
                        "documentation": {
                            "id": 71045,
                            "nodeType": "StructuredDocumentation",
                            "src": "807:64:166",
                            "text": " @dev An operation with an ERC20 token failed."
                        },
                        "errorSelector": "5274afe7",
                        "name": "SafeERC20FailedOperation",
                        "nameLocation": "882:24:166",
                        "parameters": {
                            "id": 71048,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71047,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "915:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71049,
                                    "src": "907:13:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71046,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "907:7:166",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "906:15:166"
                        }
                    },
                    {
                        "id": 71058,
                        "nodeType": "ErrorDefinition",
                        "src": "1004:109:166",
                        "nodes": [],
                        "documentation": {
                            "id": 71050,
                            "nodeType": "StructuredDocumentation",
                            "src": "928:71:166",
                            "text": " @dev Indicates a failed `decreaseAllowance` request."
                        },
                        "errorSelector": "e570110f",
                        "name": "SafeERC20FailedDecreaseAllowance",
                        "nameLocation": "1010:32:166",
                        "parameters": {
                            "id": 71057,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71052,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "1051:7:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71058,
                                    "src": "1043:15:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71051,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1043:7:166",
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
                                    "id": 71054,
                                    "mutability": "mutable",
                                    "name": "currentAllowance",
                                    "nameLocation": "1068:16:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71058,
                                    "src": "1060:24:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71053,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1060:7:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71056,
                                    "mutability": "mutable",
                                    "name": "requestedDecrease",
                                    "nameLocation": "1094:17:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71058,
                                    "src": "1086:25:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71055,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1086:7:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1042:70:166"
                        }
                    },
                    {
                        "id": 71082,
                        "nodeType": "FunctionDefinition",
                        "src": "1303:160:166",
                        "nodes": [],
                        "body": {
                            "id": 71081,
                            "nodeType": "Block",
                            "src": "1375:88:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71070,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71062,
                                                "src": "1405:5:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$70970",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 71073,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71062,
                                                            "src": "1427:5:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$70970",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        "id": 71074,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1433:8:166",
                                                        "memberName": "transfer",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 70937,
                                                        "src": "1427:14:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (address,uint256) external returns (bool)"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 71075,
                                                                "name": "to",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71064,
                                                                "src": "1444:2:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 71076,
                                                                "name": "value",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71066,
                                                                "src": "1448:5:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 71077,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "1443:11:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                                                            "typeString": "tuple(address,uint256)"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (address,uint256) external returns (bool)"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                                                            "typeString": "tuple(address,uint256)"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 71071,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "1412:3:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 71072,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1416:10:166",
                                                    "memberName": "encodeCall",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1412:14:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 71078,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1412:43:166",
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
                                                    "typeIdentifier": "t_contract$_IERC20_$70970",
                                                    "typeString": "contract IERC20"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 71069,
                                            "name": "_callOptionalReturn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71272,
                                            "src": "1385:19:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70970_$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (contract IERC20,bytes memory)"
                                            }
                                        },
                                        "id": 71079,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1385:71:166",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71080,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1385:71:166"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71059,
                            "nodeType": "StructuredDocumentation",
                            "src": "1119:179:166",
                            "text": " @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "safeTransfer",
                        "nameLocation": "1312:12:166",
                        "parameters": {
                            "id": 71067,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71062,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "1332:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71082,
                                    "src": "1325:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70970",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71061,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71060,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "1325:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70970,
                                            "src": "1325:6:166"
                                        },
                                        "referencedDeclaration": 70970,
                                        "src": "1325:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71064,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1347:2:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71082,
                                    "src": "1339:10:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71063,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1339:7:166",
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
                                    "id": 71066,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "1359:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71082,
                                    "src": "1351:13:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71065,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1351:7:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1324:41:166"
                        },
                        "returnParameters": {
                            "id": 71068,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1375:0:166"
                        },
                        "scope": 71322,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71109,
                        "nodeType": "FunctionDefinition",
                        "src": "1702:188:166",
                        "nodes": [],
                        "body": {
                            "id": 71108,
                            "nodeType": "Block",
                            "src": "1792:98:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71096,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71086,
                                                "src": "1822:5:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$70970",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 71099,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71086,
                                                            "src": "1844:5:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$70970",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        "id": 71100,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1850:12:166",
                                                        "memberName": "transferFrom",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 70969,
                                                        "src": "1844:18:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (address,address,uint256) external returns (bool)"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 71101,
                                                                "name": "from",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71088,
                                                                "src": "1865:4:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 71102,
                                                                "name": "to",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71090,
                                                                "src": "1871:2:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 71103,
                                                                "name": "value",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71092,
                                                                "src": "1875:5:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 71104,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "1864:17:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_uint256_$",
                                                            "typeString": "tuple(address,address,uint256)"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (address,address,uint256) external returns (bool)"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_uint256_$",
                                                            "typeString": "tuple(address,address,uint256)"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 71097,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "1829:3:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 71098,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1833:10:166",
                                                    "memberName": "encodeCall",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1829:14:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 71105,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1829:53:166",
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
                                                    "typeIdentifier": "t_contract$_IERC20_$70970",
                                                    "typeString": "contract IERC20"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 71095,
                                            "name": "_callOptionalReturn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71272,
                                            "src": "1802:19:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70970_$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (contract IERC20,bytes memory)"
                                            }
                                        },
                                        "id": 71106,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1802:81:166",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71107,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1802:81:166"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71083,
                            "nodeType": "StructuredDocumentation",
                            "src": "1469:228:166",
                            "text": " @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\n calling contract. If `token` returns no value, non-reverting calls are assumed to be successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "safeTransferFrom",
                        "nameLocation": "1711:16:166",
                        "parameters": {
                            "id": 71093,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71086,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "1735:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71109,
                                    "src": "1728:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70970",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71085,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71084,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "1728:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70970,
                                            "src": "1728:6:166"
                                        },
                                        "referencedDeclaration": 70970,
                                        "src": "1728:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71088,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "1750:4:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71109,
                                    "src": "1742:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71087,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1742:7:166",
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
                                    "id": 71090,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1764:2:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71109,
                                    "src": "1756:10:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71089,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1756:7:166",
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
                                    "id": 71092,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "1776:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71109,
                                    "src": "1768:13:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71091,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1768:7:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1727:55:166"
                        },
                        "returnParameters": {
                            "id": 71094,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1792:0:166"
                        },
                        "scope": 71322,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71140,
                        "nodeType": "FunctionDefinition",
                        "src": "2081:225:166",
                        "nodes": [],
                        "body": {
                            "id": 71139,
                            "nodeType": "Block",
                            "src": "2167:139:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71121
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71121,
                                            "mutability": "mutable",
                                            "name": "oldAllowance",
                                            "nameLocation": "2185:12:166",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71139,
                                            "src": "2177:20:166",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 71120,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2177:7:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71130,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 71126,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2224:4:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_SafeERC20_$71322",
                                                            "typeString": "library SafeERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_SafeERC20_$71322",
                                                            "typeString": "library SafeERC20"
                                                        }
                                                    ],
                                                    "id": 71125,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2216:7:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 71124,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2216:7:166",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71127,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2216:13:166",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71128,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71115,
                                                "src": "2231:7:166",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 71122,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71113,
                                                "src": "2200:5:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$70970",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 71123,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2206:9:166",
                                            "memberName": "allowance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 70947,
                                            "src": "2200:15:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address,address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 71129,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2200:39:166",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2177:62:166"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71132,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71113,
                                                "src": "2262:5:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$70970",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "id": 71133,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71115,
                                                "src": "2269:7:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 71136,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 71134,
                                                    "name": "oldAllowance",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71121,
                                                    "src": "2278:12:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "id": 71135,
                                                    "name": "value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71117,
                                                    "src": "2293:5:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2278:20:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_IERC20_$70970",
                                                    "typeString": "contract IERC20"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 71131,
                                            "name": "forceApprove",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71230,
                                            "src": "2249:12:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70970_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (contract IERC20,address,uint256)"
                                            }
                                        },
                                        "id": 71137,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2249:50:166",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71138,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2249:50:166"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71110,
                            "nodeType": "StructuredDocumentation",
                            "src": "1896:180:166",
                            "text": " @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "safeIncreaseAllowance",
                        "nameLocation": "2090:21:166",
                        "parameters": {
                            "id": 71118,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71113,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "2119:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71140,
                                    "src": "2112:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70970",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71112,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71111,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "2112:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70970,
                                            "src": "2112:6:166"
                                        },
                                        "referencedDeclaration": 70970,
                                        "src": "2112:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71115,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2134:7:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71140,
                                    "src": "2126:15:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71114,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2126:7:166",
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
                                    "id": 71117,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "2151:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71140,
                                    "src": "2143:13:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71116,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2143:7:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2111:46:166"
                        },
                        "returnParameters": {
                            "id": 71119,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2167:0:166"
                        },
                        "scope": 71322,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71183,
                        "nodeType": "FunctionDefinition",
                        "src": "2509:468:166",
                        "nodes": [],
                        "body": {
                            "id": 71182,
                            "nodeType": "Block",
                            "src": "2607:370:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "id": 71181,
                                    "nodeType": "UncheckedBlock",
                                    "src": "2617:354:166",
                                    "statements": [
                                        {
                                            "assignments": [
                                                71152
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 71152,
                                                    "mutability": "mutable",
                                                    "name": "currentAllowance",
                                                    "nameLocation": "2649:16:166",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 71181,
                                                    "src": "2641:24:166",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 71151,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2641:7:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 71161,
                                            "initialValue": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 71157,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "2692:4:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_SafeERC20_$71322",
                                                                    "typeString": "library SafeERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_SafeERC20_$71322",
                                                                    "typeString": "library SafeERC20"
                                                                }
                                                            ],
                                                            "id": 71156,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2684:7:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 71155,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2684:7:166",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 71158,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2684:13:166",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "id": 71159,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71146,
                                                        "src": "2699:7:166",
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
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 71153,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71144,
                                                        "src": "2668:5:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    },
                                                    "id": 71154,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2674:9:166",
                                                    "memberName": "allowance",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 70947,
                                                    "src": "2668:15:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                                        "typeString": "function (address,address) view external returns (uint256)"
                                                    }
                                                },
                                                "id": 71160,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2668:39:166",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "2641:66:166"
                                        },
                                        {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 71164,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 71162,
                                                    "name": "currentAllowance",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71152,
                                                    "src": "2725:16:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 71163,
                                                    "name": "requestedDecrease",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71148,
                                                    "src": "2744:17:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2725:36:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "id": 71172,
                                            "nodeType": "IfStatement",
                                            "src": "2721:160:166",
                                            "trueBody": {
                                                "id": 71171,
                                                "nodeType": "Block",
                                                "src": "2763:118:166",
                                                "statements": [
                                                    {
                                                        "errorCall": {
                                                            "arguments": [
                                                                {
                                                                    "id": 71166,
                                                                    "name": "spender",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71146,
                                                                    "src": "2821:7:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 71167,
                                                                    "name": "currentAllowance",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71152,
                                                                    "src": "2830:16:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 71168,
                                                                    "name": "requestedDecrease",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71148,
                                                                    "src": "2848:17:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
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
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                ],
                                                                "id": 71165,
                                                                "name": "SafeERC20FailedDecreaseAllowance",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71058,
                                                                "src": "2788:32:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                                                    "typeString": "function (address,uint256,uint256) pure"
                                                                }
                                                            },
                                                            "id": 71169,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2788:78:166",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_tuple$__$",
                                                                "typeString": "tuple()"
                                                            }
                                                        },
                                                        "id": 71170,
                                                        "nodeType": "RevertStatement",
                                                        "src": "2781:85:166"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 71174,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71144,
                                                        "src": "2907:5:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    },
                                                    {
                                                        "id": 71175,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71146,
                                                        "src": "2914:7:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 71178,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 71176,
                                                            "name": "currentAllowance",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71152,
                                                            "src": "2923:16:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 71177,
                                                            "name": "requestedDecrease",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71148,
                                                            "src": "2942:17:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2923:36:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                                            "typeString": "contract IERC20"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "id": 71173,
                                                    "name": "forceApprove",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71230,
                                                    "src": "2894:12:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70970_$_t_address_$_t_uint256_$returns$__$",
                                                        "typeString": "function (contract IERC20,address,uint256)"
                                                    }
                                                },
                                                "id": 71179,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2894:66:166",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 71180,
                                            "nodeType": "ExpressionStatement",
                                            "src": "2894:66:166"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71141,
                            "nodeType": "StructuredDocumentation",
                            "src": "2312:192:166",
                            "text": " @dev Decrease the calling contract's allowance toward `spender` by `requestedDecrease`. If `token` returns no\n value, non-reverting calls are assumed to be successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "safeDecreaseAllowance",
                        "nameLocation": "2518:21:166",
                        "parameters": {
                            "id": 71149,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71144,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "2547:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71183,
                                    "src": "2540:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70970",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71143,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71142,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "2540:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70970,
                                            "src": "2540:6:166"
                                        },
                                        "referencedDeclaration": 70970,
                                        "src": "2540:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71146,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2562:7:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71183,
                                    "src": "2554:15:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71145,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2554:7:166",
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
                                    "id": 71148,
                                    "mutability": "mutable",
                                    "name": "requestedDecrease",
                                    "nameLocation": "2579:17:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71183,
                                    "src": "2571:25:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71147,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2571:7:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2539:58:166"
                        },
                        "returnParameters": {
                            "id": 71150,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2607:0:166"
                        },
                        "scope": 71322,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71230,
                        "nodeType": "FunctionDefinition",
                        "src": "3296:380:166",
                        "nodes": [],
                        "body": {
                            "id": 71229,
                            "nodeType": "Block",
                            "src": "3373:303:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71195
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71195,
                                            "mutability": "mutable",
                                            "name": "approvalCall",
                                            "nameLocation": "3396:12:166",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71229,
                                            "src": "3383:25:166",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71194,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3383:5:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71204,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 71198,
                                                    "name": "token",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71187,
                                                    "src": "3426:5:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$70970",
                                                        "typeString": "contract IERC20"
                                                    }
                                                },
                                                "id": 71199,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3432:7:166",
                                                "memberName": "approve",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 70957,
                                                "src": "3426:13:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                    "typeString": "function (address,uint256) external returns (bool)"
                                                }
                                            },
                                            {
                                                "components": [
                                                    {
                                                        "id": 71200,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71189,
                                                        "src": "3442:7:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "id": 71201,
                                                        "name": "value",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71191,
                                                        "src": "3451:5:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "id": 71202,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "3441:16:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                                                    "typeString": "tuple(address,uint256)"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                    "typeString": "function (address,uint256) external returns (bool)"
                                                },
                                                {
                                                    "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                                                    "typeString": "tuple(address,uint256)"
                                                }
                                            ],
                                            "expression": {
                                                "id": 71196,
                                                "name": "abi",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -1,
                                                "src": "3411:3:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_abi",
                                                    "typeString": "abi"
                                                }
                                            },
                                            "id": 71197,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberLocation": "3415:10:166",
                                            "memberName": "encodeCall",
                                            "nodeType": "MemberAccess",
                                            "src": "3411:14:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function () pure returns (bytes memory)"
                                            }
                                        },
                                        "id": 71203,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3411:47:166",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3383:75:166"
                                },
                                {
                                    "condition": {
                                        "id": 71209,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "3473:45:166",
                                        "subExpression": {
                                            "arguments": [
                                                {
                                                    "id": 71206,
                                                    "name": "token",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71187,
                                                    "src": "3498:5:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$70970",
                                                        "typeString": "contract IERC20"
                                                    }
                                                },
                                                {
                                                    "id": 71207,
                                                    "name": "approvalCall",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71195,
                                                    "src": "3505:12:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$70970",
                                                        "typeString": "contract IERC20"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                ],
                                                "id": 71205,
                                                "name": "_callOptionalReturnBool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71321,
                                                "src": "3474:23:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70970_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                                                    "typeString": "function (contract IERC20,bytes memory) returns (bool)"
                                                }
                                            },
                                            "id": 71208,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3474:44:166",
                                            "tryCall": false,
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
                                    "id": 71228,
                                    "nodeType": "IfStatement",
                                    "src": "3469:201:166",
                                    "trueBody": {
                                        "id": 71227,
                                        "nodeType": "Block",
                                        "src": "3520:150:166",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 71211,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71187,
                                                            "src": "3554:5:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$70970",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "expression": {
                                                                        "id": 71214,
                                                                        "name": "token",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 71187,
                                                                        "src": "3576:5:166",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                                                            "typeString": "contract IERC20"
                                                                        }
                                                                    },
                                                                    "id": 71215,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "3582:7:166",
                                                                    "memberName": "approve",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 70957,
                                                                    "src": "3576:13:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                        "typeString": "function (address,uint256) external returns (bool)"
                                                                    }
                                                                },
                                                                {
                                                                    "components": [
                                                                        {
                                                                            "id": 71216,
                                                                            "name": "spender",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 71189,
                                                                            "src": "3592:7:166",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_address",
                                                                                "typeString": "address"
                                                                            }
                                                                        },
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 71217,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3601:1:166",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            "value": "0"
                                                                        }
                                                                    ],
                                                                    "id": 71218,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "3591:12:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_tuple$_t_address_$_t_rational_0_by_1_$",
                                                                        "typeString": "tuple(address,int_const 0)"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                        "typeString": "function (address,uint256) external returns (bool)"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_tuple$_t_address_$_t_rational_0_by_1_$",
                                                                        "typeString": "tuple(address,int_const 0)"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 71212,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "3561:3:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 71213,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "3565:10:166",
                                                                "memberName": "encodeCall",
                                                                "nodeType": "MemberAccess",
                                                                "src": "3561:14:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                }
                                                            },
                                                            "id": 71219,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "3561:43:166",
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
                                                                "typeIdentifier": "t_contract$_IERC20_$70970",
                                                                "typeString": "contract IERC20"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "id": 71210,
                                                        "name": "_callOptionalReturn",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71272,
                                                        "src": "3534:19:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70970_$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (contract IERC20,bytes memory)"
                                                        }
                                                    },
                                                    "id": 71220,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3534:71:166",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71221,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3534:71:166"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 71223,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71187,
                                                            "src": "3639:5:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$70970",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        {
                                                            "id": 71224,
                                                            "name": "approvalCall",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71195,
                                                            "src": "3646:12:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_contract$_IERC20_$70970",
                                                                "typeString": "contract IERC20"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "id": 71222,
                                                        "name": "_callOptionalReturn",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71272,
                                                        "src": "3619:19:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70970_$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (contract IERC20,bytes memory)"
                                                        }
                                                    },
                                                    "id": 71225,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3619:40:166",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71226,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3619:40:166"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71184,
                            "nodeType": "StructuredDocumentation",
                            "src": "2983:308:166",
                            "text": " @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful. Meant to be used with tokens that require the approval\n to be set to zero before setting it to a non-zero value, such as USDT."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "forceApprove",
                        "nameLocation": "3305:12:166",
                        "parameters": {
                            "id": 71192,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71187,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "3325:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71230,
                                    "src": "3318:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70970",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71186,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71185,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "3318:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70970,
                                            "src": "3318:6:166"
                                        },
                                        "referencedDeclaration": 70970,
                                        "src": "3318:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71189,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "3340:7:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71230,
                                    "src": "3332:15:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71188,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3332:7:166",
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
                                    "id": 71191,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3357:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71230,
                                    "src": "3349:13:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71190,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3349:7:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3317:46:166"
                        },
                        "returnParameters": {
                            "id": 71193,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3373:0:166"
                        },
                        "scope": 71322,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71272,
                        "nodeType": "FunctionDefinition",
                        "src": "4059:629:166",
                        "nodes": [],
                        "body": {
                            "id": 71271,
                            "nodeType": "Block",
                            "src": "4129:559:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71240
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71240,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "4491:10:166",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71271,
                                            "src": "4478:23:166",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71239,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4478:5:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71248,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71246,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71236,
                                                "src": "4532:4:166",
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
                                                "arguments": [
                                                    {
                                                        "id": 71243,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71234,
                                                        "src": "4512:5:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 71242,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4504:7:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 71241,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4504:7:166",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71244,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4504:14:166",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71245,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4519:12:166",
                                            "memberName": "functionCall",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 71396,
                                            "src": "4504:27:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$attached_to$_t_address_$",
                                                "typeString": "function (address,bytes memory) returns (bytes memory)"
                                            }
                                        },
                                        "id": 71247,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4504:33:166",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4478:59:166"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 71261,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 71252,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 71249,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71240,
                                                    "src": "4551:10:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 71250,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4562:6:166",
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "src": "4551:17:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 71251,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4572:1:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "4551:22:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "id": 71260,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "!",
                                            "prefix": true,
                                            "src": "4577:31:166",
                                            "subExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 71255,
                                                        "name": "returndata",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71240,
                                                        "src": "4589:10:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 71257,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "4602:4:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_bool_$",
                                                                    "typeString": "type(bool)"
                                                                },
                                                                "typeName": {
                                                                    "id": 71256,
                                                                    "name": "bool",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4602:4:166",
                                                                    "typeDescriptions": {}
                                                                }
                                                            }
                                                        ],
                                                        "id": 71258,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "4601:6:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_bool_$",
                                                            "typeString": "type(bool)"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_type$_t_bool_$",
                                                            "typeString": "type(bool)"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 71253,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "4578:3:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 71254,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4582:6:166",
                                                    "memberName": "decode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4578:10:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                                        "typeString": "function () pure"
                                                    }
                                                },
                                                "id": 71259,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4578:30:166",
                                                "tryCall": false,
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
                                        "src": "4551:57:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 71270,
                                    "nodeType": "IfStatement",
                                    "src": "4547:135:166",
                                    "trueBody": {
                                        "id": 71269,
                                        "nodeType": "Block",
                                        "src": "4610:72:166",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 71265,
                                                                    "name": "token",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71234,
                                                                    "src": "4664:5:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_IERC20_$70970",
                                                                        "typeString": "contract IERC20"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_IERC20_$70970",
                                                                        "typeString": "contract IERC20"
                                                                    }
                                                                ],
                                                                "id": 71264,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "4656:7:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 71263,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4656:7:166",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71266,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4656:14:166",
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
                                                        "id": 71262,
                                                        "name": "SafeERC20FailedOperation",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71049,
                                                        "src": "4631:24:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 71267,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4631:40:166",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71268,
                                                "nodeType": "RevertStatement",
                                                "src": "4624:47:166"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71231,
                            "nodeType": "StructuredDocumentation",
                            "src": "3682:372:166",
                            "text": " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants)."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_callOptionalReturn",
                        "nameLocation": "4068:19:166",
                        "parameters": {
                            "id": 71237,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71234,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "4095:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71272,
                                    "src": "4088:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70970",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71233,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71232,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "4088:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70970,
                                            "src": "4088:6:166"
                                        },
                                        "referencedDeclaration": 70970,
                                        "src": "4088:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71236,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "4115:4:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71272,
                                    "src": "4102:17:166",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71235,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4102:5:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4087:33:166"
                        },
                        "returnParameters": {
                            "id": 71238,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4129:0:166"
                        },
                        "scope": 71322,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 71321,
                        "nodeType": "FunctionDefinition",
                        "src": "5189:578:166",
                        "nodes": [],
                        "body": {
                            "id": 71320,
                            "nodeType": "Block",
                            "src": "5278:489:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71284,
                                        71286
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71284,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "5579:7:166",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71320,
                                            "src": "5574:12:166",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71283,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5574:4:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 71286,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "5601:10:166",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71320,
                                            "src": "5588:23:166",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71285,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5588:5:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71294,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71292,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71278,
                                                "src": "5635:4:166",
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
                                                "arguments": [
                                                    {
                                                        "id": 71289,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71276,
                                                        "src": "5623:5:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 71288,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "5615:7:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 71287,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "5615:7:166",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71290,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5615:14:166",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71291,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5630:4:166",
                                            "memberName": "call",
                                            "nodeType": "MemberAccess",
                                            "src": "5615:19:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 71293,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5615:25:166",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5573:67:166"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 71318,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "id": 71309,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 71295,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71284,
                                                "src": "5657:7:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "&&",
                                            "rightExpression": {
                                                "components": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "id": 71307,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 71299,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "expression": {
                                                                    "id": 71296,
                                                                    "name": "returndata",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71286,
                                                                    "src": "5669:10:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes memory"
                                                                    }
                                                                },
                                                                "id": 71297,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5680:6:166",
                                                                "memberName": "length",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5669:17:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "==",
                                                            "rightExpression": {
                                                                "hexValue": "30",
                                                                "id": 71298,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5690:1:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                },
                                                                "value": "0"
                                                            },
                                                            "src": "5669:22:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "||",
                                                        "rightExpression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 71302,
                                                                    "name": "returndata",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71286,
                                                                    "src": "5706:10:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes memory"
                                                                    }
                                                                },
                                                                {
                                                                    "components": [
                                                                        {
                                                                            "id": 71304,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "5719:4:166",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_bool_$",
                                                                                "typeString": "type(bool)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 71303,
                                                                                "name": "bool",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "5719:4:166",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 71305,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "5718:6:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bool_$",
                                                                        "typeString": "type(bool)"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes memory"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_type$_t_bool_$",
                                                                        "typeString": "type(bool)"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 71300,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "5695:3:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 71301,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5699:6:166",
                                                                "memberName": "decode",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5695:10:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                                                    "typeString": "function () pure"
                                                                }
                                                            },
                                                            "id": 71306,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5695:30:166",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "src": "5669:56:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "id": 71308,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "5668:58:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "src": "5657:69:166",
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
                                            "id": 71317,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "id": 71312,
                                                                "name": "token",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71276,
                                                                "src": "5738:5:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$70970",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$70970",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            ],
                                                            "id": 71311,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "5730:7:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 71310,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "5730:7:166",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 71313,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5730:14:166",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 71314,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5745:4:166",
                                                    "memberName": "code",
                                                    "nodeType": "MemberAccess",
                                                    "src": "5730:19:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 71315,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5750:6:166",
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "src": "5730:26:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 71316,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5759:1:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "5730:30:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "5657:103:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 71282,
                                    "id": 71319,
                                    "nodeType": "Return",
                                    "src": "5650:110:166"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71273,
                            "nodeType": "StructuredDocumentation",
                            "src": "4694:490:166",
                            "text": " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).\n This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_callOptionalReturnBool",
                        "nameLocation": "5198:23:166",
                        "parameters": {
                            "id": 71279,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71276,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "5229:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71321,
                                    "src": "5222:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70970",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71275,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71274,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "5222:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70970,
                                            "src": "5222:6:166"
                                        },
                                        "referencedDeclaration": 70970,
                                        "src": "5222:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70970",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71278,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "5249:4:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71321,
                                    "src": "5236:17:166",
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
                                        "src": "5236:5:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5221:33:166"
                        },
                        "returnParameters": {
                            "id": 71282,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71281,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71321,
                                    "src": "5272:4:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71280,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5272:4:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5271:6:166"
                        },
                        "scope": 71322,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "SafeERC20",
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": {
                    "id": 71041,
                    "nodeType": "StructuredDocumentation",
                    "src": "293:457:166",
                    "text": " @title SafeERC20\n @dev Wrappers around ERC20 operations that throw on failure (when the token\n contract returns false). Tokens that return no value (and instead revert or\n throw on failure) are also supported, non-reverting calls are assumed to be\n successful.\n To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\n which allows you to call the safe operations as `token.safeTransfer(...)`, etc."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71322
                ],
                "name": "SafeERC20",
                "nameLocation": "759:9:166",
                "scope": 71323,
                "usedErrors": [
                    71049,
                    71058
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 166
};
