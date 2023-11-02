export const ERC20 = 
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
          "name": "amount",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DOMAIN_SEPARATOR",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "nonces",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
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
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
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
      "name": "permit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
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
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
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
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
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
    "DOMAIN_SEPARATOR()": "3644e515",
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "decimals()": "313ce567",
    "name()": "06fdde03",
    "nonces(address)": "7ecebe00",
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
    "symbol()": "95d89b41",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)Modified from Uniswap (https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol)\",\"details\":\"Do not manually set balances without updating totalSupply, as the sum of all user balances must not exceed it.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Modern and gas efficient ERC20 + EIP-2612 implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/tokens/ERC20.sol\":\"ERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]}},\"version\":1}",
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
              "name": "amount",
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
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "DOMAIN_SEPARATOR",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
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
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "nonces",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
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
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
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
          "name": "permit"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
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
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
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
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
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
        "lib/solmate/src/tokens/ERC20.sol": "ERC20"
      },
      "libraries": {}
    },
    "sources": {
      "lib/solmate/src/tokens/ERC20.sol": {
        "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        "urls": [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
    "id": 63251,
    "exportedSymbols": {
      "ERC20": [
        63250
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:6770:94",
    "nodes": [
      {
        "id": 62864,
        "nodeType": "PragmaDirective",
        "src": "42:24:94",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 63250,
        "nodeType": "ContractDefinition",
        "src": "474:6337:94",
        "nodes": [
          {
            "id": 62873,
            "nodeType": "EventDefinition",
            "src": "683:73:94",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "name": "Transfer",
            "nameLocation": "689:8:94",
            "parameters": {
              "id": 62872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62867,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "714:4:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 62873,
                  "src": "698:20:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "698:7:94",
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
                  "id": 62869,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "736:2:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 62873,
                  "src": "720:18:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62868,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "720:7:94",
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
                  "id": 62871,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "748:6:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 62873,
                  "src": "740:14:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62870,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "740:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "697:58:94"
            }
          },
          {
            "id": 62881,
            "nodeType": "EventDefinition",
            "src": "762:79:94",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "name": "Approval",
            "nameLocation": "768:8:94",
            "parameters": {
              "id": 62880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62875,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "793:5:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 62881,
                  "src": "777:21:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62874,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "777:7:94",
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
                  "id": 62877,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "816:7:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 62881,
                  "src": "800:23:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "800:7:94",
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
                  "id": 62879,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "833:6:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 62881,
                  "src": "825:14:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62878,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "825:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "776:64:94"
            }
          },
          {
            "id": 62883,
            "nodeType": "VariableDeclaration",
            "src": "1031:18:94",
            "nodes": [],
            "constant": false,
            "functionSelector": "06fdde03",
            "mutability": "mutable",
            "name": "name",
            "nameLocation": "1045:4:94",
            "scope": 63250,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 62882,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1031:6:94",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "public"
          },
          {
            "id": 62885,
            "nodeType": "VariableDeclaration",
            "src": "1056:20:94",
            "nodes": [],
            "constant": false,
            "functionSelector": "95d89b41",
            "mutability": "mutable",
            "name": "symbol",
            "nameLocation": "1070:6:94",
            "scope": 63250,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 62884,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1056:6:94",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "public"
          },
          {
            "id": 62887,
            "nodeType": "VariableDeclaration",
            "src": "1083:31:94",
            "nodes": [],
            "constant": false,
            "functionSelector": "313ce567",
            "mutability": "immutable",
            "name": "decimals",
            "nameLocation": "1106:8:94",
            "scope": 63250,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 62886,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "1083:5:94",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "visibility": "public"
          },
          {
            "id": 62889,
            "nodeType": "VariableDeclaration",
            "src": "1304:26:94",
            "nodes": [],
            "constant": false,
            "functionSelector": "18160ddd",
            "mutability": "mutable",
            "name": "totalSupply",
            "nameLocation": "1319:11:94",
            "scope": 63250,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 62888,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1304:7:94",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "id": 62893,
            "nodeType": "VariableDeclaration",
            "src": "1337:44:94",
            "nodes": [],
            "constant": false,
            "functionSelector": "70a08231",
            "mutability": "mutable",
            "name": "balanceOf",
            "nameLocation": "1372:9:94",
            "scope": 63250,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 62892,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 62890,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1345:7:94",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1337:27:94",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 62891,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1356:7:94",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 62899,
            "nodeType": "VariableDeclaration",
            "src": "1388:64:94",
            "nodes": [],
            "constant": false,
            "functionSelector": "dd62ed3e",
            "mutability": "mutable",
            "name": "allowance",
            "nameLocation": "1443:9:94",
            "scope": 63250,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 62898,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 62894,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1396:7:94",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1388:47:94",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 62897,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 62895,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1415:7:94",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1407:27:94",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 62896,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1426:7:94",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 62901,
            "nodeType": "VariableDeclaration",
            "src": "1643:43:94",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "INITIAL_CHAIN_ID",
            "nameLocation": "1670:16:94",
            "scope": 63250,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 62900,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1643:7:94",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 62903,
            "nodeType": "VariableDeclaration",
            "src": "1693:51:94",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "INITIAL_DOMAIN_SEPARATOR",
            "nameLocation": "1720:24:94",
            "scope": 63250,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 62902,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1693:7:94",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 62907,
            "nodeType": "VariableDeclaration",
            "src": "1751:41:94",
            "nodes": [],
            "constant": false,
            "functionSelector": "7ecebe00",
            "mutability": "mutable",
            "name": "nonces",
            "nameLocation": "1786:6:94",
            "scope": 63250,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 62906,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 62904,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1759:7:94",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1751:27:94",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 62905,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1770:7:94",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 62939,
            "nodeType": "FunctionDefinition",
            "src": "1981:292:94",
            "nodes": [],
            "body": {
              "id": 62938,
              "nodeType": "Block",
              "src": "2084:189:94",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 62918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62916,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62883,
                      "src": "2094:4:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62917,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62909,
                      "src": "2101:5:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "2094:12:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 62919,
                  "nodeType": "ExpressionStatement",
                  "src": "2094:12:94"
                },
                {
                  "expression": {
                    "id": 62922,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62920,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62885,
                      "src": "2116:6:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62921,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62911,
                      "src": "2125:7:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "2116:16:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 62923,
                  "nodeType": "ExpressionStatement",
                  "src": "2116:16:94"
                },
                {
                  "expression": {
                    "id": 62926,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62924,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62887,
                      "src": "2142:8:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62925,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62913,
                      "src": "2153:9:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2142:20:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 62927,
                  "nodeType": "ExpressionStatement",
                  "src": "2142:20:94"
                },
                {
                  "expression": {
                    "id": 62931,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62928,
                      "name": "INITIAL_CHAIN_ID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62901,
                      "src": "2173:16:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 62929,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "2192:5:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 62930,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2198:7:94",
                      "memberName": "chainid",
                      "nodeType": "MemberAccess",
                      "src": "2192:13:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2173:32:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 62932,
                  "nodeType": "ExpressionStatement",
                  "src": "2173:32:94"
                },
                {
                  "expression": {
                    "id": 62936,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62933,
                      "name": "INITIAL_DOMAIN_SEPARATOR",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62903,
                      "src": "2215:24:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 62934,
                        "name": "computeDomainSeparator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63193,
                        "src": "2242:22:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                          "typeString": "function () view returns (bytes32)"
                        }
                      },
                      "id": 62935,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2242:24:94",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2215:51:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 62937,
                  "nodeType": "ExpressionStatement",
                  "src": "2215:51:94"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 62914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62909,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "2016:5:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 62939,
                  "src": "2002:19:94",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 62908,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2002:6:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62911,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "2045:7:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 62939,
                  "src": "2031:21:94",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 62910,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2031:6:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62913,
                  "mutability": "mutable",
                  "name": "_decimals",
                  "nameLocation": "2068:9:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 62939,
                  "src": "2062:15:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 62912,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2062:5:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1992:91:94"
            },
            "returnParameters": {
              "id": 62915,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2084:0:94"
            },
            "scope": 63250,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62967,
            "nodeType": "FunctionDefinition",
            "src": "2461:211:94",
            "nodes": [],
            "body": {
              "id": 62966,
              "nodeType": "Block",
              "src": "2541:131:94",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 62955,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 62948,
                          "name": "allowance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62899,
                          "src": "2551:9:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 62952,
                        "indexExpression": {
                          "expression": {
                            "id": 62949,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2561:3:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 62950,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2565:6:94",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2561:10:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2551:21:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 62953,
                      "indexExpression": {
                        "id": 62951,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62941,
                        "src": "2573:7:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2551:30:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62954,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62943,
                      "src": "2584:6:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2551:39:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 62956,
                  "nodeType": "ExpressionStatement",
                  "src": "2551:39:94"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62958,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2615:3:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 62959,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2619:6:94",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2615:10:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62960,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62941,
                        "src": "2627:7:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62961,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62943,
                        "src": "2636:6:94",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 62957,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62881,
                      "src": "2606:8:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 62962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2606:37:94",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62963,
                  "nodeType": "EmitStatement",
                  "src": "2601:42:94"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 62964,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2661:4:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 62947,
                  "id": 62965,
                  "nodeType": "Return",
                  "src": "2654:11:94"
                }
              ]
            },
            "functionSelector": "095ea7b3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "2470:7:94",
            "parameters": {
              "id": 62944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62941,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2486:7:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 62967,
                  "src": "2478:15:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62940,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2478:7:94",
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
                  "id": 62943,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2503:6:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 62967,
                  "src": "2495:14:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62942,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2495:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2477:33:94"
            },
            "returnParameters": {
              "id": 62947,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62946,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62967,
                  "src": "2535:4:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62945,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2535:4:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2534:6:94"
            },
            "scope": 63250,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63000,
            "nodeType": "FunctionDefinition",
            "src": "2678:373:94",
            "nodes": [],
            "body": {
              "id": 62999,
              "nodeType": "Block",
              "src": "2754:297:94",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 62981,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 62976,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62893,
                        "src": "2764:9:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 62979,
                      "indexExpression": {
                        "expression": {
                          "id": 62977,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2774:3:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 62978,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2778:6:94",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2774:10:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2764:21:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 62980,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62971,
                      "src": "2789:6:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2764:31:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 62982,
                  "nodeType": "ExpressionStatement",
                  "src": "2764:31:94"
                },
                {
                  "id": 62989,
                  "nodeType": "UncheckedBlock",
                  "src": "2917:58:94",
                  "statements": [
                    {
                      "expression": {
                        "id": 62987,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "baseExpression": {
                            "id": 62983,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62893,
                            "src": "2941:9:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 62985,
                          "indexExpression": {
                            "id": 62984,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62969,
                            "src": "2951:2:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2941:13:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "id": 62986,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62971,
                          "src": "2958:6:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2941:23:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 62988,
                      "nodeType": "ExpressionStatement",
                      "src": "2941:23:94"
                    }
                  ]
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62991,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2999:3:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 62992,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3003:6:94",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2999:10:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62993,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62969,
                        "src": "3011:2:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62994,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62971,
                        "src": "3015:6:94",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 62990,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62873,
                      "src": "2990:8:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 62995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2990:32:94",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62996,
                  "nodeType": "EmitStatement",
                  "src": "2985:37:94"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 62997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3040:4:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 62975,
                  "id": 62998,
                  "nodeType": "Return",
                  "src": "3033:11:94"
                }
              ]
            },
            "functionSelector": "a9059cbb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "2687:8:94",
            "parameters": {
              "id": 62972,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62969,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2704:2:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63000,
                  "src": "2696:10:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62968,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2696:7:94",
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
                  "id": 62971,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2716:6:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63000,
                  "src": "2708:14:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62970,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2708:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2695:28:94"
            },
            "returnParameters": {
              "id": 62975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62974,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63000,
                  "src": "2748:4:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62973,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2748:4:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2747:6:94"
            },
            "scope": 63250,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63061,
            "nodeType": "FunctionDefinition",
            "src": "3057:592:94",
            "nodes": [],
            "body": {
              "id": 63060,
              "nodeType": "Block",
              "src": "3181:468:94",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    63012
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63012,
                      "mutability": "mutable",
                      "name": "allowed",
                      "nameLocation": "3199:7:94",
                      "nodeType": "VariableDeclaration",
                      "scope": 63060,
                      "src": "3191:15:94",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 63011,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3191:7:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 63019,
                  "initialValue": {
                    "baseExpression": {
                      "baseExpression": {
                        "id": 63013,
                        "name": "allowance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62899,
                        "src": "3209:9:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(address => uint256))"
                        }
                      },
                      "id": 63015,
                      "indexExpression": {
                        "id": 63014,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63002,
                        "src": "3219:4:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3209:15:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 63018,
                    "indexExpression": {
                      "expression": {
                        "id": 63016,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "3225:3:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 63017,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3229:6:94",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "3225:10:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3209:27:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3191:45:94"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 63026,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 63020,
                      "name": "allowed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63012,
                      "src": "3287:7:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 63023,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3303:7:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 63022,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3303:7:94",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            }
                          ],
                          "id": 63021,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "3298:4:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 63024,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3298:13:94",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint256",
                          "typeString": "type(uint256)"
                        }
                      },
                      "id": 63025,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "3312:3:94",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "3298:17:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3287:28:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 63038,
                  "nodeType": "IfStatement",
                  "src": "3283:80:94",
                  "trueBody": {
                    "expression": {
                      "id": 63036,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "baseExpression": {
                            "id": 63027,
                            "name": "allowance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62899,
                            "src": "3317:9:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 63031,
                          "indexExpression": {
                            "id": 63028,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63002,
                            "src": "3327:4:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3317:15:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 63032,
                        "indexExpression": {
                          "expression": {
                            "id": 63029,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "3333:3:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 63030,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3337:6:94",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "3333:10:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3317:27:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 63035,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 63033,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63012,
                          "src": "3347:7:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 63034,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63006,
                          "src": "3357:6:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3347:16:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3317:46:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 63037,
                    "nodeType": "ExpressionStatement",
                    "src": "3317:46:94"
                  }
                },
                {
                  "expression": {
                    "id": 63043,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 63039,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62893,
                        "src": "3374:9:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 63041,
                      "indexExpression": {
                        "id": 63040,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63002,
                        "src": "3384:4:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3374:15:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 63042,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63006,
                      "src": "3393:6:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3374:25:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 63044,
                  "nodeType": "ExpressionStatement",
                  "src": "3374:25:94"
                },
                {
                  "id": 63051,
                  "nodeType": "UncheckedBlock",
                  "src": "3521:58:94",
                  "statements": [
                    {
                      "expression": {
                        "id": 63049,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "baseExpression": {
                            "id": 63045,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62893,
                            "src": "3545:9:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 63047,
                          "indexExpression": {
                            "id": 63046,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63004,
                            "src": "3555:2:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "3545:13:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "id": 63048,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63006,
                          "src": "3562:6:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3545:23:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 63050,
                      "nodeType": "ExpressionStatement",
                      "src": "3545:23:94"
                    }
                  ]
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 63053,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63002,
                        "src": "3603:4:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63054,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63004,
                        "src": "3609:2:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63055,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63006,
                        "src": "3613:6:94",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 63052,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62873,
                      "src": "3594:8:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 63056,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3594:26:94",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63057,
                  "nodeType": "EmitStatement",
                  "src": "3589:31:94"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 63058,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3638:4:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 63010,
                  "id": 63059,
                  "nodeType": "Return",
                  "src": "3631:11:94"
                }
              ]
            },
            "functionSelector": "23b872dd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "3066:12:94",
            "parameters": {
              "id": 63007,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63002,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "3096:4:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63061,
                  "src": "3088:12:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63001,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3088:7:94",
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
                  "id": 63004,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3118:2:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63061,
                  "src": "3110:10:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63003,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3110:7:94",
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
                  "id": 63006,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "3138:6:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63061,
                  "src": "3130:14:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63005,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3078:72:94"
            },
            "returnParameters": {
              "id": 63010,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63009,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63061,
                  "src": "3175:4:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 63008,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3175:4:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3174:6:94"
            },
            "scope": 63250,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63148,
            "nodeType": "FunctionDefinition",
            "src": "3838:1483:94",
            "nodes": [],
            "body": {
              "id": 63147,
              "nodeType": "Block",
              "src": "4027:1294:94",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 63082,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 63079,
                          "name": "deadline",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63069,
                          "src": "4045:8:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "expression": {
                            "id": 63080,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "4057:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 63081,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4063:9:94",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "4057:15:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4045:27:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5045524d49545f444541444c494e455f45585049524544",
                        "id": 63083,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4074:25:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_dd18cfd81b4c1281b56302a044e7f751a261543590362c41d86af048f8ed4b3e",
                          "typeString": "literal_string \"PERMIT_DEADLINE_EXPIRED\""
                        },
                        "value": "PERMIT_DEADLINE_EXPIRED"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_dd18cfd81b4c1281b56302a044e7f751a261543590362c41d86af048f8ed4b3e",
                          "typeString": "literal_string \"PERMIT_DEADLINE_EXPIRED\""
                        }
                      ],
                      "id": 63078,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4037:7:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 63084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4037:63:94",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63085,
                  "nodeType": "ExpressionStatement",
                  "src": "4037:63:94"
                },
                {
                  "id": 63140,
                  "nodeType": "UncheckedBlock",
                  "src": "4241:1027:94",
                  "statements": [
                    {
                      "assignments": [
                        63087
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 63087,
                          "mutability": "mutable",
                          "name": "recoveredAddress",
                          "nameLocation": "4273:16:94",
                          "nodeType": "VariableDeclaration",
                          "scope": 63140,
                          "src": "4265:24:94",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "typeName": {
                            "id": 63086,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4265:7:94",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 63117,
                      "initialValue": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "hexValue": "1901",
                                    "id": 63092,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4392:10:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_301a50b291d33ce1e8e9064e3f6a6c51d902ec22892b50d58abf6357c6a45541",
                                      "typeString": "literal_string hex\"1901\""
                                    },
                                    "value": "\u0019\u0001"
                                  },
                                  {
                                    "arguments": [],
                                    "expression": {
                                      "argumentTypes": [],
                                      "id": 63093,
                                      "name": "DOMAIN_SEPARATOR",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 63163,
                                      "src": "4428:16:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                        "typeString": "function () view returns (bytes32)"
                                      }
                                    },
                                    "id": 63094,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "4428:18:94",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "hexValue": "5065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529",
                                                "id": 63099,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4602:84:94",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_stringliteral_6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9",
                                                  "typeString": "literal_string \"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)\""
                                                },
                                                "value": "Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_stringliteral_6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9",
                                                  "typeString": "literal_string \"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)\""
                                                }
                                              ],
                                              "id": 63098,
                                              "name": "keccak256",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -8,
                                              "src": "4555:9:94",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                              }
                                            },
                                            "id": 63100,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4555:165:94",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            }
                                          },
                                          {
                                            "id": 63101,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 63063,
                                            "src": "4754:5:94",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "id": 63102,
                                            "name": "spender",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 63065,
                                            "src": "4793:7:94",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "id": 63103,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 63067,
                                            "src": "4834:5:94",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          {
                                            "id": 63107,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "4873:15:94",
                                            "subExpression": {
                                              "baseExpression": {
                                                "id": 63104,
                                                "name": "nonces",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 62907,
                                                "src": "4873:6:94",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                  "typeString": "mapping(address => uint256)"
                                                }
                                              },
                                              "id": 63106,
                                              "indexExpression": {
                                                "id": 63105,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 63063,
                                                "src": "4880:5:94",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              },
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": true,
                                              "nodeType": "IndexAccess",
                                              "src": "4873:13:94",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            },
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          {
                                            "id": 63108,
                                            "name": "deadline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 63069,
                                            "src": "4922:8:94",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            },
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
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
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "expression": {
                                            "id": 63096,
                                            "name": "abi",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -1,
                                            "src": "4511:3:94",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_abi",
                                              "typeString": "abi"
                                            }
                                          },
                                          "id": 63097,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "memberLocation": "4515:6:94",
                                          "memberName": "encode",
                                          "nodeType": "MemberAccess",
                                          "src": "4511:10:94",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                            "typeString": "function () pure returns (bytes memory)"
                                          }
                                        },
                                        "id": 63109,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4511:449:94",
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
                                          "typeIdentifier": "t_bytes_memory_ptr",
                                          "typeString": "bytes memory"
                                        }
                                      ],
                                      "id": 63095,
                                      "name": "keccak256",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -8,
                                      "src": "4472:9:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                      }
                                    },
                                    "id": 63110,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "4472:514:94",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_301a50b291d33ce1e8e9064e3f6a6c51d902ec22892b50d58abf6357c6a45541",
                                      "typeString": "literal_string hex\"1901\""
                                    },
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "expression": {
                                    "id": 63090,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -1,
                                    "src": "4350:3:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 63091,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "4354:12:94",
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "src": "4350:16:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 63111,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4350:658:94",
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
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 63089,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "4319:9:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 63112,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4319:707:94",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 63113,
                            "name": "v",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63071,
                            "src": "5044:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          {
                            "id": 63114,
                            "name": "r",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63073,
                            "src": "5063:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 63115,
                            "name": "s",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63075,
                            "src": "5082:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 63088,
                          "name": "ecrecover",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -6,
                          "src": "4292:9:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$",
                            "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address)"
                          }
                        },
                        "id": 63116,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4292:805:94",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4265:832:94"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 63128,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 63124,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 63119,
                                "name": "recoveredAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63087,
                                "src": "5120:16:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "!=",
                              "rightExpression": {
                                "arguments": [
                                  {
                                    "hexValue": "30",
                                    "id": 63122,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "5148:1:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    },
                                    "value": "0"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "id": 63121,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "5140:7:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 63120,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "5140:7:94",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 63123,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5140:10:94",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "5120:30:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "&&",
                            "rightExpression": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 63127,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 63125,
                                "name": "recoveredAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63087,
                                "src": "5154:16:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "id": 63126,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63063,
                                "src": "5174:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "5154:25:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "5120:59:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "hexValue": "494e56414c49445f5349474e4552",
                            "id": 63129,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5181:16:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_ba2319f5fa9f0c8e55f0d6899910b7354e6f643d1d349de47190066d85e68a1c",
                              "typeString": "literal_string \"INVALID_SIGNER\""
                            },
                            "value": "INVALID_SIGNER"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_ba2319f5fa9f0c8e55f0d6899910b7354e6f643d1d349de47190066d85e68a1c",
                              "typeString": "literal_string \"INVALID_SIGNER\""
                            }
                          ],
                          "id": 63118,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            -18,
                            -18
                          ],
                          "referencedDeclaration": -18,
                          "src": "5112:7:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 63130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5112:86:94",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 63131,
                      "nodeType": "ExpressionStatement",
                      "src": "5112:86:94"
                    },
                    {
                      "expression": {
                        "id": 63138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "baseExpression": {
                            "baseExpression": {
                              "id": 63132,
                              "name": "allowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62899,
                              "src": "5213:9:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 63135,
                            "indexExpression": {
                              "id": 63133,
                              "name": "recoveredAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63087,
                              "src": "5223:16:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5213:27:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 63136,
                          "indexExpression": {
                            "id": 63134,
                            "name": "spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63065,
                            "src": "5241:7:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "5213:36:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "id": 63137,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63067,
                          "src": "5252:5:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5213:44:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 63139,
                      "nodeType": "ExpressionStatement",
                      "src": "5213:44:94"
                    }
                  ]
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 63142,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63063,
                        "src": "5292:5:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63143,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63065,
                        "src": "5299:7:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63144,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63067,
                        "src": "5308:5:94",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 63141,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62881,
                      "src": "5283:8:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 63145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5283:31:94",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63146,
                  "nodeType": "EmitStatement",
                  "src": "5278:36:94"
                }
              ]
            },
            "functionSelector": "d505accf",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "permit",
            "nameLocation": "3847:6:94",
            "parameters": {
              "id": 63076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63063,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3871:5:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63148,
                  "src": "3863:13:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63062,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3863:7:94",
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
                  "id": 63065,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "3894:7:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63148,
                  "src": "3886:15:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63064,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3886:7:94",
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
                  "id": 63067,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3919:5:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63148,
                  "src": "3911:13:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63066,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3911:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63069,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "3942:8:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63148,
                  "src": "3934:16:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63068,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3934:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63071,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "3966:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63148,
                  "src": "3960:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 63070,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "3960:5:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63073,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "3985:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63148,
                  "src": "3977:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 63072,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3977:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63075,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "4004:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63148,
                  "src": "3996:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 63074,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3996:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3853:158:94"
            },
            "returnParameters": {
              "id": 63077,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4027:0:94"
            },
            "scope": 63250,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63163,
            "nodeType": "FunctionDefinition",
            "src": "5327:177:94",
            "nodes": [],
            "body": {
              "id": 63162,
              "nodeType": "Block",
              "src": "5393:111:94",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 63156,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 63153,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "5410:5:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 63154,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5416:7:94",
                        "memberName": "chainid",
                        "nodeType": "MemberAccess",
                        "src": "5410:13:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "id": 63155,
                        "name": "INITIAL_CHAIN_ID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62901,
                        "src": "5427:16:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5410:33:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 63158,
                        "name": "computeDomainSeparator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63193,
                        "src": "5473:22:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                          "typeString": "function () view returns (bytes32)"
                        }
                      },
                      "id": 63159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5473:24:94",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 63160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "5410:87:94",
                    "trueExpression": {
                      "id": 63157,
                      "name": "INITIAL_DOMAIN_SEPARATOR",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62903,
                      "src": "5446:24:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 63152,
                  "id": 63161,
                  "nodeType": "Return",
                  "src": "5403:94:94"
                }
              ]
            },
            "functionSelector": "3644e515",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "DOMAIN_SEPARATOR",
            "nameLocation": "5336:16:94",
            "parameters": {
              "id": 63149,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5352:2:94"
            },
            "returnParameters": {
              "id": 63152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63151,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63163,
                  "src": "5384:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 63150,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5384:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5383:9:94"
            },
            "scope": 63250,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63193,
            "nodeType": "FunctionDefinition",
            "src": "5510:446:94",
            "nodes": [],
            "body": {
              "id": 63192,
              "nodeType": "Block",
              "src": "5584:372:94",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "hexValue": "454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429",
                                "id": 63172,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5682:84:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f",
                                  "typeString": "literal_string \"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\""
                                },
                                "value": "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f",
                                  "typeString": "literal_string \"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\""
                                }
                              ],
                              "id": 63171,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "5672:9:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 63173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5672:95:94",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 63177,
                                    "name": "name",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62883,
                                    "src": "5805:4:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_storage",
                                      "typeString": "string storage ref"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_storage",
                                      "typeString": "string storage ref"
                                    }
                                  ],
                                  "id": 63176,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "5799:5:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                    "typeString": "type(bytes storage pointer)"
                                  },
                                  "typeName": {
                                    "id": 63175,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "5799:5:94",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 63178,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5799:11:94",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_storage_ptr",
                                  "typeString": "bytes storage pointer"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_storage_ptr",
                                  "typeString": "bytes storage pointer"
                                }
                              ],
                              "id": 63174,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "5789:9:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 63179,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5789:22:94",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "hexValue": "31",
                                "id": 63181,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5843:3:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6",
                                  "typeString": "literal_string \"1\""
                                },
                                "value": "1"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6",
                                  "typeString": "literal_string \"1\""
                                }
                              ],
                              "id": 63180,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "5833:9:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 63182,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5833:14:94",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "expression": {
                              "id": 63183,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -4,
                              "src": "5869:5:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 63184,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5875:7:94",
                            "memberName": "chainid",
                            "nodeType": "MemberAccess",
                            "src": "5869:13:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 63187,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "5912:4:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20_$63250",
                                  "typeString": "contract ERC20"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_ERC20_$63250",
                                  "typeString": "contract ERC20"
                                }
                              ],
                              "id": 63186,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5904:7:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 63185,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "5904:7:94",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 63188,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5904:13:94",
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
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 63169,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "5640:3:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 63170,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "5644:6:94",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "5640:10:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 63189,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5640:295:94",
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
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 63168,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "5613:9:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 63190,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5613:336:94",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 63167,
                  "id": 63191,
                  "nodeType": "Return",
                  "src": "5594:355:94"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeDomainSeparator",
            "nameLocation": "5519:22:94",
            "parameters": {
              "id": 63164,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5541:2:94"
            },
            "returnParameters": {
              "id": 63167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63166,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63193,
                  "src": "5575:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 63165,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5575:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5574:9:94"
            },
            "scope": 63250,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 63221,
            "nodeType": "FunctionDefinition",
            "src": "6150:325:94",
            "nodes": [],
            "body": {
              "id": 63220,
              "nodeType": "Block",
              "src": "6210:265:94",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 63202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 63200,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62889,
                      "src": "6220:11:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 63201,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63197,
                      "src": "6235:6:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6220:21:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 63203,
                  "nodeType": "ExpressionStatement",
                  "src": "6220:21:94"
                },
                {
                  "id": 63210,
                  "nodeType": "UncheckedBlock",
                  "src": "6363:58:94",
                  "statements": [
                    {
                      "expression": {
                        "id": 63208,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "baseExpression": {
                            "id": 63204,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62893,
                            "src": "6387:9:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 63206,
                          "indexExpression": {
                            "id": 63205,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63195,
                            "src": "6397:2:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "6387:13:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "id": 63207,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63197,
                          "src": "6404:6:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6387:23:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 63209,
                      "nodeType": "ExpressionStatement",
                      "src": "6387:23:94"
                    }
                  ]
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 63214,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6453:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 63213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6445:7:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 63212,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "6445:7:94",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 63215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6445:10:94",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63216,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63195,
                        "src": "6457:2:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63217,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63197,
                        "src": "6461:6:94",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 63211,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62873,
                      "src": "6436:8:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 63218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6436:32:94",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63219,
                  "nodeType": "EmitStatement",
                  "src": "6431:37:94"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mint",
            "nameLocation": "6159:5:94",
            "parameters": {
              "id": 63198,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63195,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6173:2:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63221,
                  "src": "6165:10:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63194,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6165:7:94",
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
                  "id": 63197,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "6185:6:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63221,
                  "src": "6177:14:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63196,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6177:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6164:28:94"
            },
            "returnParameters": {
              "id": 63199,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6210:0:94"
            },
            "scope": 63250,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 63249,
            "nodeType": "FunctionDefinition",
            "src": "6481:328:94",
            "nodes": [],
            "body": {
              "id": 63248,
              "nodeType": "Block",
              "src": "6543:266:94",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 63232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 63228,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62893,
                        "src": "6553:9:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 63230,
                      "indexExpression": {
                        "id": 63229,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63223,
                        "src": "6563:4:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6553:15:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 63231,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63225,
                      "src": "6572:6:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6553:25:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 63233,
                  "nodeType": "ExpressionStatement",
                  "src": "6553:25:94"
                },
                {
                  "id": 63238,
                  "nodeType": "UncheckedBlock",
                  "src": "6697:56:94",
                  "statements": [
                    {
                      "expression": {
                        "id": 63236,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 63234,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62889,
                          "src": "6721:11:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "-=",
                        "rightHandSide": {
                          "id": 63235,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63225,
                          "src": "6736:6:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6721:21:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 63237,
                      "nodeType": "ExpressionStatement",
                      "src": "6721:21:94"
                    }
                  ]
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 63240,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63223,
                        "src": "6777:4:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 63243,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6791:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 63242,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6783:7:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 63241,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "6783:7:94",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 63244,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6783:10:94",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63245,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63225,
                        "src": "6795:6:94",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 63239,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62873,
                      "src": "6768:8:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 63246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6768:34:94",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63247,
                  "nodeType": "EmitStatement",
                  "src": "6763:39:94"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burn",
            "nameLocation": "6490:5:94",
            "parameters": {
              "id": 63226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63223,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "6504:4:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63249,
                  "src": "6496:12:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63222,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6496:7:94",
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
                  "id": 63225,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "6518:6:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 63249,
                  "src": "6510:14:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63224,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6510:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6495:30:94"
            },
            "returnParameters": {
              "id": 63227,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6543:0:94"
            },
            "scope": 63250,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "ERC20",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 62865,
          "nodeType": "StructuredDocumentation",
          "src": "68:406:94",
          "text": "@notice Modern and gas efficient ERC20 + EIP-2612 implementation.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)\n @author Modified from Uniswap (https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol)\n @dev Do not manually set balances without updating totalSupply, as the sum of all user balances must not exceed it."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          63250
        ],
        "name": "ERC20",
        "nameLocation": "492:5:94",
        "scope": 63251,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 94
} as const;
