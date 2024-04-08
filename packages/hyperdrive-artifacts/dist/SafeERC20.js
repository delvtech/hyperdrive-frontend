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
        "id": 71288,
        "exportedSymbols": {
            "Address": [
                71540
            ],
            "IERC20": [
                70935
            ],
            "IERC20Permit": [
                70997
            ],
            "SafeERC20": [
                71287
            ]
        },
        "nodeType": "SourceUnit",
        "src": "115:5655:166",
        "nodes": [
            {
                "id": 70999,
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
                "id": 71001,
                "nodeType": "ImportDirective",
                "src": "141:37:166",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
                "file": "../IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 71288,
                "sourceUnit": 70936,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 71000,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70935,
                            "src": "149:6:166",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 71003,
                "nodeType": "ImportDirective",
                "src": "179:60:166",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol",
                "file": "../extensions/IERC20Permit.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 71288,
                "sourceUnit": 70998,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 71002,
                            "name": "IERC20Permit",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70997,
                            "src": "187:12:166",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 71005,
                "nodeType": "ImportDirective",
                "src": "240:51:166",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Address.sol",
                "file": "../../../utils/Address.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 71288,
                "sourceUnit": 71541,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 71004,
                            "name": "Address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71540,
                            "src": "248:7:166",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 71287,
                "nodeType": "ContractDefinition",
                "src": "751:5018:166",
                "nodes": [
                    {
                        "id": 71009,
                        "nodeType": "UsingForDirective",
                        "src": "775:26:166",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 71007,
                            "name": "Address",
                            "nameLocations": [
                                "781:7:166"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 71540,
                            "src": "781:7:166"
                        },
                        "typeName": {
                            "id": 71008,
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
                        "id": 71014,
                        "nodeType": "ErrorDefinition",
                        "src": "876:46:166",
                        "nodes": [],
                        "documentation": {
                            "id": 71010,
                            "nodeType": "StructuredDocumentation",
                            "src": "807:64:166",
                            "text": " @dev An operation with an ERC20 token failed."
                        },
                        "errorSelector": "5274afe7",
                        "name": "SafeERC20FailedOperation",
                        "nameLocation": "882:24:166",
                        "parameters": {
                            "id": 71013,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71012,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "915:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71014,
                                    "src": "907:13:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71011,
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
                        "id": 71023,
                        "nodeType": "ErrorDefinition",
                        "src": "1004:109:166",
                        "nodes": [],
                        "documentation": {
                            "id": 71015,
                            "nodeType": "StructuredDocumentation",
                            "src": "928:71:166",
                            "text": " @dev Indicates a failed `decreaseAllowance` request."
                        },
                        "errorSelector": "e570110f",
                        "name": "SafeERC20FailedDecreaseAllowance",
                        "nameLocation": "1010:32:166",
                        "parameters": {
                            "id": 71022,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71017,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "1051:7:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71023,
                                    "src": "1043:15:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71016,
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
                                    "id": 71019,
                                    "mutability": "mutable",
                                    "name": "currentAllowance",
                                    "nameLocation": "1068:16:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71023,
                                    "src": "1060:24:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71018,
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
                                    "id": 71021,
                                    "mutability": "mutable",
                                    "name": "requestedDecrease",
                                    "nameLocation": "1094:17:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71023,
                                    "src": "1086:25:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71020,
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
                        "id": 71047,
                        "nodeType": "FunctionDefinition",
                        "src": "1303:160:166",
                        "nodes": [],
                        "body": {
                            "id": 71046,
                            "nodeType": "Block",
                            "src": "1375:88:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71035,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71027,
                                                "src": "1405:5:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$70935",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 71038,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71027,
                                                            "src": "1427:5:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$70935",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        "id": 71039,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1433:8:166",
                                                        "memberName": "transfer",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 70902,
                                                        "src": "1427:14:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (address,uint256) external returns (bool)"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 71040,
                                                                "name": "to",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71029,
                                                                "src": "1444:2:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 71041,
                                                                "name": "value",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71031,
                                                                "src": "1448:5:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 71042,
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
                                                        "id": 71036,
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
                                                    "id": 71037,
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
                                                "id": 71043,
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
                                                    "typeIdentifier": "t_contract$_IERC20_$70935",
                                                    "typeString": "contract IERC20"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 71034,
                                            "name": "_callOptionalReturn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71237,
                                            "src": "1385:19:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70935_$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (contract IERC20,bytes memory)"
                                            }
                                        },
                                        "id": 71044,
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
                                    "id": 71045,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1385:71:166"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71024,
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
                            "id": 71032,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71027,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "1332:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71047,
                                    "src": "1325:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70935",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71026,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71025,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "1325:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70935,
                                            "src": "1325:6:166"
                                        },
                                        "referencedDeclaration": 70935,
                                        "src": "1325:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71029,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1347:2:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71047,
                                    "src": "1339:10:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71028,
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
                                    "id": 71031,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "1359:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71047,
                                    "src": "1351:13:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71030,
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
                            "id": 71033,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1375:0:166"
                        },
                        "scope": 71287,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71074,
                        "nodeType": "FunctionDefinition",
                        "src": "1702:188:166",
                        "nodes": [],
                        "body": {
                            "id": 71073,
                            "nodeType": "Block",
                            "src": "1792:98:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 71061,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71051,
                                                "src": "1822:5:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$70935",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 71064,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71051,
                                                            "src": "1844:5:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$70935",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        "id": 71065,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1850:12:166",
                                                        "memberName": "transferFrom",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 70934,
                                                        "src": "1844:18:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (address,address,uint256) external returns (bool)"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 71066,
                                                                "name": "from",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71053,
                                                                "src": "1865:4:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 71067,
                                                                "name": "to",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71055,
                                                                "src": "1871:2:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 71068,
                                                                "name": "value",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71057,
                                                                "src": "1875:5:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 71069,
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
                                                        "id": 71062,
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
                                                    "id": 71063,
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
                                                "id": 71070,
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
                                                    "typeIdentifier": "t_contract$_IERC20_$70935",
                                                    "typeString": "contract IERC20"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 71060,
                                            "name": "_callOptionalReturn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71237,
                                            "src": "1802:19:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70935_$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (contract IERC20,bytes memory)"
                                            }
                                        },
                                        "id": 71071,
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
                                    "id": 71072,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1802:81:166"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71048,
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
                            "id": 71058,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71051,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "1735:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71074,
                                    "src": "1728:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70935",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71050,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71049,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "1728:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70935,
                                            "src": "1728:6:166"
                                        },
                                        "referencedDeclaration": 70935,
                                        "src": "1728:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71053,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "1750:4:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71074,
                                    "src": "1742:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71052,
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
                                    "id": 71055,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1764:2:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71074,
                                    "src": "1756:10:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71054,
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
                                    "id": 71057,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "1776:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71074,
                                    "src": "1768:13:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71056,
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
                            "id": 71059,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1792:0:166"
                        },
                        "scope": 71287,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71105,
                        "nodeType": "FunctionDefinition",
                        "src": "2081:225:166",
                        "nodes": [],
                        "body": {
                            "id": 71104,
                            "nodeType": "Block",
                            "src": "2167:139:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71086
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71086,
                                            "mutability": "mutable",
                                            "name": "oldAllowance",
                                            "nameLocation": "2185:12:166",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71104,
                                            "src": "2177:20:166",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 71085,
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
                                    "id": 71095,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 71091,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2224:4:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_SafeERC20_$71287",
                                                            "typeString": "library SafeERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_SafeERC20_$71287",
                                                            "typeString": "library SafeERC20"
                                                        }
                                                    ],
                                                    "id": 71090,
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
                                                        "id": 71089,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2216:7:166",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71092,
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
                                                "id": 71093,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71080,
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
                                                "id": 71087,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71078,
                                                "src": "2200:5:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$70935",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 71088,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2206:9:166",
                                            "memberName": "allowance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 70912,
                                            "src": "2200:15:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address,address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 71094,
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
                                                "id": 71097,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71078,
                                                "src": "2262:5:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$70935",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            {
                                                "id": 71098,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71080,
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
                                                "id": 71101,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 71099,
                                                    "name": "oldAllowance",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71086,
                                                    "src": "2278:12:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "id": 71100,
                                                    "name": "value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71082,
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
                                                    "typeIdentifier": "t_contract$_IERC20_$70935",
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
                                            "id": 71096,
                                            "name": "forceApprove",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71195,
                                            "src": "2249:12:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70935_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (contract IERC20,address,uint256)"
                                            }
                                        },
                                        "id": 71102,
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
                                    "id": 71103,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2249:50:166"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71075,
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
                            "id": 71083,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71078,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "2119:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71105,
                                    "src": "2112:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70935",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71077,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71076,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "2112:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70935,
                                            "src": "2112:6:166"
                                        },
                                        "referencedDeclaration": 70935,
                                        "src": "2112:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71080,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2134:7:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71105,
                                    "src": "2126:15:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71079,
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
                                    "id": 71082,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "2151:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71105,
                                    "src": "2143:13:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71081,
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
                            "id": 71084,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2167:0:166"
                        },
                        "scope": 71287,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71148,
                        "nodeType": "FunctionDefinition",
                        "src": "2509:468:166",
                        "nodes": [],
                        "body": {
                            "id": 71147,
                            "nodeType": "Block",
                            "src": "2607:370:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "id": 71146,
                                    "nodeType": "UncheckedBlock",
                                    "src": "2617:354:166",
                                    "statements": [
                                        {
                                            "assignments": [
                                                71117
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 71117,
                                                    "mutability": "mutable",
                                                    "name": "currentAllowance",
                                                    "nameLocation": "2649:16:166",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 71146,
                                                    "src": "2641:24:166",
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
                                                        "src": "2641:7:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 71126,
                                            "initialValue": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 71122,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "2692:4:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_SafeERC20_$71287",
                                                                    "typeString": "library SafeERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_SafeERC20_$71287",
                                                                    "typeString": "library SafeERC20"
                                                                }
                                                            ],
                                                            "id": 71121,
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
                                                                "id": 71120,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2684:7:166",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 71123,
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
                                                        "id": 71124,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71111,
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
                                                        "id": 71118,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71109,
                                                        "src": "2668:5:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    },
                                                    "id": 71119,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2674:9:166",
                                                    "memberName": "allowance",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 70912,
                                                    "src": "2668:15:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                                        "typeString": "function (address,address) view external returns (uint256)"
                                                    }
                                                },
                                                "id": 71125,
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
                                                "id": 71129,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 71127,
                                                    "name": "currentAllowance",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71117,
                                                    "src": "2725:16:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 71128,
                                                    "name": "requestedDecrease",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71113,
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
                                            "id": 71137,
                                            "nodeType": "IfStatement",
                                            "src": "2721:160:166",
                                            "trueBody": {
                                                "id": 71136,
                                                "nodeType": "Block",
                                                "src": "2763:118:166",
                                                "statements": [
                                                    {
                                                        "errorCall": {
                                                            "arguments": [
                                                                {
                                                                    "id": 71131,
                                                                    "name": "spender",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71111,
                                                                    "src": "2821:7:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 71132,
                                                                    "name": "currentAllowance",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71117,
                                                                    "src": "2830:16:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 71133,
                                                                    "name": "requestedDecrease",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71113,
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
                                                                "id": 71130,
                                                                "name": "SafeERC20FailedDecreaseAllowance",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71023,
                                                                "src": "2788:32:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                                                    "typeString": "function (address,uint256,uint256) pure"
                                                                }
                                                            },
                                                            "id": 71134,
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
                                                        "id": 71135,
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
                                                        "id": 71139,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71109,
                                                        "src": "2907:5:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    },
                                                    {
                                                        "id": 71140,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71111,
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
                                                        "id": 71143,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 71141,
                                                            "name": "currentAllowance",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71117,
                                                            "src": "2923:16:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 71142,
                                                            "name": "requestedDecrease",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71113,
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
                                                            "typeIdentifier": "t_contract$_IERC20_$70935",
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
                                                    "id": 71138,
                                                    "name": "forceApprove",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71195,
                                                    "src": "2894:12:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70935_$_t_address_$_t_uint256_$returns$__$",
                                                        "typeString": "function (contract IERC20,address,uint256)"
                                                    }
                                                },
                                                "id": 71144,
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
                                            "id": 71145,
                                            "nodeType": "ExpressionStatement",
                                            "src": "2894:66:166"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71106,
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
                            "id": 71114,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71109,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "2547:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71148,
                                    "src": "2540:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70935",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71108,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71107,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "2540:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70935,
                                            "src": "2540:6:166"
                                        },
                                        "referencedDeclaration": 70935,
                                        "src": "2540:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71111,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2562:7:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71148,
                                    "src": "2554:15:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71110,
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
                                    "id": 71113,
                                    "mutability": "mutable",
                                    "name": "requestedDecrease",
                                    "nameLocation": "2579:17:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71148,
                                    "src": "2571:25:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71112,
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
                            "id": 71115,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2607:0:166"
                        },
                        "scope": 71287,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71195,
                        "nodeType": "FunctionDefinition",
                        "src": "3296:380:166",
                        "nodes": [],
                        "body": {
                            "id": 71194,
                            "nodeType": "Block",
                            "src": "3373:303:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71160
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71160,
                                            "mutability": "mutable",
                                            "name": "approvalCall",
                                            "nameLocation": "3396:12:166",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71194,
                                            "src": "3383:25:166",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71159,
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
                                    "id": 71169,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 71163,
                                                    "name": "token",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71152,
                                                    "src": "3426:5:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$70935",
                                                        "typeString": "contract IERC20"
                                                    }
                                                },
                                                "id": 71164,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3432:7:166",
                                                "memberName": "approve",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 70922,
                                                "src": "3426:13:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                    "typeString": "function (address,uint256) external returns (bool)"
                                                }
                                            },
                                            {
                                                "components": [
                                                    {
                                                        "id": 71165,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71154,
                                                        "src": "3442:7:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "id": 71166,
                                                        "name": "value",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71156,
                                                        "src": "3451:5:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "id": 71167,
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
                                                "id": 71161,
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
                                            "id": 71162,
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
                                        "id": 71168,
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
                                        "id": 71174,
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
                                                    "id": 71171,
                                                    "name": "token",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71152,
                                                    "src": "3498:5:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$70935",
                                                        "typeString": "contract IERC20"
                                                    }
                                                },
                                                {
                                                    "id": 71172,
                                                    "name": "approvalCall",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71160,
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
                                                        "typeIdentifier": "t_contract$_IERC20_$70935",
                                                        "typeString": "contract IERC20"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                ],
                                                "id": 71170,
                                                "name": "_callOptionalReturnBool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71286,
                                                "src": "3474:23:166",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70935_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                                                    "typeString": "function (contract IERC20,bytes memory) returns (bool)"
                                                }
                                            },
                                            "id": 71173,
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
                                    "id": 71193,
                                    "nodeType": "IfStatement",
                                    "src": "3469:201:166",
                                    "trueBody": {
                                        "id": 71192,
                                        "nodeType": "Block",
                                        "src": "3520:150:166",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 71176,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71152,
                                                            "src": "3554:5:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$70935",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "expression": {
                                                                        "id": 71179,
                                                                        "name": "token",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 71152,
                                                                        "src": "3576:5:166",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                                                            "typeString": "contract IERC20"
                                                                        }
                                                                    },
                                                                    "id": 71180,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "3582:7:166",
                                                                    "memberName": "approve",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 70922,
                                                                    "src": "3576:13:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                        "typeString": "function (address,uint256) external returns (bool)"
                                                                    }
                                                                },
                                                                {
                                                                    "components": [
                                                                        {
                                                                            "id": 71181,
                                                                            "name": "spender",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 71154,
                                                                            "src": "3592:7:166",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_address",
                                                                                "typeString": "address"
                                                                            }
                                                                        },
                                                                        {
                                                                            "hexValue": "30",
                                                                            "id": 71182,
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
                                                                    "id": 71183,
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
                                                                    "id": 71177,
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
                                                                "id": 71178,
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
                                                            "id": 71184,
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
                                                                "typeIdentifier": "t_contract$_IERC20_$70935",
                                                                "typeString": "contract IERC20"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "id": 71175,
                                                        "name": "_callOptionalReturn",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71237,
                                                        "src": "3534:19:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70935_$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (contract IERC20,bytes memory)"
                                                        }
                                                    },
                                                    "id": 71185,
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
                                                "id": 71186,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3534:71:166"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 71188,
                                                            "name": "token",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71152,
                                                            "src": "3639:5:166",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IERC20_$70935",
                                                                "typeString": "contract IERC20"
                                                            }
                                                        },
                                                        {
                                                            "id": 71189,
                                                            "name": "approvalCall",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71160,
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
                                                                "typeIdentifier": "t_contract$_IERC20_$70935",
                                                                "typeString": "contract IERC20"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "id": 71187,
                                                        "name": "_callOptionalReturn",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71237,
                                                        "src": "3619:19:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$70935_$_t_bytes_memory_ptr_$returns$__$",
                                                            "typeString": "function (contract IERC20,bytes memory)"
                                                        }
                                                    },
                                                    "id": 71190,
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
                                                "id": 71191,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3619:40:166"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71149,
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
                            "id": 71157,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71152,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "3325:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71195,
                                    "src": "3318:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70935",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71151,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71150,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "3318:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70935,
                                            "src": "3318:6:166"
                                        },
                                        "referencedDeclaration": 70935,
                                        "src": "3318:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71154,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "3340:7:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71195,
                                    "src": "3332:15:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71153,
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
                                    "id": 71156,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3357:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71195,
                                    "src": "3349:13:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71155,
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
                            "id": 71158,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3373:0:166"
                        },
                        "scope": 71287,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71237,
                        "nodeType": "FunctionDefinition",
                        "src": "4059:629:166",
                        "nodes": [],
                        "body": {
                            "id": 71236,
                            "nodeType": "Block",
                            "src": "4129:559:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71205
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71205,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "4491:10:166",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71236,
                                            "src": "4478:23:166",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71204,
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
                                    "id": 71213,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71211,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71201,
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
                                                        "id": 71208,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71199,
                                                        "src": "4512:5:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 71207,
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
                                                        "id": 71206,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4504:7:166",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71209,
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
                                            "id": 71210,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4519:12:166",
                                            "memberName": "functionCall",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 71361,
                                            "src": "4504:27:166",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$attached_to$_t_address_$",
                                                "typeString": "function (address,bytes memory) returns (bytes memory)"
                                            }
                                        },
                                        "id": 71212,
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
                                        "id": 71226,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 71217,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 71214,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71205,
                                                    "src": "4551:10:166",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 71215,
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
                                                "id": 71216,
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
                                            "id": 71225,
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
                                                        "id": 71220,
                                                        "name": "returndata",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71205,
                                                        "src": "4589:10:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "id": 71222,
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
                                                                    "id": 71221,
                                                                    "name": "bool",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4602:4:166",
                                                                    "typeDescriptions": {}
                                                                }
                                                            }
                                                        ],
                                                        "id": 71223,
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
                                                        "id": 71218,
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
                                                    "id": 71219,
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
                                                "id": 71224,
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
                                    "id": 71235,
                                    "nodeType": "IfStatement",
                                    "src": "4547:135:166",
                                    "trueBody": {
                                        "id": 71234,
                                        "nodeType": "Block",
                                        "src": "4610:72:166",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 71230,
                                                                    "name": "token",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71199,
                                                                    "src": "4664:5:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_IERC20_$70935",
                                                                        "typeString": "contract IERC20"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_IERC20_$70935",
                                                                        "typeString": "contract IERC20"
                                                                    }
                                                                ],
                                                                "id": 71229,
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
                                                                    "id": 71228,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4656:7:166",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71231,
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
                                                        "id": 71227,
                                                        "name": "SafeERC20FailedOperation",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71014,
                                                        "src": "4631:24:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                                                            "typeString": "function (address) pure"
                                                        }
                                                    },
                                                    "id": 71232,
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
                                                "id": 71233,
                                                "nodeType": "RevertStatement",
                                                "src": "4624:47:166"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71196,
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
                            "id": 71202,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71199,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "4095:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71237,
                                    "src": "4088:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70935",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71198,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71197,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "4088:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70935,
                                            "src": "4088:6:166"
                                        },
                                        "referencedDeclaration": 70935,
                                        "src": "4088:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71201,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "4115:4:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71237,
                                    "src": "4102:17:166",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71200,
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
                            "id": 71203,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4129:0:166"
                        },
                        "scope": 71287,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 71286,
                        "nodeType": "FunctionDefinition",
                        "src": "5189:578:166",
                        "nodes": [],
                        "body": {
                            "id": 71285,
                            "nodeType": "Block",
                            "src": "5278:489:166",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71249,
                                        71251
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71249,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "5579:7:166",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71285,
                                            "src": "5574:12:166",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 71248,
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
                                            "id": 71251,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "5601:10:166",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71285,
                                            "src": "5588:23:166",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 71250,
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
                                    "id": 71259,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 71257,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71243,
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
                                                        "id": 71254,
                                                        "name": "token",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71241,
                                                        "src": "5623:5:166",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 71253,
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
                                                        "id": 71252,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "5615:7:166",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 71255,
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
                                            "id": 71256,
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
                                        "id": 71258,
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
                                        "id": 71283,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "id": 71274,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 71260,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71249,
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
                                                        "id": 71272,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 71264,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "expression": {
                                                                    "id": 71261,
                                                                    "name": "returndata",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71251,
                                                                    "src": "5669:10:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes memory"
                                                                    }
                                                                },
                                                                "id": 71262,
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
                                                                "id": 71263,
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
                                                                    "id": 71267,
                                                                    "name": "returndata",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71251,
                                                                    "src": "5706:10:166",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes memory"
                                                                    }
                                                                },
                                                                {
                                                                    "components": [
                                                                        {
                                                                            "id": 71269,
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
                                                                                "id": 71268,
                                                                                "name": "bool",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "5719:4:166",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 71270,
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
                                                                    "id": 71265,
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
                                                                "id": 71266,
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
                                                            "id": 71271,
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
                                                "id": 71273,
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
                                            "id": 71282,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "id": 71277,
                                                                "name": "token",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71241,
                                                                "src": "5738:5:166",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$70935",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$70935",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            ],
                                                            "id": 71276,
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
                                                                "id": 71275,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "5730:7:166",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 71278,
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
                                                    "id": 71279,
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
                                                "id": 71280,
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
                                                "id": 71281,
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
                                    "functionReturnParameters": 71247,
                                    "id": 71284,
                                    "nodeType": "Return",
                                    "src": "5650:110:166"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 71238,
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
                            "id": 71244,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71241,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "5229:5:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71286,
                                    "src": "5222:12:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$70935",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 71240,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71239,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "5222:6:166"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 70935,
                                            "src": "5222:6:166"
                                        },
                                        "referencedDeclaration": 70935,
                                        "src": "5222:6:166",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$70935",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 71243,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "5249:4:166",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71286,
                                    "src": "5236:17:166",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71242,
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
                            "id": 71247,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71246,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71286,
                                    "src": "5272:4:166",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71245,
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
                        "scope": 71287,
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
                    "id": 71006,
                    "nodeType": "StructuredDocumentation",
                    "src": "293:457:166",
                    "text": " @title SafeERC20\n @dev Wrappers around ERC20 operations that throw on failure (when the token\n contract returns false). Tokens that return no value (and instead revert or\n throw on failure) are also supported, non-reverting calls are assumed to be\n successful.\n To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\n which allows you to call the safe operations as `token.safeTransfer(...)`, etc."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71287
                ],
                "name": "SafeERC20",
                "nameLocation": "759:9:166",
                "scope": 71288,
                "usedErrors": [
                    71014,
                    71023
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 166
};
