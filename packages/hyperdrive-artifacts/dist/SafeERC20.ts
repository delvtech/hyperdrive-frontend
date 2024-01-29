export const SafeERC20 = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "currentAllowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "requestedDecrease",
          "type": "uint256"
        }
      ],
      "name": "SafeERC20FailedDecreaseAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "SafeERC20FailedOperation",
      "type": "error"
    }
  ],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076f48067ee79af48f87c626716abb2d6dba39ab8e4a1bf0af237818455119cfe64736f6c63430008140033",
    "sourceMap": "751:5018:118:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;751:5018:118;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076f48067ee79af48f87c626716abb2d6dba39ab8e4a1bf0af237818455119cfe64736f6c63430008140033",
    "sourceMap": "751:5018:118:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"currentAllowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"requestedDecrease\",\"type\":\"uint256\"}],\"name\":\"SafeERC20FailedDecreaseAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Wrappers around ERC20 operations that throw on failure (when the token contract returns false). Tokens that return no value (and instead revert or throw on failure) are also supported, non-reverting calls are assumed to be successful. To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract, which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\",\"errors\":{\"SafeERC20FailedDecreaseAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failed `decreaseAllowance` request.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"SafeERC20\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":\"SafeERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]}},\"version\":1}",
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
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "currentAllowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "requestedDecrease",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "SafeERC20FailedDecreaseAllowance"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "SafeERC20FailedOperation"
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
        "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": "SafeERC20"
      },
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
        "urls": [
          "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
          "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
        "urls": [
          "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
          "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
        "urls": [
          "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
          "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
        "urls": [
          "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
          "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
    "id": 66755,
    "exportedSymbols": {
      "Address": [
        67007
      ],
      "IERC20": [
        66402
      ],
      "IERC20Permit": [
        66464
      ],
      "SafeERC20": [
        66754
      ]
    },
    "nodeType": "SourceUnit",
    "src": "115:5655:118",
    "nodes": [
      {
        "id": 66466,
        "nodeType": "PragmaDirective",
        "src": "115:24:118",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 66468,
        "nodeType": "ImportDirective",
        "src": "141:37:118",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
        "file": "../IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 66755,
        "sourceUnit": 66403,
        "symbolAliases": [
          {
            "foreign": {
              "id": 66467,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 66402,
              "src": "149:6:118",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 66470,
        "nodeType": "ImportDirective",
        "src": "179:60:118",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol",
        "file": "../extensions/IERC20Permit.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 66755,
        "sourceUnit": 66465,
        "symbolAliases": [
          {
            "foreign": {
              "id": 66469,
              "name": "IERC20Permit",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 66464,
              "src": "187:12:118",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 66472,
        "nodeType": "ImportDirective",
        "src": "240:51:118",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Address.sol",
        "file": "../../../utils/Address.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 66755,
        "sourceUnit": 67008,
        "symbolAliases": [
          {
            "foreign": {
              "id": 66471,
              "name": "Address",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 67007,
              "src": "248:7:118",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 66754,
        "nodeType": "ContractDefinition",
        "src": "751:5018:118",
        "nodes": [
          {
            "id": 66476,
            "nodeType": "UsingForDirective",
            "src": "775:26:118",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 66474,
              "name": "Address",
              "nameLocations": [
                "781:7:118"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 67007,
              "src": "781:7:118"
            },
            "typeName": {
              "id": 66475,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "793:7:118",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            }
          },
          {
            "id": 66481,
            "nodeType": "ErrorDefinition",
            "src": "876:46:118",
            "nodes": [],
            "documentation": {
              "id": 66477,
              "nodeType": "StructuredDocumentation",
              "src": "807:64:118",
              "text": " @dev An operation with an ERC20 token failed."
            },
            "errorSelector": "5274afe7",
            "name": "SafeERC20FailedOperation",
            "nameLocation": "882:24:118",
            "parameters": {
              "id": 66480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66479,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "915:5:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66481,
                  "src": "907:13:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 66478,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "907:7:118",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "906:15:118"
            }
          },
          {
            "id": 66490,
            "nodeType": "ErrorDefinition",
            "src": "1004:109:118",
            "nodes": [],
            "documentation": {
              "id": 66482,
              "nodeType": "StructuredDocumentation",
              "src": "928:71:118",
              "text": " @dev Indicates a failed `decreaseAllowance` request."
            },
            "errorSelector": "e570110f",
            "name": "SafeERC20FailedDecreaseAllowance",
            "nameLocation": "1010:32:118",
            "parameters": {
              "id": 66489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66484,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1051:7:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66490,
                  "src": "1043:15:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 66483,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1043:7:118",
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
                  "id": 66486,
                  "mutability": "mutable",
                  "name": "currentAllowance",
                  "nameLocation": "1068:16:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66490,
                  "src": "1060:24:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66485,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1060:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 66488,
                  "mutability": "mutable",
                  "name": "requestedDecrease",
                  "nameLocation": "1094:17:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66490,
                  "src": "1086:25:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66487,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1086:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1042:70:118"
            }
          },
          {
            "id": 66514,
            "nodeType": "FunctionDefinition",
            "src": "1303:160:118",
            "nodes": [],
            "body": {
              "id": 66513,
              "nodeType": "Block",
              "src": "1375:88:118",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 66502,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66494,
                        "src": "1405:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$66402",
                          "typeString": "contract IERC20"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 66505,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66494,
                              "src": "1427:5:118",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$66402",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 66506,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1433:8:118",
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 66369,
                            "src": "1427:14:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) external returns (bool)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 66507,
                                "name": "to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66496,
                                "src": "1444:2:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 66508,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66498,
                                "src": "1448:5:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 66509,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1443:11:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                              "typeString": "tuple(address,uint256)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) external returns (bool)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                              "typeString": "tuple(address,uint256)"
                            }
                          ],
                          "expression": {
                            "id": 66503,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1412:3:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 66504,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1416:10:118",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "1412:14:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 66510,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1412:43:118",
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
                          "typeIdentifier": "t_contract$_IERC20_$66402",
                          "typeString": "contract IERC20"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 66501,
                      "name": "_callOptionalReturn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66704,
                      "src": "1385:19:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (contract IERC20,bytes memory)"
                      }
                    },
                    "id": 66511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1385:71:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 66512,
                  "nodeType": "ExpressionStatement",
                  "src": "1385:71:118"
                }
              ]
            },
            "documentation": {
              "id": 66491,
              "nodeType": "StructuredDocumentation",
              "src": "1119:179:118",
              "text": " @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransfer",
            "nameLocation": "1312:12:118",
            "parameters": {
              "id": 66499,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66494,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "1332:5:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66514,
                  "src": "1325:12:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$66402",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 66493,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 66492,
                      "name": "IERC20",
                      "nameLocations": [
                        "1325:6:118"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 66402,
                      "src": "1325:6:118"
                    },
                    "referencedDeclaration": 66402,
                    "src": "1325:6:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$66402",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 66496,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1347:2:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66514,
                  "src": "1339:10:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 66495,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1339:7:118",
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
                  "id": 66498,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1359:5:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66514,
                  "src": "1351:13:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66497,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1351:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1324:41:118"
            },
            "returnParameters": {
              "id": 66500,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1375:0:118"
            },
            "scope": 66754,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 66541,
            "nodeType": "FunctionDefinition",
            "src": "1702:188:118",
            "nodes": [],
            "body": {
              "id": 66540,
              "nodeType": "Block",
              "src": "1792:98:118",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 66528,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66518,
                        "src": "1822:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$66402",
                          "typeString": "contract IERC20"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 66531,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66518,
                              "src": "1844:5:118",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$66402",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 66532,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1850:12:118",
                            "memberName": "transferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 66401,
                            "src": "1844:18:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,address,uint256) external returns (bool)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 66533,
                                "name": "from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66520,
                                "src": "1865:4:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 66534,
                                "name": "to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66522,
                                "src": "1871:2:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 66535,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66524,
                                "src": "1875:5:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 66536,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1864:17:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_uint256_$",
                              "typeString": "tuple(address,address,uint256)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,address,uint256) external returns (bool)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_uint256_$",
                              "typeString": "tuple(address,address,uint256)"
                            }
                          ],
                          "expression": {
                            "id": 66529,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1829:3:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 66530,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1833:10:118",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "1829:14:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 66537,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1829:53:118",
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
                          "typeIdentifier": "t_contract$_IERC20_$66402",
                          "typeString": "contract IERC20"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 66527,
                      "name": "_callOptionalReturn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66704,
                      "src": "1802:19:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (contract IERC20,bytes memory)"
                      }
                    },
                    "id": 66538,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1802:81:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 66539,
                  "nodeType": "ExpressionStatement",
                  "src": "1802:81:118"
                }
              ]
            },
            "documentation": {
              "id": 66515,
              "nodeType": "StructuredDocumentation",
              "src": "1469:228:118",
              "text": " @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\n calling contract. If `token` returns no value, non-reverting calls are assumed to be successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "1711:16:118",
            "parameters": {
              "id": 66525,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66518,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "1735:5:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66541,
                  "src": "1728:12:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$66402",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 66517,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 66516,
                      "name": "IERC20",
                      "nameLocations": [
                        "1728:6:118"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 66402,
                      "src": "1728:6:118"
                    },
                    "referencedDeclaration": 66402,
                    "src": "1728:6:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$66402",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 66520,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "1750:4:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66541,
                  "src": "1742:12:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 66519,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1742:7:118",
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
                  "id": 66522,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1764:2:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66541,
                  "src": "1756:10:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 66521,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1756:7:118",
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
                  "id": 66524,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1776:5:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66541,
                  "src": "1768:13:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66523,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1768:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1727:55:118"
            },
            "returnParameters": {
              "id": 66526,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1792:0:118"
            },
            "scope": 66754,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 66572,
            "nodeType": "FunctionDefinition",
            "src": "2081:225:118",
            "nodes": [],
            "body": {
              "id": 66571,
              "nodeType": "Block",
              "src": "2167:139:118",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    66553
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66553,
                      "mutability": "mutable",
                      "name": "oldAllowance",
                      "nameLocation": "2185:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 66571,
                      "src": "2177:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 66552,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2177:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 66562,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 66558,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2224:4:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_SafeERC20_$66754",
                              "typeString": "library SafeERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_SafeERC20_$66754",
                              "typeString": "library SafeERC20"
                            }
                          ],
                          "id": 66557,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2216:7:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 66556,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2216:7:118",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 66559,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2216:13:118",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 66560,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66547,
                        "src": "2231:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                        }
                      ],
                      "expression": {
                        "id": 66554,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66545,
                        "src": "2200:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$66402",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 66555,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2206:9:118",
                      "memberName": "allowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 66379,
                      "src": "2200:15:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view external returns (uint256)"
                      }
                    },
                    "id": 66561,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2200:39:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2177:62:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 66564,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66545,
                        "src": "2262:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$66402",
                          "typeString": "contract IERC20"
                        }
                      },
                      {
                        "id": 66565,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66547,
                        "src": "2269:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 66568,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 66566,
                          "name": "oldAllowance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66553,
                          "src": "2278:12:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "id": 66567,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66549,
                          "src": "2293:5:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2278:20:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IERC20_$66402",
                          "typeString": "contract IERC20"
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
                      "id": 66563,
                      "name": "forceApprove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66662,
                      "src": "2249:12:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (contract IERC20,address,uint256)"
                      }
                    },
                    "id": 66569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2249:50:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 66570,
                  "nodeType": "ExpressionStatement",
                  "src": "2249:50:118"
                }
              ]
            },
            "documentation": {
              "id": 66542,
              "nodeType": "StructuredDocumentation",
              "src": "1896:180:118",
              "text": " @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeIncreaseAllowance",
            "nameLocation": "2090:21:118",
            "parameters": {
              "id": 66550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66545,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "2119:5:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66572,
                  "src": "2112:12:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$66402",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 66544,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 66543,
                      "name": "IERC20",
                      "nameLocations": [
                        "2112:6:118"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 66402,
                      "src": "2112:6:118"
                    },
                    "referencedDeclaration": 66402,
                    "src": "2112:6:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$66402",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 66547,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2134:7:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66572,
                  "src": "2126:15:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 66546,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2126:7:118",
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
                  "id": 66549,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2151:5:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66572,
                  "src": "2143:13:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66548,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2143:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2111:46:118"
            },
            "returnParameters": {
              "id": 66551,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2167:0:118"
            },
            "scope": 66754,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 66615,
            "nodeType": "FunctionDefinition",
            "src": "2509:468:118",
            "nodes": [],
            "body": {
              "id": 66614,
              "nodeType": "Block",
              "src": "2607:370:118",
              "nodes": [],
              "statements": [
                {
                  "id": 66613,
                  "nodeType": "UncheckedBlock",
                  "src": "2617:354:118",
                  "statements": [
                    {
                      "assignments": [
                        66584
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 66584,
                          "mutability": "mutable",
                          "name": "currentAllowance",
                          "nameLocation": "2649:16:118",
                          "nodeType": "VariableDeclaration",
                          "scope": 66613,
                          "src": "2641:24:118",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 66583,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2641:7:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 66593,
                      "initialValue": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 66589,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "2692:4:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SafeERC20_$66754",
                                  "typeString": "library SafeERC20"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SafeERC20_$66754",
                                  "typeString": "library SafeERC20"
                                }
                              ],
                              "id": 66588,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2684:7:118",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 66587,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2684:7:118",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 66590,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2684:13:118",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 66591,
                            "name": "spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66578,
                            "src": "2699:7:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
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
                            }
                          ],
                          "expression": {
                            "id": 66585,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66576,
                            "src": "2668:5:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$66402",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 66586,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2674:9:118",
                          "memberName": "allowance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 66379,
                          "src": "2668:15:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address,address) view external returns (uint256)"
                          }
                        },
                        "id": 66592,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2668:39:118",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "2641:66:118"
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 66596,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 66594,
                          "name": "currentAllowance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66584,
                          "src": "2725:16:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 66595,
                          "name": "requestedDecrease",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66580,
                          "src": "2744:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2725:36:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 66604,
                      "nodeType": "IfStatement",
                      "src": "2721:160:118",
                      "trueBody": {
                        "id": 66603,
                        "nodeType": "Block",
                        "src": "2763:118:118",
                        "statements": [
                          {
                            "errorCall": {
                              "arguments": [
                                {
                                  "id": 66598,
                                  "name": "spender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66578,
                                  "src": "2821:7:118",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "id": 66599,
                                  "name": "currentAllowance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66584,
                                  "src": "2830:16:118",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "id": 66600,
                                  "name": "requestedDecrease",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66580,
                                  "src": "2848:17:118",
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
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 66597,
                                "name": "SafeERC20FailedDecreaseAllowance",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66490,
                                "src": "2788:32:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                  "typeString": "function (address,uint256,uint256) pure"
                                }
                              },
                              "id": 66601,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2788:78:118",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 66602,
                            "nodeType": "RevertStatement",
                            "src": "2781:85:118"
                          }
                        ]
                      }
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 66606,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66576,
                            "src": "2907:5:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$66402",
                              "typeString": "contract IERC20"
                            }
                          },
                          {
                            "id": 66607,
                            "name": "spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66578,
                            "src": "2914:7:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 66610,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 66608,
                              "name": "currentAllowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66584,
                              "src": "2923:16:118",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 66609,
                              "name": "requestedDecrease",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66580,
                              "src": "2942:17:118",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2923:36:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$66402",
                              "typeString": "contract IERC20"
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
                          "id": 66605,
                          "name": "forceApprove",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66662,
                          "src": "2894:12:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (contract IERC20,address,uint256)"
                          }
                        },
                        "id": 66611,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2894:66:118",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 66612,
                      "nodeType": "ExpressionStatement",
                      "src": "2894:66:118"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 66573,
              "nodeType": "StructuredDocumentation",
              "src": "2312:192:118",
              "text": " @dev Decrease the calling contract's allowance toward `spender` by `requestedDecrease`. If `token` returns no\n value, non-reverting calls are assumed to be successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeDecreaseAllowance",
            "nameLocation": "2518:21:118",
            "parameters": {
              "id": 66581,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66576,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "2547:5:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66615,
                  "src": "2540:12:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$66402",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 66575,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 66574,
                      "name": "IERC20",
                      "nameLocations": [
                        "2540:6:118"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 66402,
                      "src": "2540:6:118"
                    },
                    "referencedDeclaration": 66402,
                    "src": "2540:6:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$66402",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 66578,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2562:7:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66615,
                  "src": "2554:15:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 66577,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2554:7:118",
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
                  "id": 66580,
                  "mutability": "mutable",
                  "name": "requestedDecrease",
                  "nameLocation": "2579:17:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66615,
                  "src": "2571:25:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66579,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2571:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2539:58:118"
            },
            "returnParameters": {
              "id": 66582,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2607:0:118"
            },
            "scope": 66754,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 66662,
            "nodeType": "FunctionDefinition",
            "src": "3296:380:118",
            "nodes": [],
            "body": {
              "id": 66661,
              "nodeType": "Block",
              "src": "3373:303:118",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    66627
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66627,
                      "mutability": "mutable",
                      "name": "approvalCall",
                      "nameLocation": "3396:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 66661,
                      "src": "3383:25:118",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 66626,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "3383:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 66636,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 66630,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66619,
                          "src": "3426:5:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$66402",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 66631,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3432:7:118",
                        "memberName": "approve",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 66389,
                        "src": "3426:13:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 66632,
                            "name": "spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66621,
                            "src": "3442:7:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 66633,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66623,
                            "src": "3451:5:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 66634,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "3441:16:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                          "typeString": "tuple(address,uint256)"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        },
                        {
                          "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                          "typeString": "tuple(address,uint256)"
                        }
                      ],
                      "expression": {
                        "id": 66628,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "3411:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 66629,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "3415:10:118",
                      "memberName": "encodeCall",
                      "nodeType": "MemberAccess",
                      "src": "3411:14:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function () pure returns (bytes memory)"
                      }
                    },
                    "id": 66635,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3411:47:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3383:75:118"
                },
                {
                  "condition": {
                    "id": 66641,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3473:45:118",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 66638,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66619,
                          "src": "3498:5:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$66402",
                            "typeString": "contract IERC20"
                          }
                        },
                        {
                          "id": 66639,
                          "name": "approvalCall",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66627,
                          "src": "3505:12:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$66402",
                            "typeString": "contract IERC20"
                          },
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 66637,
                        "name": "_callOptionalReturnBool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66753,
                        "src": "3474:23:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                          "typeString": "function (contract IERC20,bytes memory) returns (bool)"
                        }
                      },
                      "id": 66640,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3474:44:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66660,
                  "nodeType": "IfStatement",
                  "src": "3469:201:118",
                  "trueBody": {
                    "id": 66659,
                    "nodeType": "Block",
                    "src": "3520:150:118",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 66643,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66619,
                              "src": "3554:5:118",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$66402",
                                "typeString": "contract IERC20"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 66646,
                                    "name": "token",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66619,
                                    "src": "3576:5:118",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_IERC20_$66402",
                                      "typeString": "contract IERC20"
                                    }
                                  },
                                  "id": 66647,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3582:7:118",
                                  "memberName": "approve",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 66389,
                                  "src": "3576:13:118",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                    "typeString": "function (address,uint256) external returns (bool)"
                                  }
                                },
                                {
                                  "components": [
                                    {
                                      "id": 66648,
                                      "name": "spender",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 66621,
                                      "src": "3592:7:118",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "hexValue": "30",
                                      "id": 66649,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3601:1:118",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      },
                                      "value": "0"
                                    }
                                  ],
                                  "id": 66650,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "3591:12:118",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$_t_address_$_t_rational_0_by_1_$",
                                    "typeString": "tuple(address,int_const 0)"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                    "typeString": "function (address,uint256) external returns (bool)"
                                  },
                                  {
                                    "typeIdentifier": "t_tuple$_t_address_$_t_rational_0_by_1_$",
                                    "typeString": "tuple(address,int_const 0)"
                                  }
                                ],
                                "expression": {
                                  "id": 66644,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "3561:3:118",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 66645,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "3565:10:118",
                                "memberName": "encodeCall",
                                "nodeType": "MemberAccess",
                                "src": "3561:14:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 66651,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3561:43:118",
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
                                "typeIdentifier": "t_contract$_IERC20_$66402",
                                "typeString": "contract IERC20"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 66642,
                            "name": "_callOptionalReturn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66704,
                            "src": "3534:19:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (contract IERC20,bytes memory)"
                            }
                          },
                          "id": 66652,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3534:71:118",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 66653,
                        "nodeType": "ExpressionStatement",
                        "src": "3534:71:118"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 66655,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66619,
                              "src": "3639:5:118",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$66402",
                                "typeString": "contract IERC20"
                              }
                            },
                            {
                              "id": 66656,
                              "name": "approvalCall",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66627,
                              "src": "3646:12:118",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC20_$66402",
                                "typeString": "contract IERC20"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 66654,
                            "name": "_callOptionalReturn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66704,
                            "src": "3619:19:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (contract IERC20,bytes memory)"
                            }
                          },
                          "id": 66657,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3619:40:118",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 66658,
                        "nodeType": "ExpressionStatement",
                        "src": "3619:40:118"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 66616,
              "nodeType": "StructuredDocumentation",
              "src": "2983:308:118",
              "text": " @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful. Meant to be used with tokens that require the approval\n to be set to zero before setting it to a non-zero value, such as USDT."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forceApprove",
            "nameLocation": "3305:12:118",
            "parameters": {
              "id": 66624,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66619,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "3325:5:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66662,
                  "src": "3318:12:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$66402",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 66618,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 66617,
                      "name": "IERC20",
                      "nameLocations": [
                        "3318:6:118"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 66402,
                      "src": "3318:6:118"
                    },
                    "referencedDeclaration": 66402,
                    "src": "3318:6:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$66402",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 66621,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "3340:7:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66662,
                  "src": "3332:15:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 66620,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3332:7:118",
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
                  "id": 66623,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3357:5:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66662,
                  "src": "3349:13:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66622,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3349:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3317:46:118"
            },
            "returnParameters": {
              "id": 66625,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3373:0:118"
            },
            "scope": 66754,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 66704,
            "nodeType": "FunctionDefinition",
            "src": "4059:629:118",
            "nodes": [],
            "body": {
              "id": 66703,
              "nodeType": "Block",
              "src": "4129:559:118",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    66672
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66672,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "4491:10:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 66703,
                      "src": "4478:23:118",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 66671,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4478:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 66680,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 66678,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66668,
                        "src": "4532:4:118",
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
                      "expression": {
                        "arguments": [
                          {
                            "id": 66675,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66666,
                            "src": "4512:5:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$66402",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$66402",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 66674,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4504:7:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 66673,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4504:7:118",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 66676,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4504:14:118",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 66677,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4519:12:118",
                      "memberName": "functionCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 66828,
                      "src": "4504:27:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$attached_to$_t_address_$",
                        "typeString": "function (address,bytes memory) returns (bytes memory)"
                      }
                    },
                    "id": 66679,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4504:33:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4478:59:118"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 66693,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 66684,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 66681,
                          "name": "returndata",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66672,
                          "src": "4551:10:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 66682,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4562:6:118",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "4551:17:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 66683,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4572:1:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4551:22:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 66692,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "4577:31:118",
                      "subExpression": {
                        "arguments": [
                          {
                            "id": 66687,
                            "name": "returndata",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66672,
                            "src": "4589:10:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 66689,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4602:4:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bool_$",
                                  "typeString": "type(bool)"
                                },
                                "typeName": {
                                  "id": 66688,
                                  "name": "bool",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4602:4:118",
                                  "typeDescriptions": {}
                                }
                              }
                            ],
                            "id": 66690,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "4601:6:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bool_$",
                              "typeString": "type(bool)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            },
                            {
                              "typeIdentifier": "t_type$_t_bool_$",
                              "typeString": "type(bool)"
                            }
                          ],
                          "expression": {
                            "id": 66685,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "4578:3:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 66686,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "4582:6:118",
                          "memberName": "decode",
                          "nodeType": "MemberAccess",
                          "src": "4578:10:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 66691,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4578:30:118",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4551:57:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66702,
                  "nodeType": "IfStatement",
                  "src": "4547:135:118",
                  "trueBody": {
                    "id": 66701,
                    "nodeType": "Block",
                    "src": "4610:72:118",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 66697,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66666,
                                  "src": "4664:5:118",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IERC20_$66402",
                                    "typeString": "contract IERC20"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IERC20_$66402",
                                    "typeString": "contract IERC20"
                                  }
                                ],
                                "id": 66696,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4656:7:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 66695,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4656:7:118",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 66698,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4656:14:118",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 66694,
                            "name": "SafeERC20FailedOperation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66481,
                            "src": "4631:24:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 66699,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4631:40:118",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 66700,
                        "nodeType": "RevertStatement",
                        "src": "4624:47:118"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 66663,
              "nodeType": "StructuredDocumentation",
              "src": "3682:372:118",
              "text": " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_callOptionalReturn",
            "nameLocation": "4068:19:118",
            "parameters": {
              "id": 66669,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66666,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "4095:5:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66704,
                  "src": "4088:12:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$66402",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 66665,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 66664,
                      "name": "IERC20",
                      "nameLocations": [
                        "4088:6:118"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 66402,
                      "src": "4088:6:118"
                    },
                    "referencedDeclaration": 66402,
                    "src": "4088:6:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$66402",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 66668,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "4115:4:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66704,
                  "src": "4102:17:118",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 66667,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4102:5:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4087:33:118"
            },
            "returnParameters": {
              "id": 66670,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4129:0:118"
            },
            "scope": 66754,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 66753,
            "nodeType": "FunctionDefinition",
            "src": "5189:578:118",
            "nodes": [],
            "body": {
              "id": 66752,
              "nodeType": "Block",
              "src": "5278:489:118",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    66716,
                    66718
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66716,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "5579:7:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 66752,
                      "src": "5574:12:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 66715,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "5574:4:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 66718,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "5601:10:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 66752,
                      "src": "5588:23:118",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 66717,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5588:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 66726,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 66724,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66710,
                        "src": "5635:4:118",
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
                      "expression": {
                        "arguments": [
                          {
                            "id": 66721,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66708,
                            "src": "5623:5:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$66402",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$66402",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 66720,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5615:7:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 66719,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5615:7:118",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 66722,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5615:14:118",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 66723,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5630:4:118",
                      "memberName": "call",
                      "nodeType": "MemberAccess",
                      "src": "5615:19:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 66725,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5615:25:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5573:67:118"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 66750,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 66741,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 66727,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66716,
                        "src": "5657:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&&",
                      "rightExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 66739,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 66731,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "id": 66728,
                                  "name": "returndata",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66718,
                                  "src": "5669:10:118",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                },
                                "id": 66729,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "5680:6:118",
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "src": "5669:17:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 66730,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5690:1:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "5669:22:118",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "||",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "id": 66734,
                                  "name": "returndata",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66718,
                                  "src": "5706:10:118",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                },
                                {
                                  "components": [
                                    {
                                      "id": 66736,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "5719:4:118",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_bool_$",
                                        "typeString": "type(bool)"
                                      },
                                      "typeName": {
                                        "id": 66735,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5719:4:118",
                                        "typeDescriptions": {}
                                      }
                                    }
                                  ],
                                  "id": 66737,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "5718:6:118",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bool_$",
                                    "typeString": "type(bool)"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  },
                                  {
                                    "typeIdentifier": "t_type$_t_bool_$",
                                    "typeString": "type(bool)"
                                  }
                                ],
                                "expression": {
                                  "id": 66732,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "5695:3:118",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 66733,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "5699:6:118",
                                "memberName": "decode",
                                "nodeType": "MemberAccess",
                                "src": "5695:10:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                  "typeString": "function () pure"
                                }
                              },
                              "id": 66738,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5695:30:118",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "5669:56:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "id": 66740,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "5668:58:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "5657:69:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 66749,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 66744,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66708,
                                "src": "5738:5:118",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$66402",
                                  "typeString": "contract IERC20"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_IERC20_$66402",
                                  "typeString": "contract IERC20"
                                }
                              ],
                              "id": 66743,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5730:7:118",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 66742,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "5730:7:118",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 66745,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5730:14:118",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 66746,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5745:4:118",
                          "memberName": "code",
                          "nodeType": "MemberAccess",
                          "src": "5730:19:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 66747,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5750:6:118",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "5730:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 66748,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5759:1:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "5730:30:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5657:103:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 66714,
                  "id": 66751,
                  "nodeType": "Return",
                  "src": "5650:110:118"
                }
              ]
            },
            "documentation": {
              "id": 66705,
              "nodeType": "StructuredDocumentation",
              "src": "4694:490:118",
              "text": " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).\n This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_callOptionalReturnBool",
            "nameLocation": "5198:23:118",
            "parameters": {
              "id": 66711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66708,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "5229:5:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66753,
                  "src": "5222:12:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$66402",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 66707,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 66706,
                      "name": "IERC20",
                      "nameLocations": [
                        "5222:6:118"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 66402,
                      "src": "5222:6:118"
                    },
                    "referencedDeclaration": 66402,
                    "src": "5222:6:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$66402",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 66710,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "5249:4:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 66753,
                  "src": "5236:17:118",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 66709,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5236:5:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5221:33:118"
            },
            "returnParameters": {
              "id": 66714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66713,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 66753,
                  "src": "5272:4:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 66712,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5272:4:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5271:6:118"
            },
            "scope": 66754,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "SafeERC20",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 66473,
          "nodeType": "StructuredDocumentation",
          "src": "293:457:118",
          "text": " @title SafeERC20\n @dev Wrappers around ERC20 operations that throw on failure (when the token\n contract returns false). Tokens that return no value (and instead revert or\n throw on failure) are also supported, non-reverting calls are assumed to be\n successful.\n To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\n which allows you to call the safe operations as `token.safeTransfer(...)`, etc."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          66754
        ],
        "name": "SafeERC20",
        "nameLocation": "759:9:118",
        "scope": 66755,
        "usedErrors": [
          66481,
          66490
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 118
} as const;
