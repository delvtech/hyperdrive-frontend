export const IRewardsController = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "assets",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "claimAllRewards",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "rewardsList",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "claimedAmounts",
          "type": "uint256[]"
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
    "claimAllRewards(address[],address)": "bb492bf5"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"assets\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"claimAllRewards\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"rewardsList\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"claimedAmounts\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Aave\",\"kind\":\"dev\",\"methods\":{\"claimAllRewards(address[],address)\":{\"details\":\"Claims all rewards for a user to the desired address, on all the assets of the pool, accumulating the pending rewards\",\"params\":{\"assets\":\"The list of assets to check eligible distributions before claiming rewards\",\"to\":\"The address that will be receiving the rewards\"},\"returns\":{\"claimedAmounts\":\"List that contains the claimed amount per reward, following same order as \\\"rewardList\\\"\",\"rewardsList\":\"List of addresses of the reward tokens\"}}},\"title\":\"IRewardsController\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Defines the basic interface for a Rewards Controller.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/yield-daddy/src/aave-v3/external/IRewardsController.sol\":\"IRewardsController\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/yield-daddy/src/aave-v3/external/IRewardsController.sol\":{\"keccak256\":\"0x99fdeffee28a1f84de7010959f96a772b9a6512c6446950bb714b521e8c536df\",\"license\":\"AGPL-3.0\",\"urls\":[\"bzz-raw://9e6af211ae3b0ddce085b87abf49b7c22b2f650490cbf3f56b566ad9c086dadb\",\"dweb:/ipfs/QmRDCG82uJKDXSAGCXeQLxj96MioKDCLTLVLurjNJQai4C\"]}},\"version\":1}",
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
              "internalType": "address[]",
              "name": "assets",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "claimAllRewards",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "rewardsList",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "claimedAmounts",
              "type": "uint256[]"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "claimAllRewards(address[],address)": {
            "details": "Claims all rewards for a user to the desired address, on all the assets of the pool, accumulating the pending rewards",
            "params": {
              "assets": "The list of assets to check eligible distributions before claiming rewards",
              "to": "The address that will be receiving the rewards"
            },
            "returns": {
              "claimedAmounts": "List that contains the claimed amount per reward, following same order as \"rewardList\"",
              "rewardsList": "List of addresses of the reward tokens"
            }
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
        "lib/yield-daddy/src/aave-v3/external/IRewardsController.sol": "IRewardsController"
      },
      "libraries": {}
    },
    "sources": {
      "lib/yield-daddy/src/aave-v3/external/IRewardsController.sol": {
        "keccak256": "0x99fdeffee28a1f84de7010959f96a772b9a6512c6446950bb714b521e8c536df",
        "urls": [
          "bzz-raw://9e6af211ae3b0ddce085b87abf49b7c22b2f650490cbf3f56b566ad9c086dadb",
          "dweb:/ipfs/QmRDCG82uJKDXSAGCXeQLxj96MioKDCLTLVLurjNJQai4C"
        ],
        "license": "AGPL-3.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/yield-daddy/src/aave-v3/external/IRewardsController.sol",
    "id": 65309,
    "exportedSymbols": {
      "IRewardsController": [
        65308
      ]
    },
    "nodeType": "SourceUnit",
    "src": "37:838:108",
    "nodes": [
      {
        "id": 65291,
        "nodeType": "PragmaDirective",
        "src": "37:23:108",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 65308,
        "nodeType": "ContractDefinition",
        "src": "180:694:108",
        "nodes": [
          {
            "id": 65307,
            "nodeType": "FunctionDefinition",
            "src": "711:161:108",
            "nodes": [],
            "documentation": {
              "id": 65293,
              "nodeType": "StructuredDocumentation",
              "src": "215:491:108",
              "text": " @dev Claims all rewards for a user to the desired address, on all the assets of the pool, accumulating the pending rewards\n @param assets The list of assets to check eligible distributions before claiming rewards\n @param to The address that will be receiving the rewards\n @return rewardsList List of addresses of the reward tokens\n @return claimedAmounts List that contains the claimed amount per reward, following same order as \"rewardList\""
            },
            "functionSelector": "bb492bf5",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "claimAllRewards",
            "nameLocation": "720:15:108",
            "parameters": {
              "id": 65299,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65296,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "755:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 65307,
                  "src": "736:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 65294,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "736:7:108",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 65295,
                    "nodeType": "ArrayTypeName",
                    "src": "736:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 65298,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "771:2:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 65307,
                  "src": "763:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 65297,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "763:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "735:39:108"
            },
            "returnParameters": {
              "id": 65306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65302,
                  "mutability": "mutable",
                  "name": "rewardsList",
                  "nameLocation": "826:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 65307,
                  "src": "809:28:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 65300,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "809:7:108",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 65301,
                    "nodeType": "ArrayTypeName",
                    "src": "809:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 65305,
                  "mutability": "mutable",
                  "name": "claimedAmounts",
                  "nameLocation": "856:14:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 65307,
                  "src": "839:31:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 65303,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "839:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 65304,
                    "nodeType": "ArrayTypeName",
                    "src": "839:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "808:63:108"
            },
            "scope": 65308,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IRewardsController",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 65292,
          "nodeType": "StructuredDocumentation",
          "src": "62:117:108",
          "text": " @title IRewardsController\n @author Aave\n @notice Defines the basic interface for a Rewards Controller."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          65308
        ],
        "name": "IRewardsController",
        "nameLocation": "190:18:108",
        "scope": 65309,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0"
  },
  "id": 108
} as const;
