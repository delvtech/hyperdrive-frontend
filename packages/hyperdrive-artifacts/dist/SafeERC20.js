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
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076f48067ee79af48f87c626716abb2d6dba39ab8e4a1bf0af237818455119cfe64736f6c63430008140033",
        "sourceMap": "751:5018:168:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;751:5018:168;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076f48067ee79af48f87c626716abb2d6dba39ab8e4a1bf0af237818455119cfe64736f6c63430008140033",
        "sourceMap": "751:5018:168:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"currentAllowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"requestedDecrease\",\"type\":\"uint256\"}],\"name\":\"SafeERC20FailedDecreaseAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Wrappers around ERC20 operations that throw on failure (when the token contract returns false). Tokens that return no value (and instead revert or throw on failure) are also supported, non-reverting calls are assumed to be successful. To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract, which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\",\"errors\":{\"SafeERC20FailedDecreaseAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failed `decreaseAllowance` request.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"SafeERC20\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":\"SafeERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]}},\"version\":1}",
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
        "id": 71644,
        "exportedSymbols": {
            "Address": [
                71896
            ],
            "IERC20": [
                71291
            ],
            "IERC20Permit": [
                71353
            ],
            "SafeERC20": [
                71643
            ]
        },
        "nodeType": "SourceUnit",
        "src": "115:5655:168",
        "nodes": [
            {
                "id": 71355,
                "nodeType": "PragmaDirective",
                "src": "115:24:168",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 71357,
                "nodeType": "ImportDirective",
                "src": "141:37:168",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
                "file": "../IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 71644,
                "sourceUnit": 71292,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 71356,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71291,
                            "src": "149:6:168",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 71359,
                "nodeType": "ImportDirective",
                "src": "179:60:168",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol",
                "file": "../extensions/IERC20Permit.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 71644,
                "sourceUnit": 71354,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 71358,
                            "name": "IERC20Permit",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71353,
                            "src": "187:12:168",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 71361,
                "nodeType": "ImportDirective",
                "src": "240:51:168",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Address.sol",
                "file": "../../../utils/Address.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 71644,
                "sourceUnit": 71897,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 71360,
                            "name": "Address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71896,
                            "src": "248:7:168",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 71643,
                "nodeType": "ContractDefinition",
                "src": "751:5018:168",
                "nodes": [
                    {
                        "id": 71365,
                        "nodeType": "UsingForDirective",
                        "src": "775:26:168",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 71363,
                            "name": "Address",
                            "nameLocations": [
                                "781:7:168"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 71896,
                            "src": "781:7:168"
                        },
                        "typeName": {
                            "id": 71364,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "793:7:168",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        }
                    },
                    {
                        "id": 71370,
                        "nodeType": "ErrorDefinition",
                        "src": "876:46:168",
                        "nodes": [],
                        "documentation": {
                            "id": 71366,
                            "nodeType": "StructuredDocumentation",
                            "src": "807:64:168",
                            "text": " @dev An operation with an ERC20 token failed."
                        },
                        "errorSelector": "5274afe7",
                        "name": "SafeERC20FailedOperation",
                        "nameLocation": "882:24:168",
                        "parameters": {
                            "id": 71369,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71368,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "915:5:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71370,
                                    "src": "907:13:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71367,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "907:7:168",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "906:15:168"
                        }
                    },
                    {
                        "id": 71379,
                        "nodeType": "ErrorDefinition",
                        "src": "1004:109:168",
                        "nodes": [],
                        "documentation": {
                            "id": 71371,
                            "nodeType": "StructuredDocumentation",
                            "src": "928:71:168",
                            "text": " @dev Indicates a failed `decreaseAllowance` request."
                        },
                        "errorSelector": "e570110f",
                        "name": "SafeERC20FailedDecreaseAllowance",
                        "nameLocation": "1010:32:168",
                        "parameters": {
                            "id": 71378,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71373,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "1051:7:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71379,
                                    "src": "1043:15:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71372,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1043:7:168",
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
                                    "id": 71375,
                                    "mutability": "mutable",
                                    "name": "currentAllowance",
                                    "nameLocation": "1068:16:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71379,
                                    "src": "1060:24:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71374,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1060:7:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71377,
                                    "mutability": "mutable",
                                    "name": "requestedDecrease",
                                    "nameLocation": "1094:17:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71379,
                                    "src": "1086:25:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71376,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1086:7:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1042:70:168"
                        }
                    },
                    {
                        "id": 71403,
                        "nodeType": "FunctionDefinition",
                        "src": "1303:160:168",
                        "nodes": [],
                        "body": {
                            "id": 71402,
                            "nodeType": "Block",
                            "src": "1375:88:168",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71391,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71383,
                                                "src": "1405:5:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$71291",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 71394,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71383,
                                                            "src": "1427:5:168",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$71291",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        "id": 71395,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1433:8:168",
                                                        "memberName": "transfer",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 71258,
                                                        "src": "1427:14:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (address,uint256) external returns (bool)"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 71396,
                                                                "name": "to",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71385,
                                                                "src": "1444:2:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 71397,
                                                                "name": "value",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71387,
                                                                "src": "1448:5:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 71398,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "1443:11:168",
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
                                                        "id": 71392,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "1412:3:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 71393,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1416:10:168",
                                                    "memberName": "encodeCall",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1412:14:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 71399,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1412:43:168",
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
                                                    "typeIdentifier": "t_contract$_IERC20_$71291",
                                                    "typeString": "contract IERC20"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 71390,
                                            "name": "_callOptionalReturn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71593,
                                            "src": "1385:19:168",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (contract IERC20,bytes memory)"
                                            }
                                        },
                                        "id": 71400,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1385:71:168",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71401,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1385:71:168"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71380,
                            "nodeType": "StructuredDocumentation",
                            "src": "1119:179:168",
                            "text": " @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "safeTransfer",
                        "nameLocation": "1312:12:168",
                        "parameters": {
                            "id": 71388,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71383,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "1332:5:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71403,
                                    "src": "1325:12:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$71291",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71382,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71381,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "1325:6:168"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71291,
                                            "src": "1325:6:168"
                                        },
                                        "referencedDeclaration": 71291,
                                        "src": "1325:6:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71385,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1347:2:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71403,
                                    "src": "1339:10:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71384,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1339:7:168",
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
                                    "id": 71387,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "1359:5:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71403,
                                    "src": "1351:13:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71386,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1351:7:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1324:41:168"
                        },
                        "returnParameters": {
                            "id": 71389,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1375:0:168"
                        },
                        "scope": 71643,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71430,
                        "nodeType": "FunctionDefinition",
                        "src": "1702:188:168",
                        "nodes": [],
                        "body": {
                            "id": 71429,
                            "nodeType": "Block",
                            "src": "1792:98:168",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71417,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71407,
                                                "src": "1822:5:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$71291",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 71420,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71407,
                                                            "src": "1844:5:168",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$71291",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        "id": 71421,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1850:12:168",
                                                        "memberName": "transferFrom",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 71290,
                                                        "src": "1844:18:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (address,address,uint256) external returns (bool)"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 71422,
                                                                "name": "from",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71409,
                                                                "src": "1865:4:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 71423,
                                                                "name": "to",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71411,
                                                                "src": "1871:2:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 71424,
                                                                "name": "value",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71413,
                                                                "src": "1875:5:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 71425,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "1864:17:168",
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
                                                        "id": 71418,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "1829:3:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 71419,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1833:10:168",
                                                    "memberName": "encodeCall",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1829:14:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 71426,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1829:53:168",
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
                                                    "typeIdentifier": "t_contract$_IERC20_$71291",
                                                    "typeString": "contract IERC20"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 71416,
                                            "name": "_callOptionalReturn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71593,
                                            "src": "1802:19:168",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (contract IERC20,bytes memory)"
                                            }
                                        },
                                        "id": 71427,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1802:81:168",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71428,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1802:81:168"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71404,
                            "nodeType": "StructuredDocumentation",
                            "src": "1469:228:168",
                            "text": " @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\n calling contract. If `token` returns no value, non-reverting calls are assumed to be successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "safeTransferFrom",
                        "nameLocation": "1711:16:168",
                        "parameters": {
                            "id": 71414,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71407,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "1735:5:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71430,
                                    "src": "1728:12:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$71291",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71406,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71405,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "1728:6:168"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71291,
                                            "src": "1728:6:168"
                                        },
                                        "referencedDeclaration": 71291,
                                        "src": "1728:6:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71409,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "1750:4:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71430,
                                    "src": "1742:12:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71408,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1742:7:168",
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
                                    "id": 71411,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1764:2:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71430,
                                    "src": "1756:10:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71410,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1756:7:168",
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
                                    "id": 71413,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "1776:5:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71430,
                                    "src": "1768:13:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71412,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1768:7:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1727:55:168"
                        },
                        "returnParameters": {
                            "id": 71415,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1792:0:168"
                        },
                        "scope": 71643,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71461,
                        "nodeType": "FunctionDefinition",
                        "src": "2081:225:168",
                        "nodes": [],
                        "body": {
                            "id": 71460,
                            "nodeType": "Block",
                            "src": "2167:139:168",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71442
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71442,
                                            "mutability": "mutable",
                                            "name": "oldAllowance",
                                            "nameLocation": "2185:12:168",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71460,
                                            "src": "2177:20:168",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 71441,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2177:7:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71451,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 71447,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2224:4:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_SafeERC20_$71643",
                                                            "typeString": "library SafeERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_SafeERC20_$71643",
                                                            "typeString": "library SafeERC20"
                                                        }
                                                    ],
                                                    "id": 71446,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2216:7:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 71445,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2216:7:168",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71448,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2216:13:168",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71449,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71436,
                                                "src": "2231:7:168",
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
                                                "id": 71443,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71434,
                                                "src": "2200:5:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$71291",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 71444,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2206:9:168",
                                            "memberName": "allowance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 71268,
                                            "src": "2200:15:168",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address,address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 71450,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2200:39:168",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2177:62:168"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71453,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71434,
                                                "src": "2262:5:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$71291",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "id": 71454,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71436,
                                                "src": "2269:7:168",
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
                                                "id": 71457,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 71455,
                                                    "name": "oldAllowance",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71442,
                                                    "src": "2278:12:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "id": 71456,
                                                    "name": "value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71438,
                                                    "src": "2293:5:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2278:20:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_IERC20_$71291",
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
                                            "id": 71452,
                                            "name": "forceApprove",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71551,
                                            "src": "2249:12:168",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (contract IERC20,address,uint256)"
                                            }
                                        },
                                        "id": 71458,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2249:50:168",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71459,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2249:50:168"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71431,
                            "nodeType": "StructuredDocumentation",
                            "src": "1896:180:168",
                            "text": " @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "safeIncreaseAllowance",
                        "nameLocation": "2090:21:168",
                        "parameters": {
                            "id": 71439,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71434,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "2119:5:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71461,
                                    "src": "2112:12:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$71291",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71433,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71432,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "2112:6:168"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71291,
                                            "src": "2112:6:168"
                                        },
                                        "referencedDeclaration": 71291,
                                        "src": "2112:6:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71436,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2134:7:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71461,
                                    "src": "2126:15:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71435,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2126:7:168",
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
                                    "id": 71438,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "2151:5:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71461,
                                    "src": "2143:13:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71437,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2143:7:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2111:46:168"
                        },
                        "returnParameters": {
                            "id": 71440,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2167:0:168"
                        },
                        "scope": 71643,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71504,
                        "nodeType": "FunctionDefinition",
                        "src": "2509:468:168",
                        "nodes": [],
                        "body": {
                            "id": 71503,
                            "nodeType": "Block",
                            "src": "2607:370:168",
                            "nodes": [],
                            "statements": [
                                {
                                    "id": 71502,
                                    "nodeType": "UncheckedBlock",
                                    "src": "2617:354:168",
                                    "statements": [
                                        {
                                            "assignments": [
                                                71473
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 71473,
                                                    "mutability": "mutable",
                                                    "name": "currentAllowance",
                                                    "nameLocation": "2649:16:168",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 71502,
                                                    "src": "2641:24:168",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 71472,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2641:7:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 71482,
                                            "initialValue": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 71478,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "2692:4:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_SafeERC20_$71643",
                                                                    "typeString": "library SafeERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_SafeERC20_$71643",
                                                                    "typeString": "library SafeERC20"
                                                                }
                                                            ],
                                                            "id": 71477,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2684:7:168",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 71476,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2684:7:168",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 71479,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2684:13:168",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "id": 71480,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71467,
                                                        "src": "2699:7:168",
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
                                                        "id": 71474,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71465,
                                                        "src": "2668:5:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    },
                                                    "id": 71475,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2674:9:168",
                                                    "memberName": "allowance",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 71268,
                                                    "src": "2668:15:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                                        "typeString": "function (address,address) view external returns (uint256)"
                                                    }
                                                },
                                                "id": 71481,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2668:39:168",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "2641:66:168"
                                        },
                                        {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 71485,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 71483,
                                                    "name": "currentAllowance",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71473,
                                                    "src": "2725:16:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 71484,
                                                    "name": "requestedDecrease",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71469,
                                                    "src": "2744:17:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2725:36:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "id": 71493,
                                            "nodeType": "IfStatement",
                                            "src": "2721:160:168",
                                            "trueBody": {
                                                "id": 71492,
                                                "nodeType": "Block",
                                                "src": "2763:118:168",
                                                "statements": [
                                                    {
                                                        "errorCall": {
                                                            "arguments": [
                                                                {
                                                                    "id": 71487,
                                                                    "name": "spender",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71467,
                                                                    "src": "2821:7:168",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 71488,
                                                                    "name": "currentAllowance",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71473,
                                                                    "src": "2830:16:168",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 71489,
                                                                    "name": "requestedDecrease",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71469,
                                                                    "src": "2848:17:168",
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
                                                                "id": 71486,
                                                                "name": "SafeERC20FailedDecreaseAllowance",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71379,
                                                                "src": "2788:32:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                                                    "typeString": "function (address,uint256,uint256) pure"
                                                                }
                                                            },
                                                            "id": 71490,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2788:78:168",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_tuple$__$",
                                                                "typeString": "tuple()"
                                                            }
                                                        },
                                                        "id": 71491,
                                                        "nodeType": "RevertStatement",
                                                        "src": "2781:85:168"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 71495,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71465,
                                                        "src": "2907:5:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    },
                                                    {
                                                        "id": 71496,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71467,
                                                        "src": "2914:7:168",
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
                                                        "id": 71499,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 71497,
                                                            "name": "currentAllowance",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71473,
                                                            "src": "2923:16:168",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 71498,
                                                            "name": "requestedDecrease",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71469,
                                                            "src": "2942:17:168",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2923:36:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$71291",
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
                                                    "id": 71494,
                                                    "name": "forceApprove",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71551,
                                                    "src": "2894:12:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_address_$_t_uint256_$returns$__$",
                                                        "typeString": "function (contract IERC20,address,uint256)"
                                                    }
                                                },
                                                "id": 71500,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2894:66:168",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 71501,
                                            "nodeType": "ExpressionStatement",
                                            "src": "2894:66:168"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71462,
                            "nodeType": "StructuredDocumentation",
                            "src": "2312:192:168",
                            "text": " @dev Decrease the calling contract's allowance toward `spender` by `requestedDecrease`. If `token` returns no\n value, non-reverting calls are assumed to be successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "safeDecreaseAllowance",
                        "nameLocation": "2518:21:168",
                        "parameters": {
                            "id": 71470,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71465,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "2547:5:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71504,
                                    "src": "2540:12:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$71291",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71464,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71463,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "2540:6:168"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71291,
                                            "src": "2540:6:168"
                                        },
                                        "referencedDeclaration": 71291,
                                        "src": "2540:6:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71467,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2562:7:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71504,
                                    "src": "2554:15:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71466,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2554:7:168",
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
                                    "id": 71469,
                                    "mutability": "mutable",
                                    "name": "requestedDecrease",
                                    "nameLocation": "2579:17:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71504,
                                    "src": "2571:25:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71468,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2571:7:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2539:58:168"
                        },
                        "returnParameters": {
                            "id": 71471,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2607:0:168"
                        },
                        "scope": 71643,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71551,
                        "nodeType": "FunctionDefinition",
                        "src": "3296:380:168",
                        "nodes": [],
                        "body": {
                            "id": 71550,
                            "nodeType": "Block",
                            "src": "3373:303:168",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71516
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71516,
                                            "mutability": "mutable",
                                            "name": "approvalCall",
                                            "nameLocation": "3396:12:168",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71550,
                                            "src": "3383:25:168",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71515,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3383:5:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71525,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 71519,
                                                    "name": "token",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71508,
                                                    "src": "3426:5:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$71291",
                                                        "typeString": "contract IERC20"
                                                    }
                                                },
                                                "id": 71520,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3432:7:168",
                                                "memberName": "approve",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 71278,
                                                "src": "3426:13:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                    "typeString": "function (address,uint256) external returns (bool)"
                                                }
                                            },
                                            {
                                                "components": [
                                                    {
                                                        "id": 71521,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71510,
                                                        "src": "3442:7:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "id": 71522,
                                                        "name": "value",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71512,
                                                        "src": "3451:5:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "id": 71523,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "3441:16:168",
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
                                                "id": 71517,
                                                "name": "abi",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -1,
                                                "src": "3411:3:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_abi",
                                                    "typeString": "abi"
                                                }
                                            },
                                            "id": 71518,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberLocation": "3415:10:168",
                                            "memberName": "encodeCall",
                                            "nodeType": "MemberAccess",
                                            "src": "3411:14:168",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function () pure returns (bytes memory)"
                                            }
                                        },
                                        "id": 71524,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3411:47:168",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3383:75:168"
                                },
                                {
                                    "condition": {
                                        "id": 71530,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "3473:45:168",
                                        "subExpression": {
                                            "arguments": [
                                                {
                                                    "id": 71527,
                                                    "name": "token",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71508,
                                                    "src": "3498:5:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$71291",
                                                        "typeString": "contract IERC20"
                                                    }
                                                },
                                                {
                                                    "id": 71528,
                                                    "name": "approvalCall",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71516,
                                                    "src": "3505:12:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$71291",
                                                        "typeString": "contract IERC20"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                ],
                                                "id": 71526,
                                                "name": "_callOptionalReturnBool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71642,
                                                "src": "3474:23:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                                                    "typeString": "function (contract IERC20,bytes memory) returns (bool)"
                                                }
                                            },
                                            "id": 71529,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3474:44:168",
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
                                    "id": 71549,
                                    "nodeType": "IfStatement",
                                    "src": "3469:201:168",
                                    "trueBody": {
                                        "id": 71548,
                                        "nodeType": "Block",
                                        "src": "3520:150:168",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 71532,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71508,
                                                            "src": "3554:5:168",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$71291",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "expression": {
                                                                        "id": 71535,
                                                                        "name": "token",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 71508,
                                                                        "src": "3576:5:168",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                                                            "typeString": "contract IERC20"
                                                                        }
                                                                    },
                                                                    "id": 71536,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "3582:7:168",
                                                                    "memberName": "approve",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 71278,
                                                                    "src": "3576:13:168",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                        "typeString": "function (address,uint256) external returns (bool)"
                                                                    }
                                                                },
                                                                {
                                                                    "components": [
                                                                        {
                                                                            "id": 71537,
                                                                            "name": "spender",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 71510,
                                                                            "src": "3592:7:168",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_address",
                                                                                "typeString": "address"
                                                                            }
                                                                        },
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 71538,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3601:1:168",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            "value": "0"
                                                                        }
                                                                    ],
                                                                    "id": 71539,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "3591:12:168",
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
                                                                    "id": 71533,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "3561:3:168",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 71534,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "3565:10:168",
                                                                "memberName": "encodeCall",
                                                                "nodeType": "MemberAccess",
                                                                "src": "3561:14:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                }
                                                            },
                                                            "id": 71540,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "3561:43:168",
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
                                                                "typeIdentifier": "t_contract$_IERC20_$71291",
                                                                "typeString": "contract IERC20"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "id": 71531,
                                                        "name": "_callOptionalReturn",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71593,
                                                        "src": "3534:19:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (contract IERC20,bytes memory)"
                                                        }
                                                    },
                                                    "id": 71541,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3534:71:168",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71542,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3534:71:168"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 71544,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71508,
                                                            "src": "3639:5:168",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$71291",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        {
                                                            "id": 71545,
                                                            "name": "approvalCall",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71516,
                                                            "src": "3646:12:168",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_contract$_IERC20_$71291",
                                                                "typeString": "contract IERC20"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "id": 71543,
                                                        "name": "_callOptionalReturn",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71593,
                                                        "src": "3619:19:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (contract IERC20,bytes memory)"
                                                        }
                                                    },
                                                    "id": 71546,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3619:40:168",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71547,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3619:40:168"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71505,
                            "nodeType": "StructuredDocumentation",
                            "src": "2983:308:168",
                            "text": " @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful. Meant to be used with tokens that require the approval\n to be set to zero before setting it to a non-zero value, such as USDT."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "forceApprove",
                        "nameLocation": "3305:12:168",
                        "parameters": {
                            "id": 71513,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71508,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "3325:5:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71551,
                                    "src": "3318:12:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$71291",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71507,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71506,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "3318:6:168"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71291,
                                            "src": "3318:6:168"
                                        },
                                        "referencedDeclaration": 71291,
                                        "src": "3318:6:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71510,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "3340:7:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71551,
                                    "src": "3332:15:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71509,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3332:7:168",
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
                                    "id": 71512,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3357:5:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71551,
                                    "src": "3349:13:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71511,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3349:7:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3317:46:168"
                        },
                        "returnParameters": {
                            "id": 71514,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3373:0:168"
                        },
                        "scope": 71643,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71593,
                        "nodeType": "FunctionDefinition",
                        "src": "4059:629:168",
                        "nodes": [],
                        "body": {
                            "id": 71592,
                            "nodeType": "Block",
                            "src": "4129:559:168",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71561
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71561,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "4491:10:168",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71592,
                                            "src": "4478:23:168",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71560,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4478:5:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71569,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71567,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71557,
                                                "src": "4532:4:168",
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
                                                        "id": 71564,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71555,
                                                        "src": "4512:5:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 71563,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4504:7:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 71562,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4504:7:168",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71565,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4504:14:168",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71566,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4519:12:168",
                                            "memberName": "functionCall",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 71717,
                                            "src": "4504:27:168",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$attached_to$_t_address_$",
                                                "typeString": "function (address,bytes memory) returns (bytes memory)"
                                            }
                                        },
                                        "id": 71568,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4504:33:168",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4478:59:168"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 71582,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 71573,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 71570,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71561,
                                                    "src": "4551:10:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 71571,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4562:6:168",
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "src": "4551:17:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 71572,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4572:1:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "4551:22:168",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "id": 71581,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "!",
                                            "prefix": true,
                                            "src": "4577:31:168",
                                            "subExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 71576,
                                                        "name": "returndata",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71561,
                                                        "src": "4589:10:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 71578,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "4602:4:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_bool_$",
                                                                    "typeString": "type(bool)"
                                                                },
                                                                "typeName": {
                                                                    "id": 71577,
                                                                    "name": "bool",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4602:4:168",
                                                                    "typeDescriptions": {}
                                                                }
                                                            }
                                                        ],
                                                        "id": 71579,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "4601:6:168",
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
                                                        "id": 71574,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "4578:3:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 71575,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4582:6:168",
                                                    "memberName": "decode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4578:10:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                                        "typeString": "function () pure"
                                                    }
                                                },
                                                "id": 71580,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4578:30:168",
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
                                        "src": "4551:57:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 71591,
                                    "nodeType": "IfStatement",
                                    "src": "4547:135:168",
                                    "trueBody": {
                                        "id": 71590,
                                        "nodeType": "Block",
                                        "src": "4610:72:168",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 71586,
                                                                    "name": "token",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71555,
                                                                    "src": "4664:5:168",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_IERC20_$71291",
                                                                        "typeString": "contract IERC20"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_IERC20_$71291",
                                                                        "typeString": "contract IERC20"
                                                                    }
                                                                ],
                                                                "id": 71585,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "4656:7:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 71584,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4656:7:168",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71587,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4656:14:168",
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
                                                        "id": 71583,
                                                        "name": "SafeERC20FailedOperation",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71370,
                                                        "src": "4631:24:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 71588,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4631:40:168",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 71589,
                                                "nodeType": "RevertStatement",
                                                "src": "4624:47:168"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71552,
                            "nodeType": "StructuredDocumentation",
                            "src": "3682:372:168",
                            "text": " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants)."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_callOptionalReturn",
                        "nameLocation": "4068:19:168",
                        "parameters": {
                            "id": 71558,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71555,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "4095:5:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71593,
                                    "src": "4088:12:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$71291",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71554,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71553,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "4088:6:168"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71291,
                                            "src": "4088:6:168"
                                        },
                                        "referencedDeclaration": 71291,
                                        "src": "4088:6:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71557,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "4115:4:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71593,
                                    "src": "4102:17:168",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71556,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4102:5:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4087:33:168"
                        },
                        "returnParameters": {
                            "id": 71559,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4129:0:168"
                        },
                        "scope": 71643,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 71642,
                        "nodeType": "FunctionDefinition",
                        "src": "5189:578:168",
                        "nodes": [],
                        "body": {
                            "id": 71641,
                            "nodeType": "Block",
                            "src": "5278:489:168",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71605,
                                        71607
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71605,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "5579:7:168",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71641,
                                            "src": "5574:12:168",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71604,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5574:4:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 71607,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "5601:10:168",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71641,
                                            "src": "5588:23:168",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71606,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5588:5:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71615,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71613,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71599,
                                                "src": "5635:4:168",
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
                                                        "id": 71610,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71597,
                                                        "src": "5623:5:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 71609,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "5615:7:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 71608,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "5615:7:168",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71611,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5615:14:168",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 71612,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5630:4:168",
                                            "memberName": "call",
                                            "nodeType": "MemberAccess",
                                            "src": "5615:19:168",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 71614,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5615:25:168",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5573:67:168"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 71639,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "id": 71630,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 71616,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71605,
                                                "src": "5657:7:168",
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
                                                        "id": 71628,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 71620,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "expression": {
                                                                    "id": 71617,
                                                                    "name": "returndata",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71607,
                                                                    "src": "5669:10:168",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes memory"
                                                                    }
                                                                },
                                                                "id": 71618,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5680:6:168",
                                                                "memberName": "length",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5669:17:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "==",
                                                            "rightExpression": {
                                                                "hexValue": "30",
                                                                "id": 71619,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5690:1:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                },
                                                                "value": "0"
                                                            },
                                                            "src": "5669:22:168",
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
                                                                    "id": 71623,
                                                                    "name": "returndata",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71607,
                                                                    "src": "5706:10:168",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes memory"
                                                                    }
                                                                },
                                                                {
                                                                    "components": [
                                                                        {
                                                                            "id": 71625,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "5719:4:168",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_bool_$",
                                                                                "typeString": "type(bool)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 71624,
                                                                                "name": "bool",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "5719:4:168",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 71626,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "5718:6:168",
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
                                                                    "id": 71621,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "5695:3:168",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 71622,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5699:6:168",
                                                                "memberName": "decode",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5695:10:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                                                    "typeString": "function () pure"
                                                                }
                                                            },
                                                            "id": 71627,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5695:30:168",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "src": "5669:56:168",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "id": 71629,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "5668:58:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "src": "5657:69:168",
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
                                            "id": 71638,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "id": 71633,
                                                                "name": "token",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71597,
                                                                "src": "5738:5:168",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$71291",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$71291",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            ],
                                                            "id": 71632,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "5730:7:168",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 71631,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "5730:7:168",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 71634,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5730:14:168",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 71635,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5745:4:168",
                                                    "memberName": "code",
                                                    "nodeType": "MemberAccess",
                                                    "src": "5730:19:168",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 71636,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5750:6:168",
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "src": "5730:26:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 71637,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5759:1:168",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "5730:30:168",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "5657:103:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 71603,
                                    "id": 71640,
                                    "nodeType": "Return",
                                    "src": "5650:110:168"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71594,
                            "nodeType": "StructuredDocumentation",
                            "src": "4694:490:168",
                            "text": " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).\n This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_callOptionalReturnBool",
                        "nameLocation": "5198:23:168",
                        "parameters": {
                            "id": 71600,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71597,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "5229:5:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71642,
                                    "src": "5222:12:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$71291",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71596,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71595,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "5222:6:168"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71291,
                                            "src": "5222:6:168"
                                        },
                                        "referencedDeclaration": 71291,
                                        "src": "5222:6:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$71291",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71599,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "5249:4:168",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71642,
                                    "src": "5236:17:168",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71598,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5236:5:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5221:33:168"
                        },
                        "returnParameters": {
                            "id": 71603,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71602,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71642,
                                    "src": "5272:4:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71601,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5272:4:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5271:6:168"
                        },
                        "scope": 71643,
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
                    "id": 71362,
                    "nodeType": "StructuredDocumentation",
                    "src": "293:457:168",
                    "text": " @title SafeERC20\n @dev Wrappers around ERC20 operations that throw on failure (when the token\n contract returns false). Tokens that return no value (and instead revert or\n throw on failure) are also supported, non-reverting calls are assumed to be\n successful.\n To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\n which allows you to call the safe operations as `token.safeTransfer(...)`, etc."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71643
                ],
                "name": "SafeERC20",
                "nameLocation": "759:9:168",
                "scope": 71644,
                "usedErrors": [
                    71370,
                    71379
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 168
};
