export const SafeERC20 = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122020cf1ea65170c5739307d8e61ec0a47b73d1cecaefa3f598efd355d0b44037a364736f6c63430008130033",
    "sourceMap": "701:6211:82:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;701:6211:82;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122020cf1ea65170c5739307d8e61ec0a47b73d1cecaefa3f598efd355d0b44037a364736f6c63430008130033",
    "sourceMap": "701:6211:82:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Wrappers around ERC20 operations that throw on failure (when the token contract returns false). Tokens that return no value (and instead revert or throw on failure) are also supported, non-reverting calls are assumed to be successful. To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract, which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"SafeERC20\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":\"SafeERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [],
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
        "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": "SafeERC20"
      },
      "libraries": {}
    },
    "sources": {
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
    "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
    "id": 59664,
    "exportedSymbols": {
      "Address": [
        59993
      ],
      "IERC20": [
        58980
      ],
      "IERC20Permit": [
        59122
      ],
      "SafeERC20": [
        59663
      ]
    },
    "nodeType": "SourceUnit",
    "src": "115:6798:82",
    "nodes": [
      {
        "id": 59289,
        "nodeType": "PragmaDirective",
        "src": "115:23:82",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 59290,
        "nodeType": "ImportDirective",
        "src": "140:23:82",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
        "file": "../IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 59664,
        "sourceUnit": 58981,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 59291,
        "nodeType": "ImportDirective",
        "src": "164:40:82",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol",
        "file": "../extensions/IERC20Permit.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 59664,
        "sourceUnit": 59123,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 59292,
        "nodeType": "ImportDirective",
        "src": "205:36:82",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Address.sol",
        "file": "../../../utils/Address.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 59664,
        "sourceUnit": 59994,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 59663,
        "nodeType": "ContractDefinition",
        "src": "701:6211:82",
        "nodes": [
          {
            "id": 59296,
            "nodeType": "UsingForDirective",
            "src": "725:26:82",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 59294,
              "name": "Address",
              "nameLocations": [
                "731:7:82"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 59993,
              "src": "731:7:82"
            },
            "typeName": {
              "id": 59295,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "743:7:82",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            }
          },
          {
            "id": 59320,
            "nodeType": "FunctionDefinition",
            "src": "941:175:82",
            "nodes": [],
            "body": {
              "id": 59319,
              "nodeType": "Block",
              "src": "1013:103:82",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59308,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59300,
                        "src": "1043:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$58980",
                          "typeString": "contract IERC20"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "id": 59311,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59300,
                                "src": "1073:5:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$58980",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 59312,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1079:8:82",
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 58947,
                              "src": "1073:14:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 59313,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1088:8:82",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "1073:23:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "id": 59314,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59302,
                            "src": "1098:2:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 59315,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59304,
                            "src": "1102:5:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
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
                          "expression": {
                            "id": 59309,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1050:3:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 59310,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1054:18:82",
                          "memberName": "encodeWithSelector",
                          "nodeType": "MemberAccess",
                          "src": "1050:22:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes4) pure returns (bytes memory)"
                          }
                        },
                        "id": 59316,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1050:58:82",
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
                          "typeIdentifier": "t_contract$_IERC20_$58980",
                          "typeString": "contract IERC20"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 59307,
                      "name": "_callOptionalReturn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59614,
                      "src": "1023:19:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$58980_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (contract IERC20,bytes memory)"
                      }
                    },
                    "id": 59317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1023:86:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59318,
                  "nodeType": "ExpressionStatement",
                  "src": "1023:86:82"
                }
              ]
            },
            "documentation": {
              "id": 59297,
              "nodeType": "StructuredDocumentation",
              "src": "757:179:82",
              "text": " @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransfer",
            "nameLocation": "950:12:82",
            "parameters": {
              "id": 59305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59300,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "970:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59320,
                  "src": "963:12:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$58980",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 59299,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 59298,
                      "name": "IERC20",
                      "nameLocations": [
                        "963:6:82"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 58980,
                      "src": "963:6:82"
                    },
                    "referencedDeclaration": 58980,
                    "src": "963:6:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$58980",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59302,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "985:2:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59320,
                  "src": "977:10:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59301,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "977:7:82",
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
                  "id": 59304,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "997:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59320,
                  "src": "989:13:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59303,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "989:7:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "962:41:82"
            },
            "returnParameters": {
              "id": 59306,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1013:0:82"
            },
            "scope": 59663,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59347,
            "nodeType": "FunctionDefinition",
            "src": "1355:203:82",
            "nodes": [],
            "body": {
              "id": 59346,
              "nodeType": "Block",
              "src": "1445:113:82",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59334,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59324,
                        "src": "1475:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$58980",
                          "typeString": "contract IERC20"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "id": 59337,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59324,
                                "src": "1505:5:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$58980",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 59338,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1511:12:82",
                              "memberName": "transferFrom",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 58979,
                              "src": "1505:18:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,address,uint256) external returns (bool)"
                              }
                            },
                            "id": 59339,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1524:8:82",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "1505:27:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "id": 59340,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59326,
                            "src": "1534:4:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 59341,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59328,
                            "src": "1540:2:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 59342,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59330,
                            "src": "1544:5:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
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
                            }
                          ],
                          "expression": {
                            "id": 59335,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1482:3:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 59336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1486:18:82",
                          "memberName": "encodeWithSelector",
                          "nodeType": "MemberAccess",
                          "src": "1482:22:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes4) pure returns (bytes memory)"
                          }
                        },
                        "id": 59343,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1482:68:82",
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
                          "typeIdentifier": "t_contract$_IERC20_$58980",
                          "typeString": "contract IERC20"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 59333,
                      "name": "_callOptionalReturn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59614,
                      "src": "1455:19:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$58980_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (contract IERC20,bytes memory)"
                      }
                    },
                    "id": 59344,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1455:96:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59345,
                  "nodeType": "ExpressionStatement",
                  "src": "1455:96:82"
                }
              ]
            },
            "documentation": {
              "id": 59321,
              "nodeType": "StructuredDocumentation",
              "src": "1122:228:82",
              "text": " @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\n calling contract. If `token` returns no value, non-reverting calls are assumed to be successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "1364:16:82",
            "parameters": {
              "id": 59331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59324,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "1388:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59347,
                  "src": "1381:12:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$58980",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 59323,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 59322,
                      "name": "IERC20",
                      "nameLocations": [
                        "1381:6:82"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 58980,
                      "src": "1381:6:82"
                    },
                    "referencedDeclaration": 58980,
                    "src": "1381:6:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$58980",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59326,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "1403:4:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59347,
                  "src": "1395:12:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59325,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1395:7:82",
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
                  "id": 59328,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1417:2:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59347,
                  "src": "1409:10:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59327,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1409:7:82",
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
                  "id": 59330,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1429:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59347,
                  "src": "1421:13:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59329,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1421:7:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1380:55:82"
            },
            "returnParameters": {
              "id": 59332,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1445:0:82"
            },
            "scope": 59663,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59391,
            "nodeType": "FunctionDefinition",
            "src": "1818:573:82",
            "nodes": [],
            "body": {
              "id": 59390,
              "nodeType": "Block",
              "src": "1894:497:82",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 59374,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 59361,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 59359,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59355,
                                "src": "2143:5:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 59360,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2152:1:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "2143:10:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "id": 59362,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2142:12:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 59372,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "id": 59367,
                                        "name": "this",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -28,
                                        "src": "2183:4:82",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_contract$_SafeERC20_$59663",
                                          "typeString": "library SafeERC20"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_SafeERC20_$59663",
                                          "typeString": "library SafeERC20"
                                        }
                                      ],
                                      "id": 59366,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "2175:7:82",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": {
                                        "id": 59365,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2175:7:82",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 59368,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2175:13:82",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 59369,
                                    "name": "spender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 59353,
                                    "src": "2190:7:82",
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
                                    "id": 59363,
                                    "name": "token",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 59351,
                                    "src": "2159:5:82",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_IERC20_$58980",
                                      "typeString": "contract IERC20"
                                    }
                                  },
                                  "id": 59364,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2165:9:82",
                                  "memberName": "allowance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 58957,
                                  "src": "2159:15:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                    "typeString": "function (address,address) view external returns (uint256)"
                                  }
                                },
                                "id": 59370,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2159:39:82",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 59371,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2202:1:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "2159:44:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "id": 59373,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2158:46:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2142:62:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365",
                        "id": 59375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2218:56:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ef945ddb1bfdc0da870feb4560d868b047642b4ac7f2fb7f8b7c51cb4a411e25",
                          "typeString": "literal_string \"SafeERC20: approve from non-zero to non-zero allowance\""
                        },
                        "value": "SafeERC20: approve from non-zero to non-zero allowance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ef945ddb1bfdc0da870feb4560d868b047642b4ac7f2fb7f8b7c51cb4a411e25",
                          "typeString": "literal_string \"SafeERC20: approve from non-zero to non-zero allowance\""
                        }
                      ],
                      "id": 59358,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2121:7:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 59376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2121:163:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59377,
                  "nodeType": "ExpressionStatement",
                  "src": "2121:163:82"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59379,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59351,
                        "src": "2314:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$58980",
                          "typeString": "contract IERC20"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "id": 59382,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59351,
                                "src": "2344:5:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$58980",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 59383,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2350:7:82",
                              "memberName": "approve",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 58967,
                              "src": "2344:13:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 59384,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2358:8:82",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "2344:22:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "id": 59385,
                            "name": "spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59353,
                            "src": "2368:7:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 59386,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59355,
                            "src": "2377:5:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
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
                          "expression": {
                            "id": 59380,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2321:3:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 59381,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2325:18:82",
                          "memberName": "encodeWithSelector",
                          "nodeType": "MemberAccess",
                          "src": "2321:22:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes4) pure returns (bytes memory)"
                          }
                        },
                        "id": 59387,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2321:62:82",
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
                          "typeIdentifier": "t_contract$_IERC20_$58980",
                          "typeString": "contract IERC20"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 59378,
                      "name": "_callOptionalReturn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59614,
                      "src": "2294:19:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$58980_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (contract IERC20,bytes memory)"
                      }
                    },
                    "id": 59388,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2294:90:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59389,
                  "nodeType": "ExpressionStatement",
                  "src": "2294:90:82"
                }
              ]
            },
            "documentation": {
              "id": 59348,
              "nodeType": "StructuredDocumentation",
              "src": "1564:249:82",
              "text": " @dev Deprecated. This function has issues similar to the ones found in\n {IERC20-approve}, and its usage is discouraged.\n Whenever possible, use {safeIncreaseAllowance} and\n {safeDecreaseAllowance} instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeApprove",
            "nameLocation": "1827:11:82",
            "parameters": {
              "id": 59356,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59351,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "1846:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59391,
                  "src": "1839:12:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$58980",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 59350,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 59349,
                      "name": "IERC20",
                      "nameLocations": [
                        "1839:6:82"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 58980,
                      "src": "1839:6:82"
                    },
                    "referencedDeclaration": 58980,
                    "src": "1839:6:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$58980",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59353,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1861:7:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59391,
                  "src": "1853:15:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59352,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1853:7:82",
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
                  "id": 59355,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1878:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59391,
                  "src": "1870:13:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59354,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1870:7:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1838:46:82"
            },
            "returnParameters": {
              "id": 59357,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1894:0:82"
            },
            "scope": 59663,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59428,
            "nodeType": "FunctionDefinition",
            "src": "2582:280:82",
            "nodes": [],
            "body": {
              "id": 59427,
              "nodeType": "Block",
              "src": "2668:194:82",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59403
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59403,
                      "mutability": "mutable",
                      "name": "oldAllowance",
                      "nameLocation": "2686:12:82",
                      "nodeType": "VariableDeclaration",
                      "scope": 59427,
                      "src": "2678:20:82",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 59402,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2678:7:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59412,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 59408,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2725:4:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_SafeERC20_$59663",
                              "typeString": "library SafeERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_SafeERC20_$59663",
                              "typeString": "library SafeERC20"
                            }
                          ],
                          "id": 59407,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2717:7:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 59406,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2717:7:82",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 59409,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2717:13:82",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59410,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59397,
                        "src": "2732:7:82",
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
                        "id": 59404,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59395,
                        "src": "2701:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$58980",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 59405,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2707:9:82",
                      "memberName": "allowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 58957,
                      "src": "2701:15:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view external returns (uint256)"
                      }
                    },
                    "id": 59411,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2701:39:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2678:62:82"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59414,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59395,
                        "src": "2770:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$58980",
                          "typeString": "contract IERC20"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "id": 59417,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59395,
                                "src": "2800:5:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$58980",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 59418,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2806:7:82",
                              "memberName": "approve",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 58967,
                              "src": "2800:13:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 59419,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2814:8:82",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "2800:22:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "id": 59420,
                            "name": "spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59397,
                            "src": "2824:7:82",
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
                            "id": 59423,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 59421,
                              "name": "oldAllowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59403,
                              "src": "2833:12:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "id": 59422,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59399,
                              "src": "2848:5:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2833:20:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
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
                          "expression": {
                            "id": 59415,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2777:3:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 59416,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2781:18:82",
                          "memberName": "encodeWithSelector",
                          "nodeType": "MemberAccess",
                          "src": "2777:22:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes4) pure returns (bytes memory)"
                          }
                        },
                        "id": 59424,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2777:77:82",
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
                          "typeIdentifier": "t_contract$_IERC20_$58980",
                          "typeString": "contract IERC20"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 59413,
                      "name": "_callOptionalReturn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59614,
                      "src": "2750:19:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$58980_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (contract IERC20,bytes memory)"
                      }
                    },
                    "id": 59425,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2750:105:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59426,
                  "nodeType": "ExpressionStatement",
                  "src": "2750:105:82"
                }
              ]
            },
            "documentation": {
              "id": 59392,
              "nodeType": "StructuredDocumentation",
              "src": "2397:180:82",
              "text": " @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeIncreaseAllowance",
            "nameLocation": "2591:21:82",
            "parameters": {
              "id": 59400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59395,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "2620:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59428,
                  "src": "2613:12:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$58980",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 59394,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 59393,
                      "name": "IERC20",
                      "nameLocations": [
                        "2613:6:82"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 58980,
                      "src": "2613:6:82"
                    },
                    "referencedDeclaration": 58980,
                    "src": "2613:6:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$58980",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59397,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2635:7:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59428,
                  "src": "2627:15:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59396,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2627:7:82",
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
                  "id": 59399,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2652:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59428,
                  "src": "2644:13:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59398,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2644:7:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2612:46:82"
            },
            "returnParameters": {
              "id": 59401,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2668:0:82"
            },
            "scope": 59663,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59473,
            "nodeType": "FunctionDefinition",
            "src": "3053:407:82",
            "nodes": [],
            "body": {
              "id": 59472,
              "nodeType": "Block",
              "src": "3139:321:82",
              "nodes": [],
              "statements": [
                {
                  "id": 59471,
                  "nodeType": "UncheckedBlock",
                  "src": "3149:305:82",
                  "statements": [
                    {
                      "assignments": [
                        59440
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 59440,
                          "mutability": "mutable",
                          "name": "oldAllowance",
                          "nameLocation": "3181:12:82",
                          "nodeType": "VariableDeclaration",
                          "scope": 59471,
                          "src": "3173:20:82",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 59439,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3173:7:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 59449,
                      "initialValue": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 59445,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3220:4:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SafeERC20_$59663",
                                  "typeString": "library SafeERC20"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SafeERC20_$59663",
                                  "typeString": "library SafeERC20"
                                }
                              ],
                              "id": 59444,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3212:7:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 59443,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3212:7:82",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 59446,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3212:13:82",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 59447,
                            "name": "spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59434,
                            "src": "3227:7:82",
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
                            "id": 59441,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59432,
                            "src": "3196:5:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$58980",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 59442,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3202:9:82",
                          "memberName": "allowance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 58957,
                          "src": "3196:15:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address,address) view external returns (uint256)"
                          }
                        },
                        "id": 59448,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3196:39:82",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "3173:62:82"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 59453,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 59451,
                              "name": "oldAllowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59440,
                              "src": "3257:12:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "id": 59452,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59436,
                              "src": "3273:5:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3257:21:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "hexValue": "5361666545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f",
                            "id": 59454,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3280:43:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_2c3af60974a758b7e72e108c9bf0943ecc9e4f2e8af4695da5f52fbf57a63d3a",
                              "typeString": "literal_string \"SafeERC20: decreased allowance below zero\""
                            },
                            "value": "SafeERC20: decreased allowance below zero"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_2c3af60974a758b7e72e108c9bf0943ecc9e4f2e8af4695da5f52fbf57a63d3a",
                              "typeString": "literal_string \"SafeERC20: decreased allowance below zero\""
                            }
                          ],
                          "id": 59450,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            -18,
                            -18
                          ],
                          "referencedDeclaration": -18,
                          "src": "3249:7:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 59455,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3249:75:82",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 59456,
                      "nodeType": "ExpressionStatement",
                      "src": "3249:75:82"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 59458,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59432,
                            "src": "3358:5:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$58980",
                              "typeString": "contract IERC20"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "expression": {
                                  "expression": {
                                    "id": 59461,
                                    "name": "token",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 59432,
                                    "src": "3388:5:82",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_IERC20_$58980",
                                      "typeString": "contract IERC20"
                                    }
                                  },
                                  "id": 59462,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3394:7:82",
                                  "memberName": "approve",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 58967,
                                  "src": "3388:13:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                    "typeString": "function (address,uint256) external returns (bool)"
                                  }
                                },
                                "id": 59463,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3402:8:82",
                                "memberName": "selector",
                                "nodeType": "MemberAccess",
                                "src": "3388:22:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              },
                              {
                                "id": 59464,
                                "name": "spender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59434,
                                "src": "3412:7:82",
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
                                "id": 59467,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 59465,
                                  "name": "oldAllowance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59440,
                                  "src": "3421:12:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 59466,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59436,
                                  "src": "3436:5:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3421:20:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
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
                              "expression": {
                                "id": 59459,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "3365:3:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 59460,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "3369:18:82",
                              "memberName": "encodeWithSelector",
                              "nodeType": "MemberAccess",
                              "src": "3365:22:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function (bytes4) pure returns (bytes memory)"
                              }
                            },
                            "id": 59468,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3365:77:82",
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
                              "typeIdentifier": "t_contract$_IERC20_$58980",
                              "typeString": "contract IERC20"
                            },
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 59457,
                          "name": "_callOptionalReturn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59614,
                          "src": "3338:19:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$58980_$_t_bytes_memory_ptr_$returns$__$",
                            "typeString": "function (contract IERC20,bytes memory)"
                          }
                        },
                        "id": 59469,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3338:105:82",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 59470,
                      "nodeType": "ExpressionStatement",
                      "src": "3338:105:82"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 59429,
              "nodeType": "StructuredDocumentation",
              "src": "2868:180:82",
              "text": " @dev Decrease the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeDecreaseAllowance",
            "nameLocation": "3062:21:82",
            "parameters": {
              "id": 59437,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59432,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "3091:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59473,
                  "src": "3084:12:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$58980",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 59431,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 59430,
                      "name": "IERC20",
                      "nameLocations": [
                        "3084:6:82"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 58980,
                      "src": "3084:6:82"
                    },
                    "referencedDeclaration": 58980,
                    "src": "3084:6:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$58980",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59434,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "3106:7:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59473,
                  "src": "3098:15:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59433,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3098:7:82",
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
                  "id": 59436,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3123:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59473,
                  "src": "3115:13:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59435,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3115:7:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3083:46:82"
            },
            "returnParameters": {
              "id": 59438,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3139:0:82"
            },
            "scope": 59663,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59520,
            "nodeType": "FunctionDefinition",
            "src": "3756:410:82",
            "nodes": [],
            "body": {
              "id": 59519,
              "nodeType": "Block",
              "src": "3833:333:82",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59485
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59485,
                      "mutability": "mutable",
                      "name": "approvalCall",
                      "nameLocation": "3856:12:82",
                      "nodeType": "VariableDeclaration",
                      "scope": 59519,
                      "src": "3843:25:82",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 59484,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "3843:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59494,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "expression": {
                            "id": 59488,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59477,
                            "src": "3894:5:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$58980",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 59489,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3900:7:82",
                          "memberName": "approve",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 58967,
                          "src": "3894:13:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 59490,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3908:8:82",
                        "memberName": "selector",
                        "nodeType": "MemberAccess",
                        "src": "3894:22:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "id": 59491,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59479,
                        "src": "3918:7:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59492,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59481,
                        "src": "3927:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
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
                      "expression": {
                        "id": 59486,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "3871:3:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 59487,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "3875:18:82",
                      "memberName": "encodeWithSelector",
                      "nodeType": "MemberAccess",
                      "src": "3871:22:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes4) pure returns (bytes memory)"
                      }
                    },
                    "id": 59493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3871:62:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3843:90:82"
                },
                {
                  "condition": {
                    "id": 59499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3948:45:82",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 59496,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59477,
                          "src": "3973:5:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$58980",
                            "typeString": "contract IERC20"
                          }
                        },
                        {
                          "id": 59497,
                          "name": "approvalCall",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59485,
                          "src": "3980:12:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$58980",
                            "typeString": "contract IERC20"
                          },
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 59495,
                        "name": "_callOptionalReturnBool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59662,
                        "src": "3949:23:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$58980_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                          "typeString": "function (contract IERC20,bytes memory) returns (bool)"
                        }
                      },
                      "id": 59498,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3949:44:82",
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
                  "id": 59518,
                  "nodeType": "IfStatement",
                  "src": "3944:216:82",
                  "trueBody": {
                    "id": 59517,
                    "nodeType": "Block",
                    "src": "3995:165:82",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 59501,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59477,
                              "src": "4029:5:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$58980",
                                "typeString": "contract IERC20"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "expression": {
                                      "id": 59504,
                                      "name": "token",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 59477,
                                      "src": "4059:5:82",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$58980",
                                        "typeString": "contract IERC20"
                                      }
                                    },
                                    "id": 59505,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "4065:7:82",
                                    "memberName": "approve",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 58967,
                                    "src": "4059:13:82",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                      "typeString": "function (address,uint256) external returns (bool)"
                                    }
                                  },
                                  "id": 59506,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4073:8:82",
                                  "memberName": "selector",
                                  "nodeType": "MemberAccess",
                                  "src": "4059:22:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes4",
                                    "typeString": "bytes4"
                                  }
                                },
                                {
                                  "id": 59507,
                                  "name": "spender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59479,
                                  "src": "4083:7:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "hexValue": "30",
                                  "id": 59508,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4092:1:82",
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
                                    "typeIdentifier": "t_bytes4",
                                    "typeString": "bytes4"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "expression": {
                                  "id": 59502,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "4036:3:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 59503,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "4040:18:82",
                                "memberName": "encodeWithSelector",
                                "nodeType": "MemberAccess",
                                "src": "4036:22:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function (bytes4) pure returns (bytes memory)"
                                }
                              },
                              "id": 59509,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4036:58:82",
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
                                "typeIdentifier": "t_contract$_IERC20_$58980",
                                "typeString": "contract IERC20"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 59500,
                            "name": "_callOptionalReturn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59614,
                            "src": "4009:19:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$58980_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (contract IERC20,bytes memory)"
                            }
                          },
                          "id": 59510,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4009:86:82",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 59511,
                        "nodeType": "ExpressionStatement",
                        "src": "4009:86:82"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 59513,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59477,
                              "src": "4129:5:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$58980",
                                "typeString": "contract IERC20"
                              }
                            },
                            {
                              "id": 59514,
                              "name": "approvalCall",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59485,
                              "src": "4136:12:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC20_$58980",
                                "typeString": "contract IERC20"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 59512,
                            "name": "_callOptionalReturn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59614,
                            "src": "4109:19:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$58980_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (contract IERC20,bytes memory)"
                            }
                          },
                          "id": 59515,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4109:40:82",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 59516,
                        "nodeType": "ExpressionStatement",
                        "src": "4109:40:82"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 59474,
              "nodeType": "StructuredDocumentation",
              "src": "3466:285:82",
              "text": " @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful. Compatible with tokens that require the approval to be set to\n 0 before setting it to a non-zero value."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forceApprove",
            "nameLocation": "3765:12:82",
            "parameters": {
              "id": 59482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59477,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "3785:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59520,
                  "src": "3778:12:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$58980",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 59476,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 59475,
                      "name": "IERC20",
                      "nameLocations": [
                        "3778:6:82"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 58980,
                      "src": "3778:6:82"
                    },
                    "referencedDeclaration": 58980,
                    "src": "3778:6:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$58980",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59479,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "3800:7:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59520,
                  "src": "3792:15:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59478,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3792:7:82",
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
                  "id": 59481,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3817:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59520,
                  "src": "3809:13:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59480,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3809:7:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3777:46:82"
            },
            "returnParameters": {
              "id": 59483,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3833:0:82"
            },
            "scope": 59663,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59577,
            "nodeType": "FunctionDefinition",
            "src": "4318:472:82",
            "nodes": [],
            "body": {
              "id": 59576,
              "nodeType": "Block",
              "src": "4533:257:82",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59542
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59542,
                      "mutability": "mutable",
                      "name": "nonceBefore",
                      "nameLocation": "4551:11:82",
                      "nodeType": "VariableDeclaration",
                      "scope": 59576,
                      "src": "4543:19:82",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 59541,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4543:7:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59547,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 59545,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59526,
                        "src": "4578:5:82",
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
                      "expression": {
                        "id": 59543,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59524,
                        "src": "4565:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Permit_$59122",
                          "typeString": "contract IERC20Permit"
                        }
                      },
                      "id": 59544,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4571:6:82",
                      "memberName": "nonces",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 59115,
                      "src": "4565:12:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 59546,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4565:19:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4543:41:82"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59551,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59526,
                        "src": "4607:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59552,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59528,
                        "src": "4614:7:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59553,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59530,
                        "src": "4623:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 59554,
                        "name": "deadline",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59532,
                        "src": "4630:8:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 59555,
                        "name": "v",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59534,
                        "src": "4640:1:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 59556,
                        "name": "r",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59536,
                        "src": "4643:1:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 59557,
                        "name": "s",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59538,
                        "src": "4646:1:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                      "expression": {
                        "id": 59548,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59524,
                        "src": "4594:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Permit_$59122",
                          "typeString": "contract IERC20Permit"
                        }
                      },
                      "id": 59550,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4600:6:82",
                      "memberName": "permit",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 59107,
                      "src": "4594:12:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256,uint8,bytes32,bytes32) external"
                      }
                    },
                    "id": 59558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4594:54:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59559,
                  "nodeType": "ExpressionStatement",
                  "src": "4594:54:82"
                },
                {
                  "assignments": [
                    59561
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59561,
                      "mutability": "mutable",
                      "name": "nonceAfter",
                      "nameLocation": "4666:10:82",
                      "nodeType": "VariableDeclaration",
                      "scope": 59576,
                      "src": "4658:18:82",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 59560,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4658:7:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59566,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 59564,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59526,
                        "src": "4692:5:82",
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
                      "expression": {
                        "id": 59562,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59524,
                        "src": "4679:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Permit_$59122",
                          "typeString": "contract IERC20Permit"
                        }
                      },
                      "id": 59563,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4685:6:82",
                      "memberName": "nonces",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 59115,
                      "src": "4679:12:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 59565,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4679:19:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4658:40:82"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 59572,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 59568,
                          "name": "nonceAfter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59561,
                          "src": "4716:10:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 59571,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 59569,
                            "name": "nonceBefore",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59542,
                            "src": "4730:11:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 59570,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4744:1:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "4730:15:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4716:29:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5361666545524332303a207065726d697420646964206e6f742073756363656564",
                        "id": 59573,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4747:35:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_cde8e927812a7a656f8f04e89ac4f4113d47940dd2125d11fcb8e0bd36bfc59d",
                          "typeString": "literal_string \"SafeERC20: permit did not succeed\""
                        },
                        "value": "SafeERC20: permit did not succeed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_cde8e927812a7a656f8f04e89ac4f4113d47940dd2125d11fcb8e0bd36bfc59d",
                          "typeString": "literal_string \"SafeERC20: permit did not succeed\""
                        }
                      ],
                      "id": 59567,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4708:7:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 59574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4708:75:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59575,
                  "nodeType": "ExpressionStatement",
                  "src": "4708:75:82"
                }
              ]
            },
            "documentation": {
              "id": 59521,
              "nodeType": "StructuredDocumentation",
              "src": "4172:141:82",
              "text": " @dev Use a ERC-2612 signature to set the `owner` approval toward `spender` on `token`.\n Revert on invalid signature."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safePermit",
            "nameLocation": "4327:10:82",
            "parameters": {
              "id": 59539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59524,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "4360:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59577,
                  "src": "4347:18:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Permit_$59122",
                    "typeString": "contract IERC20Permit"
                  },
                  "typeName": {
                    "id": 59523,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 59522,
                      "name": "IERC20Permit",
                      "nameLocations": [
                        "4347:12:82"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59122,
                      "src": "4347:12:82"
                    },
                    "referencedDeclaration": 59122,
                    "src": "4347:12:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Permit_$59122",
                      "typeString": "contract IERC20Permit"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59526,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "4383:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59577,
                  "src": "4375:13:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59525,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4375:7:82",
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
                  "id": 59528,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "4406:7:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59577,
                  "src": "4398:15:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59527,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4398:7:82",
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
                  "id": 59530,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4431:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59577,
                  "src": "4423:13:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59529,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4423:7:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59532,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "4454:8:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59577,
                  "src": "4446:16:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59531,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4446:7:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59534,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "4478:1:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59577,
                  "src": "4472:7:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 59533,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "4472:5:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59536,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "4497:1:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59577,
                  "src": "4489:9:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 59535,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4489:7:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59538,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "4516:1:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59577,
                  "src": "4508:9:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 59537,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4508:7:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4337:186:82"
            },
            "returnParameters": {
              "id": 59540,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4533:0:82"
            },
            "scope": 59663,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59614,
            "nodeType": "FunctionDefinition",
            "src": "5173:642:82",
            "nodes": [],
            "body": {
              "id": 59613,
              "nodeType": "Block",
              "src": "5243:572:82",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59587
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59587,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "5605:10:82",
                      "nodeType": "VariableDeclaration",
                      "scope": 59613,
                      "src": "5592:23:82",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 59586,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5592:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59596,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 59593,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59583,
                        "src": "5646:4:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564",
                        "id": 59594,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5652:34:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_47fb62c2c272651d2f0f342bac006756b8ba07f21cc5cb87e0fbb9d50c0c585b",
                          "typeString": "literal_string \"SafeERC20: low-level call failed\""
                        },
                        "value": "SafeERC20: low-level call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_47fb62c2c272651d2f0f342bac006756b8ba07f21cc5cb87e0fbb9d50c0c585b",
                          "typeString": "literal_string \"SafeERC20: low-level call failed\""
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 59590,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59581,
                            "src": "5626:5:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$58980",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$58980",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 59589,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5618:7:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 59588,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5618:7:82",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 59591,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5618:14:82",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 59592,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5633:12:82",
                      "memberName": "functionCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 59753,
                      "src": "5618:27:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$attached_to$_t_address_$",
                        "typeString": "function (address,bytes memory,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 59595,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5618:69:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5592:95:82"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 59609,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 59601,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 59598,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59587,
                              "src": "5705:10:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 59599,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5716:6:82",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "5705:17:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 59600,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5726:1:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "5705:22:82",
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
                              "id": 59604,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59587,
                              "src": "5742:10:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "components": [
                                {
                                  "id": 59606,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "5755:4:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bool_$",
                                    "typeString": "type(bool)"
                                  },
                                  "typeName": {
                                    "id": 59605,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "5755:4:82",
                                    "typeDescriptions": {}
                                  }
                                }
                              ],
                              "id": 59607,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "5754:6:82",
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
                              "id": 59602,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "5731:3:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 59603,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "5735:6:82",
                            "memberName": "decode",
                            "nodeType": "MemberAccess",
                            "src": "5731:10:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 59608,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5731:30:82",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "5705:56:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564",
                        "id": 59610,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5763:44:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e11ad79d1e4a7f2e5f376964cb99e8e8f7904e3fc16a109f7a7ecb9aa7956dcd",
                          "typeString": "literal_string \"SafeERC20: ERC20 operation did not succeed\""
                        },
                        "value": "SafeERC20: ERC20 operation did not succeed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e11ad79d1e4a7f2e5f376964cb99e8e8f7904e3fc16a109f7a7ecb9aa7956dcd",
                          "typeString": "literal_string \"SafeERC20: ERC20 operation did not succeed\""
                        }
                      ],
                      "id": 59597,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5697:7:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 59611,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5697:111:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59612,
                  "nodeType": "ExpressionStatement",
                  "src": "5697:111:82"
                }
              ]
            },
            "documentation": {
              "id": 59578,
              "nodeType": "StructuredDocumentation",
              "src": "4796:372:82",
              "text": " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_callOptionalReturn",
            "nameLocation": "5182:19:82",
            "parameters": {
              "id": 59584,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59581,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "5209:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59614,
                  "src": "5202:12:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$58980",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 59580,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 59579,
                      "name": "IERC20",
                      "nameLocations": [
                        "5202:6:82"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 58980,
                      "src": "5202:6:82"
                    },
                    "referencedDeclaration": 58980,
                    "src": "5202:6:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$58980",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59583,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "5229:4:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59614,
                  "src": "5216:17:82",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59582,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5216:5:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5201:33:82"
            },
            "returnParameters": {
              "id": 59585,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5243:0:82"
            },
            "scope": 59663,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 59662,
            "nodeType": "FunctionDefinition",
            "src": "6316:594:82",
            "nodes": [],
            "body": {
              "id": 59661,
              "nodeType": "Block",
              "src": "6405:505:82",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59626,
                    59628
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59626,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "6706:7:82",
                      "nodeType": "VariableDeclaration",
                      "scope": 59661,
                      "src": "6701:12:82",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 59625,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "6701:4:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 59628,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "6728:10:82",
                      "nodeType": "VariableDeclaration",
                      "scope": 59661,
                      "src": "6715:23:82",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 59627,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "6715:5:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59636,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 59634,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59620,
                        "src": "6762:4:82",
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
                            "id": 59631,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59618,
                            "src": "6750:5:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$58980",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$58980",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 59630,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6742:7:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 59629,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "6742:7:82",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 59632,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6742:14:82",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 59633,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6757:4:82",
                      "memberName": "call",
                      "nodeType": "MemberAccess",
                      "src": "6742:19:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 59635,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6742:25:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6700:67:82"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 59659,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 59651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 59637,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59626,
                        "src": "6796:7:82",
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
                            "id": 59649,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 59641,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "id": 59638,
                                  "name": "returndata",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59628,
                                  "src": "6808:10:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                },
                                "id": 59639,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "6819:6:82",
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "src": "6808:17:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 59640,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6829:1:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "6808:22:82",
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
                                  "id": 59644,
                                  "name": "returndata",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59628,
                                  "src": "6845:10:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                },
                                {
                                  "components": [
                                    {
                                      "id": 59646,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "6858:4:82",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_bool_$",
                                        "typeString": "type(bool)"
                                      },
                                      "typeName": {
                                        "id": 59645,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6858:4:82",
                                        "typeDescriptions": {}
                                      }
                                    }
                                  ],
                                  "id": 59647,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "6857:6:82",
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
                                  "id": 59642,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "6834:3:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 59643,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "6838:6:82",
                                "memberName": "decode",
                                "nodeType": "MemberAccess",
                                "src": "6834:10:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                  "typeString": "function () pure"
                                }
                              },
                              "id": 59648,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6834:30:82",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "6808:56:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "id": 59650,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6807:58:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "6796:69:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 59656,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59618,
                              "src": "6896:5:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$58980",
                                "typeString": "contract IERC20"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC20_$58980",
                                "typeString": "contract IERC20"
                              }
                            ],
                            "id": 59655,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6888:7:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 59654,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6888:7:82",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 59657,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6888:14:82",
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
                        "expression": {
                          "id": 59652,
                          "name": "Address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59993,
                          "src": "6869:7:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Address_$59993_$",
                            "typeString": "type(library Address)"
                          }
                        },
                        "id": 59653,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6877:10:82",
                        "memberName": "isContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 59681,
                        "src": "6869:18:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 59658,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6869:34:82",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6796:107:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 59624,
                  "id": 59660,
                  "nodeType": "Return",
                  "src": "6777:126:82"
                }
              ]
            },
            "documentation": {
              "id": 59615,
              "nodeType": "StructuredDocumentation",
              "src": "5821:490:82",
              "text": " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).\n This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_callOptionalReturnBool",
            "nameLocation": "6325:23:82",
            "parameters": {
              "id": 59621,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59618,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "6356:5:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59662,
                  "src": "6349:12:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$58980",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 59617,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 59616,
                      "name": "IERC20",
                      "nameLocations": [
                        "6349:6:82"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 58980,
                      "src": "6349:6:82"
                    },
                    "referencedDeclaration": 58980,
                    "src": "6349:6:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$58980",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59620,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "6376:4:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 59662,
                  "src": "6363:17:82",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59619,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6363:5:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6348:33:82"
            },
            "returnParameters": {
              "id": 59624,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59623,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59662,
                  "src": "6399:4:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 59622,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6399:4:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6398:6:82"
            },
            "scope": 59663,
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
          "id": 59293,
          "nodeType": "StructuredDocumentation",
          "src": "243:457:82",
          "text": " @title SafeERC20\n @dev Wrappers around ERC20 operations that throw on failure (when the token\n contract returns false). Tokens that return no value (and instead revert or\n throw on failure) are also supported, non-reverting calls are assumed to be\n successful.\n To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\n which allows you to call the safe operations as `token.safeTransfer(...)`, etc."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          59663
        ],
        "name": "SafeERC20",
        "nameLocation": "709:9:82",
        "scope": 59664,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 82
} as const;
