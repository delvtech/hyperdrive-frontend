export const IMultiTokenWrite = 
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenWrite.sol\":\"IMultiTokenWrite\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]}},\"version\":1}",
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
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
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
    "id": 7981,
    "exportedSymbols": {
      "IMultiTokenWrite": [
        7980
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1450:30",
    "nodes": [
      {
        "id": 7870,
        "nodeType": "PragmaDirective",
        "src": "39:23:30",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 7980,
        "nodeType": "ContractDefinition",
        "src": "64:1424:30",
        "nodes": [
          {
            "id": 7882,
            "nodeType": "EventDefinition",
            "src": "97:162:30",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "c3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
            "name": "TransferSingle",
            "nameLocation": "103:14:30",
            "parameters": {
              "id": 7881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7872,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "143:8:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7882,
                  "src": "127:24:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7871,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:30",
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
                  "id": 7874,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "177:4:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7882,
                  "src": "161:20:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7873,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "161:7:30",
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
                  "id": 7876,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "207:2:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7882,
                  "src": "191:18:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7875,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "191:7:30",
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
                  "id": 7878,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "227:2:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7882,
                  "src": "219:10:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7877,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "219:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7880,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "247:5:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7882,
                  "src": "239:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7879,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "239:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "117:141:30"
            }
          },
          {
            "id": 7890,
            "nodeType": "EventDefinition",
            "src": "265:108:30",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "name": "Approval",
            "nameLocation": "271:8:30",
            "parameters": {
              "id": 7889,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7884,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "305:5:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7890,
                  "src": "289:21:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7883,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "289:7:30",
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
                  "id": 7886,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "336:7:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7890,
                  "src": "320:23:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7885,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "320:7:30",
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
                  "id": 7888,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "361:5:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7890,
                  "src": "353:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7887,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "353:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "279:93:30"
            }
          },
          {
            "id": 7898,
            "nodeType": "EventDefinition",
            "src": "379:117:30",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
            "name": "ApprovalForAll",
            "nameLocation": "385:14:30",
            "parameters": {
              "id": 7897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7892,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "425:7:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7898,
                  "src": "409:23:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7891,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "409:7:30",
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
                  "id": 7894,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "458:8:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7898,
                  "src": "442:24:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7893,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "442:7:30",
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
                  "id": 7896,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "481:8:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7898,
                  "src": "476:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7895,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "399:96:30"
            }
          },
          {
            "id": 7909,
            "nodeType": "FunctionDefinition",
            "src": "502:128:30",
            "nodes": [],
            "functionSelector": "1c0f12b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "511:12:30",
            "parameters": {
              "id": 7907,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7900,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "541:7:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7909,
                  "src": "533:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7899,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "533:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7902,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "566:4:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7909,
                  "src": "558:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7901,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "558:7:30",
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
                  "id": 7904,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "588:2:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7909,
                  "src": "580:10:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7903,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "580:7:30",
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
                  "id": 7906,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "608:6:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7909,
                  "src": "600:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7905,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "600:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "523:97:30"
            },
            "returnParameters": {
              "id": 7908,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "629:0:30"
            },
            "scope": 7980,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7922,
            "nodeType": "FunctionDefinition",
            "src": "636:158:30",
            "nodes": [],
            "functionSelector": "e44808bc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFromBridge",
            "nameLocation": "645:18:30",
            "parameters": {
              "id": 7920,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7911,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "681:7:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7922,
                  "src": "673:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7910,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "673:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7913,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "706:4:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7922,
                  "src": "698:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7912,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "698:7:30",
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
                  "id": 7915,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "728:2:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7922,
                  "src": "720:10:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7914,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "720:7:30",
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
                  "id": 7917,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "748:6:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7922,
                  "src": "740:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7916,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "740:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7919,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "772:6:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7922,
                  "src": "764:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7918,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "764:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "663:121:30"
            },
            "returnParameters": {
              "id": 7921,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "793:0:30"
            },
            "scope": 7980,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7931,
            "nodeType": "FunctionDefinition",
            "src": "800:111:30",
            "nodes": [],
            "functionSelector": "9cd241af",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApproval",
            "nameLocation": "809:11:30",
            "parameters": {
              "id": 7929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7924,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "838:7:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7931,
                  "src": "830:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7923,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "830:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7926,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "863:8:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7931,
                  "src": "855:16:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7925,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "855:7:30",
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
                  "id": 7928,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "889:6:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7931,
                  "src": "881:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7927,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "881:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "820:81:30"
            },
            "returnParameters": {
              "id": 7930,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "910:0:30"
            },
            "scope": 7980,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7942,
            "nodeType": "FunctionDefinition",
            "src": "917:141:30",
            "nodes": [],
            "functionSelector": "4ed2d6ac",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalBridge",
            "nameLocation": "926:17:30",
            "parameters": {
              "id": 7940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7933,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "961:7:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7942,
                  "src": "953:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7932,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "953:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7935,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "986:8:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7942,
                  "src": "978:16:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7934,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:7:30",
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
                  "id": 7937,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1012:6:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7942,
                  "src": "1004:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7936,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7939,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "1036:6:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7942,
                  "src": "1028:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7938,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1028:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "943:105:30"
            },
            "returnParameters": {
              "id": 7941,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1057:0:30"
            },
            "scope": 7980,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7949,
            "nodeType": "FunctionDefinition",
            "src": "1064:69:30",
            "nodes": [],
            "functionSelector": "a22cb465",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "1073:17:30",
            "parameters": {
              "id": 7947,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7944,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "1099:8:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7949,
                  "src": "1091:16:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7943,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1091:7:30",
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
                  "id": 7946,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "1114:8:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7949,
                  "src": "1109:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7945,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1109:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1090:33:30"
            },
            "returnParameters": {
              "id": 7948,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1132:0:30"
            },
            "scope": 7980,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7962,
            "nodeType": "FunctionDefinition",
            "src": "1139:151:30",
            "nodes": [],
            "functionSelector": "17fad7fc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "batchTransferFrom",
            "nameLocation": "1148:17:30",
            "parameters": {
              "id": 7960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7951,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "1183:4:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7962,
                  "src": "1175:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7950,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1175:7:30",
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
                  "id": 7953,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1205:2:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7962,
                  "src": "1197:10:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7952,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1197:7:30",
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
                  "id": 7956,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "1236:3:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7962,
                  "src": "1217:22:30",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7954,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1217:7:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7955,
                    "nodeType": "ArrayTypeName",
                    "src": "1217:9:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7959,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "1268:6:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7962,
                  "src": "1249:25:30",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7957,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1249:7:30",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7958,
                    "nodeType": "ArrayTypeName",
                    "src": "1249:9:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1165:115:30"
            },
            "returnParameters": {
              "id": 7961,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1289:0:30"
            },
            "scope": 7980,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7979,
            "nodeType": "FunctionDefinition",
            "src": "1296:190:30",
            "nodes": [],
            "functionSelector": "9032c726",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "permitForAll",
            "nameLocation": "1305:12:30",
            "parameters": {
              "id": 7977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7964,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1335:5:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7979,
                  "src": "1327:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7963,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1327:7:30",
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
                  "id": 7966,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1358:7:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7979,
                  "src": "1350:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7965,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1350:7:30",
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
                  "id": 7968,
                  "mutability": "mutable",
                  "name": "_approved",
                  "nameLocation": "1380:9:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7979,
                  "src": "1375:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7967,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1375:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7970,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "1407:8:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7979,
                  "src": "1399:16:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7969,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1399:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7972,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "1431:1:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7979,
                  "src": "1425:7:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 7971,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1425:5:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7974,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1450:1:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7979,
                  "src": "1442:9:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7973,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1442:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7976,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "1469:1:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 7979,
                  "src": "1461:9:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7975,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1461:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1317:159:30"
            },
            "returnParameters": {
              "id": 7978,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1485:0:30"
            },
            "scope": 7980,
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
          7980
        ],
        "name": "IMultiTokenWrite",
        "nameLocation": "74:16:30",
        "scope": 7981,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 30
} as const;
