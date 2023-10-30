{
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenWrite.sol\":\"IMultiTokenWrite\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ApprovalForAll",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "TransferSingle",
          "anonymous": false
        },
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
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/src/interfaces/IMultiTokenWrite.sol": "IMultiTokenWrite"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        "keccak256": "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        "urls": [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IMultiTokenWrite.sol",
    "id": 7658,
    "exportedSymbols": {
      "IMultiTokenWrite": [
        7657
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1450:29",
    "nodes": [
      {
        "id": 7547,
        "nodeType": "PragmaDirective",
        "src": "39:23:29",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 7657,
        "nodeType": "ContractDefinition",
        "src": "64:1424:29",
        "nodes": [
          {
            "id": 7559,
            "nodeType": "EventDefinition",
            "src": "97:162:29",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "c3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
            "name": "TransferSingle",
            "nameLocation": "103:14:29",
            "parameters": {
              "id": 7558,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7549,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "143:8:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7559,
                  "src": "127:24:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7548,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:29",
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
                  "id": 7551,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "177:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7559,
                  "src": "161:20:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7550,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "161:7:29",
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
                  "id": 7553,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "207:2:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7559,
                  "src": "191:18:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7552,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "191:7:29",
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
                  "id": 7555,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "227:2:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7559,
                  "src": "219:10:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7554,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "219:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7557,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "247:5:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7559,
                  "src": "239:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7556,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "239:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "117:141:29"
            }
          },
          {
            "id": 7567,
            "nodeType": "EventDefinition",
            "src": "265:108:29",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "name": "Approval",
            "nameLocation": "271:8:29",
            "parameters": {
              "id": 7566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7561,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "305:5:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7567,
                  "src": "289:21:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7560,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "289:7:29",
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
                  "id": 7563,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "336:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7567,
                  "src": "320:23:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7562,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "320:7:29",
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
                  "id": 7565,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "361:5:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7567,
                  "src": "353:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7564,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "353:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "279:93:29"
            }
          },
          {
            "id": 7575,
            "nodeType": "EventDefinition",
            "src": "379:117:29",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
            "name": "ApprovalForAll",
            "nameLocation": "385:14:29",
            "parameters": {
              "id": 7574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7569,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "425:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7575,
                  "src": "409:23:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7568,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "409:7:29",
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
                  "id": 7571,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "458:8:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7575,
                  "src": "442:24:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7570,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "442:7:29",
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
                  "id": 7573,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "481:8:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7575,
                  "src": "476:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7572,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "399:96:29"
            }
          },
          {
            "id": 7586,
            "nodeType": "FunctionDefinition",
            "src": "502:128:29",
            "nodes": [],
            "functionSelector": "1c0f12b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "511:12:29",
            "parameters": {
              "id": 7584,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7577,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "541:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7586,
                  "src": "533:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7576,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "533:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7579,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "566:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7586,
                  "src": "558:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "558:7:29",
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
                  "id": 7581,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "588:2:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7586,
                  "src": "580:10:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7580,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "580:7:29",
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
                  "id": 7583,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "608:6:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7586,
                  "src": "600:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7582,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "600:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "523:97:29"
            },
            "returnParameters": {
              "id": 7585,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "629:0:29"
            },
            "scope": 7657,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7599,
            "nodeType": "FunctionDefinition",
            "src": "636:158:29",
            "nodes": [],
            "functionSelector": "e44808bc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFromBridge",
            "nameLocation": "645:18:29",
            "parameters": {
              "id": 7597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7588,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "681:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7599,
                  "src": "673:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7587,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "673:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7590,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "706:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7599,
                  "src": "698:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7589,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "698:7:29",
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
                  "id": 7592,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "728:2:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7599,
                  "src": "720:10:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7591,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "720:7:29",
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
                  "id": 7594,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "748:6:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7599,
                  "src": "740:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7593,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "740:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7596,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "772:6:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7599,
                  "src": "764:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7595,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "764:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "663:121:29"
            },
            "returnParameters": {
              "id": 7598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "793:0:29"
            },
            "scope": 7657,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7608,
            "nodeType": "FunctionDefinition",
            "src": "800:111:29",
            "nodes": [],
            "functionSelector": "9cd241af",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApproval",
            "nameLocation": "809:11:29",
            "parameters": {
              "id": 7606,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7601,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "838:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7608,
                  "src": "830:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7600,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "830:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7603,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "863:8:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7608,
                  "src": "855:16:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7602,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "855:7:29",
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
                  "id": 7605,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "889:6:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7608,
                  "src": "881:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7604,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "881:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "820:81:29"
            },
            "returnParameters": {
              "id": 7607,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "910:0:29"
            },
            "scope": 7657,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7619,
            "nodeType": "FunctionDefinition",
            "src": "917:141:29",
            "nodes": [],
            "functionSelector": "4ed2d6ac",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalBridge",
            "nameLocation": "926:17:29",
            "parameters": {
              "id": 7617,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7610,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "961:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7619,
                  "src": "953:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7609,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "953:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7612,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "986:8:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7619,
                  "src": "978:16:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7611,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:7:29",
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
                  "id": 7614,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1012:6:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7619,
                  "src": "1004:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7613,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7616,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "1036:6:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7619,
                  "src": "1028:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7615,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1028:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "943:105:29"
            },
            "returnParameters": {
              "id": 7618,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1057:0:29"
            },
            "scope": 7657,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7626,
            "nodeType": "FunctionDefinition",
            "src": "1064:69:29",
            "nodes": [],
            "functionSelector": "a22cb465",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "1073:17:29",
            "parameters": {
              "id": 7624,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7621,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "1099:8:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7626,
                  "src": "1091:16:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7620,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1091:7:29",
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
                  "id": 7623,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "1114:8:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7626,
                  "src": "1109:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7622,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1109:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1090:33:29"
            },
            "returnParameters": {
              "id": 7625,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1132:0:29"
            },
            "scope": 7657,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7639,
            "nodeType": "FunctionDefinition",
            "src": "1139:151:29",
            "nodes": [],
            "functionSelector": "17fad7fc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "batchTransferFrom",
            "nameLocation": "1148:17:29",
            "parameters": {
              "id": 7637,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7628,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "1183:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7639,
                  "src": "1175:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7627,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1175:7:29",
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
                  "id": 7630,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1205:2:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7639,
                  "src": "1197:10:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7629,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1197:7:29",
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
                  "id": 7633,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "1236:3:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7639,
                  "src": "1217:22:29",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7631,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1217:7:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7632,
                    "nodeType": "ArrayTypeName",
                    "src": "1217:9:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7636,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "1268:6:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7639,
                  "src": "1249:25:29",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7634,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1249:7:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7635,
                    "nodeType": "ArrayTypeName",
                    "src": "1249:9:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1165:115:29"
            },
            "returnParameters": {
              "id": 7638,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1289:0:29"
            },
            "scope": 7657,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7656,
            "nodeType": "FunctionDefinition",
            "src": "1296:190:29",
            "nodes": [],
            "functionSelector": "9032c726",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "permitForAll",
            "nameLocation": "1305:12:29",
            "parameters": {
              "id": 7654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7641,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1335:5:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7656,
                  "src": "1327:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7640,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1327:7:29",
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
                  "id": 7643,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1358:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7656,
                  "src": "1350:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7642,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1350:7:29",
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
                  "id": 7645,
                  "mutability": "mutable",
                  "name": "_approved",
                  "nameLocation": "1380:9:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7656,
                  "src": "1375:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7644,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1375:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7647,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "1407:8:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7656,
                  "src": "1399:16:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7646,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1399:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7649,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "1431:1:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7656,
                  "src": "1425:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 7648,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1425:5:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7651,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1450:1:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7656,
                  "src": "1442:9:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7650,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1442:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7653,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "1469:1:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7656,
                  "src": "1461:9:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7652,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1461:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1317:159:29"
            },
            "returnParameters": {
              "id": 7655,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1485:0:29"
            },
            "scope": 7657,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IMultiTokenWrite",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          7657
        ],
        "name": "IMultiTokenWrite",
        "nameLocation": "74:16:29",
        "scope": 7658,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 29
}