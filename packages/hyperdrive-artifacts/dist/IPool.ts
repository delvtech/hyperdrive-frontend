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
    "id": 61674,
    "exportedSymbols": {
      "IPool": [
        61673
      ]
    },
    "nodeType": "SourceUnit",
    "src": "37:4392:91",
    "nodes": [
      {
        "id": 61603,
        "nodeType": "PragmaDirective",
        "src": "37:23:91",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 61673,
        "nodeType": "ContractDefinition",
        "src": "162:4266:91",
        "nodes": [
          {
            "id": 61607,
            "nodeType": "StructDefinition",
            "src": "184:972:91",
            "nodes": [],
            "canonicalName": "IPool.ReserveConfigurationMap",
            "members": [
              {
                "constant": false,
                "id": 61606,
                "mutability": "mutable",
                "name": "data",
                "nameLocation": "1145:4:91",
                "nodeType": "VariableDeclaration",
                "scope": 61607,
                "src": "1137:12:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 61605,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1137:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ReserveConfigurationMap",
            "nameLocation": "191:23:91",
            "scope": 61673,
            "visibility": "public"
          },
          {
            "id": 61639,
            "nodeType": "StructDefinition",
            "src": "1162:1321:91",
            "nodes": [],
            "canonicalName": "IPool.ReserveData",
            "members": [
              {
                "constant": false,
                "id": 61610,
                "mutability": "mutable",
                "name": "configuration",
                "nameLocation": "1215:13:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "1191:37:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_ReserveConfigurationMap_$61607_storage_ptr",
                  "typeString": "struct IPool.ReserveConfigurationMap"
                },
                "typeName": {
                  "id": 61609,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 61608,
                    "name": "ReserveConfigurationMap",
                    "nameLocations": [
                      "1191:23:91"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 61607,
                    "src": "1191:23:91"
                  },
                  "referencedDeclaration": 61607,
                  "src": "1191:23:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ReserveConfigurationMap_$61607_storage_ptr",
                    "typeString": "struct IPool.ReserveConfigurationMap"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 61612,
                "mutability": "mutable",
                "name": "liquidityIndex",
                "nameLocation": "1294:14:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "1286:22:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 61611,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1286:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 61614,
                "mutability": "mutable",
                "name": "currentLiquidityRate",
                "nameLocation": "1378:20:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "1370:28:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 61613,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1370:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 61616,
                "mutability": "mutable",
                "name": "variableBorrowIndex",
                "nameLocation": "1466:19:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "1458:27:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 61615,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1458:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 61618,
                "mutability": "mutable",
                "name": "currentVariableBorrowRate",
                "nameLocation": "1564:25:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "1556:33:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 61617,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1556:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 61620,
                "mutability": "mutable",
                "name": "currentStableBorrowRate",
                "nameLocation": "1666:23:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "1658:31:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 61619,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1658:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 61622,
                "mutability": "mutable",
                "name": "lastUpdateTimestamp",
                "nameLocation": "1741:19:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "1734:26:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint40",
                  "typeString": "uint40"
                },
                "typeName": {
                  "id": 61621,
                  "name": "uint40",
                  "nodeType": "ElementaryTypeName",
                  "src": "1734:6:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint40",
                    "typeString": "uint40"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 61624,
                "mutability": "mutable",
                "name": "id",
                "nameLocation": "1869:2:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "1862:9:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint16",
                  "typeString": "uint16"
                },
                "typeName": {
                  "id": 61623,
                  "name": "uint16",
                  "nodeType": "ElementaryTypeName",
                  "src": "1862:6:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 61626,
                "mutability": "mutable",
                "name": "aTokenAddress",
                "nameLocation": "1914:13:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "1906:21:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 61625,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1906:7:91",
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
                "id": 61628,
                "mutability": "mutable",
                "name": "stableDebtTokenAddress",
                "nameLocation": "1979:22:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "1971:30:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 61627,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1971:7:91",
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
                "id": 61630,
                "mutability": "mutable",
                "name": "variableDebtTokenAddress",
                "nameLocation": "2055:24:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "2047:32:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 61629,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2047:7:91",
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
                "id": 61632,
                "mutability": "mutable",
                "name": "interestRateStrategyAddress",
                "nameLocation": "2145:27:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "2137:35:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 61631,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2137:7:91",
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
                "id": 61634,
                "mutability": "mutable",
                "name": "accruedToTreasury",
                "nameLocation": "2237:17:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "2229:25:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 61633,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2229:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 61636,
                "mutability": "mutable",
                "name": "unbacked",
                "nameLocation": "2351:8:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "2343:16:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 61635,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2343:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 61638,
                "mutability": "mutable",
                "name": "isolationModeTotalDebt",
                "nameLocation": "2454:22:91",
                "nodeType": "VariableDeclaration",
                "scope": 61639,
                "src": "2446:30:91",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 61637,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2446:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ReserveData",
            "nameLocation": "1169:11:91",
            "scope": 61673,
            "visibility": "public"
          },
          {
            "id": 61651,
            "nodeType": "FunctionDefinition",
            "src": "3227:97:91",
            "nodes": [],
            "documentation": {
              "id": 61640,
              "nodeType": "StructuredDocumentation",
              "src": "2489:733:91",
              "text": " @notice Supplies an `amount` of underlying asset into the reserve, receiving in return overlying aTokens.\n - E.g. User supplies 100 USDC and gets in return 100 aUSDC\n @param asset The address of the underlying asset to supply\n @param amount The amount to be supplied\n @param onBehalfOf The address that will receive the aTokens, same as msg.sender if the user\n wants to receive them on his own wallet, or a different address if the beneficiary of aTokens\n is a different wallet\n @param referralCode Code used to register the integrator originating the operation, for potential rewards.\n 0 if the action is executed directly by the user, without any middle-man"
            },
            "functionSelector": "617ba037",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "supply",
            "nameLocation": "3236:6:91",
            "parameters": {
              "id": 61649,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61642,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "3251:5:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61651,
                  "src": "3243:13:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61641,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3243:7:91",
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
                  "id": 61644,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "3266:6:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61651,
                  "src": "3258:14:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61643,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3258:7:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61646,
                  "mutability": "mutable",
                  "name": "onBehalfOf",
                  "nameLocation": "3282:10:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61651,
                  "src": "3274:18:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61645,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3274:7:91",
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
                  "id": 61648,
                  "mutability": "mutable",
                  "name": "referralCode",
                  "nameLocation": "3301:12:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61651,
                  "src": "3294:19:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 61647,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "3294:6:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3242:72:91"
            },
            "returnParameters": {
              "id": 61650,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3323:0:91"
            },
            "scope": 61673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61663,
            "nodeType": "FunctionDefinition",
            "src": "4027:88:91",
            "nodes": [],
            "documentation": {
              "id": 61652,
              "nodeType": "StructuredDocumentation",
              "src": "3330:692:91",
              "text": " @notice Withdraws an `amount` of underlying asset from the reserve, burning the equivalent aTokens owned\n E.g. User has 100 aUSDC, calls withdraw() and receives 100 USDC, burning the 100 aUSDC\n @param asset The address of the underlying asset to withdraw\n @param amount The underlying amount to be withdrawn\n - Send the value type(uint256).max in order to withdraw the whole aToken balance\n @param to The address that will receive the underlying, same as msg.sender if the user\n wants to receive it on his own wallet, or a different address if the beneficiary is a\n different wallet\n @return The final amount withdrawn"
            },
            "functionSelector": "69328dec",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "4036:8:91",
            "parameters": {
              "id": 61659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61654,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "4053:5:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61663,
                  "src": "4045:13:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61653,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4045:7:91",
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
                  "id": 61656,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "4068:6:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61663,
                  "src": "4060:14:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61655,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4060:7:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61658,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4084:2:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61663,
                  "src": "4076:10:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61657,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4076:7:91",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4044:43:91"
            },
            "returnParameters": {
              "id": 61662,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61661,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61663,
                  "src": "4106:7:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61660,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4106:7:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4105:9:91"
            },
            "scope": 61673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 61672,
            "nodeType": "FunctionDefinition",
            "src": "4344:82:91",
            "nodes": [],
            "documentation": {
              "id": 61664,
              "nodeType": "StructuredDocumentation",
              "src": "4121:218:91",
              "text": " @notice Returns the state and configuration of the reserve\n @param asset The address of the underlying asset of the reserve\n @return The state and configuration data of the reserve"
            },
            "functionSelector": "35ea6a75",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getReserveData",
            "nameLocation": "4353:14:91",
            "parameters": {
              "id": 61667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61666,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "4376:5:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61672,
                  "src": "4368:13:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61665,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4368:7:91",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4367:15:91"
            },
            "returnParameters": {
              "id": 61671,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61670,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61672,
                  "src": "4406:18:91",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ReserveData_$61639_memory_ptr",
                    "typeString": "struct IPool.ReserveData"
                  },
                  "typeName": {
                    "id": 61669,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61668,
                      "name": "ReserveData",
                      "nameLocations": [
                        "4406:11:91"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61639,
                      "src": "4406:11:91"
                    },
                    "referencedDeclaration": 61639,
                    "src": "4406:11:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ReserveData_$61639_storage_ptr",
                      "typeString": "struct IPool.ReserveData"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4405:20:91"
            },
            "scope": 61673,
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
          "id": 61604,
          "nodeType": "StructuredDocumentation",
          "src": "62:99:91",
          "text": " @title IPool\n @author Aave\n @notice Defines the basic interface for an Aave Pool."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          61673
        ],
        "name": "IPool",
        "nameLocation": "172:5:91",
        "scope": 61674,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0"
  },
  "id": 91
} as const;
