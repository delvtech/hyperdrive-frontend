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
        "id": 70378,
        "exportedSymbols": {
            "IERC1155Errors": [
                70377
            ],
            "IERC20Errors": [
                70282
            ],
            "IERC721Errors": [
                70330
            ]
        },
        "nodeType": "SourceUnit",
        "src": "112:6420:161",
        "nodes": [
            {
                "id": 70242,
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
                "id": 70282,
                "nodeType": "ContractDefinition",
                "src": "278:1764:161",
                "nodes": [
                    {
                        "id": 70252,
                        "nodeType": "ErrorDefinition",
                        "src": "621:80:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70244,
                            "nodeType": "StructuredDocumentation",
                            "src": "307:309:161",
                            "text": " @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param balance Current balance for the interacting account.\n @param needed Minimum amount required to perform a transfer."
                        },
                        "errorSelector": "e450d38c",
                        "name": "ERC20InsufficientBalance",
                        "nameLocation": "627:24:161",
                        "parameters": {
                            "id": 70251,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70246,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "660:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70252,
                                    "src": "652:14:161",
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
                                    "id": 70248,
                                    "mutability": "mutable",
                                    "name": "balance",
                                    "nameLocation": "676:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70252,
                                    "src": "668:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70247,
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
                                    "id": 70250,
                                    "mutability": "mutable",
                                    "name": "needed",
                                    "nameLocation": "693:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70252,
                                    "src": "685:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70249,
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
                        "id": 70257,
                        "nodeType": "ErrorDefinition",
                        "src": "864:41:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70253,
                            "nodeType": "StructuredDocumentation",
                            "src": "707:152:161",
                            "text": " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred."
                        },
                        "errorSelector": "96c6fd1e",
                        "name": "ERC20InvalidSender",
                        "nameLocation": "870:18:161",
                        "parameters": {
                            "id": 70256,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70255,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "897:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70257,
                                    "src": "889:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70254,
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
                        "id": 70262,
                        "nodeType": "ErrorDefinition",
                        "src": "1075:45:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70258,
                            "nodeType": "StructuredDocumentation",
                            "src": "911:159:161",
                            "text": " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred."
                        },
                        "errorSelector": "ec442f05",
                        "name": "ERC20InvalidReceiver",
                        "nameLocation": "1081:20:161",
                        "parameters": {
                            "id": 70261,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70260,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "1110:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70262,
                                    "src": "1102:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70259,
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
                        "id": 70271,
                        "nodeType": "ErrorDefinition",
                        "src": "1476:85:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70263,
                            "nodeType": "StructuredDocumentation",
                            "src": "1126:345:161",
                            "text": " @dev Indicates a failure with the `spender`’s `allowance`. Used in transfers.\n @param spender Address that may be allowed to operate on tokens without being their owner.\n @param allowance Amount of tokens a `spender` is allowed to operate with.\n @param needed Minimum amount required to perform a transfer."
                        },
                        "errorSelector": "fb8f41b2",
                        "name": "ERC20InsufficientAllowance",
                        "nameLocation": "1482:26:161",
                        "parameters": {
                            "id": 70270,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70265,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "1517:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70271,
                                    "src": "1509:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70264,
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
                                    "id": 70267,
                                    "mutability": "mutable",
                                    "name": "allowance",
                                    "nameLocation": "1534:9:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70271,
                                    "src": "1526:17:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70266,
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
                                    "id": 70269,
                                    "mutability": "mutable",
                                    "name": "needed",
                                    "nameLocation": "1553:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70271,
                                    "src": "1545:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70268,
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
                        "id": 70276,
                        "nodeType": "ErrorDefinition",
                        "src": "1746:45:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70272,
                            "nodeType": "StructuredDocumentation",
                            "src": "1567:174:161",
                            "text": " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation."
                        },
                        "errorSelector": "e602df05",
                        "name": "ERC20InvalidApprover",
                        "nameLocation": "1752:20:161",
                        "parameters": {
                            "id": 70275,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70274,
                                    "mutability": "mutable",
                                    "name": "approver",
                                    "nameLocation": "1781:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70276,
                                    "src": "1773:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70273,
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
                        "id": 70281,
                        "nodeType": "ErrorDefinition",
                        "src": "1997:43:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70277,
                            "nodeType": "StructuredDocumentation",
                            "src": "1797:195:161",
                            "text": " @dev Indicates a failure with the `spender` to be approved. Used in approvals.\n @param spender Address that may be allowed to operate on tokens without being their owner."
                        },
                        "errorSelector": "94280d62",
                        "name": "ERC20InvalidSpender",
                        "nameLocation": "2003:19:161",
                        "parameters": {
                            "id": 70280,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70279,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2031:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70281,
                                    "src": "2023:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70278,
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
                    "id": 70243,
                    "nodeType": "StructuredDocumentation",
                    "src": "138:139:161",
                    "text": " @dev Standard ERC20 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC20 tokens."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    70282
                ],
                "name": "IERC20Errors",
                "nameLocation": "288:12:161",
                "scope": 70378,
                "usedErrors": [
                    70252,
                    70257,
                    70262,
                    70271,
                    70276,
                    70281
                ],
                "usedEvents": []
            },
            {
                "id": 70330,
                "nodeType": "ContractDefinition",
                "src": "2186:2092:161",
                "nodes": [
                    {
                        "id": 70288,
                        "nodeType": "ErrorDefinition",
                        "src": "2440:40:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70284,
                            "nodeType": "StructuredDocumentation",
                            "src": "2216:219:161",
                            "text": " @dev Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in EIP-20.\n Used in balance queries.\n @param owner Address of the current owner of a token."
                        },
                        "errorSelector": "89c62b64",
                        "name": "ERC721InvalidOwner",
                        "nameLocation": "2446:18:161",
                        "parameters": {
                            "id": 70287,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70286,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2473:5:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70288,
                                    "src": "2465:13:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70285,
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
                        "id": 70293,
                        "nodeType": "ErrorDefinition",
                        "src": "2623:46:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70289,
                            "nodeType": "StructuredDocumentation",
                            "src": "2486:132:161",
                            "text": " @dev Indicates a `tokenId` whose `owner` is the zero address.\n @param tokenId Identifier number of a token."
                        },
                        "errorSelector": "7e273289",
                        "name": "ERC721NonexistentToken",
                        "nameLocation": "2629:22:161",
                        "parameters": {
                            "id": 70292,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70291,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "2660:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70293,
                                    "src": "2652:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70290,
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
                        "id": 70302,
                        "nodeType": "ErrorDefinition",
                        "src": "2969:75:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70294,
                            "nodeType": "StructuredDocumentation",
                            "src": "2675:289:161",
                            "text": " @dev Indicates an error related to the ownership over a particular token. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param tokenId Identifier number of a token.\n @param owner Address of the current owner of a token."
                        },
                        "errorSelector": "64283d7b",
                        "name": "ERC721IncorrectOwner",
                        "nameLocation": "2975:20:161",
                        "parameters": {
                            "id": 70301,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70296,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "3004:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70302,
                                    "src": "2996:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70295,
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
                                    "id": 70298,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "3020:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70302,
                                    "src": "3012:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70297,
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
                                    "id": 70300,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "3037:5:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70302,
                                    "src": "3029:13:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70299,
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
                        "id": 70307,
                        "nodeType": "ErrorDefinition",
                        "src": "3207:42:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70303,
                            "nodeType": "StructuredDocumentation",
                            "src": "3050:152:161",
                            "text": " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred."
                        },
                        "errorSelector": "73c6ac6e",
                        "name": "ERC721InvalidSender",
                        "nameLocation": "3213:19:161",
                        "parameters": {
                            "id": 70306,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70305,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "3241:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70307,
                                    "src": "3233:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70304,
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
                        "id": 70312,
                        "nodeType": "ErrorDefinition",
                        "src": "3419:46:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70308,
                            "nodeType": "StructuredDocumentation",
                            "src": "3255:159:161",
                            "text": " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred."
                        },
                        "errorSelector": "64a0ae92",
                        "name": "ERC721InvalidReceiver",
                        "nameLocation": "3425:21:161",
                        "parameters": {
                            "id": 70311,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70310,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "3455:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70312,
                                    "src": "3447:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70309,
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
                        "id": 70319,
                        "nodeType": "ErrorDefinition",
                        "src": "3723:68:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70313,
                            "nodeType": "StructuredDocumentation",
                            "src": "3471:247:161",
                            "text": " @dev Indicates a failure with the `operator`’s approval. Used in transfers.\n @param operator Address that may be allowed to operate on tokens without being their owner.\n @param tokenId Identifier number of a token."
                        },
                        "errorSelector": "177e802f",
                        "name": "ERC721InsufficientApproval",
                        "nameLocation": "3729:26:161",
                        "parameters": {
                            "id": 70318,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70315,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "3764:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70319,
                                    "src": "3756:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70314,
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
                                    "id": 70317,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "3782:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70319,
                                    "src": "3774:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70316,
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
                        "id": 70324,
                        "nodeType": "ErrorDefinition",
                        "src": "3976:46:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70320,
                            "nodeType": "StructuredDocumentation",
                            "src": "3797:174:161",
                            "text": " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation."
                        },
                        "errorSelector": "a9fbf51f",
                        "name": "ERC721InvalidApprover",
                        "nameLocation": "3982:21:161",
                        "parameters": {
                            "id": 70323,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70322,
                                    "mutability": "mutable",
                                    "name": "approver",
                                    "nameLocation": "4012:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70324,
                                    "src": "4004:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70321,
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
                        "id": 70329,
                        "nodeType": "ErrorDefinition",
                        "src": "4230:46:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70325,
                            "nodeType": "StructuredDocumentation",
                            "src": "4028:197:161",
                            "text": " @dev Indicates a failure with the `operator` to be approved. Used in approvals.\n @param operator Address that may be allowed to operate on tokens without being their owner."
                        },
                        "errorSelector": "5b08ba18",
                        "name": "ERC721InvalidOperator",
                        "nameLocation": "4236:21:161",
                        "parameters": {
                            "id": 70328,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70327,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "4266:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70329,
                                    "src": "4258:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70326,
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
                    "id": 70283,
                    "nodeType": "StructuredDocumentation",
                    "src": "2044:141:161",
                    "text": " @dev Standard ERC721 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC721 tokens."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    70330
                ],
                "name": "IERC721Errors",
                "nameLocation": "2196:13:161",
                "scope": 70378,
                "usedErrors": [
                    70288,
                    70293,
                    70302,
                    70307,
                    70312,
                    70319,
                    70324,
                    70329
                ],
                "usedEvents": []
            },
            {
                "id": 70377,
                "nodeType": "ContractDefinition",
                "src": "4424:2107:161",
                "nodes": [
                    {
                        "id": 70342,
                        "nodeType": "ErrorDefinition",
                        "src": "4821:99:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70332,
                            "nodeType": "StructuredDocumentation",
                            "src": "4455:361:161",
                            "text": " @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred.\n @param balance Current balance for the interacting account.\n @param needed Minimum amount required to perform a transfer.\n @param tokenId Identifier number of a token."
                        },
                        "errorSelector": "03dee4c5",
                        "name": "ERC1155InsufficientBalance",
                        "nameLocation": "4827:26:161",
                        "parameters": {
                            "id": 70341,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70334,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "4862:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70342,
                                    "src": "4854:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70333,
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
                                    "id": 70336,
                                    "mutability": "mutable",
                                    "name": "balance",
                                    "nameLocation": "4878:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70342,
                                    "src": "4870:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70335,
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
                                    "id": 70338,
                                    "mutability": "mutable",
                                    "name": "needed",
                                    "nameLocation": "4895:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70342,
                                    "src": "4887:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70337,
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
                                    "id": 70340,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "4911:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70342,
                                    "src": "4903:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70339,
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
                        "id": 70347,
                        "nodeType": "ErrorDefinition",
                        "src": "5083:43:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70343,
                            "nodeType": "StructuredDocumentation",
                            "src": "4926:152:161",
                            "text": " @dev Indicates a failure with the token `sender`. Used in transfers.\n @param sender Address whose tokens are being transferred."
                        },
                        "errorSelector": "01a83514",
                        "name": "ERC1155InvalidSender",
                        "nameLocation": "5089:20:161",
                        "parameters": {
                            "id": 70346,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70345,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "5118:6:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70347,
                                    "src": "5110:14:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70344,
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
                        "id": 70352,
                        "nodeType": "ErrorDefinition",
                        "src": "5296:47:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70348,
                            "nodeType": "StructuredDocumentation",
                            "src": "5132:159:161",
                            "text": " @dev Indicates a failure with the token `receiver`. Used in transfers.\n @param receiver Address to which tokens are being transferred."
                        },
                        "errorSelector": "57f447ce",
                        "name": "ERC1155InvalidReceiver",
                        "nameLocation": "5302:22:161",
                        "parameters": {
                            "id": 70351,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70350,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "5333:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70352,
                                    "src": "5325:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70349,
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
                        "id": 70359,
                        "nodeType": "ErrorDefinition",
                        "src": "5610:68:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70353,
                            "nodeType": "StructuredDocumentation",
                            "src": "5349:256:161",
                            "text": " @dev Indicates a failure with the `operator`’s approval. Used in transfers.\n @param operator Address that may be allowed to operate on tokens without being their owner.\n @param owner Address of the current owner of a token."
                        },
                        "errorSelector": "e237d922",
                        "name": "ERC1155MissingApprovalForAll",
                        "nameLocation": "5616:28:161",
                        "parameters": {
                            "id": 70358,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70355,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "5653:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70359,
                                    "src": "5645:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70354,
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
                                    "id": 70357,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "5671:5:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70359,
                                    "src": "5663:13:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70356,
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
                        "id": 70364,
                        "nodeType": "ErrorDefinition",
                        "src": "5863:47:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70360,
                            "nodeType": "StructuredDocumentation",
                            "src": "5684:174:161",
                            "text": " @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\n @param approver Address initiating an approval operation."
                        },
                        "errorSelector": "3e31884e",
                        "name": "ERC1155InvalidApprover",
                        "nameLocation": "5869:22:161",
                        "parameters": {
                            "id": 70363,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70362,
                                    "mutability": "mutable",
                                    "name": "approver",
                                    "nameLocation": "5900:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70364,
                                    "src": "5892:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70361,
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
                        "id": 70369,
                        "nodeType": "ErrorDefinition",
                        "src": "6118:47:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70365,
                            "nodeType": "StructuredDocumentation",
                            "src": "5916:197:161",
                            "text": " @dev Indicates a failure with the `operator` to be approved. Used in approvals.\n @param operator Address that may be allowed to operate on tokens without being their owner."
                        },
                        "errorSelector": "ced3e100",
                        "name": "ERC1155InvalidOperator",
                        "nameLocation": "6124:22:161",
                        "parameters": {
                            "id": 70368,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70367,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "6155:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70369,
                                    "src": "6147:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70366,
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
                        "id": 70376,
                        "nodeType": "ErrorDefinition",
                        "src": "6456:73:161",
                        "nodes": [],
                        "documentation": {
                            "id": 70370,
                            "nodeType": "StructuredDocumentation",
                            "src": "6171:280:161",
                            "text": " @dev Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation.\n Used in batch transfers.\n @param idsLength Length of the array of token identifiers\n @param valuesLength Length of the array of token amounts"
                        },
                        "errorSelector": "5b059991",
                        "name": "ERC1155InvalidArrayLength",
                        "nameLocation": "6462:25:161",
                        "parameters": {
                            "id": 70375,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70372,
                                    "mutability": "mutable",
                                    "name": "idsLength",
                                    "nameLocation": "6496:9:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70376,
                                    "src": "6488:17:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70371,
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
                                    "id": 70374,
                                    "mutability": "mutable",
                                    "name": "valuesLength",
                                    "nameLocation": "6515:12:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70376,
                                    "src": "6507:20:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70373,
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
                    "id": 70331,
                    "nodeType": "StructuredDocumentation",
                    "src": "4280:143:161",
                    "text": " @dev Standard ERC1155 Errors\n Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC1155 tokens."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    70377
                ],
                "name": "IERC1155Errors",
                "nameLocation": "4434:14:161",
                "scope": 70378,
                "usedErrors": [
                    70342,
                    70347,
                    70352,
                    70359,
                    70364,
                    70369,
                    70376
                ],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 161
};
