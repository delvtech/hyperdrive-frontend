export const IMultiTokenCore = 
{
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Functions ///\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenCore.sol\":\"IMultiTokenCore\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]}},\"version\":1}",
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
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "transferFrom(uint256,address,address,uint256)": {
            "notice": "Functions ///"
          }
        },
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
        "contracts/src/interfaces/IMultiTokenCore.sol": "IMultiTokenCore"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a",
        "urls": [
          "bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3",
          "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IMultiTokenCore.sol",
    "id": 8274,
    "exportedSymbols": {
      "IMultiTokenCore": [
        8273
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1067:56",
    "nodes": [
      {
        "id": 8190,
        "nodeType": "PragmaDirective",
        "src": "39:23:56",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 8273,
        "nodeType": "ContractDefinition",
        "src": "64:1041:56",
        "nodes": [
          {
            "id": 8202,
            "nodeType": "FunctionDefinition",
            "src": "119:128:56",
            "nodes": [],
            "documentation": {
              "id": 8191,
              "nodeType": "StructuredDocumentation",
              "src": "96:18:56",
              "text": "Functions ///"
            },
            "functionSelector": "1c0f12b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "128:12:56",
            "parameters": {
              "id": 8200,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8193,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "158:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8202,
                  "src": "150:15:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8192,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "150:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8195,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "183:4:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8202,
                  "src": "175:12:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8194,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "175:7:56",
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
                  "id": 8197,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "205:2:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8202,
                  "src": "197:10:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8196,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "197:7:56",
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
                  "id": 8199,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "225:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8202,
                  "src": "217:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8198,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "140:97:56"
            },
            "returnParameters": {
              "id": 8201,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "246:0:56"
            },
            "scope": 8273,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8215,
            "nodeType": "FunctionDefinition",
            "src": "253:158:56",
            "nodes": [],
            "functionSelector": "e44808bc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFromBridge",
            "nameLocation": "262:18:56",
            "parameters": {
              "id": 8213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8204,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "298:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8215,
                  "src": "290:15:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8203,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "290:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8206,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "323:4:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8215,
                  "src": "315:12:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8205,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "315:7:56",
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
                  "id": 8208,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "345:2:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8215,
                  "src": "337:10:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8207,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "337:7:56",
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
                  "id": 8210,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "365:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8215,
                  "src": "357:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8209,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8212,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "389:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8215,
                  "src": "381:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8211,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "381:7:56",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "280:121:56"
            },
            "returnParameters": {
              "id": 8214,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "410:0:56"
            },
            "scope": 8273,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8224,
            "nodeType": "FunctionDefinition",
            "src": "417:111:56",
            "nodes": [],
            "functionSelector": "9cd241af",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApproval",
            "nameLocation": "426:11:56",
            "parameters": {
              "id": 8222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8217,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "455:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8224,
                  "src": "447:15:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8216,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8219,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "480:8:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8224,
                  "src": "472:16:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8218,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "472:7:56",
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
                  "id": 8221,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "506:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8224,
                  "src": "498:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8220,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "498:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "437:81:56"
            },
            "returnParameters": {
              "id": 8223,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "527:0:56"
            },
            "scope": 8273,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8235,
            "nodeType": "FunctionDefinition",
            "src": "534:141:56",
            "nodes": [],
            "functionSelector": "4ed2d6ac",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalBridge",
            "nameLocation": "543:17:56",
            "parameters": {
              "id": 8233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8226,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "578:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8235,
                  "src": "570:15:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8225,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "570:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8228,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "603:8:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8235,
                  "src": "595:16:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8227,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "595:7:56",
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
                  "id": 8230,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "629:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8235,
                  "src": "621:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8229,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "621:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8232,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "653:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8235,
                  "src": "645:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8231,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "645:7:56",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "560:105:56"
            },
            "returnParameters": {
              "id": 8234,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "674:0:56"
            },
            "scope": 8273,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8242,
            "nodeType": "FunctionDefinition",
            "src": "681:69:56",
            "nodes": [],
            "functionSelector": "a22cb465",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "690:17:56",
            "parameters": {
              "id": 8240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8237,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "716:8:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8242,
                  "src": "708:16:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8236,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:7:56",
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
                  "id": 8239,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "731:8:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8242,
                  "src": "726:13:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8238,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "726:4:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "707:33:56"
            },
            "returnParameters": {
              "id": 8241,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "749:0:56"
            },
            "scope": 8273,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8255,
            "nodeType": "FunctionDefinition",
            "src": "756:151:56",
            "nodes": [],
            "functionSelector": "17fad7fc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "batchTransferFrom",
            "nameLocation": "765:17:56",
            "parameters": {
              "id": 8253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8244,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "800:4:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8255,
                  "src": "792:12:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8243,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "792:7:56",
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
                  "id": 8246,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "822:2:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8255,
                  "src": "814:10:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8245,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "814:7:56",
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
                  "id": 8249,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "853:3:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8255,
                  "src": "834:22:56",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 8247,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "834:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 8248,
                    "nodeType": "ArrayTypeName",
                    "src": "834:9:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8252,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "885:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8255,
                  "src": "866:25:56",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 8250,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "866:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 8251,
                    "nodeType": "ArrayTypeName",
                    "src": "866:9:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "782:115:56"
            },
            "returnParameters": {
              "id": 8254,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "906:0:56"
            },
            "scope": 8273,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8272,
            "nodeType": "FunctionDefinition",
            "src": "913:190:56",
            "nodes": [],
            "functionSelector": "9032c726",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "permitForAll",
            "nameLocation": "922:12:56",
            "parameters": {
              "id": 8270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8257,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "952:5:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8272,
                  "src": "944:13:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8256,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "944:7:56",
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
                  "id": 8259,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "975:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8272,
                  "src": "967:15:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8258,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "967:7:56",
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
                  "id": 8261,
                  "mutability": "mutable",
                  "name": "_approved",
                  "nameLocation": "997:9:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8272,
                  "src": "992:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8260,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "992:4:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8263,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "1024:8:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8272,
                  "src": "1016:16:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8262,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1016:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8265,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "1048:1:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8272,
                  "src": "1042:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 8264,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1042:5:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8267,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1067:1:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8272,
                  "src": "1059:9:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8266,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1059:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8269,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "1086:1:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 8272,
                  "src": "1078:9:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8268,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1078:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "934:159:56"
            },
            "returnParameters": {
              "id": 8271,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1102:0:56"
            },
            "scope": 8273,
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
          8273
        ],
        "name": "IMultiTokenCore",
        "nameLocation": "74:15:56",
        "scope": 8274,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 56
} as const;
