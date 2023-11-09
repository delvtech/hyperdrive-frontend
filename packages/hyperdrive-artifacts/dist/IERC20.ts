export const IERC20 = 
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
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
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
          "name": "account",
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
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "decimals()": "313ce567",
    "name()": "06fdde03",
    "symbol()": "95d89b41",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC20 standard as defined in the EIP.\",\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC20.sol\":\"IERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
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
              "name": "account",
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
        "methods": {
          "allowance(address,address)": {
            "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called."
          },
          "approve(address,uint256)": {
            "details": "Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event."
          },
          "balanceOf(address)": {
            "details": "Returns the amount of tokens owned by `account`."
          },
          "totalSupply()": {
            "details": "Returns the amount of tokens in existence."
          },
          "transfer(address,uint256)": {
            "details": "Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
          },
          "transferFrom(address,address,uint256)": {
            "details": "Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
          }
        },
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
        "contracts/src/interfaces/IERC20.sol": "IERC20"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
        "urls": [
          "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
          "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        "urls": [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        "urls": [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IERC20.sol",
    "id": 6732,
    "exportedSymbols": {
      "IERC20": [
        6731
      ],
      "OZERC20": [
        59686
      ]
    },
    "nodeType": "SourceUnit",
    "src": "105:2497:15",
    "nodes": [
      {
        "id": 6654,
        "nodeType": "PragmaDirective",
        "src": "105:23:15",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 6656,
        "nodeType": "ImportDirective",
        "src": "130:101:15",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
        "file": "openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6732,
        "sourceUnit": 60370,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6655,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 59686,
              "src": "139:6:15",
              "typeDescriptions": {}
            },
            "local": "OZERC20",
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6731,
        "nodeType": "ContractDefinition",
        "src": "304:2297:15",
        "nodes": [
          {
            "id": 6664,
            "nodeType": "FunctionDefinition",
            "src": "338:54:15",
            "nodes": [],
            "functionSelector": "06fdde03",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "347:4:15",
            "parameters": {
              "id": 6660,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "351:2:15"
            },
            "returnParameters": {
              "id": 6663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6662,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6664,
                  "src": "377:13:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6661,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "376:15:15"
            },
            "scope": 6731,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6669,
            "nodeType": "FunctionDefinition",
            "src": "398:56:15",
            "nodes": [],
            "functionSelector": "95d89b41",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "407:6:15",
            "parameters": {
              "id": 6665,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "413:2:15"
            },
            "returnParameters": {
              "id": 6668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6667,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6669,
                  "src": "439:13:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6666,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "439:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "438:15:15"
            },
            "scope": 6731,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6674,
            "nodeType": "FunctionDefinition",
            "src": "460:50:15",
            "nodes": [],
            "functionSelector": "313ce567",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "469:8:15",
            "parameters": {
              "id": 6670,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "477:2:15"
            },
            "returnParameters": {
              "id": 6673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6672,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6674,
                  "src": "503:5:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 6671,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "503:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "502:7:15"
            },
            "scope": 6731,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6680,
            "nodeType": "FunctionDefinition",
            "src": "587:55:15",
            "nodes": [],
            "baseFunctions": [
              59635
            ],
            "documentation": {
              "id": 6675,
              "nodeType": "StructuredDocumentation",
              "src": "516:66:15",
              "text": " @dev Returns the amount of tokens in existence."
            },
            "functionSelector": "18160ddd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "596:11:15",
            "parameters": {
              "id": 6676,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "607:2:15"
            },
            "returnParameters": {
              "id": 6679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6678,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6680,
                  "src": "633:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "633:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "632:9:15"
            },
            "scope": 6731,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6688,
            "nodeType": "FunctionDefinition",
            "src": "725:68:15",
            "nodes": [],
            "baseFunctions": [
              59643
            ],
            "documentation": {
              "id": 6681,
              "nodeType": "StructuredDocumentation",
              "src": "648:72:15",
              "text": " @dev Returns the amount of tokens owned by `account`."
            },
            "functionSelector": "70a08231",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "734:9:15",
            "parameters": {
              "id": 6684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6683,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "752:7:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 6688,
                  "src": "744:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6682,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "743:17:15"
            },
            "returnParameters": {
              "id": 6687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6686,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6688,
                  "src": "784:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6685,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "784:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "783:9:15"
            },
            "scope": 6731,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6698,
            "nodeType": "FunctionDefinition",
            "src": "1006:70:15",
            "nodes": [],
            "baseFunctions": [
              59653
            ],
            "documentation": {
              "id": 6689,
              "nodeType": "StructuredDocumentation",
              "src": "799:202:15",
              "text": " @dev Moves `amount` tokens from the caller's account to `to`.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
            },
            "functionSelector": "a9059cbb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "1015:8:15",
            "parameters": {
              "id": 6694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6691,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1032:2:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 6698,
                  "src": "1024:10:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6690,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1024:7:15",
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
                  "id": 6693,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1044:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 6698,
                  "src": "1036:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6692,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1036:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1023:28:15"
            },
            "returnParameters": {
              "id": 6697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6696,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6698,
                  "src": "1070:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6695,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1070:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1069:6:15"
            },
            "scope": 6731,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6708,
            "nodeType": "FunctionDefinition",
            "src": "1351:105:15",
            "nodes": [],
            "baseFunctions": [
              59663
            ],
            "documentation": {
              "id": 6699,
              "nodeType": "StructuredDocumentation",
              "src": "1082:264:15",
              "text": " @dev Returns the remaining number of tokens that `spender` will be\n allowed to spend on behalf of `owner` through {transferFrom}. This is\n zero by default.\n This value changes when {approve} or {transferFrom} are called."
            },
            "functionSelector": "dd62ed3e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nameLocation": "1360:9:15",
            "parameters": {
              "id": 6704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6701,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1387:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 6708,
                  "src": "1379:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6700,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1379:7:15",
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
                  "id": 6703,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1410:7:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 6708,
                  "src": "1402:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6702,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1402:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1369:54:15"
            },
            "returnParameters": {
              "id": 6707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6706,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6708,
                  "src": "1447:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6705,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1447:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1446:9:15"
            },
            "scope": 6731,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6718,
            "nodeType": "FunctionDefinition",
            "src": "2109:74:15",
            "nodes": [],
            "baseFunctions": [
              59673
            ],
            "documentation": {
              "id": 6709,
              "nodeType": "StructuredDocumentation",
              "src": "1462:642:15",
              "text": " @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n Returns a boolean value indicating whether the operation succeeded.\n IMPORTANT: Beware that changing an allowance with this method brings the risk\n that someone may use both the old and the new allowance by unfortunate\n transaction ordering. One possible solution to mitigate this race\n condition is to first reduce the spender's allowance to 0 and set the\n desired value afterwards:\n https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n Emits an {Approval} event."
            },
            "functionSelector": "095ea7b3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "2118:7:15",
            "parameters": {
              "id": 6714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6711,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2134:7:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 6718,
                  "src": "2126:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6710,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2126:7:15",
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
                  "id": 6713,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2151:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 6718,
                  "src": "2143:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6712,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2143:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2125:33:15"
            },
            "returnParameters": {
              "id": 6717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6716,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6718,
                  "src": "2177:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6715,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2177:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2176:6:15"
            },
            "scope": 6731,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6730,
            "nodeType": "FunctionDefinition",
            "src": "2481:118:15",
            "nodes": [],
            "baseFunctions": [
              59685
            ],
            "documentation": {
              "id": 6719,
              "nodeType": "StructuredDocumentation",
              "src": "2189:287:15",
              "text": " @dev Moves `amount` tokens from `from` to `to` using the\n allowance mechanism. `amount` is then deducted from the caller's\n allowance.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
            },
            "functionSelector": "23b872dd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "2490:12:15",
            "parameters": {
              "id": 6726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6721,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2520:4:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 6730,
                  "src": "2512:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6720,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2512:7:15",
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
                  "id": 6723,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2542:2:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 6730,
                  "src": "2534:10:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6722,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2534:7:15",
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
                  "id": 6725,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2562:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 6730,
                  "src": "2554:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6724,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2554:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2502:72:15"
            },
            "returnParameters": {
              "id": 6729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6728,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6730,
                  "src": "2593:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6727,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2593:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2592:6:15"
            },
            "scope": 6731,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 6658,
              "name": "OZERC20",
              "nameLocations": [
                "324:7:15"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 59686,
              "src": "324:7:15"
            },
            "id": 6659,
            "nodeType": "InheritanceSpecifier",
            "src": "324:7:15"
          }
        ],
        "canonicalName": "IERC20",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 6657,
          "nodeType": "StructuredDocumentation",
          "src": "233:70:15",
          "text": " @dev Interface of the ERC20 standard as defined in the EIP."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          6731,
          59686
        ],
        "name": "IERC20",
        "nameLocation": "314:6:15",
        "scope": 6732,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 15
} as const;
