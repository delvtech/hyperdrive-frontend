export const IERC20Errors = {
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
                    "name": "allowance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "needed",
                    "type": "uint256"
                }
            ],
            "name": "ERC20InsufficientAllowance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "needed",
                    "type": "uint256"
                }
            ],
            "name": "ERC20InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "approver",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidApprover",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidSender",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidSpender",
            "type": "error"
        }
    ],
    "bytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"allowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSpender\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Standard ERC20 Errors Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC20 tokens.\",\"errors\":{\"ERC20InsufficientAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.\",\"params\":{\"allowance\":\"Amount of tokens a `spender` is allowed to operate with.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC20InsufficientBalance(address,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC20InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC20InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidSpender(address)\":[{\"details\":\"Indicates a failure with the `spender` to be approved. Used in approvals.\",\"params\":{\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":\"IERC20Errors\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]}},\"version\":1}",
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
                            "name": "allowance",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "needed",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InsufficientAllowance"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "sender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "balance",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "needed",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InsufficientBalance"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "approver",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InvalidApprover"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InvalidReceiver"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "sender",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InvalidSender"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InvalidSpender"
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
                "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": "IERC20Errors"
            },
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
                "urls": [
                    "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
                    "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol",
        "id": 70269,
        "exportedSymbols": {
            "IERC1155Errors": [
                70268
            ],
            "IERC20Errors": [
                70173
            ],
            "IERC721Errors": [
                70221
            ]
        },
        "nodeType": "SourceUnit",
        "src": "112:6420:161",
        "nodes": [
            {
                "id": 70133,
                "nodeType": "PragmaDirective",
                "src": "112:24:161",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 70173,
                "nodeType": "ContractDefinition",
                "src": "278:1764:161",
                "nodes": [
                    {
                        "id": 70143,
                        "nodeType": "ErrorDefinition",
                        "src": "621:80:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70135,
                            "nodeType": "StructuredDocumentation",
                            "src": "307:309:161",
                            "text": " @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param balance Current balance for the interacting account.\n @param needed Minimum amount required to perform a transfer."
                        },
                        "errorSelector": "e450d38c",
                        "name": "ERC20InsufficientBalance",
                        "nameLocation": "627:24:161",
                        "parameters": {
                            "id": 70142,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70137,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "660:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70143,
                                    "src": "652:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70136,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "652:7:161",
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
                                    "id": 70139,
                                    "mutability": "mutable",
                                    "name": "balance",
                                    "nameLocation": "676:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70143,
                                    "src": "668:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70138,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "668:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 70141,
                                    "mutability": "mutable",
                                    "name": "needed",
                                    "nameLocation": "693:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70143,
                                    "src": "685:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70140,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "685:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "651:49:161"
                        }
                    },
                    {
                        "id": 70148,
                        "nodeType": "ErrorDefinition",
                        "src": "864:41:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70144,
                            "nodeType": "StructuredDocumentation",
                            "src": "707:152:161",
                            "text": " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred."
                        },
                        "errorSelector": "96c6fd1e",
                        "name": "ERC20InvalidSender",
                        "nameLocation": "870:18:161",
                        "parameters": {
                            "id": 70147,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70146,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "897:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70148,
                                    "src": "889:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70145,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "889:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "888:16:161"
                        }
                    },
                    {
                        "id": 70153,
                        "nodeType": "ErrorDefinition",
                        "src": "1075:45:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70149,
                            "nodeType": "StructuredDocumentation",
                            "src": "911:159:161",
                            "text": " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred."
                        },
                        "errorSelector": "ec442f05",
                        "name": "ERC20InvalidReceiver",
                        "nameLocation": "1081:20:161",
                        "parameters": {
                            "id": 70152,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70151,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "1110:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70153,
                                    "src": "1102:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70150,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1102:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1101:18:161"
                        }
                    },
                    {
                        "id": 70162,
                        "nodeType": "ErrorDefinition",
                        "src": "1476:85:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70154,
                            "nodeType": "StructuredDocumentation",
                            "src": "1126:345:161",
                            "text": " @dev Indicates a failure with the `spender`’s `allowance`. Used in transfers.\n @param spender Address that may be allowed to operate on tokens without being their owner.\n @param allowance Amount of tokens a `spender` is allowed to operate with.\n @param needed Minimum amount required to perform a transfer."
                        },
                        "errorSelector": "fb8f41b2",
                        "name": "ERC20InsufficientAllowance",
                        "nameLocation": "1482:26:161",
                        "parameters": {
                            "id": 70161,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70156,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "1517:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70162,
                                    "src": "1509:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70155,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1509:7:161",
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
                                    "id": 70158,
                                    "mutability": "mutable",
                                    "name": "allowance",
                                    "nameLocation": "1534:9:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70162,
                                    "src": "1526:17:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70157,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1526:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 70160,
                                    "mutability": "mutable",
                                    "name": "needed",
                                    "nameLocation": "1553:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70162,
                                    "src": "1545:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70159,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1545:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1508:52:161"
                        }
                    },
                    {
                        "id": 70167,
                        "nodeType": "ErrorDefinition",
                        "src": "1746:45:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70163,
                            "nodeType": "StructuredDocumentation",
                            "src": "1567:174:161",
                            "text": " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation."
                        },
                        "errorSelector": "e602df05",
                        "name": "ERC20InvalidApprover",
                        "nameLocation": "1752:20:161",
                        "parameters": {
                            "id": 70166,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70165,
                                    "mutability": "mutable",
                                    "name": "approver",
                                    "nameLocation": "1781:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70167,
                                    "src": "1773:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70164,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1773:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1772:18:161"
                        }
                    },
                    {
                        "id": 70172,
                        "nodeType": "ErrorDefinition",
                        "src": "1997:43:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70168,
                            "nodeType": "StructuredDocumentation",
                            "src": "1797:195:161",
                            "text": " @dev Indicates a failure with the `spender` to be approved. Used in approvals.\n @param spender Address that may be allowed to operate on tokens without being their owner."
                        },
                        "errorSelector": "94280d62",
                        "name": "ERC20InvalidSpender",
                        "nameLocation": "2003:19:161",
                        "parameters": {
                            "id": 70171,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70170,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2031:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70172,
                                    "src": "2023:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70169,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2023:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2022:17:161"
                        }
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IERC20Errors",
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": {
                    "id": 70134,
                    "nodeType": "StructuredDocumentation",
                    "src": "138:139:161",
                    "text": " @dev Standard ERC20 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC20 tokens."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    70173
                ],
                "name": "IERC20Errors",
                "nameLocation": "288:12:161",
                "scope": 70269,
                "usedErrors": [
                    70143,
                    70148,
                    70153,
                    70162,
                    70167,
                    70172
                ],
                "usedEvents": []
            },
            {
                "id": 70221,
                "nodeType": "ContractDefinition",
                "src": "2186:2092:161",
                "nodes": [
                    {
                        "id": 70179,
                        "nodeType": "ErrorDefinition",
                        "src": "2440:40:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70175,
                            "nodeType": "StructuredDocumentation",
                            "src": "2216:219:161",
                            "text": " @dev Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in EIP-20.\n Used in balance queries.\n @param owner Address of the current owner of a token."
                        },
                        "errorSelector": "89c62b64",
                        "name": "ERC721InvalidOwner",
                        "nameLocation": "2446:18:161",
                        "parameters": {
                            "id": 70178,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70177,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2473:5:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70179,
                                    "src": "2465:13:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70176,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2465:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2464:15:161"
                        }
                    },
                    {
                        "id": 70184,
                        "nodeType": "ErrorDefinition",
                        "src": "2623:46:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70180,
                            "nodeType": "StructuredDocumentation",
                            "src": "2486:132:161",
                            "text": " @dev Indicates a `tokenId` whose `owner` is the zero address.\n @param tokenId Identifier number of a token."
                        },
                        "errorSelector": "7e273289",
                        "name": "ERC721NonexistentToken",
                        "nameLocation": "2629:22:161",
                        "parameters": {
                            "id": 70183,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70182,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "2660:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70184,
                                    "src": "2652:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70181,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2652:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2651:17:161"
                        }
                    },
                    {
                        "id": 70193,
                        "nodeType": "ErrorDefinition",
                        "src": "2969:75:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70185,
                            "nodeType": "StructuredDocumentation",
                            "src": "2675:289:161",
                            "text": " @dev Indicates an error related to the ownership over a particular token. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param tokenId Identifier number of a token.\n @param owner Address of the current owner of a token."
                        },
                        "errorSelector": "64283d7b",
                        "name": "ERC721IncorrectOwner",
                        "nameLocation": "2975:20:161",
                        "parameters": {
                            "id": 70192,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70187,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "3004:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70193,
                                    "src": "2996:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70186,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2996:7:161",
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
                                    "id": 70189,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "3020:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70193,
                                    "src": "3012:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70188,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3012:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 70191,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "3037:5:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70193,
                                    "src": "3029:13:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70190,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3029:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2995:48:161"
                        }
                    },
                    {
                        "id": 70198,
                        "nodeType": "ErrorDefinition",
                        "src": "3207:42:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70194,
                            "nodeType": "StructuredDocumentation",
                            "src": "3050:152:161",
                            "text": " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred."
                        },
                        "errorSelector": "73c6ac6e",
                        "name": "ERC721InvalidSender",
                        "nameLocation": "3213:19:161",
                        "parameters": {
                            "id": 70197,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70196,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "3241:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70198,
                                    "src": "3233:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70195,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3233:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3232:16:161"
                        }
                    },
                    {
                        "id": 70203,
                        "nodeType": "ErrorDefinition",
                        "src": "3419:46:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70199,
                            "nodeType": "StructuredDocumentation",
                            "src": "3255:159:161",
                            "text": " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred."
                        },
                        "errorSelector": "64a0ae92",
                        "name": "ERC721InvalidReceiver",
                        "nameLocation": "3425:21:161",
                        "parameters": {
                            "id": 70202,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70201,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "3455:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70203,
                                    "src": "3447:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70200,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3447:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3446:18:161"
                        }
                    },
                    {
                        "id": 70210,
                        "nodeType": "ErrorDefinition",
                        "src": "3723:68:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70204,
                            "nodeType": "StructuredDocumentation",
                            "src": "3471:247:161",
                            "text": " @dev Indicates a failure with the `operator`’s approval. Used in transfers.\n @param operator Address that may be allowed to operate on tokens without being their owner.\n @param tokenId Identifier number of a token."
                        },
                        "errorSelector": "177e802f",
                        "name": "ERC721InsufficientApproval",
                        "nameLocation": "3729:26:161",
                        "parameters": {
                            "id": 70209,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70206,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "3764:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70210,
                                    "src": "3756:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70205,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3756:7:161",
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
                                    "id": 70208,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "3782:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70210,
                                    "src": "3774:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70207,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3774:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3755:35:161"
                        }
                    },
                    {
                        "id": 70215,
                        "nodeType": "ErrorDefinition",
                        "src": "3976:46:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70211,
                            "nodeType": "StructuredDocumentation",
                            "src": "3797:174:161",
                            "text": " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation."
                        },
                        "errorSelector": "a9fbf51f",
                        "name": "ERC721InvalidApprover",
                        "nameLocation": "3982:21:161",
                        "parameters": {
                            "id": 70214,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70213,
                                    "mutability": "mutable",
                                    "name": "approver",
                                    "nameLocation": "4012:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70215,
                                    "src": "4004:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70212,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4004:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4003:18:161"
                        }
                    },
                    {
                        "id": 70220,
                        "nodeType": "ErrorDefinition",
                        "src": "4230:46:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70216,
                            "nodeType": "StructuredDocumentation",
                            "src": "4028:197:161",
                            "text": " @dev Indicates a failure with the `operator` to be approved. Used in approvals.\n @param operator Address that may be allowed to operate on tokens without being their owner."
                        },
                        "errorSelector": "5b08ba18",
                        "name": "ERC721InvalidOperator",
                        "nameLocation": "4236:21:161",
                        "parameters": {
                            "id": 70219,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70218,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "4266:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70220,
                                    "src": "4258:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70217,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4258:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4257:18:161"
                        }
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IERC721Errors",
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": {
                    "id": 70174,
                    "nodeType": "StructuredDocumentation",
                    "src": "2044:141:161",
                    "text": " @dev Standard ERC721 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC721 tokens."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    70221
                ],
                "name": "IERC721Errors",
                "nameLocation": "2196:13:161",
                "scope": 70269,
                "usedErrors": [
                    70179,
                    70184,
                    70193,
                    70198,
                    70203,
                    70210,
                    70215,
                    70220
                ],
                "usedEvents": []
            },
            {
                "id": 70268,
                "nodeType": "ContractDefinition",
                "src": "4424:2107:161",
                "nodes": [
                    {
                        "id": 70233,
                        "nodeType": "ErrorDefinition",
                        "src": "4821:99:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70223,
                            "nodeType": "StructuredDocumentation",
                            "src": "4455:361:161",
                            "text": " @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param balance Current balance for the interacting account.\n @param needed Minimum amount required to perform a transfer.\n @param tokenId Identifier number of a token."
                        },
                        "errorSelector": "03dee4c5",
                        "name": "ERC1155InsufficientBalance",
                        "nameLocation": "4827:26:161",
                        "parameters": {
                            "id": 70232,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70225,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "4862:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70233,
                                    "src": "4854:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70224,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4854:7:161",
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
                                    "id": 70227,
                                    "mutability": "mutable",
                                    "name": "balance",
                                    "nameLocation": "4878:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70233,
                                    "src": "4870:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70226,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4870:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 70229,
                                    "mutability": "mutable",
                                    "name": "needed",
                                    "nameLocation": "4895:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70233,
                                    "src": "4887:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70228,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4887:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 70231,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "4911:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70233,
                                    "src": "4903:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70230,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4903:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4853:66:161"
                        }
                    },
                    {
                        "id": 70238,
                        "nodeType": "ErrorDefinition",
                        "src": "5083:43:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70234,
                            "nodeType": "StructuredDocumentation",
                            "src": "4926:152:161",
                            "text": " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred."
                        },
                        "errorSelector": "01a83514",
                        "name": "ERC1155InvalidSender",
                        "nameLocation": "5089:20:161",
                        "parameters": {
                            "id": 70237,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70236,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "5118:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70238,
                                    "src": "5110:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70235,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5110:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5109:16:161"
                        }
                    },
                    {
                        "id": 70243,
                        "nodeType": "ErrorDefinition",
                        "src": "5296:47:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70239,
                            "nodeType": "StructuredDocumentation",
                            "src": "5132:159:161",
                            "text": " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred."
                        },
                        "errorSelector": "57f447ce",
                        "name": "ERC1155InvalidReceiver",
                        "nameLocation": "5302:22:161",
                        "parameters": {
                            "id": 70242,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70241,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "5333:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70243,
                                    "src": "5325:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70240,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5325:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5324:18:161"
                        }
                    },
                    {
                        "id": 70250,
                        "nodeType": "ErrorDefinition",
                        "src": "5610:68:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70244,
                            "nodeType": "StructuredDocumentation",
                            "src": "5349:256:161",
                            "text": " @dev Indicates a failure with the `operator`’s approval. Used in transfers.\n @param operator Address that may be allowed to operate on tokens without being their owner.\n @param owner Address of the current owner of a token."
                        },
                        "errorSelector": "e237d922",
                        "name": "ERC1155MissingApprovalForAll",
                        "nameLocation": "5616:28:161",
                        "parameters": {
                            "id": 70249,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70246,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "5653:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70250,
                                    "src": "5645:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70245,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5645:7:161",
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
                                    "id": 70248,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "5671:5:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70250,
                                    "src": "5663:13:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70247,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5663:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5644:33:161"
                        }
                    },
                    {
                        "id": 70255,
                        "nodeType": "ErrorDefinition",
                        "src": "5863:47:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70251,
                            "nodeType": "StructuredDocumentation",
                            "src": "5684:174:161",
                            "text": " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation."
                        },
                        "errorSelector": "3e31884e",
                        "name": "ERC1155InvalidApprover",
                        "nameLocation": "5869:22:161",
                        "parameters": {
                            "id": 70254,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70253,
                                    "mutability": "mutable",
                                    "name": "approver",
                                    "nameLocation": "5900:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70255,
                                    "src": "5892:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70252,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5892:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5891:18:161"
                        }
                    },
                    {
                        "id": 70260,
                        "nodeType": "ErrorDefinition",
                        "src": "6118:47:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70256,
                            "nodeType": "StructuredDocumentation",
                            "src": "5916:197:161",
                            "text": " @dev Indicates a failure with the `operator` to be approved. Used in approvals.\n @param operator Address that may be allowed to operate on tokens without being their owner."
                        },
                        "errorSelector": "ced3e100",
                        "name": "ERC1155InvalidOperator",
                        "nameLocation": "6124:22:161",
                        "parameters": {
                            "id": 70259,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70258,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "6155:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70260,
                                    "src": "6147:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70257,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6147:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6146:18:161"
                        }
                    },
                    {
                        "id": 70267,
                        "nodeType": "ErrorDefinition",
                        "src": "6456:73:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70261,
                            "nodeType": "StructuredDocumentation",
                            "src": "6171:280:161",
                            "text": " @dev Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation.\n Used in batch transfers.\n @param idsLength Length of the array of token identifiers\n @param valuesLength Length of the array of token amounts"
                        },
                        "errorSelector": "5b059991",
                        "name": "ERC1155InvalidArrayLength",
                        "nameLocation": "6462:25:161",
                        "parameters": {
                            "id": 70266,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70263,
                                    "mutability": "mutable",
                                    "name": "idsLength",
                                    "nameLocation": "6496:9:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70267,
                                    "src": "6488:17:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70262,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6488:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 70265,
                                    "mutability": "mutable",
                                    "name": "valuesLength",
                                    "nameLocation": "6515:12:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70267,
                                    "src": "6507:20:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70264,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6507:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6487:41:161"
                        }
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IERC1155Errors",
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": {
                    "id": 70222,
                    "nodeType": "StructuredDocumentation",
                    "src": "4280:143:161",
                    "text": " @dev Standard ERC1155 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC1155 tokens."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    70268
                ],
                "name": "IERC1155Errors",
                "nameLocation": "4434:14:161",
                "scope": 70269,
                "usedErrors": [
                    70233,
                    70238,
                    70243,
                    70250,
                    70255,
                    70260,
                    70267
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 161
};
