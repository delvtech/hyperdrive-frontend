export const IPool = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getReserveData",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "data",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPool.ReserveConfigurationMap",
              "name": "configuration",
              "type": "tuple"
            },
            {
              "internalType": "uint128",
              "name": "liquidityIndex",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "currentLiquidityRate",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "variableBorrowIndex",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "currentVariableBorrowRate",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "currentStableBorrowRate",
              "type": "uint128"
            },
            {
              "internalType": "uint40",
              "name": "lastUpdateTimestamp",
              "type": "uint40"
            },
            {
              "internalType": "uint16",
              "name": "id",
              "type": "uint16"
            },
            {
              "internalType": "address",
              "name": "aTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "stableDebtTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "variableDebtTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "interestRateStrategyAddress",
              "type": "address"
            },
            {
              "internalType": "uint128",
              "name": "accruedToTreasury",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "unbacked",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "isolationModeTotalDebt",
              "type": "uint128"
            }
          ],
          "internalType": "struct IPool.ReserveData",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "onBehalfOf",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "referralCode",
          "type": "uint16"
        }
      ],
      "name": "supply",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
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
    "getReserveData(address)": "35ea6a75",
    "supply(address,uint256,address,uint16)": "617ba037",
    "withdraw(address,uint256,address)": "69328dec"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"name\":\"getReserveData\",\"outputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"internalType\":\"struct IPool.ReserveConfigurationMap\",\"name\":\"configuration\",\"type\":\"tuple\"},{\"internalType\":\"uint128\",\"name\":\"liquidityIndex\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"currentLiquidityRate\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"variableBorrowIndex\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"currentVariableBorrowRate\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"currentStableBorrowRate\",\"type\":\"uint128\"},{\"internalType\":\"uint40\",\"name\":\"lastUpdateTimestamp\",\"type\":\"uint40\"},{\"internalType\":\"uint16\",\"name\":\"id\",\"type\":\"uint16\"},{\"internalType\":\"address\",\"name\":\"aTokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"stableDebtTokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"variableDebtTokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"interestRateStrategyAddress\",\"type\":\"address\"},{\"internalType\":\"uint128\",\"name\":\"accruedToTreasury\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"unbacked\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"isolationModeTotalDebt\",\"type\":\"uint128\"}],\"internalType\":\"struct IPool.ReserveData\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"onBehalfOf\",\"type\":\"address\"},{\"internalType\":\"uint16\",\"name\":\"referralCode\",\"type\":\"uint16\"}],\"name\":\"supply\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Aave\",\"kind\":\"dev\",\"methods\":{\"getReserveData(address)\":{\"params\":{\"asset\":\"The address of the underlying asset of the reserve\"},\"returns\":{\"_0\":\"The state and configuration data of the reserve\"}},\"supply(address,uint256,address,uint16)\":{\"params\":{\"amount\":\"The amount to be supplied\",\"asset\":\"The address of the underlying asset to supply\",\"onBehalfOf\":\"The address that will receive the aTokens, same as msg.sender if the user wants to receive them on his own wallet, or a different address if the beneficiary of aTokens is a different wallet\",\"referralCode\":\"Code used to register the integrator originating the operation, for potential rewards. 0 if the action is executed directly by the user, without any middle-man\"}},\"withdraw(address,uint256,address)\":{\"params\":{\"amount\":\"The underlying amount to be withdrawn - Send the value type(uint256).max in order to withdraw the whole aToken balance\",\"asset\":\"The address of the underlying asset to withdraw\",\"to\":\"The address that will receive the underlying, same as msg.sender if the user wants to receive it on his own wallet, or a different address if the beneficiary is a different wallet\"},\"returns\":{\"_0\":\"The final amount withdrawn\"}}},\"title\":\"IPool\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"getReserveData(address)\":{\"notice\":\"Returns the state and configuration of the reserve\"},\"supply(address,uint256,address,uint16)\":{\"notice\":\"Supplies an `amount` of underlying asset into the reserve, receiving in return overlying aTokens. - E.g. User supplies 100 USDC and gets in return 100 aUSDC\"},\"withdraw(address,uint256,address)\":{\"notice\":\"Withdraws an `amount` of underlying asset from the reserve, burning the equivalent aTokens owned E.g. User has 100 aUSDC, calls withdraw() and receives 100 USDC, burning the 100 aUSDC\"}},\"notice\":\"Defines the basic interface for an Aave Pool.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/yield-daddy/src/aave-v3/external/IPool.sol\":\"IPool\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/yield-daddy/src/aave-v3/external/IPool.sol\":{\"keccak256\":\"0x54a5164a65f84bf75f09bfdffe392cf88fb8aac61f99104e3286b7de54cbd84f\",\"license\":\"AGPL-3.0\",\"urls\":[\"bzz-raw://c53ff125301fe318c049d44d877a22851e67e8b14e84df0e0565b208ee69fe73\",\"dweb:/ipfs/QmUmwbpM1qyForRPt36RhL5YVZD2NeSyT3H1kzh9n8LNF6\"]}},\"version\":1}",
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
              "name": "asset",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getReserveData",
          "outputs": [
            {
              "internalType": "struct IPool.ReserveData",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "struct IPool.ReserveConfigurationMap",
                  "name": "configuration",
                  "type": "tuple",
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "data",
                      "type": "uint256"
                    }
                  ]
                },
                {
                  "internalType": "uint128",
                  "name": "liquidityIndex",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "currentLiquidityRate",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "variableBorrowIndex",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "currentVariableBorrowRate",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "currentStableBorrowRate",
                  "type": "uint128"
                },
                {
                  "internalType": "uint40",
                  "name": "lastUpdateTimestamp",
                  "type": "uint40"
                },
                {
                  "internalType": "uint16",
                  "name": "id",
                  "type": "uint16"
                },
                {
                  "internalType": "address",
                  "name": "aTokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "stableDebtTokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "variableDebtTokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "interestRateStrategyAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "accruedToTreasury",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "unbacked",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "isolationModeTotalDebt",
                  "type": "uint128"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "asset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "onBehalfOf",
              "type": "address"
            },
            {
              "internalType": "uint16",
              "name": "referralCode",
              "type": "uint16"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "supply"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "asset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "withdraw",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "getReserveData(address)": {
            "params": {
              "asset": "The address of the underlying asset of the reserve"
            },
            "returns": {
              "_0": "The state and configuration data of the reserve"
            }
          },
          "supply(address,uint256,address,uint16)": {
            "params": {
              "amount": "The amount to be supplied",
              "asset": "The address of the underlying asset to supply",
              "onBehalfOf": "The address that will receive the aTokens, same as msg.sender if the user wants to receive them on his own wallet, or a different address if the beneficiary of aTokens is a different wallet",
              "referralCode": "Code used to register the integrator originating the operation, for potential rewards. 0 if the action is executed directly by the user, without any middle-man"
            }
          },
          "withdraw(address,uint256,address)": {
            "params": {
              "amount": "The underlying amount to be withdrawn - Send the value type(uint256).max in order to withdraw the whole aToken balance",
              "asset": "The address of the underlying asset to withdraw",
              "to": "The address that will receive the underlying, same as msg.sender if the user wants to receive it on his own wallet, or a different address if the beneficiary is a different wallet"
            },
            "returns": {
              "_0": "The final amount withdrawn"
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "getReserveData(address)": {
            "notice": "Returns the state and configuration of the reserve"
          },
          "supply(address,uint256,address,uint16)": {
            "notice": "Supplies an `amount` of underlying asset into the reserve, receiving in return overlying aTokens. - E.g. User supplies 100 USDC and gets in return 100 aUSDC"
          },
          "withdraw(address,uint256,address)": {
            "notice": "Withdraws an `amount` of underlying asset from the reserve, burning the equivalent aTokens owned E.g. User has 100 aUSDC, calls withdraw() and receives 100 USDC, burning the 100 aUSDC"
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
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
        "lib/yield-daddy/src/aave-v3/external/IPool.sol": "IPool"
      },
      "libraries": {}
    },
    "sources": {
      "lib/yield-daddy/src/aave-v3/external/IPool.sol": {
        "keccak256": "0x54a5164a65f84bf75f09bfdffe392cf88fb8aac61f99104e3286b7de54cbd84f",
        "urls": [
          "bzz-raw://c53ff125301fe318c049d44d877a22851e67e8b14e84df0e0565b208ee69fe73",
          "dweb:/ipfs/QmUmwbpM1qyForRPt36RhL5YVZD2NeSyT3H1kzh9n8LNF6"
        ],
        "license": "AGPL-3.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/yield-daddy/src/aave-v3/external/IPool.sol",
    "id": 65024,
    "exportedSymbols": {
      "IPool": [
        65023
      ]
    },
    "nodeType": "SourceUnit",
    "src": "37:4392:102",
    "nodes": [
      {
        "id": 64953,
        "nodeType": "PragmaDirective",
        "src": "37:23:102",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 65023,
        "nodeType": "ContractDefinition",
        "src": "162:4266:102",
        "nodes": [
          {
            "id": 64957,
            "nodeType": "StructDefinition",
            "src": "184:972:102",
            "nodes": [],
            "canonicalName": "IPool.ReserveConfigurationMap",
            "members": [
              {
                "constant": false,
                "id": 64956,
                "mutability": "mutable",
                "name": "data",
                "nameLocation": "1145:4:102",
                "nodeType": "VariableDeclaration",
                "scope": 64957,
                "src": "1137:12:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 64955,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1137:7:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ReserveConfigurationMap",
            "nameLocation": "191:23:102",
            "scope": 65023,
            "visibility": "public"
          },
          {
            "id": 64989,
            "nodeType": "StructDefinition",
            "src": "1162:1321:102",
            "nodes": [],
            "canonicalName": "IPool.ReserveData",
            "members": [
              {
                "constant": false,
                "id": 64960,
                "mutability": "mutable",
                "name": "configuration",
                "nameLocation": "1215:13:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "1191:37:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_ReserveConfigurationMap_$64957_storage_ptr",
                  "typeString": "struct IPool.ReserveConfigurationMap"
                },
                "typeName": {
                  "id": 64959,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 64958,
                    "name": "ReserveConfigurationMap",
                    "nameLocations": [
                      "1191:23:102"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 64957,
                    "src": "1191:23:102"
                  },
                  "referencedDeclaration": 64957,
                  "src": "1191:23:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ReserveConfigurationMap_$64957_storage_ptr",
                    "typeString": "struct IPool.ReserveConfigurationMap"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64962,
                "mutability": "mutable",
                "name": "liquidityIndex",
                "nameLocation": "1294:14:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "1286:22:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 64961,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1286:7:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64964,
                "mutability": "mutable",
                "name": "currentLiquidityRate",
                "nameLocation": "1378:20:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "1370:28:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 64963,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1370:7:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64966,
                "mutability": "mutable",
                "name": "variableBorrowIndex",
                "nameLocation": "1466:19:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "1458:27:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 64965,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1458:7:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64968,
                "mutability": "mutable",
                "name": "currentVariableBorrowRate",
                "nameLocation": "1564:25:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "1556:33:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 64967,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1556:7:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64970,
                "mutability": "mutable",
                "name": "currentStableBorrowRate",
                "nameLocation": "1666:23:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "1658:31:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 64969,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1658:7:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64972,
                "mutability": "mutable",
                "name": "lastUpdateTimestamp",
                "nameLocation": "1741:19:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "1734:26:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint40",
                  "typeString": "uint40"
                },
                "typeName": {
                  "id": 64971,
                  "name": "uint40",
                  "nodeType": "ElementaryTypeName",
                  "src": "1734:6:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint40",
                    "typeString": "uint40"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64974,
                "mutability": "mutable",
                "name": "id",
                "nameLocation": "1869:2:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "1862:9:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint16",
                  "typeString": "uint16"
                },
                "typeName": {
                  "id": 64973,
                  "name": "uint16",
                  "nodeType": "ElementaryTypeName",
                  "src": "1862:6:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64976,
                "mutability": "mutable",
                "name": "aTokenAddress",
                "nameLocation": "1914:13:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "1906:21:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 64975,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1906:7:102",
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
                "id": 64978,
                "mutability": "mutable",
                "name": "stableDebtTokenAddress",
                "nameLocation": "1979:22:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "1971:30:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 64977,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1971:7:102",
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
                "id": 64980,
                "mutability": "mutable",
                "name": "variableDebtTokenAddress",
                "nameLocation": "2055:24:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "2047:32:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 64979,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2047:7:102",
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
                "id": 64982,
                "mutability": "mutable",
                "name": "interestRateStrategyAddress",
                "nameLocation": "2145:27:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "2137:35:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 64981,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2137:7:102",
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
                "id": 64984,
                "mutability": "mutable",
                "name": "accruedToTreasury",
                "nameLocation": "2237:17:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "2229:25:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 64983,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2229:7:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64986,
                "mutability": "mutable",
                "name": "unbacked",
                "nameLocation": "2351:8:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "2343:16:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 64985,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2343:7:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64988,
                "mutability": "mutable",
                "name": "isolationModeTotalDebt",
                "nameLocation": "2454:22:102",
                "nodeType": "VariableDeclaration",
                "scope": 64989,
                "src": "2446:30:102",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 64987,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2446:7:102",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ReserveData",
            "nameLocation": "1169:11:102",
            "scope": 65023,
            "visibility": "public"
          },
          {
            "id": 65001,
            "nodeType": "FunctionDefinition",
            "src": "3227:97:102",
            "nodes": [],
            "documentation": {
              "id": 64990,
              "nodeType": "StructuredDocumentation",
              "src": "2489:733:102",
              "text": " @notice Supplies an `amount` of underlying asset into the reserve, receiving in return overlying aTokens.\n - E.g. User supplies 100 USDC and gets in return 100 aUSDC\n @param asset The address of the underlying asset to supply\n @param amount The amount to be supplied\n @param onBehalfOf The address that will receive the aTokens, same as msg.sender if the user\n wants to receive them on his own wallet, or a different address if the beneficiary of aTokens\n is a different wallet\n @param referralCode Code used to register the integrator originating the operation, for potential rewards.\n 0 if the action is executed directly by the user, without any middle-man"
            },
            "functionSelector": "617ba037",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "supply",
            "nameLocation": "3236:6:102",
            "parameters": {
              "id": 64999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64992,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "3251:5:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 65001,
                  "src": "3243:13:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 64991,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3243:7:102",
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
                  "id": 64994,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "3266:6:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 65001,
                  "src": "3258:14:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64993,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3258:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64996,
                  "mutability": "mutable",
                  "name": "onBehalfOf",
                  "nameLocation": "3282:10:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 65001,
                  "src": "3274:18:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 64995,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3274:7:102",
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
                  "id": 64998,
                  "mutability": "mutable",
                  "name": "referralCode",
                  "nameLocation": "3301:12:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 65001,
                  "src": "3294:19:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 64997,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "3294:6:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3242:72:102"
            },
            "returnParameters": {
              "id": 65000,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3323:0:102"
            },
            "scope": 65023,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 65013,
            "nodeType": "FunctionDefinition",
            "src": "4027:88:102",
            "nodes": [],
            "documentation": {
              "id": 65002,
              "nodeType": "StructuredDocumentation",
              "src": "3330:692:102",
              "text": " @notice Withdraws an `amount` of underlying asset from the reserve, burning the equivalent aTokens owned\n E.g. User has 100 aUSDC, calls withdraw() and receives 100 USDC, burning the 100 aUSDC\n @param asset The address of the underlying asset to withdraw\n @param amount The underlying amount to be withdrawn\n - Send the value type(uint256).max in order to withdraw the whole aToken balance\n @param to The address that will receive the underlying, same as msg.sender if the user\n wants to receive it on his own wallet, or a different address if the beneficiary is a\n different wallet\n @return The final amount withdrawn"
            },
            "functionSelector": "69328dec",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "4036:8:102",
            "parameters": {
              "id": 65009,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65004,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "4053:5:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 65013,
                  "src": "4045:13:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 65003,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4045:7:102",
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
                  "id": 65006,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "4068:6:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 65013,
                  "src": "4060:14:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 65005,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4060:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 65008,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4084:2:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 65013,
                  "src": "4076:10:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 65007,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4076:7:102",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4044:43:102"
            },
            "returnParameters": {
              "id": 65012,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65011,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 65013,
                  "src": "4106:7:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 65010,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4106:7:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4105:9:102"
            },
            "scope": 65023,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 65022,
            "nodeType": "FunctionDefinition",
            "src": "4344:82:102",
            "nodes": [],
            "documentation": {
              "id": 65014,
              "nodeType": "StructuredDocumentation",
              "src": "4121:218:102",
              "text": " @notice Returns the state and configuration of the reserve\n @param asset The address of the underlying asset of the reserve\n @return The state and configuration data of the reserve"
            },
            "functionSelector": "35ea6a75",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getReserveData",
            "nameLocation": "4353:14:102",
            "parameters": {
              "id": 65017,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65016,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "4376:5:102",
                  "nodeType": "VariableDeclaration",
                  "scope": 65022,
                  "src": "4368:13:102",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 65015,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4368:7:102",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4367:15:102"
            },
            "returnParameters": {
              "id": 65021,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65020,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 65022,
                  "src": "4406:18:102",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ReserveData_$64989_memory_ptr",
                    "typeString": "struct IPool.ReserveData"
                  },
                  "typeName": {
                    "id": 65019,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 65018,
                      "name": "ReserveData",
                      "nameLocations": [
                        "4406:11:102"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 64989,
                      "src": "4406:11:102"
                    },
                    "referencedDeclaration": 64989,
                    "src": "4406:11:102",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ReserveData_$64989_storage_ptr",
                      "typeString": "struct IPool.ReserveData"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4405:20:102"
            },
            "scope": 65023,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IPool",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 64954,
          "nodeType": "StructuredDocumentation",
          "src": "62:99:102",
          "text": " @title IPool\n @author Aave\n @notice Defines the basic interface for an Aave Pool."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          65023
        ],
        "name": "IPool",
        "nameLocation": "172:5:102",
        "scope": 65024,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0"
  },
  "id": 102
} as const;
