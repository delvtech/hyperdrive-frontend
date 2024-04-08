export const IMultiTokenCore = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256[]",
                    "name": "ids",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "values",
                    "type": "uint256[]"
                }
            ],
            "name": "batchTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_approved",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "permitForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "setApproval",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                }
            ],
            "name": "setApprovalBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                }
            ],
            "name": "transferFromBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
    "methodIdentifiers": {
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
        "setApproval(uint256,address,uint256)": "9cd241af",
        "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
        "setApprovalForAll(address,bool)": "a22cb465",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender or the caller of the ERC20Forwarder.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the         functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenCore.sol\":\"IMultiTokenCore\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]}},\"version\":1}",
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
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "ids",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "values",
                            "type": "uint256[]"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "batchTransferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "_approved",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "deadline",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint8",
                            "name": "v",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "r",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "s",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "permitForAll"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApproval"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "caller",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApprovalBridge"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApprovalForAll"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "caller",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFromBridge"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "batchTransferFrom(address,address,uint256[],uint256[])": {
                        "params": {
                            "from": "The source account.",
                            "ids": "The array of token ids of the asset to transfer.",
                            "to": "The destination account.",
                            "values": "The amount of each token to transfer."
                        }
                    },
                    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        "details": "The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.",
                        "params": {
                            "_approved": "A boolean of the approval status to set to.",
                            "deadline": "The timestamp which the signature must be submitted by        to be valid.",
                            "owner": "The owner of the account which is having the new approval set.",
                            "r": "The r component of the ECDSA signature.",
                            "s": "The s component of the ECDSA signature.",
                            "spender": "The address which will be allowed to spend owner's tokens.",
                            "v": "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28."
                        }
                    },
                    "setApproval(uint256,address,uint256)": {
                        "params": {
                            "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).",
                            "operator": "The address who will be able to use the tokens.",
                            "tokenID": "The asset to approve the use of."
                        }
                    },
                    "setApprovalBridge(uint256,address,uint256,address)": {
                        "params": {
                            "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].",
                            "caller": "The eth address which called the linking contract.",
                            "operator": "The address who will be able to use the tokens.",
                            "tokenID": "The asset to approve the use of."
                        }
                    },
                    "setApprovalForAll(address,bool)": {
                        "params": {
                            "approved": "True to approve, false to remove approval.",
                            "operator": "The eth address which can access the caller's assets."
                        }
                    },
                    "transferFrom(uint256,address,address,uint256)": {
                        "params": {
                            "amount": "The amount of token to move.",
                            "from": "The address whose balance will be reduced.",
                            "to": "The address whose balance will be increased.",
                            "tokenID": "The token identifier."
                        }
                    },
                    "transferFromBridge(uint256,address,address,uint256,address)": {
                        "params": {
                            "amount": "The amount of token to move.",
                            "caller": "The msg.sender or the caller of the ERC20Forwarder.",
                            "from": "The address whose balance will be reduced.",
                            "to": "The address whose balance will be increased.",
                            "tokenID": "The token identifier."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "batchTransferFrom(address,address,uint256[],uint256[])": {
                        "notice": "Transfers several assets from one account to another."
                    },
                    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        "notice": "Allows a caller who is not the owner of an account to execute the         functionality of 'approve' for all assets with the owner's         signature."
                    },
                    "setApproval(uint256,address,uint256)": {
                        "notice": "Allows a user to set an approval for an individual asset with         specific amount."
                    },
                    "setApprovalBridge(uint256,address,uint256,address)": {
                        "notice": "Allows the compatibility linking contract to forward calls to         set asset approvals."
                    },
                    "setApprovalForAll(address,bool)": {
                        "notice": "Allows a user to approve an operator to use all of their assets."
                    },
                    "transferFrom(uint256,address,address,uint256)": {
                        "notice": "Transfers an amount of assets from the source to the destination."
                    },
                    "transferFromBridge(uint256,address,address,uint256,address)": {
                        "notice": "Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge."
                    }
                },
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
                "contracts/src/interfaces/IMultiTokenCore.sol": "IMultiTokenCore"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IMultiTokenCore.sol",
        "id": 11426,
        "exportedSymbols": {
            "IMultiTokenCore": [
                11425
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:4378:97",
        "nodes": [
            {
                "id": 11336,
                "nodeType": "PragmaDirective",
                "src": "39:23:97",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11425,
                "nodeType": "ContractDefinition",
                "src": "64:4352:97",
                "nodes": [
                    {
                        "id": 11348,
                        "nodeType": "FunctionDefinition",
                        "src": "400:128:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11337,
                            "nodeType": "StructuredDocumentation",
                            "src": "96:299:97",
                            "text": "@notice Transfers an amount of assets from the source to the destination.\n @param tokenID The token identifier.\n @param from The address whose balance will be reduced.\n @param to The address whose balance will be increased.\n @param amount The amount of token to move."
                        },
                        "functionSelector": "1c0f12b6",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFrom",
                        "nameLocation": "409:12:97",
                        "parameters": {
                            "id": 11346,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11339,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "439:7:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11348,
                                    "src": "431:15:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11338,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "431:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11341,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "464:4:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11348,
                                    "src": "456:12:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11340,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "456:7:97",
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
                                    "id": 11343,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "486:2:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11348,
                                    "src": "478:10:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11342,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "478:7:97",
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
                                    "id": 11345,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "506:6:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11348,
                                    "src": "498:14:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11344,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "498:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "421:97:97"
                        },
                        "returnParameters": {
                            "id": 11347,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "527:0:97"
                        },
                        "scope": 11425,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11362,
                        "nodeType": "FunctionDefinition",
                        "src": "953:158:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11349,
                            "nodeType": "StructuredDocumentation",
                            "src": "534:414:97",
                            "text": "@notice Permissioned transfer for the bridge to access, only callable by\n         the ERC20 linking bridge.\n @param tokenID The token identifier.\n @param from The address whose balance will be reduced.\n @param to The address whose balance will be increased.\n @param amount The amount of token to move.\n @param caller The msg.sender or the caller of the ERC20Forwarder."
                        },
                        "functionSelector": "e44808bc",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFromBridge",
                        "nameLocation": "962:18:97",
                        "parameters": {
                            "id": 11360,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11351,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "998:7:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11362,
                                    "src": "990:15:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11350,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "990:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11353,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "1023:4:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11362,
                                    "src": "1015:12:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11352,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1015:7:97",
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
                                    "id": 11355,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1045:2:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11362,
                                    "src": "1037:10:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11354,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1037:7:97",
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
                                    "id": 11357,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1065:6:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11362,
                                    "src": "1057:14:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11356,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1057:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11359,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "1089:6:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11362,
                                    "src": "1081:14:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11358,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1081:7:97",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "980:121:97"
                        },
                        "returnParameters": {
                            "id": 11361,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1110:0:97"
                        },
                        "scope": 11425,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11372,
                        "nodeType": "FunctionDefinition",
                        "src": "1541:111:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11363,
                            "nodeType": "StructuredDocumentation",
                            "src": "1117:419:97",
                            "text": "@notice Allows a user to set an approval for an individual asset with\n         specific amount.\n @param tokenID The asset to approve the use of.\n @param operator The address who will be able to use the tokens.\n @param amount The max tokens the approved person can use, setting to\n        uint256.max will cause the value to never decrement (saving gas\n        on transfer)."
                        },
                        "functionSelector": "9cd241af",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setApproval",
                        "nameLocation": "1550:11:97",
                        "parameters": {
                            "id": 11370,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11365,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "1579:7:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11372,
                                    "src": "1571:15:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11364,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1571:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11367,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "1604:8:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11372,
                                    "src": "1596:16:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11366,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1596:7:97",
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
                                    "id": 11369,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1630:6:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11372,
                                    "src": "1622:14:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11368,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1622:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1561:81:97"
                        },
                        "returnParameters": {
                            "id": 11371,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1651:0:97"
                        },
                        "scope": 11425,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11384,
                        "nodeType": "FunctionDefinition",
                        "src": "2159:141:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11373,
                            "nodeType": "StructuredDocumentation",
                            "src": "1658:496:97",
                            "text": "@notice Allows the compatibility linking contract to forward calls to\n         set asset approvals.\n @param tokenID The asset to approve the use of.\n @param operator The address who will be able to use the tokens.\n @param amount The max tokens the approved person can use, setting to\n        uint256.max will cause the value to never decrement [saving gas\n        on transfer].\n @param caller The eth address which called the linking contract."
                        },
                        "functionSelector": "4ed2d6ac",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setApprovalBridge",
                        "nameLocation": "2168:17:97",
                        "parameters": {
                            "id": 11382,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11375,
                                    "mutability": "mutable",
                                    "name": "tokenID",
                                    "nameLocation": "2203:7:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11384,
                                    "src": "2195:15:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11374,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2195:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11377,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "2228:8:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11384,
                                    "src": "2220:16:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11376,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2220:7:97",
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
                                    "id": 11379,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "2254:6:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11384,
                                    "src": "2246:14:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11378,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2246:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11381,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "2278:6:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11384,
                                    "src": "2270:14:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11380,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2270:7:97",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2185:105:97"
                        },
                        "returnParameters": {
                            "id": 11383,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2299:0:97"
                        },
                        "scope": 11425,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11392,
                        "nodeType": "FunctionDefinition",
                        "src": "2532:69:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11385,
                            "nodeType": "StructuredDocumentation",
                            "src": "2306:221:97",
                            "text": "@notice Allows a user to approve an operator to use all of their assets.\n @param operator The eth address which can access the caller's assets.\n @param approved True to approve, false to remove approval."
                        },
                        "functionSelector": "a22cb465",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setApprovalForAll",
                        "nameLocation": "2541:17:97",
                        "parameters": {
                            "id": 11390,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11387,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "2567:8:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11392,
                                    "src": "2559:16:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11386,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2559:7:97",
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
                                    "id": 11389,
                                    "mutability": "mutable",
                                    "name": "approved",
                                    "nameLocation": "2582:8:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11392,
                                    "src": "2577:13:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11388,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2577:4:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2558:33:97"
                        },
                        "returnParameters": {
                            "id": 11391,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2600:0:97"
                        },
                        "scope": 11425,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11406,
                        "nodeType": "FunctionDefinition",
                        "src": "2888:151:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11393,
                            "nodeType": "StructuredDocumentation",
                            "src": "2607:276:97",
                            "text": "@notice Transfers several assets from one account to another.\n @param from The source account.\n @param to The destination account.\n @param ids The array of token ids of the asset to transfer.\n @param values The amount of each token to transfer."
                        },
                        "functionSelector": "17fad7fc",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchTransferFrom",
                        "nameLocation": "2897:17:97",
                        "parameters": {
                            "id": 11404,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11395,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "2932:4:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11406,
                                    "src": "2924:12:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11394,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2924:7:97",
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
                                    "id": 11397,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "2954:2:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11406,
                                    "src": "2946:10:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11396,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2946:7:97",
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
                                    "id": 11400,
                                    "mutability": "mutable",
                                    "name": "ids",
                                    "nameLocation": "2985:3:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11406,
                                    "src": "2966:22:97",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 11398,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2966:7:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 11399,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2966:9:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11403,
                                    "mutability": "mutable",
                                    "name": "values",
                                    "nameLocation": "3017:6:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11406,
                                    "src": "2998:25:97",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 11401,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2998:7:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 11402,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2998:9:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2914:115:97"
                        },
                        "returnParameters": {
                            "id": 11405,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3038:0:97"
                        },
                        "scope": 11425,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11424,
                        "nodeType": "FunctionDefinition",
                        "src": "4224:190:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11407,
                            "nodeType": "StructuredDocumentation",
                            "src": "3045:1174:97",
                            "text": "@notice Allows a caller who is not the owner of an account to execute the\n         functionality of 'approve' for all assets with the owner's\n         signature.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param _approved A boolean of the approval status to set to.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature.\n @dev The signature for this function follows EIP 712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values, those values are not\n      supported."
                        },
                        "functionSelector": "9032c726",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "permitForAll",
                        "nameLocation": "4233:12:97",
                        "parameters": {
                            "id": 11422,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11409,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "4263:5:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11424,
                                    "src": "4255:13:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11408,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4255:7:97",
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
                                    "id": 11411,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "4286:7:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11424,
                                    "src": "4278:15:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11410,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4278:7:97",
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
                                    "id": 11413,
                                    "mutability": "mutable",
                                    "name": "_approved",
                                    "nameLocation": "4308:9:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11424,
                                    "src": "4303:14:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11412,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4303:4:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11415,
                                    "mutability": "mutable",
                                    "name": "deadline",
                                    "nameLocation": "4335:8:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11424,
                                    "src": "4327:16:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11414,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4327:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11417,
                                    "mutability": "mutable",
                                    "name": "v",
                                    "nameLocation": "4359:1:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11424,
                                    "src": "4353:7:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 11416,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4353:5:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11419,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "4378:1:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11424,
                                    "src": "4370:9:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 11418,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4370:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11421,
                                    "mutability": "mutable",
                                    "name": "s",
                                    "nameLocation": "4397:1:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11424,
                                    "src": "4389:9:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 11420,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4389:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4245:159:97"
                        },
                        "returnParameters": {
                            "id": 11423,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4413:0:97"
                        },
                        "scope": 11425,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IMultiTokenCore",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11425
                ],
                "name": "IMultiTokenCore",
                "nameLocation": "74:15:97",
                "scope": 11426,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 97
};
