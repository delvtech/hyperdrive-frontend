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
        "sourceMap": "751:5018:117:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;751:5018:117;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076f48067ee79af48f87c626716abb2d6dba39ab8e4a1bf0af237818455119cfe64736f6c63430008140033",
        "sourceMap": "751:5018:117:-:0;;;;;;;;",
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
        "id": 67007,
        "exportedSymbols": {
            "Address": [
                67259
            ],
            "IERC20": [
                66654
            ],
            "IERC20Permit": [
                66716
            ],
            "SafeERC20": [
                67006
            ]
        },
        "nodeType": "SourceUnit",
        "src": "115:5655:117",
        "nodes": [
            {
                "id": 66718,
                "nodeType": "PragmaDirective",
                "src": "115:24:117",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 66720,
                "nodeType": "ImportDirective",
                "src": "141:37:117",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
                "file": "../IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 67007,
                "sourceUnit": 66655,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 66719,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66654,
                            "src": "149:6:117",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 66722,
                "nodeType": "ImportDirective",
                "src": "179:60:117",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol",
                "file": "../extensions/IERC20Permit.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 67007,
                "sourceUnit": 66717,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 66721,
                            "name": "IERC20Permit",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66716,
                            "src": "187:12:117",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 66724,
                "nodeType": "ImportDirective",
                "src": "240:51:117",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Address.sol",
                "file": "../../../utils/Address.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 67007,
                "sourceUnit": 67260,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 66723,
                            "name": "Address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67259,
                            "src": "248:7:117",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 67006,
                "nodeType": "ContractDefinition",
                "src": "751:5018:117",
                "nodes": [
                    {
                        "id": 66728,
                        "nodeType": "UsingForDirective",
                        "src": "775:26:117",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 66726,
                            "name": "Address",
                            "nameLocations": [
                                "781:7:117"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 67259,
                            "src": "781:7:117"
                        },
                        "typeName": {
                            "id": 66727,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "793:7:117",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        }
                    },
                    {
                        "id": 66733,
                        "nodeType": "ErrorDefinition",
                        "src": "876:46:117",
                        "nodes": [],
                        "documentation": {
                            "id": 66729,
                            "nodeType": "StructuredDocumentation",
                            "src": "807:64:117",
                            "text": " @dev An operation with an ERC20 token failed."
                        },
                        "errorSelector": "5274afe7",
                        "name": "SafeERC20FailedOperation",
                        "nameLocation": "882:24:117",
                        "parameters": {
                            "id": 66732,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66731,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "915:5:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66733,
                                    "src": "907:13:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66730,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "907:7:117",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "906:15:117"
                        }
                    },
                    {
                        "id": 66742,
                        "nodeType": "ErrorDefinition",
                        "src": "1004:109:117",
                        "nodes": [],
                        "documentation": {
                            "id": 66734,
                            "nodeType": "StructuredDocumentation",
                            "src": "928:71:117",
                            "text": " @dev Indicates a failed `decreaseAllowance` request."
                        },
                        "errorSelector": "e570110f",
                        "name": "SafeERC20FailedDecreaseAllowance",
                        "nameLocation": "1010:32:117",
                        "parameters": {
                            "id": 66741,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66736,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "1051:7:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66742,
                                    "src": "1043:15:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66735,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1043:7:117",
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
                                    "id": 66738,
                                    "mutability": "mutable",
                                    "name": "currentAllowance",
                                    "nameLocation": "1068:16:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66742,
                                    "src": "1060:24:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 66737,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1060:7:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 66740,
                                    "mutability": "mutable",
                                    "name": "requestedDecrease",
                                    "nameLocation": "1094:17:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66742,
                                    "src": "1086:25:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 66739,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1086:7:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1042:70:117"
                        }
                    },
                    {
                        "id": 66766,
                        "nodeType": "FunctionDefinition",
                        "src": "1303:160:117",
                        "nodes": [],
                        "body": {
                            "id": 66765,
                            "nodeType": "Block",
                            "src": "1375:88:117",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 66754,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66746,
                                                "src": "1405:5:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$66654",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 66757,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 66746,
                                                            "src": "1427:5:117",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$66654",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        "id": 66758,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1433:8:117",
                                                        "memberName": "transfer",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 66621,
                                                        "src": "1427:14:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (address,uint256) external returns (bool)"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 66759,
                                                                "name": "to",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 66748,
                                                                "src": "1444:2:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 66760,
                                                                "name": "value",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 66750,
                                                                "src": "1448:5:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 66761,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "1443:11:117",
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
                                                        "id": 66755,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "1412:3:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 66756,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1416:10:117",
                                                    "memberName": "encodeCall",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1412:14:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 66762,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1412:43:117",
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
                                                    "typeIdentifier": "t_contract$_IERC20_$66654",
                                                    "typeString": "contract IERC20"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 66753,
                                            "name": "_callOptionalReturn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66956,
                                            "src": "1385:19:117",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (contract IERC20,bytes memory)"
                                            }
                                        },
                                        "id": 66763,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1385:71:117",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 66764,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1385:71:117"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66743,
                            "nodeType": "StructuredDocumentation",
                            "src": "1119:179:117",
                            "text": " @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "safeTransfer",
                        "nameLocation": "1312:12:117",
                        "parameters": {
                            "id": 66751,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66746,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "1332:5:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66766,
                                    "src": "1325:12:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$66654",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 66745,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 66744,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "1325:6:117"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 66654,
                                            "src": "1325:6:117"
                                        },
                                        "referencedDeclaration": 66654,
                                        "src": "1325:6:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 66748,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1347:2:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66766,
                                    "src": "1339:10:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66747,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1339:7:117",
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
                                    "id": 66750,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "1359:5:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66766,
                                    "src": "1351:13:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 66749,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1351:7:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1324:41:117"
                        },
                        "returnParameters": {
                            "id": 66752,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1375:0:117"
                        },
                        "scope": 67006,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 66793,
                        "nodeType": "FunctionDefinition",
                        "src": "1702:188:117",
                        "nodes": [],
                        "body": {
                            "id": 66792,
                            "nodeType": "Block",
                            "src": "1792:98:117",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 66780,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66770,
                                                "src": "1822:5:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$66654",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 66783,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 66770,
                                                            "src": "1844:5:117",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$66654",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        "id": 66784,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1850:12:117",
                                                        "memberName": "transferFrom",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 66653,
                                                        "src": "1844:18:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (address,address,uint256) external returns (bool)"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 66785,
                                                                "name": "from",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 66772,
                                                                "src": "1865:4:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 66786,
                                                                "name": "to",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 66774,
                                                                "src": "1871:2:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 66787,
                                                                "name": "value",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 66776,
                                                                "src": "1875:5:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 66788,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "1864:17:117",
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
                                                        "id": 66781,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "1829:3:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 66782,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1833:10:117",
                                                    "memberName": "encodeCall",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1829:14:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 66789,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1829:53:117",
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
                                                    "typeIdentifier": "t_contract$_IERC20_$66654",
                                                    "typeString": "contract IERC20"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 66779,
                                            "name": "_callOptionalReturn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66956,
                                            "src": "1802:19:117",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (contract IERC20,bytes memory)"
                                            }
                                        },
                                        "id": 66790,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1802:81:117",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 66791,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1802:81:117"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66767,
                            "nodeType": "StructuredDocumentation",
                            "src": "1469:228:117",
                            "text": " @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\n calling contract. If `token` returns no value, non-reverting calls are assumed to be successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "safeTransferFrom",
                        "nameLocation": "1711:16:117",
                        "parameters": {
                            "id": 66777,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66770,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "1735:5:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66793,
                                    "src": "1728:12:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$66654",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 66769,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 66768,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "1728:6:117"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 66654,
                                            "src": "1728:6:117"
                                        },
                                        "referencedDeclaration": 66654,
                                        "src": "1728:6:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 66772,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "1750:4:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66793,
                                    "src": "1742:12:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66771,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1742:7:117",
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
                                    "id": 66774,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1764:2:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66793,
                                    "src": "1756:10:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66773,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1756:7:117",
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
                                    "id": 66776,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "1776:5:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66793,
                                    "src": "1768:13:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 66775,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1768:7:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1727:55:117"
                        },
                        "returnParameters": {
                            "id": 66778,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1792:0:117"
                        },
                        "scope": 67006,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 66824,
                        "nodeType": "FunctionDefinition",
                        "src": "2081:225:117",
                        "nodes": [],
                        "body": {
                            "id": 66823,
                            "nodeType": "Block",
                            "src": "2167:139:117",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        66805
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 66805,
                                            "mutability": "mutable",
                                            "name": "oldAllowance",
                                            "nameLocation": "2185:12:117",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 66823,
                                            "src": "2177:20:117",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 66804,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2177:7:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 66814,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 66810,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2224:4:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_SafeERC20_$67006",
                                                            "typeString": "library SafeERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_SafeERC20_$67006",
                                                            "typeString": "library SafeERC20"
                                                        }
                                                    ],
                                                    "id": 66809,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2216:7:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 66808,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2216:7:117",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 66811,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2216:13:117",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 66812,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66799,
                                                "src": "2231:7:117",
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
                                                "id": 66806,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66797,
                                                "src": "2200:5:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$66654",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 66807,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2206:9:117",
                                            "memberName": "allowance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 66631,
                                            "src": "2200:15:117",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address,address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 66813,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2200:39:117",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2177:62:117"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 66816,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66797,
                                                "src": "2262:5:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$66654",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "id": 66817,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66799,
                                                "src": "2269:7:117",
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
                                                "id": 66820,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 66818,
                                                    "name": "oldAllowance",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66805,
                                                    "src": "2278:12:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "id": 66819,
                                                    "name": "value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66801,
                                                    "src": "2293:5:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2278:20:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_IERC20_$66654",
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
                                            "id": 66815,
                                            "name": "forceApprove",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66914,
                                            "src": "2249:12:117",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (contract IERC20,address,uint256)"
                                            }
                                        },
                                        "id": 66821,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2249:50:117",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 66822,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2249:50:117"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66794,
                            "nodeType": "StructuredDocumentation",
                            "src": "1896:180:117",
                            "text": " @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "safeIncreaseAllowance",
                        "nameLocation": "2090:21:117",
                        "parameters": {
                            "id": 66802,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66797,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "2119:5:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66824,
                                    "src": "2112:12:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$66654",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 66796,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 66795,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "2112:6:117"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 66654,
                                            "src": "2112:6:117"
                                        },
                                        "referencedDeclaration": 66654,
                                        "src": "2112:6:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 66799,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2134:7:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66824,
                                    "src": "2126:15:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66798,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2126:7:117",
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
                                    "id": 66801,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "2151:5:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66824,
                                    "src": "2143:13:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 66800,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2143:7:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2111:46:117"
                        },
                        "returnParameters": {
                            "id": 66803,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2167:0:117"
                        },
                        "scope": 67006,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 66867,
                        "nodeType": "FunctionDefinition",
                        "src": "2509:468:117",
                        "nodes": [],
                        "body": {
                            "id": 66866,
                            "nodeType": "Block",
                            "src": "2607:370:117",
                            "nodes": [],
                            "statements": [
                                {
                                    "id": 66865,
                                    "nodeType": "UncheckedBlock",
                                    "src": "2617:354:117",
                                    "statements": [
                                        {
                                            "assignments": [
                                                66836
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 66836,
                                                    "mutability": "mutable",
                                                    "name": "currentAllowance",
                                                    "nameLocation": "2649:16:117",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 66865,
                                                    "src": "2641:24:117",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 66835,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2641:7:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 66845,
                                            "initialValue": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 66841,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "2692:4:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_SafeERC20_$67006",
                                                                    "typeString": "library SafeERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_SafeERC20_$67006",
                                                                    "typeString": "library SafeERC20"
                                                                }
                                                            ],
                                                            "id": 66840,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2684:7:117",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 66839,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2684:7:117",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 66842,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2684:13:117",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "id": 66843,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66830,
                                                        "src": "2699:7:117",
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
                                                        "id": 66837,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66828,
                                                        "src": "2668:5:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    },
                                                    "id": 66838,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2674:9:117",
                                                    "memberName": "allowance",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 66631,
                                                    "src": "2668:15:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                                        "typeString": "function (address,address) view external returns (uint256)"
                                                    }
                                                },
                                                "id": 66844,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2668:39:117",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "2641:66:117"
                                        },
                                        {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 66848,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 66846,
                                                    "name": "currentAllowance",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66836,
                                                    "src": "2725:16:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 66847,
                                                    "name": "requestedDecrease",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66832,
                                                    "src": "2744:17:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2725:36:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "id": 66856,
                                            "nodeType": "IfStatement",
                                            "src": "2721:160:117",
                                            "trueBody": {
                                                "id": 66855,
                                                "nodeType": "Block",
                                                "src": "2763:118:117",
                                                "statements": [
                                                    {
                                                        "errorCall": {
                                                            "arguments": [
                                                                {
                                                                    "id": 66850,
                                                                    "name": "spender",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 66830,
                                                                    "src": "2821:7:117",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 66851,
                                                                    "name": "currentAllowance",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 66836,
                                                                    "src": "2830:16:117",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 66852,
                                                                    "name": "requestedDecrease",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 66832,
                                                                    "src": "2848:17:117",
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
                                                                "id": 66849,
                                                                "name": "SafeERC20FailedDecreaseAllowance",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 66742,
                                                                "src": "2788:32:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                                                    "typeString": "function (address,uint256,uint256) pure"
                                                                }
                                                            },
                                                            "id": 66853,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2788:78:117",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_tuple$__$",
                                                                "typeString": "tuple()"
                                                            }
                                                        },
                                                        "id": 66854,
                                                        "nodeType": "RevertStatement",
                                                        "src": "2781:85:117"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 66858,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66828,
                                                        "src": "2907:5:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    },
                                                    {
                                                        "id": 66859,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66830,
                                                        "src": "2914:7:117",
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
                                                        "id": 66862,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 66860,
                                                            "name": "currentAllowance",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 66836,
                                                            "src": "2923:16:117",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 66861,
                                                            "name": "requestedDecrease",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 66832,
                                                            "src": "2942:17:117",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2923:36:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$66654",
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
                                                    "id": 66857,
                                                    "name": "forceApprove",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66914,
                                                    "src": "2894:12:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_address_$_t_uint256_$returns$__$",
                                                        "typeString": "function (contract IERC20,address,uint256)"
                                                    }
                                                },
                                                "id": 66863,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2894:66:117",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 66864,
                                            "nodeType": "ExpressionStatement",
                                            "src": "2894:66:117"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66825,
                            "nodeType": "StructuredDocumentation",
                            "src": "2312:192:117",
                            "text": " @dev Decrease the calling contract's allowance toward `spender` by `requestedDecrease`. If `token` returns no\n value, non-reverting calls are assumed to be successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "safeDecreaseAllowance",
                        "nameLocation": "2518:21:117",
                        "parameters": {
                            "id": 66833,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66828,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "2547:5:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66867,
                                    "src": "2540:12:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$66654",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 66827,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 66826,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "2540:6:117"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 66654,
                                            "src": "2540:6:117"
                                        },
                                        "referencedDeclaration": 66654,
                                        "src": "2540:6:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 66830,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2562:7:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66867,
                                    "src": "2554:15:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66829,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2554:7:117",
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
                                    "id": 66832,
                                    "mutability": "mutable",
                                    "name": "requestedDecrease",
                                    "nameLocation": "2579:17:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66867,
                                    "src": "2571:25:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 66831,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2571:7:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2539:58:117"
                        },
                        "returnParameters": {
                            "id": 66834,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2607:0:117"
                        },
                        "scope": 67006,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 66914,
                        "nodeType": "FunctionDefinition",
                        "src": "3296:380:117",
                        "nodes": [],
                        "body": {
                            "id": 66913,
                            "nodeType": "Block",
                            "src": "3373:303:117",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        66879
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 66879,
                                            "mutability": "mutable",
                                            "name": "approvalCall",
                                            "nameLocation": "3396:12:117",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 66913,
                                            "src": "3383:25:117",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 66878,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3383:5:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 66888,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 66882,
                                                    "name": "token",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66871,
                                                    "src": "3426:5:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$66654",
                                                        "typeString": "contract IERC20"
                                                    }
                                                },
                                                "id": 66883,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3432:7:117",
                                                "memberName": "approve",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 66641,
                                                "src": "3426:13:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                    "typeString": "function (address,uint256) external returns (bool)"
                                                }
                                            },
                                            {
                                                "components": [
                                                    {
                                                        "id": 66884,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66873,
                                                        "src": "3442:7:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "id": 66885,
                                                        "name": "value",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66875,
                                                        "src": "3451:5:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "id": 66886,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "3441:16:117",
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
                                                "id": 66880,
                                                "name": "abi",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -1,
                                                "src": "3411:3:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_abi",
                                                    "typeString": "abi"
                                                }
                                            },
                                            "id": 66881,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberLocation": "3415:10:117",
                                            "memberName": "encodeCall",
                                            "nodeType": "MemberAccess",
                                            "src": "3411:14:117",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function () pure returns (bytes memory)"
                                            }
                                        },
                                        "id": 66887,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3411:47:117",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3383:75:117"
                                },
                                {
                                    "condition": {
                                        "id": 66893,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "3473:45:117",
                                        "subExpression": {
                                            "arguments": [
                                                {
                                                    "id": 66890,
                                                    "name": "token",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66871,
                                                    "src": "3498:5:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$66654",
                                                        "typeString": "contract IERC20"
                                                    }
                                                },
                                                {
                                                    "id": 66891,
                                                    "name": "approvalCall",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66879,
                                                    "src": "3505:12:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$66654",
                                                        "typeString": "contract IERC20"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                ],
                                                "id": 66889,
                                                "name": "_callOptionalReturnBool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67005,
                                                "src": "3474:23:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                                                    "typeString": "function (contract IERC20,bytes memory) returns (bool)"
                                                }
                                            },
                                            "id": 66892,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3474:44:117",
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
                                    "id": 66912,
                                    "nodeType": "IfStatement",
                                    "src": "3469:201:117",
                                    "trueBody": {
                                        "id": 66911,
                                        "nodeType": "Block",
                                        "src": "3520:150:117",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 66895,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 66871,
                                                            "src": "3554:5:117",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$66654",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "expression": {
                                                                        "id": 66898,
                                                                        "name": "token",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 66871,
                                                                        "src": "3576:5:117",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                                                            "typeString": "contract IERC20"
                                                                        }
                                                                    },
                                                                    "id": 66899,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "3582:7:117",
                                                                    "memberName": "approve",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 66641,
                                                                    "src": "3576:13:117",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                        "typeString": "function (address,uint256) external returns (bool)"
                                                                    }
                                                                },
                                                                {
                                                                    "components": [
                                                                        {
                                                                            "id": 66900,
                                                                            "name": "spender",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 66873,
                                                                            "src": "3592:7:117",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_address",
                                                                                "typeString": "address"
                                                                            }
                                                                        },
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 66901,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3601:1:117",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                                "typeString": "int_const 0"
                                                                            },
                                                                            "value": "0"
                                                                        }
                                                                    ],
                                                                    "id": 66902,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "3591:12:117",
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
                                                                    "id": 66896,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "3561:3:117",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 66897,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "3565:10:117",
                                                                "memberName": "encodeCall",
                                                                "nodeType": "MemberAccess",
                                                                "src": "3561:14:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                }
                                                            },
                                                            "id": 66903,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "3561:43:117",
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
                                                                "typeIdentifier": "t_contract$_IERC20_$66654",
                                                                "typeString": "contract IERC20"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "id": 66894,
                                                        "name": "_callOptionalReturn",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66956,
                                                        "src": "3534:19:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (contract IERC20,bytes memory)"
                                                        }
                                                    },
                                                    "id": 66904,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3534:71:117",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 66905,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3534:71:117"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 66907,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 66871,
                                                            "src": "3639:5:117",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$66654",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        {
                                                            "id": 66908,
                                                            "name": "approvalCall",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 66879,
                                                            "src": "3646:12:117",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_contract$_IERC20_$66654",
                                                                "typeString": "contract IERC20"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "id": 66906,
                                                        "name": "_callOptionalReturn",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66956,
                                                        "src": "3619:19:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (contract IERC20,bytes memory)"
                                                        }
                                                    },
                                                    "id": 66909,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3619:40:117",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 66910,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3619:40:117"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66868,
                            "nodeType": "StructuredDocumentation",
                            "src": "2983:308:117",
                            "text": " @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful. Meant to be used with tokens that require the approval\n to be set to zero before setting it to a non-zero value, such as USDT."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "forceApprove",
                        "nameLocation": "3305:12:117",
                        "parameters": {
                            "id": 66876,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66871,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "3325:5:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66914,
                                    "src": "3318:12:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$66654",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 66870,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 66869,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "3318:6:117"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 66654,
                                            "src": "3318:6:117"
                                        },
                                        "referencedDeclaration": 66654,
                                        "src": "3318:6:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 66873,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "3340:7:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66914,
                                    "src": "3332:15:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66872,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3332:7:117",
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
                                    "id": 66875,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3357:5:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66914,
                                    "src": "3349:13:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 66874,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3349:7:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3317:46:117"
                        },
                        "returnParameters": {
                            "id": 66877,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3373:0:117"
                        },
                        "scope": 67006,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 66956,
                        "nodeType": "FunctionDefinition",
                        "src": "4059:629:117",
                        "nodes": [],
                        "body": {
                            "id": 66955,
                            "nodeType": "Block",
                            "src": "4129:559:117",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        66924
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 66924,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "4491:10:117",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 66955,
                                            "src": "4478:23:117",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 66923,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4478:5:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 66932,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 66930,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66920,
                                                "src": "4532:4:117",
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
                                                        "id": 66927,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66918,
                                                        "src": "4512:5:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 66926,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4504:7:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 66925,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4504:7:117",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 66928,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4504:14:117",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 66929,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4519:12:117",
                                            "memberName": "functionCall",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 67080,
                                            "src": "4504:27:117",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$attached_to$_t_address_$",
                                                "typeString": "function (address,bytes memory) returns (bytes memory)"
                                            }
                                        },
                                        "id": 66931,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4504:33:117",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4478:59:117"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 66945,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 66936,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 66933,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 66924,
                                                    "src": "4551:10:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 66934,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4562:6:117",
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "src": "4551:17:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 66935,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4572:1:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "4551:22:117",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "id": 66944,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "!",
                                            "prefix": true,
                                            "src": "4577:31:117",
                                            "subExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 66939,
                                                        "name": "returndata",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66924,
                                                        "src": "4589:10:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 66941,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "4602:4:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_bool_$",
                                                                    "typeString": "type(bool)"
                                                                },
                                                                "typeName": {
                                                                    "id": 66940,
                                                                    "name": "bool",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4602:4:117",
                                                                    "typeDescriptions": {}
                                                                }
                                                            }
                                                        ],
                                                        "id": 66942,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "4601:6:117",
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
                                                        "id": 66937,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "4578:3:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 66938,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4582:6:117",
                                                    "memberName": "decode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4578:10:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                                        "typeString": "function () pure"
                                                    }
                                                },
                                                "id": 66943,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4578:30:117",
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
                                        "src": "4551:57:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 66954,
                                    "nodeType": "IfStatement",
                                    "src": "4547:135:117",
                                    "trueBody": {
                                        "id": 66953,
                                        "nodeType": "Block",
                                        "src": "4610:72:117",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 66949,
                                                                    "name": "token",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 66918,
                                                                    "src": "4664:5:117",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_IERC20_$66654",
                                                                        "typeString": "contract IERC20"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_IERC20_$66654",
                                                                        "typeString": "contract IERC20"
                                                                    }
                                                                ],
                                                                "id": 66948,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "4656:7:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 66947,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4656:7:117",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 66950,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4656:14:117",
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
                                                        "id": 66946,
                                                        "name": "SafeERC20FailedOperation",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66733,
                                                        "src": "4631:24:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 66951,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4631:40:117",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 66952,
                                                "nodeType": "RevertStatement",
                                                "src": "4624:47:117"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66915,
                            "nodeType": "StructuredDocumentation",
                            "src": "3682:372:117",
                            "text": " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants)."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_callOptionalReturn",
                        "nameLocation": "4068:19:117",
                        "parameters": {
                            "id": 66921,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66918,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "4095:5:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66956,
                                    "src": "4088:12:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$66654",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 66917,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 66916,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "4088:6:117"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 66654,
                                            "src": "4088:6:117"
                                        },
                                        "referencedDeclaration": 66654,
                                        "src": "4088:6:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 66920,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "4115:4:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66956,
                                    "src": "4102:17:117",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66919,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4102:5:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4087:33:117"
                        },
                        "returnParameters": {
                            "id": 66922,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4129:0:117"
                        },
                        "scope": 67006,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 67005,
                        "nodeType": "FunctionDefinition",
                        "src": "5189:578:117",
                        "nodes": [],
                        "body": {
                            "id": 67004,
                            "nodeType": "Block",
                            "src": "5278:489:117",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        66968,
                                        66970
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 66968,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "5579:7:117",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 67004,
                                            "src": "5574:12:117",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 66967,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5574:4:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 66970,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "5601:10:117",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 67004,
                                            "src": "5588:23:117",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 66969,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5588:5:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 66978,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 66976,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66962,
                                                "src": "5635:4:117",
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
                                                        "id": 66973,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 66960,
                                                        "src": "5623:5:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 66972,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "5615:7:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 66971,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "5615:7:117",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 66974,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5615:14:117",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 66975,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5630:4:117",
                                            "memberName": "call",
                                            "nodeType": "MemberAccess",
                                            "src": "5615:19:117",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 66977,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5615:25:117",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5573:67:117"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 67002,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "id": 66993,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 66979,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66968,
                                                "src": "5657:7:117",
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
                                                        "id": 66991,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 66983,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "expression": {
                                                                    "id": 66980,
                                                                    "name": "returndata",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 66970,
                                                                    "src": "5669:10:117",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes memory"
                                                                    }
                                                                },
                                                                "id": 66981,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5680:6:117",
                                                                "memberName": "length",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5669:17:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "==",
                                                            "rightExpression": {
                                                                "hexValue": "30",
                                                                "id": 66982,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5690:1:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                },
                                                                "value": "0"
                                                            },
                                                            "src": "5669:22:117",
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
                                                                    "id": 66986,
                                                                    "name": "returndata",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 66970,
                                                                    "src": "5706:10:117",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes memory"
                                                                    }
                                                                },
                                                                {
                                                                    "components": [
                                                                        {
                                                                            "id": 66988,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "5719:4:117",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_bool_$",
                                                                                "typeString": "type(bool)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 66987,
                                                                                "name": "bool",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "5719:4:117",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 66989,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "5718:6:117",
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
                                                                    "id": 66984,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "5695:3:117",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 66985,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5699:6:117",
                                                                "memberName": "decode",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5695:10:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                                                    "typeString": "function () pure"
                                                                }
                                                            },
                                                            "id": 66990,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5695:30:117",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "src": "5669:56:117",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    }
                                                ],
                                                "id": 66992,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "5668:58:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "src": "5657:69:117",
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
                                            "id": 67001,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "id": 66996,
                                                                "name": "token",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 66960,
                                                                "src": "5738:5:117",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$66654",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$66654",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            ],
                                                            "id": 66995,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "5730:7:117",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 66994,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "5730:7:117",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 66997,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5730:14:117",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 66998,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5745:4:117",
                                                    "memberName": "code",
                                                    "nodeType": "MemberAccess",
                                                    "src": "5730:19:117",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 66999,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5750:6:117",
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "src": "5730:26:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 67000,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5759:1:117",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "5730:30:117",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "5657:103:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 66966,
                                    "id": 67003,
                                    "nodeType": "Return",
                                    "src": "5650:110:117"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 66957,
                            "nodeType": "StructuredDocumentation",
                            "src": "4694:490:117",
                            "text": " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).\n This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_callOptionalReturnBool",
                        "nameLocation": "5198:23:117",
                        "parameters": {
                            "id": 66963,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66960,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "5229:5:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67005,
                                    "src": "5222:12:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$66654",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 66959,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 66958,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "5222:6:117"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 66654,
                                            "src": "5222:6:117"
                                        },
                                        "referencedDeclaration": 66654,
                                        "src": "5222:6:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$66654",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 66962,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "5249:4:117",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67005,
                                    "src": "5236:17:117",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66961,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5236:5:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5221:33:117"
                        },
                        "returnParameters": {
                            "id": 66966,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66965,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67005,
                                    "src": "5272:4:117",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 66964,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5272:4:117",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5271:6:117"
                        },
                        "scope": 67006,
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
                    "id": 66725,
                    "nodeType": "StructuredDocumentation",
                    "src": "293:457:117",
                    "text": " @title SafeERC20\n @dev Wrappers around ERC20 operations that throw on failure (when the token\n contract returns false). Tokens that return no value (and instead revert or\n throw on failure) are also supported, non-reverting calls are assumed to be\n successful.\n To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\n which allows you to call the safe operations as `token.safeTransfer(...)`, etc."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    67006
                ],
                "name": "SafeERC20",
                "nameLocation": "759:9:117",
                "scope": 67007,
                "usedErrors": [
                    66733,
                    66742
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 117
};
