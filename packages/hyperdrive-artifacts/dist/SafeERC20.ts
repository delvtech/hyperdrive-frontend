export const SafeERC20 = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a29564b6dfdf6084a03cc92aeacc61f1f15bd9fd7402d74e42acf57ed9a8037d64736f6c63430008130033",
    "sourceMap": "701:6211:88:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;701:6211:88;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a29564b6dfdf6084a03cc92aeacc61f1f15bd9fd7402d74e42acf57ed9a8037d64736f6c63430008130033",
    "sourceMap": "701:6211:88:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Wrappers around ERC20 operations that throw on failure (when the token contract returns false). Tokens that return no value (and instead revert or throw on failure) are also supported, non-reverting calls are assumed to be successful. To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract, which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"SafeERC20\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":\"SafeERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
    "id": 60370,
    "exportedSymbols": {
      "Address": [
        60699
      ],
      "IERC20": [
        59686
      ],
      "IERC20Permit": [
        59828
      ],
      "SafeERC20": [
        60369
      ]
    },
    "nodeType": "SourceUnit",
    "src": "115:6798:88",
    "nodes": [
      {
        "id": 59995,
        "nodeType": "PragmaDirective",
        "src": "115:23:88",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 59996,
        "nodeType": "ImportDirective",
        "src": "140:23:88",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
        "file": "../IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60370,
        "sourceUnit": 59687,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 59997,
        "nodeType": "ImportDirective",
        "src": "164:40:88",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol",
        "file": "../extensions/IERC20Permit.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60370,
        "sourceUnit": 59829,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 59998,
        "nodeType": "ImportDirective",
        "src": "205:36:88",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Address.sol",
        "file": "../../../utils/Address.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60370,
        "sourceUnit": 60700,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 60369,
        "nodeType": "ContractDefinition",
        "src": "701:6211:88",
        "nodes": [
          {
            "id": 60002,
            "nodeType": "UsingForDirective",
            "src": "725:26:88",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 60000,
              "name": "Address",
              "nameLocations": [
                "731:7:88"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60699,
              "src": "731:7:88"
            },
            "typeName": {
              "id": 60001,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "743:7:88",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            }
          },
          {
            "id": 60026,
            "nodeType": "FunctionDefinition",
            "src": "941:175:88",
            "nodes": [],
            "body": {
              "id": 60025,
              "nodeType": "Block",
              "src": "1013:103:88",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60014,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60006,
                        "src": "1043:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$59686",
                          "typeString": "contract IERC20"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "id": 60017,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60006,
                                "src": "1073:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$59686",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 60018,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1079:8:88",
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 59653,
                              "src": "1073:14:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 60019,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1088:8:88",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "1073:23:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "id": 60020,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60008,
                            "src": "1098:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 60021,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60010,
                            "src": "1102:5:88",
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
                            "id": 60015,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1050:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 60016,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1054:18:88",
                          "memberName": "encodeWithSelector",
                          "nodeType": "MemberAccess",
                          "src": "1050:22:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes4) pure returns (bytes memory)"
                          }
                        },
                        "id": 60022,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1050:58:88",
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
                          "typeIdentifier": "t_contract$_IERC20_$59686",
                          "typeString": "contract IERC20"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 60013,
                      "name": "_callOptionalReturn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60320,
                      "src": "1023:19:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$59686_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (contract IERC20,bytes memory)"
                      }
                    },
                    "id": 60023,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1023:86:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60024,
                  "nodeType": "ExpressionStatement",
                  "src": "1023:86:88"
                }
              ]
            },
            "documentation": {
              "id": 60003,
              "nodeType": "StructuredDocumentation",
              "src": "757:179:88",
              "text": " @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransfer",
            "nameLocation": "950:12:88",
            "parameters": {
              "id": 60011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60006,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "970:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60026,
                  "src": "963:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$59686",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 60005,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60004,
                      "name": "IERC20",
                      "nameLocations": [
                        "963:6:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59686,
                      "src": "963:6:88"
                    },
                    "referencedDeclaration": 59686,
                    "src": "963:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$59686",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60008,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "985:2:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60026,
                  "src": "977:10:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60007,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "977:7:88",
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
                  "id": 60010,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "997:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60026,
                  "src": "989:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60009,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "989:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "962:41:88"
            },
            "returnParameters": {
              "id": 60012,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1013:0:88"
            },
            "scope": 60369,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60053,
            "nodeType": "FunctionDefinition",
            "src": "1355:203:88",
            "nodes": [],
            "body": {
              "id": 60052,
              "nodeType": "Block",
              "src": "1445:113:88",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60040,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60030,
                        "src": "1475:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$59686",
                          "typeString": "contract IERC20"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "id": 60043,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60030,
                                "src": "1505:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$59686",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 60044,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1511:12:88",
                              "memberName": "transferFrom",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 59685,
                              "src": "1505:18:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,address,uint256) external returns (bool)"
                              }
                            },
                            "id": 60045,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1524:8:88",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "1505:27:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "id": 60046,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60032,
                            "src": "1534:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 60047,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60034,
                            "src": "1540:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 60048,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60036,
                            "src": "1544:5:88",
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
                            "id": 60041,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1482:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 60042,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1486:18:88",
                          "memberName": "encodeWithSelector",
                          "nodeType": "MemberAccess",
                          "src": "1482:22:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes4) pure returns (bytes memory)"
                          }
                        },
                        "id": 60049,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1482:68:88",
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
                          "typeIdentifier": "t_contract$_IERC20_$59686",
                          "typeString": "contract IERC20"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 60039,
                      "name": "_callOptionalReturn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60320,
                      "src": "1455:19:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$59686_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (contract IERC20,bytes memory)"
                      }
                    },
                    "id": 60050,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1455:96:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60051,
                  "nodeType": "ExpressionStatement",
                  "src": "1455:96:88"
                }
              ]
            },
            "documentation": {
              "id": 60027,
              "nodeType": "StructuredDocumentation",
              "src": "1122:228:88",
              "text": " @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\n calling contract. If `token` returns no value, non-reverting calls are assumed to be successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "1364:16:88",
            "parameters": {
              "id": 60037,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60030,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "1388:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60053,
                  "src": "1381:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$59686",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 60029,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60028,
                      "name": "IERC20",
                      "nameLocations": [
                        "1381:6:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59686,
                      "src": "1381:6:88"
                    },
                    "referencedDeclaration": 59686,
                    "src": "1381:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$59686",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60032,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "1403:4:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60053,
                  "src": "1395:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60031,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1395:7:88",
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
                  "id": 60034,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1417:2:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60053,
                  "src": "1409:10:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60033,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1409:7:88",
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
                  "id": 60036,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1429:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60053,
                  "src": "1421:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60035,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1421:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1380:55:88"
            },
            "returnParameters": {
              "id": 60038,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1445:0:88"
            },
            "scope": 60369,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60097,
            "nodeType": "FunctionDefinition",
            "src": "1818:573:88",
            "nodes": [],
            "body": {
              "id": 60096,
              "nodeType": "Block",
              "src": "1894:497:88",
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
                        "id": 60080,
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
                              "id": 60067,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 60065,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60061,
                                "src": "2143:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 60066,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2152:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "2143:10:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "id": 60068,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2142:12:88",
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
                              "id": 60078,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "id": 60073,
                                        "name": "this",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -28,
                                        "src": "2183:4:88",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_contract$_SafeERC20_$60369",
                                          "typeString": "library SafeERC20"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_SafeERC20_$60369",
                                          "typeString": "library SafeERC20"
                                        }
                                      ],
                                      "id": 60072,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "2175:7:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": {
                                        "id": 60071,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2175:7:88",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 60074,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2175:13:88",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 60075,
                                    "name": "spender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60059,
                                    "src": "2190:7:88",
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
                                    "id": 60069,
                                    "name": "token",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60057,
                                    "src": "2159:5:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_IERC20_$59686",
                                      "typeString": "contract IERC20"
                                    }
                                  },
                                  "id": 60070,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2165:9:88",
                                  "memberName": "allowance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 59663,
                                  "src": "2159:15:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                    "typeString": "function (address,address) view external returns (uint256)"
                                  }
                                },
                                "id": 60076,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2159:39:88",
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
                                "id": 60077,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2202:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "2159:44:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "id": 60079,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2158:46:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2142:62:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365",
                        "id": 60081,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2218:56:88",
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
                      "id": 60064,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2121:7:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 60082,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2121:163:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60083,
                  "nodeType": "ExpressionStatement",
                  "src": "2121:163:88"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60085,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60057,
                        "src": "2314:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$59686",
                          "typeString": "contract IERC20"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "id": 60088,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60057,
                                "src": "2344:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$59686",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 60089,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2350:7:88",
                              "memberName": "approve",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 59673,
                              "src": "2344:13:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 60090,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2358:8:88",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "2344:22:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "id": 60091,
                            "name": "spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60059,
                            "src": "2368:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 60092,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60061,
                            "src": "2377:5:88",
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
                            "id": 60086,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2321:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 60087,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2325:18:88",
                          "memberName": "encodeWithSelector",
                          "nodeType": "MemberAccess",
                          "src": "2321:22:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes4) pure returns (bytes memory)"
                          }
                        },
                        "id": 60093,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2321:62:88",
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
                          "typeIdentifier": "t_contract$_IERC20_$59686",
                          "typeString": "contract IERC20"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 60084,
                      "name": "_callOptionalReturn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60320,
                      "src": "2294:19:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$59686_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (contract IERC20,bytes memory)"
                      }
                    },
                    "id": 60094,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2294:90:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60095,
                  "nodeType": "ExpressionStatement",
                  "src": "2294:90:88"
                }
              ]
            },
            "documentation": {
              "id": 60054,
              "nodeType": "StructuredDocumentation",
              "src": "1564:249:88",
              "text": " @dev Deprecated. This function has issues similar to the ones found in\n {IERC20-approve}, and its usage is discouraged.\n Whenever possible, use {safeIncreaseAllowance} and\n {safeDecreaseAllowance} instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeApprove",
            "nameLocation": "1827:11:88",
            "parameters": {
              "id": 60062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60057,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "1846:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60097,
                  "src": "1839:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$59686",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 60056,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60055,
                      "name": "IERC20",
                      "nameLocations": [
                        "1839:6:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59686,
                      "src": "1839:6:88"
                    },
                    "referencedDeclaration": 59686,
                    "src": "1839:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$59686",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60059,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1861:7:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60097,
                  "src": "1853:15:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60058,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1853:7:88",
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
                  "id": 60061,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1878:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60097,
                  "src": "1870:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60060,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1870:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1838:46:88"
            },
            "returnParameters": {
              "id": 60063,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1894:0:88"
            },
            "scope": 60369,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60134,
            "nodeType": "FunctionDefinition",
            "src": "2582:280:88",
            "nodes": [],
            "body": {
              "id": 60133,
              "nodeType": "Block",
              "src": "2668:194:88",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60109
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60109,
                      "mutability": "mutable",
                      "name": "oldAllowance",
                      "nameLocation": "2686:12:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 60133,
                      "src": "2678:20:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60108,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2678:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60118,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 60114,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2725:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_SafeERC20_$60369",
                              "typeString": "library SafeERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_SafeERC20_$60369",
                              "typeString": "library SafeERC20"
                            }
                          ],
                          "id": 60113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2717:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 60112,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2717:7:88",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 60115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2717:13:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 60116,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60103,
                        "src": "2732:7:88",
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
                        "id": 60110,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60101,
                        "src": "2701:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$59686",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 60111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2707:9:88",
                      "memberName": "allowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 59663,
                      "src": "2701:15:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view external returns (uint256)"
                      }
                    },
                    "id": 60117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2701:39:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2678:62:88"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60120,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60101,
                        "src": "2770:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$59686",
                          "typeString": "contract IERC20"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "id": 60123,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60101,
                                "src": "2800:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$59686",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 60124,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2806:7:88",
                              "memberName": "approve",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 59673,
                              "src": "2800:13:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 60125,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2814:8:88",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "2800:22:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "id": 60126,
                            "name": "spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60103,
                            "src": "2824:7:88",
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
                            "id": 60129,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60127,
                              "name": "oldAllowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60109,
                              "src": "2833:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "id": 60128,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60105,
                              "src": "2848:5:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2833:20:88",
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
                            "id": 60121,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2777:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 60122,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2781:18:88",
                          "memberName": "encodeWithSelector",
                          "nodeType": "MemberAccess",
                          "src": "2777:22:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes4) pure returns (bytes memory)"
                          }
                        },
                        "id": 60130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2777:77:88",
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
                          "typeIdentifier": "t_contract$_IERC20_$59686",
                          "typeString": "contract IERC20"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 60119,
                      "name": "_callOptionalReturn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60320,
                      "src": "2750:19:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$59686_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (contract IERC20,bytes memory)"
                      }
                    },
                    "id": 60131,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2750:105:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60132,
                  "nodeType": "ExpressionStatement",
                  "src": "2750:105:88"
                }
              ]
            },
            "documentation": {
              "id": 60098,
              "nodeType": "StructuredDocumentation",
              "src": "2397:180:88",
              "text": " @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeIncreaseAllowance",
            "nameLocation": "2591:21:88",
            "parameters": {
              "id": 60106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60101,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "2620:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60134,
                  "src": "2613:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$59686",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 60100,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60099,
                      "name": "IERC20",
                      "nameLocations": [
                        "2613:6:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59686,
                      "src": "2613:6:88"
                    },
                    "referencedDeclaration": 59686,
                    "src": "2613:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$59686",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60103,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2635:7:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60134,
                  "src": "2627:15:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2627:7:88",
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
                  "id": 60105,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2652:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60134,
                  "src": "2644:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60104,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2644:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2612:46:88"
            },
            "returnParameters": {
              "id": 60107,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2668:0:88"
            },
            "scope": 60369,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60179,
            "nodeType": "FunctionDefinition",
            "src": "3053:407:88",
            "nodes": [],
            "body": {
              "id": 60178,
              "nodeType": "Block",
              "src": "3139:321:88",
              "nodes": [],
              "statements": [
                {
                  "id": 60177,
                  "nodeType": "UncheckedBlock",
                  "src": "3149:305:88",
                  "statements": [
                    {
                      "assignments": [
                        60146
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 60146,
                          "mutability": "mutable",
                          "name": "oldAllowance",
                          "nameLocation": "3181:12:88",
                          "nodeType": "VariableDeclaration",
                          "scope": 60177,
                          "src": "3173:20:88",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 60145,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3173:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 60155,
                      "initialValue": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 60151,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3220:4:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SafeERC20_$60369",
                                  "typeString": "library SafeERC20"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SafeERC20_$60369",
                                  "typeString": "library SafeERC20"
                                }
                              ],
                              "id": 60150,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3212:7:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 60149,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3212:7:88",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 60152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3212:13:88",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 60153,
                            "name": "spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60140,
                            "src": "3227:7:88",
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
                            "id": 60147,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60138,
                            "src": "3196:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$59686",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 60148,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3202:9:88",
                          "memberName": "allowance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 59663,
                          "src": "3196:15:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address,address) view external returns (uint256)"
                          }
                        },
                        "id": 60154,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3196:39:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "3173:62:88"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 60159,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60157,
                              "name": "oldAllowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60146,
                              "src": "3257:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "id": 60158,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60142,
                              "src": "3273:5:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3257:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "hexValue": "5361666545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f",
                            "id": 60160,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3280:43:88",
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
                          "id": 60156,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            -18,
                            -18
                          ],
                          "referencedDeclaration": -18,
                          "src": "3249:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 60161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3249:75:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 60162,
                      "nodeType": "ExpressionStatement",
                      "src": "3249:75:88"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 60164,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60138,
                            "src": "3358:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$59686",
                              "typeString": "contract IERC20"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "expression": {
                                  "expression": {
                                    "id": 60167,
                                    "name": "token",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60138,
                                    "src": "3388:5:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_IERC20_$59686",
                                      "typeString": "contract IERC20"
                                    }
                                  },
                                  "id": 60168,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3394:7:88",
                                  "memberName": "approve",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 59673,
                                  "src": "3388:13:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                    "typeString": "function (address,uint256) external returns (bool)"
                                  }
                                },
                                "id": 60169,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3402:8:88",
                                "memberName": "selector",
                                "nodeType": "MemberAccess",
                                "src": "3388:22:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              },
                              {
                                "id": 60170,
                                "name": "spender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60140,
                                "src": "3412:7:88",
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
                                "id": 60173,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 60171,
                                  "name": "oldAllowance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60146,
                                  "src": "3421:12:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 60172,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60142,
                                  "src": "3436:5:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3421:20:88",
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
                                "id": 60165,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "3365:3:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 60166,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "3369:18:88",
                              "memberName": "encodeWithSelector",
                              "nodeType": "MemberAccess",
                              "src": "3365:22:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function (bytes4) pure returns (bytes memory)"
                              }
                            },
                            "id": 60174,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3365:77:88",
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
                              "typeIdentifier": "t_contract$_IERC20_$59686",
                              "typeString": "contract IERC20"
                            },
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 60163,
                          "name": "_callOptionalReturn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60320,
                          "src": "3338:19:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$59686_$_t_bytes_memory_ptr_$returns$__$",
                            "typeString": "function (contract IERC20,bytes memory)"
                          }
                        },
                        "id": 60175,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3338:105:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 60176,
                      "nodeType": "ExpressionStatement",
                      "src": "3338:105:88"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 60135,
              "nodeType": "StructuredDocumentation",
              "src": "2868:180:88",
              "text": " @dev Decrease the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeDecreaseAllowance",
            "nameLocation": "3062:21:88",
            "parameters": {
              "id": 60143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60138,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "3091:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60179,
                  "src": "3084:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$59686",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 60137,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60136,
                      "name": "IERC20",
                      "nameLocations": [
                        "3084:6:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59686,
                      "src": "3084:6:88"
                    },
                    "referencedDeclaration": 59686,
                    "src": "3084:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$59686",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60140,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "3106:7:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60179,
                  "src": "3098:15:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3098:7:88",
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
                  "id": 60142,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3123:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60179,
                  "src": "3115:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60141,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3115:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3083:46:88"
            },
            "returnParameters": {
              "id": 60144,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3139:0:88"
            },
            "scope": 60369,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60226,
            "nodeType": "FunctionDefinition",
            "src": "3756:410:88",
            "nodes": [],
            "body": {
              "id": 60225,
              "nodeType": "Block",
              "src": "3833:333:88",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60191
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60191,
                      "mutability": "mutable",
                      "name": "approvalCall",
                      "nameLocation": "3856:12:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 60225,
                      "src": "3843:25:88",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 60190,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "3843:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60200,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "expression": {
                            "id": 60194,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60183,
                            "src": "3894:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$59686",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 60195,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3900:7:88",
                          "memberName": "approve",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 59673,
                          "src": "3894:13:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 60196,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3908:8:88",
                        "memberName": "selector",
                        "nodeType": "MemberAccess",
                        "src": "3894:22:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "id": 60197,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60185,
                        "src": "3918:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 60198,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60187,
                        "src": "3927:5:88",
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
                        "id": 60192,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "3871:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 60193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "3875:18:88",
                      "memberName": "encodeWithSelector",
                      "nodeType": "MemberAccess",
                      "src": "3871:22:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes4) pure returns (bytes memory)"
                      }
                    },
                    "id": 60199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3871:62:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3843:90:88"
                },
                {
                  "condition": {
                    "id": 60205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3948:45:88",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 60202,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60183,
                          "src": "3973:5:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$59686",
                            "typeString": "contract IERC20"
                          }
                        },
                        {
                          "id": 60203,
                          "name": "approvalCall",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60191,
                          "src": "3980:12:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$59686",
                            "typeString": "contract IERC20"
                          },
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 60201,
                        "name": "_callOptionalReturnBool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60368,
                        "src": "3949:23:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$59686_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                          "typeString": "function (contract IERC20,bytes memory) returns (bool)"
                        }
                      },
                      "id": 60204,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3949:44:88",
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
                  "id": 60224,
                  "nodeType": "IfStatement",
                  "src": "3944:216:88",
                  "trueBody": {
                    "id": 60223,
                    "nodeType": "Block",
                    "src": "3995:165:88",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 60207,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60183,
                              "src": "4029:5:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$59686",
                                "typeString": "contract IERC20"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "expression": {
                                      "id": 60210,
                                      "name": "token",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60183,
                                      "src": "4059:5:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$59686",
                                        "typeString": "contract IERC20"
                                      }
                                    },
                                    "id": 60211,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "4065:7:88",
                                    "memberName": "approve",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 59673,
                                    "src": "4059:13:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                      "typeString": "function (address,uint256) external returns (bool)"
                                    }
                                  },
                                  "id": 60212,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4073:8:88",
                                  "memberName": "selector",
                                  "nodeType": "MemberAccess",
                                  "src": "4059:22:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes4",
                                    "typeString": "bytes4"
                                  }
                                },
                                {
                                  "id": 60213,
                                  "name": "spender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60185,
                                  "src": "4083:7:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "hexValue": "30",
                                  "id": 60214,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4092:1:88",
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
                                  "id": 60208,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "4036:3:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 60209,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "4040:18:88",
                                "memberName": "encodeWithSelector",
                                "nodeType": "MemberAccess",
                                "src": "4036:22:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function (bytes4) pure returns (bytes memory)"
                                }
                              },
                              "id": 60215,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4036:58:88",
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
                                "typeIdentifier": "t_contract$_IERC20_$59686",
                                "typeString": "contract IERC20"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 60206,
                            "name": "_callOptionalReturn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60320,
                            "src": "4009:19:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$59686_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (contract IERC20,bytes memory)"
                            }
                          },
                          "id": 60216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4009:86:88",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 60217,
                        "nodeType": "ExpressionStatement",
                        "src": "4009:86:88"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 60219,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60183,
                              "src": "4129:5:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$59686",
                                "typeString": "contract IERC20"
                              }
                            },
                            {
                              "id": 60220,
                              "name": "approvalCall",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60191,
                              "src": "4136:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC20_$59686",
                                "typeString": "contract IERC20"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 60218,
                            "name": "_callOptionalReturn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60320,
                            "src": "4109:19:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$59686_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (contract IERC20,bytes memory)"
                            }
                          },
                          "id": 60221,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4109:40:88",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 60222,
                        "nodeType": "ExpressionStatement",
                        "src": "4109:40:88"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 60180,
              "nodeType": "StructuredDocumentation",
              "src": "3466:285:88",
              "text": " @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful. Compatible with tokens that require the approval to be set to\n 0 before setting it to a non-zero value."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forceApprove",
            "nameLocation": "3765:12:88",
            "parameters": {
              "id": 60188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60183,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "3785:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60226,
                  "src": "3778:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$59686",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 60182,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60181,
                      "name": "IERC20",
                      "nameLocations": [
                        "3778:6:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59686,
                      "src": "3778:6:88"
                    },
                    "referencedDeclaration": 59686,
                    "src": "3778:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$59686",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60185,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "3800:7:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60226,
                  "src": "3792:15:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60184,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3792:7:88",
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
                  "id": 60187,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3817:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60226,
                  "src": "3809:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60186,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3809:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3777:46:88"
            },
            "returnParameters": {
              "id": 60189,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3833:0:88"
            },
            "scope": 60369,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60283,
            "nodeType": "FunctionDefinition",
            "src": "4318:472:88",
            "nodes": [],
            "body": {
              "id": 60282,
              "nodeType": "Block",
              "src": "4533:257:88",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60248
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60248,
                      "mutability": "mutable",
                      "name": "nonceBefore",
                      "nameLocation": "4551:11:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 60282,
                      "src": "4543:19:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60247,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4543:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60253,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 60251,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60232,
                        "src": "4578:5:88",
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
                        "id": 60249,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60230,
                        "src": "4565:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Permit_$59828",
                          "typeString": "contract IERC20Permit"
                        }
                      },
                      "id": 60250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4571:6:88",
                      "memberName": "nonces",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 59821,
                      "src": "4565:12:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 60252,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4565:19:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4543:41:88"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60257,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60232,
                        "src": "4607:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 60258,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60234,
                        "src": "4614:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 60259,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60236,
                        "src": "4623:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60260,
                        "name": "deadline",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60238,
                        "src": "4630:8:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60261,
                        "name": "v",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60240,
                        "src": "4640:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 60262,
                        "name": "r",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60242,
                        "src": "4643:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 60263,
                        "name": "s",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60244,
                        "src": "4646:1:88",
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
                        "id": 60254,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60230,
                        "src": "4594:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Permit_$59828",
                          "typeString": "contract IERC20Permit"
                        }
                      },
                      "id": 60256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4600:6:88",
                      "memberName": "permit",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 59813,
                      "src": "4594:12:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256,uint8,bytes32,bytes32) external"
                      }
                    },
                    "id": 60264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4594:54:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60265,
                  "nodeType": "ExpressionStatement",
                  "src": "4594:54:88"
                },
                {
                  "assignments": [
                    60267
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60267,
                      "mutability": "mutable",
                      "name": "nonceAfter",
                      "nameLocation": "4666:10:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 60282,
                      "src": "4658:18:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60266,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4658:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60272,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 60270,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60232,
                        "src": "4692:5:88",
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
                        "id": 60268,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60230,
                        "src": "4679:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Permit_$59828",
                          "typeString": "contract IERC20Permit"
                        }
                      },
                      "id": 60269,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4685:6:88",
                      "memberName": "nonces",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 59821,
                      "src": "4679:12:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 60271,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4679:19:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4658:40:88"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60278,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 60274,
                          "name": "nonceAfter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60267,
                          "src": "4716:10:88",
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
                          "id": 60277,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60275,
                            "name": "nonceBefore",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60248,
                            "src": "4730:11:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 60276,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4744:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "4730:15:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4716:29:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5361666545524332303a207065726d697420646964206e6f742073756363656564",
                        "id": 60279,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4747:35:88",
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
                      "id": 60273,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4708:7:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 60280,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4708:75:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60281,
                  "nodeType": "ExpressionStatement",
                  "src": "4708:75:88"
                }
              ]
            },
            "documentation": {
              "id": 60227,
              "nodeType": "StructuredDocumentation",
              "src": "4172:141:88",
              "text": " @dev Use a ERC-2612 signature to set the `owner` approval toward `spender` on `token`.\n Revert on invalid signature."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safePermit",
            "nameLocation": "4327:10:88",
            "parameters": {
              "id": 60245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60230,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "4360:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60283,
                  "src": "4347:18:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Permit_$59828",
                    "typeString": "contract IERC20Permit"
                  },
                  "typeName": {
                    "id": 60229,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60228,
                      "name": "IERC20Permit",
                      "nameLocations": [
                        "4347:12:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59828,
                      "src": "4347:12:88"
                    },
                    "referencedDeclaration": 59828,
                    "src": "4347:12:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Permit_$59828",
                      "typeString": "contract IERC20Permit"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60232,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "4383:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60283,
                  "src": "4375:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60231,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4375:7:88",
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
                  "id": 60234,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "4406:7:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60283,
                  "src": "4398:15:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60233,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4398:7:88",
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
                  "id": 60236,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4431:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60283,
                  "src": "4423:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60235,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4423:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60238,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "4454:8:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60283,
                  "src": "4446:16:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60237,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4446:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60240,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "4478:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60283,
                  "src": "4472:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 60239,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "4472:5:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60242,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "4497:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60283,
                  "src": "4489:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 60241,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4489:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60244,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "4516:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60283,
                  "src": "4508:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 60243,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4508:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4337:186:88"
            },
            "returnParameters": {
              "id": 60246,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4533:0:88"
            },
            "scope": 60369,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60320,
            "nodeType": "FunctionDefinition",
            "src": "5173:642:88",
            "nodes": [],
            "body": {
              "id": 60319,
              "nodeType": "Block",
              "src": "5243:572:88",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60293
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60293,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "5605:10:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 60319,
                      "src": "5592:23:88",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 60292,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5592:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60302,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 60299,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60289,
                        "src": "5646:4:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564",
                        "id": 60300,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5652:34:88",
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
                            "id": 60296,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60287,
                            "src": "5626:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$59686",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$59686",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 60295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5618:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 60294,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5618:7:88",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 60297,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5618:14:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 60298,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5633:12:88",
                      "memberName": "functionCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 60459,
                      "src": "5618:27:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$attached_to$_t_address_$",
                        "typeString": "function (address,bytes memory,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 60301,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5618:69:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5592:95:88"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 60315,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60307,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 60304,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60293,
                              "src": "5705:10:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 60305,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5716:6:88",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "5705:17:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 60306,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5726:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "5705:22:88",
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
                              "id": 60310,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60293,
                              "src": "5742:10:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "components": [
                                {
                                  "id": 60312,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "5755:4:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bool_$",
                                    "typeString": "type(bool)"
                                  },
                                  "typeName": {
                                    "id": 60311,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "5755:4:88",
                                    "typeDescriptions": {}
                                  }
                                }
                              ],
                              "id": 60313,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "5754:6:88",
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
                              "id": 60308,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "5731:3:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 60309,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "5735:6:88",
                            "memberName": "decode",
                            "nodeType": "MemberAccess",
                            "src": "5731:10:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 60314,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5731:30:88",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "5705:56:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564",
                        "id": 60316,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5763:44:88",
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
                      "id": 60303,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5697:7:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 60317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5697:111:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60318,
                  "nodeType": "ExpressionStatement",
                  "src": "5697:111:88"
                }
              ]
            },
            "documentation": {
              "id": 60284,
              "nodeType": "StructuredDocumentation",
              "src": "4796:372:88",
              "text": " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_callOptionalReturn",
            "nameLocation": "5182:19:88",
            "parameters": {
              "id": 60290,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60287,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "5209:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60320,
                  "src": "5202:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$59686",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 60286,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60285,
                      "name": "IERC20",
                      "nameLocations": [
                        "5202:6:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59686,
                      "src": "5202:6:88"
                    },
                    "referencedDeclaration": 59686,
                    "src": "5202:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$59686",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60289,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "5229:4:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60320,
                  "src": "5216:17:88",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 60288,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5216:5:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5201:33:88"
            },
            "returnParameters": {
              "id": 60291,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5243:0:88"
            },
            "scope": 60369,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 60368,
            "nodeType": "FunctionDefinition",
            "src": "6316:594:88",
            "nodes": [],
            "body": {
              "id": 60367,
              "nodeType": "Block",
              "src": "6405:505:88",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60332,
                    60334
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60332,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "6706:7:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 60367,
                      "src": "6701:12:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 60331,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "6701:4:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 60334,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "6728:10:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 60367,
                      "src": "6715:23:88",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 60333,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "6715:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60342,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 60340,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60326,
                        "src": "6762:4:88",
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
                            "id": 60337,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60324,
                            "src": "6750:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$59686",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$59686",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 60336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6742:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 60335,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "6742:7:88",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 60338,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6742:14:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 60339,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6757:4:88",
                      "memberName": "call",
                      "nodeType": "MemberAccess",
                      "src": "6742:19:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 60341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6742:25:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6700:67:88"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 60365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 60357,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 60343,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60332,
                        "src": "6796:7:88",
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
                            "id": 60355,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 60347,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "id": 60344,
                                  "name": "returndata",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60334,
                                  "src": "6808:10:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                },
                                "id": 60345,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "6819:6:88",
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "src": "6808:17:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 60346,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6829:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "6808:22:88",
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
                                  "id": 60350,
                                  "name": "returndata",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60334,
                                  "src": "6845:10:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                },
                                {
                                  "components": [
                                    {
                                      "id": 60352,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "6858:4:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_bool_$",
                                        "typeString": "type(bool)"
                                      },
                                      "typeName": {
                                        "id": 60351,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6858:4:88",
                                        "typeDescriptions": {}
                                      }
                                    }
                                  ],
                                  "id": 60353,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "6857:6:88",
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
                                  "id": 60348,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "6834:3:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 60349,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "6838:6:88",
                                "memberName": "decode",
                                "nodeType": "MemberAccess",
                                "src": "6834:10:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                  "typeString": "function () pure"
                                }
                              },
                              "id": 60354,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6834:30:88",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "6808:56:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "id": 60356,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6807:58:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "6796:69:88",
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
                              "id": 60362,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60324,
                              "src": "6896:5:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$59686",
                                "typeString": "contract IERC20"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC20_$59686",
                                "typeString": "contract IERC20"
                              }
                            ],
                            "id": 60361,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6888:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 60360,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6888:7:88",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 60363,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6888:14:88",
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
                          "id": 60358,
                          "name": "Address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60699,
                          "src": "6869:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Address_$60699_$",
                            "typeString": "type(library Address)"
                          }
                        },
                        "id": 60359,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6877:10:88",
                        "memberName": "isContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 60387,
                        "src": "6869:18:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 60364,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6869:34:88",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6796:107:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 60330,
                  "id": 60366,
                  "nodeType": "Return",
                  "src": "6777:126:88"
                }
              ]
            },
            "documentation": {
              "id": 60321,
              "nodeType": "StructuredDocumentation",
              "src": "5821:490:88",
              "text": " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).\n This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_callOptionalReturnBool",
            "nameLocation": "6325:23:88",
            "parameters": {
              "id": 60327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60324,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "6356:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60368,
                  "src": "6349:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$59686",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 60323,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60322,
                      "name": "IERC20",
                      "nameLocations": [
                        "6349:6:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59686,
                      "src": "6349:6:88"
                    },
                    "referencedDeclaration": 59686,
                    "src": "6349:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$59686",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60326,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "6376:4:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60368,
                  "src": "6363:17:88",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 60325,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6363:5:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6348:33:88"
            },
            "returnParameters": {
              "id": 60330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60329,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60368,
                  "src": "6399:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 60328,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6399:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6398:6:88"
            },
            "scope": 60369,
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
          "id": 59999,
          "nodeType": "StructuredDocumentation",
          "src": "243:457:88",
          "text": " @title SafeERC20\n @dev Wrappers around ERC20 operations that throw on failure (when the token\n contract returns false). Tokens that return no value (and instead revert or\n throw on failure) are also supported, non-reverting calls are assumed to be\n successful.\n To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\n which allows you to call the safe operations as `token.safeTransfer(...)`, etc."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          60369
        ],
        "name": "SafeERC20",
        "nameLocation": "709:9:88",
        "scope": 60370,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 88
} as const;
