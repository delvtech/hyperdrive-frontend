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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"name\":\"getReserveData\",\"outputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"internalType\":\"struct IPool.ReserveConfigurationMap\",\"name\":\"configuration\",\"type\":\"tuple\"},{\"internalType\":\"uint128\",\"name\":\"liquidityIndex\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"currentLiquidityRate\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"variableBorrowIndex\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"currentVariableBorrowRate\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"currentStableBorrowRate\",\"type\":\"uint128\"},{\"internalType\":\"uint40\",\"name\":\"lastUpdateTimestamp\",\"type\":\"uint40\"},{\"internalType\":\"uint16\",\"name\":\"id\",\"type\":\"uint16\"},{\"internalType\":\"address\",\"name\":\"aTokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"stableDebtTokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"variableDebtTokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"interestRateStrategyAddress\",\"type\":\"address\"},{\"internalType\":\"uint128\",\"name\":\"accruedToTreasury\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"unbacked\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"isolationModeTotalDebt\",\"type\":\"uint128\"}],\"internalType\":\"struct IPool.ReserveData\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"onBehalfOf\",\"type\":\"address\"},{\"internalType\":\"uint16\",\"name\":\"referralCode\",\"type\":\"uint16\"}],\"name\":\"supply\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Aave\",\"kind\":\"dev\",\"methods\":{\"getReserveData(address)\":{\"params\":{\"asset\":\"The address of the underlying asset of the reserve\"},\"returns\":{\"_0\":\"The state and configuration data of the reserve\"}},\"supply(address,uint256,address,uint16)\":{\"params\":{\"amount\":\"The amount to be supplied\",\"asset\":\"The address of the underlying asset to supply\",\"onBehalfOf\":\"The address that will receive the aTokens, same as msg.sender if the user wants to receive them on his own wallet, or a different address if the beneficiary of aTokens is a different wallet\",\"referralCode\":\"Code used to register the integrator originating the operation, for potential rewards. 0 if the action is executed directly by the user, without any middle-man\"}},\"withdraw(address,uint256,address)\":{\"params\":{\"amount\":\"The underlying amount to be withdrawn - Send the value type(uint256).max in order to withdraw the whole aToken balance\",\"asset\":\"The address of the underlying asset to withdraw\",\"to\":\"The address that will receive the underlying, same as msg.sender if the user wants to receive it on his own wallet, or a different address if the beneficiary is a different wallet\"},\"returns\":{\"_0\":\"The final amount withdrawn\"}}},\"title\":\"IPool\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"getReserveData(address)\":{\"notice\":\"Returns the state and configuration of the reserve\"},\"supply(address,uint256,address,uint16)\":{\"notice\":\"Supplies an `amount` of underlying asset into the reserve, receiving in return overlying aTokens. - E.g. User supplies 100 USDC and gets in return 100 aUSDC\"},\"withdraw(address,uint256,address)\":{\"notice\":\"Withdraws an `amount` of underlying asset from the reserve, burning the equivalent aTokens owned E.g. User has 100 aUSDC, calls withdraw() and receives 100 USDC, burning the 100 aUSDC\"}},\"notice\":\"Defines the basic interface for an Aave Pool.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/yield-daddy/src/aave-v3/external/IPool.sol\":\"IPool\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/yield-daddy/src/aave-v3/external/IPool.sol\":{\"keccak256\":\"0x54a5164a65f84bf75f09bfdffe392cf88fb8aac61f99104e3286b7de54cbd84f\",\"license\":\"AGPL-3.0\",\"urls\":[\"bzz-raw://c53ff125301fe318c049d44d877a22851e67e8b14e84df0e0565b208ee69fe73\",\"dweb:/ipfs/QmUmwbpM1qyForRPt36RhL5YVZD2NeSyT3H1kzh9n8LNF6\"]}},\"version\":1}",
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
    "id": 65290,
    "exportedSymbols": {
      "IPool": [
        65289
      ]
    },
    "nodeType": "SourceUnit",
    "src": "37:4392:107",
    "nodes": [
      {
        "id": 65219,
        "nodeType": "PragmaDirective",
        "src": "37:23:107",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 65289,
        "nodeType": "ContractDefinition",
        "src": "162:4266:107",
        "nodes": [
          {
            "id": 65223,
            "nodeType": "StructDefinition",
            "src": "184:972:107",
            "nodes": [],
            "canonicalName": "IPool.ReserveConfigurationMap",
            "members": [
              {
                "constant": false,
                "id": 65222,
                "mutability": "mutable",
                "name": "data",
                "nameLocation": "1145:4:107",
                "nodeType": "VariableDeclaration",
                "scope": 65223,
                "src": "1137:12:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 65221,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1137:7:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ReserveConfigurationMap",
            "nameLocation": "191:23:107",
            "scope": 65289,
            "visibility": "public"
          },
          {
            "id": 65255,
            "nodeType": "StructDefinition",
            "src": "1162:1321:107",
            "nodes": [],
            "canonicalName": "IPool.ReserveData",
            "members": [
              {
                "constant": false,
                "id": 65226,
                "mutability": "mutable",
                "name": "configuration",
                "nameLocation": "1215:13:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "1191:37:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_ReserveConfigurationMap_$65223_storage_ptr",
                  "typeString": "struct IPool.ReserveConfigurationMap"
                },
                "typeName": {
                  "id": 65225,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 65224,
                    "name": "ReserveConfigurationMap",
                    "nameLocations": [
                      "1191:23:107"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 65223,
                    "src": "1191:23:107"
                  },
                  "referencedDeclaration": 65223,
                  "src": "1191:23:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ReserveConfigurationMap_$65223_storage_ptr",
                    "typeString": "struct IPool.ReserveConfigurationMap"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 65228,
                "mutability": "mutable",
                "name": "liquidityIndex",
                "nameLocation": "1294:14:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "1286:22:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 65227,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1286:7:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 65230,
                "mutability": "mutable",
                "name": "currentLiquidityRate",
                "nameLocation": "1378:20:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "1370:28:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 65229,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1370:7:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 65232,
                "mutability": "mutable",
                "name": "variableBorrowIndex",
                "nameLocation": "1466:19:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "1458:27:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 65231,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1458:7:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 65234,
                "mutability": "mutable",
                "name": "currentVariableBorrowRate",
                "nameLocation": "1564:25:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "1556:33:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 65233,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1556:7:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 65236,
                "mutability": "mutable",
                "name": "currentStableBorrowRate",
                "nameLocation": "1666:23:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "1658:31:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 65235,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "1658:7:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 65238,
                "mutability": "mutable",
                "name": "lastUpdateTimestamp",
                "nameLocation": "1741:19:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "1734:26:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint40",
                  "typeString": "uint40"
                },
                "typeName": {
                  "id": 65237,
                  "name": "uint40",
                  "nodeType": "ElementaryTypeName",
                  "src": "1734:6:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint40",
                    "typeString": "uint40"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 65240,
                "mutability": "mutable",
                "name": "id",
                "nameLocation": "1869:2:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "1862:9:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint16",
                  "typeString": "uint16"
                },
                "typeName": {
                  "id": 65239,
                  "name": "uint16",
                  "nodeType": "ElementaryTypeName",
                  "src": "1862:6:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 65242,
                "mutability": "mutable",
                "name": "aTokenAddress",
                "nameLocation": "1914:13:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "1906:21:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 65241,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1906:7:107",
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
                "id": 65244,
                "mutability": "mutable",
                "name": "stableDebtTokenAddress",
                "nameLocation": "1979:22:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "1971:30:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 65243,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1971:7:107",
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
                "id": 65246,
                "mutability": "mutable",
                "name": "variableDebtTokenAddress",
                "nameLocation": "2055:24:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "2047:32:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 65245,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2047:7:107",
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
                "id": 65248,
                "mutability": "mutable",
                "name": "interestRateStrategyAddress",
                "nameLocation": "2145:27:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "2137:35:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 65247,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2137:7:107",
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
                "id": 65250,
                "mutability": "mutable",
                "name": "accruedToTreasury",
                "nameLocation": "2237:17:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "2229:25:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 65249,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2229:7:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 65252,
                "mutability": "mutable",
                "name": "unbacked",
                "nameLocation": "2351:8:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "2343:16:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 65251,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2343:7:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 65254,
                "mutability": "mutable",
                "name": "isolationModeTotalDebt",
                "nameLocation": "2454:22:107",
                "nodeType": "VariableDeclaration",
                "scope": 65255,
                "src": "2446:30:107",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 65253,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2446:7:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ReserveData",
            "nameLocation": "1169:11:107",
            "scope": 65289,
            "visibility": "public"
          },
          {
            "id": 65267,
            "nodeType": "FunctionDefinition",
            "src": "3227:97:107",
            "nodes": [],
            "documentation": {
              "id": 65256,
              "nodeType": "StructuredDocumentation",
              "src": "2489:733:107",
              "text": " @notice Supplies an `amount` of underlying asset into the reserve, receiving in return overlying aTokens.\n - E.g. User supplies 100 USDC and gets in return 100 aUSDC\n @param asset The address of the underlying asset to supply\n @param amount The amount to be supplied\n @param onBehalfOf The address that will receive the aTokens, same as msg.sender if the user\n wants to receive them on his own wallet, or a different address if the beneficiary of aTokens\n is a different wallet\n @param referralCode Code used to register the integrator originating the operation, for potential rewards.\n 0 if the action is executed directly by the user, without any middle-man"
            },
            "functionSelector": "617ba037",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "supply",
            "nameLocation": "3236:6:107",
            "parameters": {
              "id": 65265,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65258,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "3251:5:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 65267,
                  "src": "3243:13:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 65257,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3243:7:107",
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
                  "id": 65260,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "3266:6:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 65267,
                  "src": "3258:14:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 65259,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3258:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 65262,
                  "mutability": "mutable",
                  "name": "onBehalfOf",
                  "nameLocation": "3282:10:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 65267,
                  "src": "3274:18:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 65261,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3274:7:107",
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
                  "id": 65264,
                  "mutability": "mutable",
                  "name": "referralCode",
                  "nameLocation": "3301:12:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 65267,
                  "src": "3294:19:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 65263,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "3294:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3242:72:107"
            },
            "returnParameters": {
              "id": 65266,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3323:0:107"
            },
            "scope": 65289,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 65279,
            "nodeType": "FunctionDefinition",
            "src": "4027:88:107",
            "nodes": [],
            "documentation": {
              "id": 65268,
              "nodeType": "StructuredDocumentation",
              "src": "3330:692:107",
              "text": " @notice Withdraws an `amount` of underlying asset from the reserve, burning the equivalent aTokens owned\n E.g. User has 100 aUSDC, calls withdraw() and receives 100 USDC, burning the 100 aUSDC\n @param asset The address of the underlying asset to withdraw\n @param amount The underlying amount to be withdrawn\n - Send the value type(uint256).max in order to withdraw the whole aToken balance\n @param to The address that will receive the underlying, same as msg.sender if the user\n wants to receive it on his own wallet, or a different address if the beneficiary is a\n different wallet\n @return The final amount withdrawn"
            },
            "functionSelector": "69328dec",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "4036:8:107",
            "parameters": {
              "id": 65275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65270,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "4053:5:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 65279,
                  "src": "4045:13:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 65269,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4045:7:107",
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
                  "id": 65272,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "4068:6:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 65279,
                  "src": "4060:14:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 65271,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4060:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 65274,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4084:2:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 65279,
                  "src": "4076:10:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 65273,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4076:7:107",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4044:43:107"
            },
            "returnParameters": {
              "id": 65278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65277,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 65279,
                  "src": "4106:7:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 65276,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4106:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4105:9:107"
            },
            "scope": 65289,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 65288,
            "nodeType": "FunctionDefinition",
            "src": "4344:82:107",
            "nodes": [],
            "documentation": {
              "id": 65280,
              "nodeType": "StructuredDocumentation",
              "src": "4121:218:107",
              "text": " @notice Returns the state and configuration of the reserve\n @param asset The address of the underlying asset of the reserve\n @return The state and configuration data of the reserve"
            },
            "functionSelector": "35ea6a75",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getReserveData",
            "nameLocation": "4353:14:107",
            "parameters": {
              "id": 65283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65282,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "4376:5:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 65288,
                  "src": "4368:13:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 65281,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4368:7:107",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4367:15:107"
            },
            "returnParameters": {
              "id": 65287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65286,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 65288,
                  "src": "4406:18:107",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ReserveData_$65255_memory_ptr",
                    "typeString": "struct IPool.ReserveData"
                  },
                  "typeName": {
                    "id": 65285,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 65284,
                      "name": "ReserveData",
                      "nameLocations": [
                        "4406:11:107"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 65255,
                      "src": "4406:11:107"
                    },
                    "referencedDeclaration": 65255,
                    "src": "4406:11:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ReserveData_$65255_storage_ptr",
                      "typeString": "struct IPool.ReserveData"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4405:20:107"
            },
            "scope": 65289,
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
          "id": 65220,
          "nodeType": "StructuredDocumentation",
          "src": "62:99:107",
          "text": " @title IPool\n @author Aave\n @notice Defines the basic interface for an Aave Pool."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          65289
        ],
        "name": "IPool",
        "nameLocation": "172:5:107",
        "scope": 65290,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0"
  },
  "id": 107
} as const;
